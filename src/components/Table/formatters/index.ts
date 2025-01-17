export type FormatterType = typeof numberFormatter | null;

export const numberFormatter = (input: string | number | boolean): string => {
  if (typeof input === 'undefined' || input === null) return input;

  input = input.toString();
  input = input.replace('$', '');
  const pos = input.indexOf('.');
  if (pos < 0) return input;

  const left = input.substring(0, pos);
  let right = input.substring(pos + 1);

  if (right.length === 1) {
    right = right + '0';
  }

  return '$' + left + '.' + right;
};
