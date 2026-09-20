import { f as renderTemplate, h as addAttribute, l as renderSlot, m as renderHead, o as renderComponent, p as maybeRenderHead, w as createAstro } from "./server_CxzrZujQ.mjs";
import { o as createComponent } from "./consts_CrxX3-q1.mjs";
import { r as $$Image } from "./_astro_assets_BaPhbnba.mjs";
import { i as getCollection, t as capitalize } from "./utils_ClM5Zg3a.mjs";
//#region src/images/logo.png
var logo_default = new Proxy({
	"src": "/_astro/logo.Bp-tjQcT.png",
	"width": 200,
	"height": 200,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/Users/hiroyuki/Documents/GitHub/astro-blog/src/images/logo.png";
	return target[name];
} });
//#endregion
//#region src/components/Navbar.astro
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<nav class="bg-gray-900 text-white"><div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"><a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">${renderComponent($$result, "Image", $$Image, {
		"src": logo_default,
		"class": "h-14",
		"alt": "TechPeople Logo",
		"width": 55,
		"height": 55
	})}<span class="self-center text-2xl font-semibold whitespace-nowrap"><span class="text-indigo-400">Tech</span>People</span></a><button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button><div class="hidden w-full md:block md:w-auto" id="navbar-default"><ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 text-white rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"><li><a href="/" class="block py-2 px-3 text-white rounded md:p-0 hover:text-indigo-400" aria-current="page">Home</a></li><li><a href="/articles" class="block py-2 px-3 text-white rounded md:p-0 hover:text-indigo-400">All Articles</a></li><li><a href="/about" class="block py-2 px-3 text-white rounded md:p-0 hover:text-indigo-400">About</a></li></ul></div></div></nav>`;
}, "/Users/hiroyuki/Documents/GitHub/astro-blog/src/components/Navbar.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(async ($$result, $$props, $$slots) => {
	const tags = (await getCollection("blog")).flatMap((article) => article.data.tags);
	const uniqueTags = [...new Set(tags)];
	return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-indigo-900 text-white"><div class="container mx-auto mt-10 max-w-screen-xl px-8"><div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"><div class="mt-10"><h3 class="text-xl font-semibold mb-4">About</h3><p class="text-white text-sm">TechPeople is a blog for tech enthusiasts. We publish articles, stories and tutorials about the latest technology trends and advancements.</p></div><div class="mt-10"><h3 class="text-xl font-semibold mb-4">Categories</h3><ul class="text-white text-sm">${uniqueTags.map((tag) => renderTemplate`<li class="mb-2"><a${addAttribute("/articles/tag/" + tag, "href")}>#${capitalize(tag)}</a></li>`)}</ul></div><div class="mt-10"><h3 class="text-xl font-semibold mb-4">Contact</h3><ul class="text-white text-sm"><li class="mb-2"><a href="#">Email</a></li><li class="mb-2"><a href="#">Twitter</a></li><li class="mb-2"><a href="#">Facebook</a></li><li class="mb-2"><a href="#">Instagram</a></li></ul></div></div></div></footer>`;
}, "/Users/hiroyuki/Documents/GitHub/astro-blog/src/components/Footer.astro", void 0);
//#endregion
//#region src/constants.ts
var SITE_TITLE = "TechPeople Blog";
var SITE_DESCRIPTION = "Articles, stories and tutorials from Tech People";
//#endregion
//#region src/layouts/MainLayout.astro
createAstro("https://astro.build");
var $$MainLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MainLayout;
	const { title = "Articles, Stories & Tutorials 4 Tech People" } = Astro.props;
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(SITE_DESCRIPTION, "content")}><script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.js" integrity="sha512-BJ/5sR2hFxQTKin/55JQCcMTObShDBAmVjL/3NR/MVcrhyOazJjAgvROem03+HYyGw16SVdSfoWCFGr9syxAKA==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script><title>${SITE_TITLE} - ${title}</title>${renderHead($$result)}</head><body>${renderComponent($$result, "Navbar", $$Navbar, {})}<section class="container mx-auto max-w-screen-xl mt-10 px-8">${renderSlot($$result, $$slots["default"])}</section>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/Users/hiroyuki/Documents/GitHub/astro-blog/src/layouts/MainLayout.astro", void 0);
//#endregion
export { $$MainLayout as t };
