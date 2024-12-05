export const ERR_REGEX = /ze(\d{2})(\d{3})/i;
export const PAGE_CODE_REGEX = /\/errors\/(ze\d{2}\d{3})/;

import { Categories, Errors } from "./error-codes-messages";

/**
 * Returns the error message for its `ZE00000` code
 */
export function getErrorMessage(code: string) {
	return getError(code)?.message;
}

/**
 * Returns the error message for its `ZE00000` code
 */
export function getError(
	code: string,
): (typeof Errors)[keyof typeof Errors] | null {
	const [, categoryKey, errCode] = code.match(ERR_REGEX) || [];

	let category = "";

	for (const key in Categories) {
		if (Categories[key] === categoryKey) {
			category = key;
		}
	}

	for (const key in Errors) {
		if (Errors[key].id === errCode && Errors[key].kind === category) {
			return Errors[key];
		}
	}

	return null;
}
