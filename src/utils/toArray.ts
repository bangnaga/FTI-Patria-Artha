/**
 * Helper to safely convert any value (array, JSON string, comma-separated string, null, undefined)
 * into a guaranteed Array of strings.
 */
export function ensureArray<T = string>(val: any): T[] {
  if (!val) return [];
  if (Array.isArray(val)) return val as T[];
  if (typeof val === 'string') {
    const trimmed = val.trim();
    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) return parsed as T[];
      } catch {
        /* ignore fallback to split */
      }
    }
    return trimmed.split(',').map(s => s.trim()).filter(Boolean) as T[];
  }
  return [];
}
