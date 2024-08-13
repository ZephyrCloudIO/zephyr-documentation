export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function toTitleCase(str: string) {
  return str
    .split('_')
    .map((word) => capitalizeFirstLetter(word))
    .join(' ');
}