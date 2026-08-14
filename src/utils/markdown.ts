/**
 * Utility to parse Markdown text into clean, styled HTML string for news & content detail views.
 */
export function renderMarkdownToHtml(markdownText: string): string {
  if (!markdownText) return '';

  let html = markdownText;

  // Normalize line endings
  html = html.replace(/\r\n/g, '\n');

  // Code blocks: ```lang ... ```
  html = html.replace(/```([\s\S]*?)```/g, (_match, code) => {
    return `<pre class="bg-slate-900 text-emerald-400 p-4 rounded-2xl font-mono text-xs overflow-x-auto my-4 border border-slate-800 shadow-inner"><code>${escapeHtml(code.trim())}</code></pre>`;
  });

  // Inline code: `code`
  html = html.replace(/`([^`]+)`/g, '<code class="bg-red-50 dark:bg-slate-800 text-[#9B2C2C] dark:text-red-400 px-2 py-0.5 rounded-md font-mono text-xs font-bold">$1</code>');

  // Headings
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-6 mb-2 tracking-tight">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-lg sm:text-xl font-black text-[#9B2C2C] dark:text-red-400 mt-8 mb-3 tracking-tight border-b border-slate-200 dark:border-slate-800 pb-2">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-8 mb-4 tracking-tight">$1</h1>');

  // Blockquotes: > quote
  html = html.replace(/^> (.*$)/gim, '<blockquote class="p-4 my-4 rounded-2xl bg-amber-50/90 dark:bg-slate-900/90 border-l-4 border-[#9B2C2C] text-slate-700 dark:text-slate-300 italic font-medium shadow-xs">$1</blockquote>');

  // Images: ![alt](url)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<div class="my-6 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md bg-slate-100 dark:bg-slate-950 p-2"><img src="$2" alt="$1" class="w-full h-auto max-h-[600px] object-contain rounded-2xl mx-auto block" /><p class="text-[11px] text-center text-slate-400 italic mt-2">$1</p></div>');

  // Links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#9B2C2C] dark:text-red-400 font-extrabold underline hover:text-[#800020] transition-colors">$1 ↗</a>');

  // Bold & Italic
  html = html.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-black text-slate-900 dark:text-white">$1</strong>');
  html = html.replace(/__([^_]+)__/g, '<strong class="font-black text-slate-900 dark:text-white">$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  html = html.replace(/_([^_]+)_/g, '<em>$1</em>');

  // Unordered Lists (- or *)
  html = html.replace(/^\s*[-*]\s+(.*)$/gim, '<li class="ml-4 list-disc text-slate-700 dark:text-slate-300 my-1 font-medium">$1</li>');
  html = html.replace(/(<li class="ml-4 list-disc[\s\S]*?<\/li>)+/g, '<ul class="my-4 space-y-1.5 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">$&</ul>');

  // Numbered Lists (1. 2.)
  html = html.replace(/^\s*\d+\.\s+(.*)$/gim, '<li class="ml-4 list-decimal text-slate-700 dark:text-slate-300 my-1 font-medium">$1</li>');
  html = html.replace(/(<li class="ml-4 list-decimal[\s\S]*?<\/li>)+/g, '<ol class="my-4 space-y-1.5 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">$&</ol>');

  // Paragraph breaks
  const paragraphs = html.split(/\n{2,}/);
  html = paragraphs
    .map(p => {
      p = p.trim();
      if (!p) return '';
      if (p.startsWith('<h') || p.startsWith('<blockquote') || p.startsWith('<pre') || p.startsWith('<ul') || p.startsWith('<ol') || p.startsWith('<div')) {
        return p;
      }
      return `<p class="my-4 text-slate-800 dark:text-slate-200 leading-relaxed font-normal text-sm sm:text-base">${p.replace(/\n/g, '<br />')}</p>`;
    })
    .join('\n');

  return html;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
