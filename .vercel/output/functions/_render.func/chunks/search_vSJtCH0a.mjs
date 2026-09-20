import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { f as renderTemplate, o as renderComponent, p as maybeRenderHead, w as createAstro } from "./server_CxzrZujQ.mjs";
import { o as createComponent } from "./consts_CrxX3-q1.mjs";
import "./_astro_assets_BaPhbnba.mjs";
import { t as $$MainLayout } from "./MainLayout_C3LaFV6V.mjs";
import { i as getCollection, r as getEntrySlug } from "./utils_ClM5Zg3a.mjs";
import { t as $$ArticleCard } from "./ArticleCard_DY_XTwxP.mjs";
import { t as $$SearchForm } from "./SearchForm_1gYVDiig.mjs";
//#region src/pages/articles/search.astro
var search_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Search,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Search = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Search;
	const query = Astro.url.searchParams.get("query");
	const searchResults = (await getCollection("blog")).filter((article) => {
		const titleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
		const bodyMatch = (article.body ?? "").toLowerCase().includes(query.toLowerCase());
		const slugMatch = getEntrySlug(article).toLowerCase().includes(query.toLowerCase());
		return titleMatch || bodyMatch || slugMatch;
	});
	return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Search Results" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<a href="/articles" class="inline-block bg-gray-100 p-2 mb-5 hover:bg-indigo-500 hover:text-white">All Articles</a>${renderComponent($$result, "SearchForm", $$SearchForm, {})}<br><h1 class="text-2xl pb-3 mt-6">Results For <strong>${query}</strong></h1><div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">${searchResults.map((article) => renderTemplate`${renderComponent($$result, "ArticleCard", $$ArticleCard, { "article": article })}`)}</div>` })}`;
}, "/Users/hiroyuki/Documents/GitHub/astro-blog/src/pages/articles/search.astro", void 0);
var $$file = "/Users/hiroyuki/Documents/GitHub/astro-blog/src/pages/articles/search.astro";
var $$url = "/articles/search";
//#endregion
//#region \0virtual:astro:page:src/pages/articles/search@_@astro
var page = () => search_exports;
//#endregion
export { page };
