import { f as renderTemplate, h as addAttribute, o as renderComponent, p as maybeRenderHead, w as createAstro } from "./server_CxzrZujQ.mjs";
import { o as createComponent } from "./consts_CrxX3-q1.mjs";
import "./_astro_assets_BaPhbnba.mjs";
import { n as formatDate, r as getEntrySlug } from "./utils_ClM5Zg3a.mjs";
import { t as $$Tags } from "./Tags_XHmiuVeB.mjs";
//#region src/components/ArticleCard.astro
createAstro("https://astro.build");
var $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ArticleCard;
	const { article } = Astro.props;
	const articleSlug = getEntrySlug(article);
	return renderTemplate`${maybeRenderHead($$result)}<div class="max-w-md mx-auto mt-10"><div class="bg-white rounded-lg overflow-hidden shadow-lg"><a${addAttribute("/articles/" + articleSlug, "href")}><img${addAttribute("/images/" + article.data.image, "src")} alt="Article Image" class="w-full h-48 object-cover hover:opacity-75 transition duration-300 ease-in-out"></a><div class="p-6"><h2 class="text-2xl font-semibold mb-2"><a${addAttribute("/articles/" + articleSlug, "href")}> ${article.data.title} </a></h2><p class="text-gray-600 text-sm mb-4">${formatDate(article.data.pubDate)}</p>${renderComponent($$result, "Tags", $$Tags, { "tags": article.data.tags })}</div></div></div>`;
}, "/Users/hiroyuki/Documents/GitHub/astro-blog/src/components/ArticleCard.astro", void 0);
//#endregion
export { $$ArticleCard as t };
