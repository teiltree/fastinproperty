export function uniqueId(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

export function formatListingDate(isoDate: string): string {
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return isoDate;
  return d.toLocaleDateString('en-ZW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export async function readImageFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Failed to read image file.'));
    reader.readAsDataURL(file);
  });
}
