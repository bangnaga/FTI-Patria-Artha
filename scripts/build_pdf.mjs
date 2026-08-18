import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const workspaceDir = process.cwd();
const mdPath = path.join(workspaceDir, 'Laporan.md');
const htmlPath = path.join(workspaceDir, 'Laporan.html');
const pdfPath = path.join(workspaceDir, 'Laporan.pdf');

console.log('Reading Laporan.md...');
const mdContent = fs.readFileSync(mdPath, 'utf8');

// Basic Markdown to HTML converter function
function mdToHtml(markdown) {
  let lines = markdown.split('\n');
  let inCodeBlock = false;
  let codeBuffer = [];
  let codeLang = '';
  let inTable = false;
  let tableRows = [];
  let htmlLines = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Code blocks
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        // End code block
        if (codeLang === 'mermaid' || codeLang === 'usecaseDiagram') {
          const mermaidSrc = codeBuffer.join('\n');
          htmlLines.push(`<div class="mermaid-box"><pre class="mermaid">${mermaidSrc}</pre></div>`);
        } else {
          const codeText = codeBuffer.join('\n')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
          htmlLines.push(`<pre><code class="language-${codeLang}">${codeText}</code></pre>`);
        }
        inCodeBlock = false;
        codeBuffer = [];
        codeLang = '';
      } else {
        // Close table if open
        if (inTable) {
          htmlLines.push(renderTable(tableRows));
          inTable = false;
          tableRows = [];
        }
        inCodeBlock = true;
        codeLang = line.trim().replace('```', '').trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // Standalone Image
    if (/^!\[(.*?)\]\((.*?)\)$/.test(line.trim())) {
      if (inTable) {
        htmlLines.push(renderTable(tableRows));
        inTable = false;
        tableRows = [];
      }
      const match = line.trim().match(/^!\[(.*?)\]\((.*?)\)$/);
      const alt = match[1];
      const src = match[2];
      htmlLines.push(`<figure class="capture-figure"><img src="${src}" alt="${alt}" class="capture-img" /><figcaption>Gambar: ${alt}</figcaption></figure>`);
      continue;
    }

    // Tables
    if (line.trim().startsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      tableRows.push(line.trim());
      continue;
    } else if (inTable) {
      htmlLines.push(renderTable(tableRows));
      inTable = false;
      tableRows = [];
    }

    // Horizontal Rule
    if (line.trim() === '---') {
      htmlLines.push('<hr />');
      continue;
    }

    // Headings
    if (line.startsWith('# ')) {
      htmlLines.push(`<h1 id="${slugify(line.slice(2))}">${inlineStyle(line.slice(2))}</h1>`);
      continue;
    }
    if (line.startsWith('## ')) {
      htmlLines.push(`<h2 id="${slugify(line.slice(3))}">${inlineStyle(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith('### ')) {
      htmlLines.push(`<h3 id="${slugify(line.slice(4))}">${inlineStyle(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith('#### ')) {
      htmlLines.push(`<h4 id="${slugify(line.slice(5))}">${inlineStyle(line.slice(5))}</h4>`);
      continue;
    }

    // Lists
    if (line.trim().startsWith('- ')) {
      htmlLines.push(`<ul><li>${inlineStyle(line.trim().slice(2))}</li></ul>`);
      continue;
    }
    if (/^\d+\.\s/.test(line.trim())) {
      const match = line.trim().match(/^\d+\.\s/);
      const text = line.trim().slice(match[0].length);
      htmlLines.push(`<ol><li>${inlineStyle(text)}</li></ol>`);
      continue;
    }

    // Empty lines
    if (line.trim() === '') {
      htmlLines.push('<div class="spacer"></div>');
      continue;
    }

    // Regular Paragraph
    htmlLines.push(`<p>${inlineStyle(line)}</p>`);
  }

  if (inTable) {
    htmlLines.push(renderTable(tableRows));
  }

  return htmlLines.join('\n');
}

function inlineStyle(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}

function renderTable(rows) {
  if (rows.length < 2) return '';
  let html = '<table class="table-auto"><thead><tr>';
  
  // Header
  const headerCols = rows[0].split('|').filter(c => c.length > 0 || c.trim() !== '');
  headerCols.forEach(col => {
    html += `<th>${inlineStyle(col.trim())}</th>`;
  });
  html += '</tr></thead><tbody>';

  // Skip divider line (row 1 like |:---|:---|)
  for (let r = 2; r < rows.length; r++) {
    const cols = rows[r].split('|').filter(c => c.length > 0 || c.trim() !== '');
    html += '<tr>';
    cols.forEach(col => {
      html += `<td>${inlineStyle(col.trim())}</td>`;
    });
    html += '</tr>';
  }

  html += '</tbody></table>';
  return html;
}

const htmlBody = mdToHtml(mdContent);

const fullHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Laporan Skripsi FTI UPA</title>
  <script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'Inter, sans-serif'
    });
  </script>
  <style>
    @page {
      size: A4;
      margin: 20mm 15mm 20mm 15mm;
    }
    body {
      font-family: 'Times New Roman', Times, serif, 'Inter', sans-serif;
      font-size: 11.5pt;
      line-height: 1.6;
      color: #1a1a1a;
      background: #ffffff;
      margin: 0;
      padding: 0;
    }
    h1 {
      font-size: 18pt;
      font-weight: bold;
      color: #5A0017;
      border-bottom: 2px solid #800020;
      padding-bottom: 6px;
      margin-top: 24pt;
      margin-bottom: 12pt;
      page-break-before: always;
    }
    h1:first-of-type {
      page-break-before: avoid;
      text-align: center;
      border-bottom: none;
      font-size: 22pt;
      color: #800020;
    }
    h2 {
      font-size: 14pt;
      font-weight: bold;
      color: #800020;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 4px;
      margin-top: 18pt;
      margin-bottom: 10pt;
    }
    h3 {
      font-size: 12.5pt;
      font-weight: bold;
      color: #1e293b;
      margin-top: 14pt;
      margin-bottom: 6pt;
    }
    p {
      margin-top: 0;
      margin-bottom: 8pt;
      text-align: justify;
    }
    ul, ol {
      margin-top: 0;
      margin-bottom: 8pt;
      padding-left: 20pt;
    }
    li {
      margin-bottom: 4pt;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12pt;
      margin-bottom: 14pt;
      font-size: 10pt;
      page-break-inside: avoid;
    }
    th, td {
      border: 1px solid #cbd5e1;
      padding: 6pt 8pt;
      text-align: left;
    }
    th {
      background-color: #f1f5f9;
      font-weight: bold;
      color: #0f172a;
    }
    tr:nth-child(even) td {
      background-color: #f8fafc;
    }
    pre {
      background: #0f172a;
      color: #f8fafc;
      padding: 10pt 12pt;
      border-radius: 6px;
      font-family: 'Consolas', 'Courier New', monospace;
      font-size: 9.5pt;
      overflow-x: auto;
      margin-top: 10pt;
      margin-bottom: 12pt;
      page-break-inside: avoid;
      white-space: pre-wrap;
      word-break: break-all;
    }
    code {
      font-family: 'Consolas', 'Courier New', monospace;
      background: #f1f5f9;
      color: #991b1b;
      padding: 2px 5px;
      border-radius: 4px;
      font-size: 10pt;
    }
    pre code {
      background: transparent;
      color: inherit;
      padding: 0;
    }
    .mermaid-box {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 10px;
      padding: 18px;
      margin: 16pt 0;
      page-break-inside: avoid;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    .mermaid {
      width: 100%;
      max-width: 720px;
      margin: 0 auto;
      text-align: center;
    }
    .mermaid svg {
      max-width: 100% !important;
      height: auto !important;
    }
    .capture-figure {
      margin: 16pt 0;
      padding: 10pt;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 10px;
      text-align: center;
      page-break-inside: avoid;
    }
    .capture-img {
      max-width: 100%;
      max-height: 480px;
      height: auto;
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      object-fit: contain;
    }
    figcaption {
      margin-top: 8pt;
      font-size: 9.5pt;
      font-weight: bold;
      color: #475569;
      font-style: italic;
    }
    blockquote {
      border-left: 4px solid #800020;
      margin: 12pt 0;
      padding-left: 12pt;
      color: #475569;
      font-style: italic;
    }
    hr {
      border: none;
      border-top: 1px solid #cbd5e1;
      margin: 18pt 0;
    }
    a {
      color: #991b1b;
      text-decoration: none;
    }
    strong {
      color: #0f172a;
    }
    .spacer {
      height: 4pt;
    }
  </style>
</head>
<body>
  ${htmlBody}
</body>
</html>`;

fs.writeFileSync(htmlPath, fullHtml, 'utf8');
console.log('Generated Laporan.html successfully with Mermaid JS and Image figure support.');

// Path for msedge executable on Windows
const edgePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

let browserPath = edgePaths.find(p => fs.existsSync(p));

if (browserPath) {
  console.log(`Using browser executable: ${browserPath}`);
  const cmd = `"${browserPath}" --headless --disable-gpu --virtual-time-budget=6000 --print-to-pdf="${pdfPath}" --no-pdf-header-footer "${htmlPath}"`;
  console.log('Running PDF conversion...');
  execSync(cmd);
  console.log(`SUCCESS! Laporan.pdf with images and diagrams created at: ${pdfPath}`);
} else {
  console.error('Browser executable not found in standard paths.');
}
