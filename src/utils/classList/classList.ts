export function classList(...classList: ReadonlyArray<any>) {
  return classList.filter(Boolean).join(' ');
}
