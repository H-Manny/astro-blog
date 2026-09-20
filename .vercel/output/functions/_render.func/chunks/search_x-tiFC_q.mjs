import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { i as getCollection, r as getEntrySlug } from "./utils_ClM5Zg3a.mjs";
//#region src/pages/api/search.json.ts
var search_json_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
/**
* GET /api/search.json
*
* Searches for articles using a query string and returns the search results
* as a JSON array.
*
* @param {URL} url - The URL object with the query string.
* @returns {Promise<Response>} A Promise that resolves to a Response object.
*/
var GET = async ({ url }) => {
	const query = url.searchParams.get("query");
	if (query === null) return new Response(JSON.stringify({ error: "Query param is missing" }), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
	const searchResults = (await getCollection("blog")).filter((article) => {
		const titleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
		const bodyMatch = (article.body ?? "").toLowerCase().includes(query.toLowerCase());
		const slugMatch = getEntrySlug(article).toLowerCase().includes(query.toLowerCase());
		return titleMatch || bodyMatch || slugMatch;
	});
	return new Response(JSON.stringify(searchResults), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/search.json@_@ts
var page = () => search_json_exports;
//#endregion
export { page };
