import { NextResponse } from 'next/server';
import { prisma } from '../../../../db/prisma';

export async function PUT(request: Request) {
  try {
    const body = await request.json();

    if (!Array.isArray(body)) {
      return NextResponse.json({ error: 'Expected an array of menus' }, { status: 400 });
    }

    // Flatten tree → flat list with parentId relationships
    const flatMenus: {
      id: string;
      label: string;
      url: string;
      isExternal: boolean;
      isVisible: boolean;
      badge: string | null;
      order: number;
      parentId: string | null;
      icon: string | null;
      line1: string | null;
      line2: string | null;
    }[] = [];

    const processMenus = (menus: any[], parentId: string | null = null) => {
      menus.forEach((menu, index) => {
        const id = (menu.id && menu.id.trim()) ? menu.id : `menu_${Date.now()}_${index}_${Math.random().toString(36).substr(2, 6)}`;
        flatMenus.push({
          id,
          label: menu.label || menu.line1 || '(tanpa label)',
          url: menu.url || '#',
          isExternal: menu.isExternal ?? false,
          isVisible: menu.isVisible ?? true,
          badge: menu.badge || null,
          order: menu.order ?? (index + 1),
          parentId,
          icon: menu.icon || null,
          line1: menu.line1 || menu.label || null,
          line2: menu.line2 || null,
        });

        if (Array.isArray(menu.children) && menu.children.length > 0) {
          processMenus(menu.children, id);
        }
      });
    };

    processMenus(body);

    // Delete all existing menu items and re-insert (replace strategy)
    await prisma.$transaction(async (tx) => {
      await tx.menuItem.deleteMany({});

      // Insert in order: parents first, children after (to respect parentId FK)
      const topLevel = flatMenus.filter(m => !m.parentId);
      const children = flatMenus.filter(m => m.parentId);

      for (const menu of [...topLevel, ...children]) {
        await tx.menuItem.create({ data: menu });
      }
    });

    return NextResponse.json({
      success: true,
      message: `${flatMenus.length} item menu berhasil disimpan ke database.`,
      count: flatMenus.length,
    });
  } catch (error: any) {
    console.error('[PUT /api/menu-items/bulk]', error);
    return NextResponse.json(
      { error: error.message || 'Gagal menyimpan menu ke database' },
      { status: 500 }
    );
  }
}
