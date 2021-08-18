export function dateFormat(value: string): string {
  const date = new Date(value).toLocaleDateString('ru-RU');
  return date;
}
