import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { f as renderTemplate, h as addAttribute, o as renderComponent, p as maybeRenderHead, w as createAstro } from "./server_CxzrZujQ.mjs";
import { o as createComponent } from "./consts_CrxX3-q1.mjs";
import "./_astro_assets_BaPhbnba.mjs";
import { t as $$MainLayout } from "./MainLayout_C3LaFV6V.mjs";
import { i as getCollection } from "./utils_ClM5Zg3a.mjs";
import { t as $$ArticleCard } from "./ArticleCard_DY_XTwxP.mjs";
//#region src/components/Pagination.astro
createAstro("https://astro.build");
var $$Pagination = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pagination;
	const { currentPage, totalPages, disablePrevious, disableNext } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="flex justify-between mt-10"><a${addAttribute("/articles?page=" + (currentPage - 1), "href")}${addAttribute(disablePrevious ? "inline-block bg-gray-100 px-3 py-2 text-gray-400 rounded-lg pointer-events-none" : "inline-block bg-indigo-100 px-3 py-2 hover:bg-indigo-600 hover:text-white rounded-lg", "class")}>Previous</a><a${addAttribute("/articles?page=" + (currentPage + 1), "href")}${addAttribute(disableNext ? "inline-block bg-gray-100 px-3 py-2 text-gray-400 rounded-lg pointer-events-none" : "inline-block bg-indigo-100 px-3 py-2 hover:bg-indigo-600 hover:text-white rounded-lg", "class")}>Next</a></div>`;
}, "/Users/hiroyuki/Documents/GitHub/astro-blog/src/components/Pagination.astro", void 0);
//#endregion
//#region src/pages/articles/index.astro
var articles_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const currentPage = +Astro.url.searchParams.get("page") || 1;
	const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	const totalPages = Math.ceil(allBlogArticles.length / 3);
	const articlesForPage = allBlogArticles.slice((currentPage - 1) * 3, currentPage * 3);
	return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About The TechPeople Blog" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1 class="text-4xl font-bold mb-5">All Articles</h1><div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">${articlesForPage.map((article) => renderTemplate`${renderComponent($$result, "ArticleCard", $$ArticleCard, { "article": article })}`)}</div>${renderComponent($$result, "Pagination", $$Pagination, {
		"currentPage": currentPage,
		"totalPages": totalPages,
		"disablePrevious": currentPage === 1,
		"disableNext": currentPage === totalPages
	})}` })}`;
}, "/Users/hiroyuki/Documents/GitHub/astro-blog/src/pages/articles/index.astro", void 0);
var $$file = "/Users/hiroyuki/Documents/GitHub/astro-blog/src/pages/articles/index.astro";
var $$url = "/articles";
//#endregion
//#region \0virtual:astro:page:src/pages/articles/index@_@astro
var page = () => articles_exports;
//#endregion
export { page };
