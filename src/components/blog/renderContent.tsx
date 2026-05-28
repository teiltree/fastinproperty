export function renderBlogContent(markdown: string) {
  const lines = markdown.split('\n');
  const blocks: Array<{ type: 'p'; text: string } | { type: 'ul'; items: string[] }> = [];

  let para = '';
  let list: string[] | null = null;

  const flushPara = () => {
    const t = para.trim();
    if (t) blocks.push({ type: 'p', text: t });
    para = '';
  };

  const flushList = () => {
    if (list?.length) blocks.push({ type: 'ul', items: list });
    list = null;
  };

  for (const raw of lines) {
    const line = raw.replace(/\r$/, '');
    const isBullet = /^\s*-\s+/.test(line);
    const isEmpty = !line.trim();

    if (isEmpty) {
      flushList();
      flushPara();
      continue;
    }

    if (isBullet) {
      flushPara();
      list ??= [];
      list.push(line.replace(/^\s*-\s+/, '').trim());
      continue;
    }

    flushList();
    para += (para ? ' ' : '') + line.trim();
  }

  flushList();
  flushPara();

  return blocks.map((b, idx) => {
    if (b.type === 'ul') {
      return (
        <ul key={idx} className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          {b.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={idx} className="text-gray-700 leading-relaxed text-lg">
        {b.text}
      </p>
    );
  });
}
