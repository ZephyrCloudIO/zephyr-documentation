const ERR_REGEX = /ZE(\d{2})(\d{3})/i;

import { Categories, Errors } from './error-codes-messages';

/**
 * Returns the error message for its `ZE00000` code
 */
export function getErrorMessage(code: string) {
  const [, categoryKey, errCode] = code.match(ERR_REGEX) || [];


  let category = '';

  for (const key in Categories) {
    if (Categories[key] === categoryKey) {
      category = key;
    }
  }

  for (const key in Errors) {
    if (Errors[key].id === errCode && Errors[key].kind === category) {
      return Errors[key].message;
    }
  }
}
