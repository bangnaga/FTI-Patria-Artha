import { NextResponse } from 'next/server';
import { prisma } from '../../../db/prisma';

export async function GET() {
  try {
    // Fetch all menu items ordered by order field
    const allItems = await prisma.menuItem.findMany({
      orderBy: { order: 'asc' },
    });

    if (allItems.length === 0) {
      return NextResponse.json([]);
    }

    // Reconstruct tree: separate top-level items and children
    const topLevel = allItems.filter(m => !m.parentId);
    const children = allItems.filter(m => m.parentId);

    const buildTree = (parentId: string): any[] => {
      return children
        .filter(c => c.parentId === parentId)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .map(child => ({
          id: child.id,
          label: child.label,
          line1: child.line1 ?? child.label,
          line2: child.line2 ?? '',
          url: child.url,
          isExternal: child.isExternal,
          isVisible: child.isVisible,
          badge: child.badge ?? '',
          icon: child.icon ?? '',
          order: child.order,
          children: buildTree(child.id),
        }));
    };

    const tree = topLevel.map(item => ({
      id: item.id,
      label: item.label,
      line1: item.line1 ?? item.label,
      line2: item.line2 ?? '',
      url: item.url,
      isExternal: item.isExternal,
      isVisible: item.isVisible,
      badge: item.badge ?? '',
      icon: item.icon ?? '',
      order: item.order,
      children: buildTree(item.id),
    }));

    return NextResponse.json(tree);
  } catch (error: any) {
    console.error('[GET /api/menu-items]', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
