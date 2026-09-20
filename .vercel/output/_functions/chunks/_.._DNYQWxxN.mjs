import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { f as renderTemplate, h as addAttribute, o as renderComponent, p as maybeRenderHead, w as createAstro } from "./server_CxzrZujQ.mjs";
import { o as createComponent } from "./consts_CrxX3-q1.mjs";
import "./_astro_assets_BaPhbnba.mjs";
import { t as $$MainLayout } from "./MainLayout_C3LaFV6V.mjs";
import { a as getEntry, n as formatDate, o as render } from "./utils_ClM5Zg3a.mjs";
import { t as $$Tags } from "./Tags_XHmiuVeB.mjs";
//#region src/pages/articles/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { slug } = Astro.params;
	if (slug === void 0) throw new Error("Slug is required");
	const entry = await getEntry("blog", slug);
	if (entry === void 0) return Astro.redirect("/404");
	const { Content } = await render(entry);
	return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<a href="/articles" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">Back To Articles</a><article><h1 class="text-4xl font-bold mb-2"> ${entry.data.title}</h1><h3 class="text-lg mb-2">Written by ${entry.data.author} on ${formatDate(entry.data.pubDate)}</h3>${renderComponent($$result, "Tags", $$Tags, { "tags": entry.data.tags })}<img${addAttribute("/images/" + entry.data.image, "src")} alt="Article Image" class="w-full h-auto rounded-xl my-6">${renderComponent($$result, "Content", Content, {})}</article>` })}`;
}, "/Users/hiroyuki/Documents/GitHub/astro-blog/src/pages/articles/[...slug].astro", void 0);
var $$file = "/Users/hiroyuki/Documents/GitHub/astro-blog/src/pages/articles/[...slug].astro";
var $$url = "/articles/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/articles/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
