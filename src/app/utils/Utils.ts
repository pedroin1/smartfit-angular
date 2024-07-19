export function capitalize(string: string): string {
  if (!string) return string;
  return string[0].toUpperCase() + string.slice(1);
}

export function convert_today(day: string) {
  if (
    day === 'Seg.' ||
    day === 'Ter.' ||
    day === 'Qua.' ||
    day === 'Qui.' ||
    day === 'Sex.'
  ) {
    return 'Seg. à Sex.';
  } else if (day === 'Sáb.') {
    return 'Sáb.';
  } else if (day === 'Dom.') {
    return 'Dom.';
  } else {
    return 'Erro ao converter data do dia da semana';
  }
}
