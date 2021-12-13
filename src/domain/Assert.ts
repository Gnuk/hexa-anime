const isBlank = (value: string): boolean => value.trim() === '';

export const assertNotBlank = (field: string, value: string): void => {
  if (isBlank(value)) {
    throw new Error(field + ' is blank');
  }
};
