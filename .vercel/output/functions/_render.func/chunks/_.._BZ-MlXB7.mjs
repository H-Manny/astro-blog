import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { f as renderTemplate, o as renderComponent, p as maybeRenderHead, w as createAstro } from "./server_CxzrZujQ.mjs";
import { o as createComponent } from "./consts_CrxX3-q1.mjs";
import "./_astro_assets_BaPhbnba.mjs";
import { t as $$MainLayout } from "./MainLayout_C3LaFV6V.mjs";
import { i as getCollection, t as capitalize } from "./utils_ClM5Zg3a.mjs";
import { t as $$ArticleCard } from "./ArticleCard_DY_XTwxP.mjs";
//#region src/pages/articles/tag/[...tag].astro
var ____tag__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { tag } = Astro.params;
	if (tag === void 0) throw new Error("Tag is required");
	const tagArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).filter((article) => article.data.tags.includes(tag));
	return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<a href="/articles" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">Back To Articles</a><h1 class="text-2xl pb-3">#${capitalize(tag)}</h1><div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">${tagArticles.map((article) => renderTemplate`${renderComponent($$result, "ArticleCard", $$ArticleCard, { "article": article })}`)}</div>` })}`;
}, "/Users/hiroyuki/Documents/GitHub/astro-blog/src/pages/articles/tag/[...tag].astro", void 0);
var $$file = "/Users/hiroyuki/Documents/GitHub/astro-blog/src/pages/articles/tag/[...tag].astro";
var $$url = "/articles/tag/[...tag]";
//#endregion
//#region \0virtual:astro:page:src/pages/articles/tag/[...tag]@_@astro
var page = () => ____tag__exports;
//#endregion
export { page };
