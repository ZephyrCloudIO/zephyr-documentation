import type { AfterSearch } from "rspress/theme";

export const afterSearch: AfterSearch = async (query) => {
	await fetch("http://localhost:9999/.netlify/functions/search", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ content: query }),
	});
};
