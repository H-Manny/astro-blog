import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { f as renderTemplate, h as addAttribute, o as renderComponent, p as maybeRenderHead, w as createAstro } from "./server_CxzrZujQ.mjs";
import { o as createComponent } from "./consts_CrxX3-q1.mjs";
import "./_astro_assets_BaPhbnba.mjs";
import { t as $$MainLayout } from "./MainLayout_C3LaFV6V.mjs";
import { i as getCollection, n as formatDate, r as getEntrySlug } from "./utils_ClM5Zg3a.mjs";
import { t as $$ArticleCard } from "./ArticleCard_DY_XTwxP.mjs";
import { t as $$SearchForm } from "./SearchForm_1gYVDiig.mjs";
//#region src/components/MostRecentArticle.astro
createAstro("https://astro.build");
var $$MostRecentArticle = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MostRecentArticle;
	const { article } = Astro.props;
	const articleSlug = getEntrySlug(article);
	return renderTemplate`${maybeRenderHead($$result)}<div class="relative inline-block w-full sm:w-auto cursor-pointer rounded-2xl"><a${addAttribute("/articles/" + articleSlug, "href")}><img${addAttribute("/images/" + article.data.image, "src")} alt="Article Image" class="w-full h-auto rounded-2xl"><div class="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-80 hover:opacity-75 transition duration-300 ease-in-out text-white text-center rounded-2xl"><div><h2 class="text-2xl font-semibold sm:text-3xl">${article.data.title}</h2><p class="text-xl mt-4">${formatDate(article.data.pubDate)}</p><!-- Tags with rounded border --><div class="flex mt-4 justify-center">${article.data.tags.map((tag) => renderTemplate`<span class="px-2 py-1 border text-white rounded-full text-xs mr-2">${tag}</span>`)}</div></div></div></a></div>`;
}, "/Users/hiroyuki/Documents/GitHub/astro-blog/src/components/MostRecentArticle.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	const mostRecentArticle = allBlogArticles[0];
	const otherArticles = allBlogArticles.slice(1);
	return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="grid grid-cols-1 gap-5 lg:grid-cols-2"><div><h1 class="text-5xl font-bold mt-4 mb-8 leading-tight xl:text-6xl">Articles, Stories & Tutorials for Tech People</h1>${renderComponent($$result, "SearchForm", $$SearchForm, {})}</div>${renderComponent($$result, "MostRecentArticle", $$MostRecentArticle, { "article": mostRecentArticle })}</div><div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"><!--
      @NOTE: \`slice()\`メソッドは、元の配列から指定した範囲の要素を抜き出して、新しい配列としてコピーします。
        最初の要素は、\`otherArticles\`配列から取り出して\`mostRecentArticle\`変数に格納され、
        残りの要素は\`slice(1)\`メソッドで新しい配列にコピーされます。
    -->${otherArticles.slice(0, 6).map((article) => renderTemplate`${renderComponent($$result, "ArticleCard", $$ArticleCard, { "article": article })}`)}</div>` })}`;
}, "/Users/hiroyuki/Documents/GitHub/astro-blog/src/pages/index.astro", void 0);
var $$file = "/Users/hiroyuki/Documents/GitHub/astro-blog/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
