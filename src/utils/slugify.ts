/**
 * Slugify utility for URL-friendly slug generation
 */

export const slugify = (text: string | null | undefined): string => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD') // decompose accented letters
    .replace(/[\u0300-\u036f]/g, '') // remove accent marks
    .replace(/[^a-z0-9\s-]/g, '') // remove special characters
    .replace(/[\s_-]+/g, '-') // replace spaces/underscores with single dash
    .replace(/^-+|-+$/g, ''); // remove leading/trailing dashes
};

export const getNewsSlug = (item: { slug?: string; title?: string; id?: string } | null | undefined): string => {
  if (!item) return 'berita-fti-upa';
  if (item.slug && item.slug.trim()) return item.slug.trim();
  if (item.title && item.title.trim()) return slugify(item.title);
  if (item.id) return item.id;
  return 'berita-fti-upa';
};
