export function capitalize(string: string): string {
  if (!string) return string;
  return string[0].toUpperCase() + string.slice(1);
}

export function convert_today(day: string) {
  switch (day) {
    case 'Seg.' || 'Ter.' || 'Qua.' || 'Qui.' || 'Sex.':
      return 'Seg. à Sex.';
    case 'Sáb.':
      return 'Sáb.';
    case 'Dom.':
      return 'Dom.';
    default:
      return 'Erro ao converter data do da semana';
  }
}
