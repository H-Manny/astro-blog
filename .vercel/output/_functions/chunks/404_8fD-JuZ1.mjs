import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { f as renderTemplate, o as renderComponent, p as maybeRenderHead } from "./server_CxzrZujQ.mjs";
import { o as createComponent } from "./consts_CrxX3-q1.mjs";
import { r as $$Image } from "./_astro_assets_BaPhbnba.mjs";
import { t as $$MainLayout } from "./MainLayout_C3LaFV6V.mjs";
//#region src/images/error-404.png
var error_404_default = new Proxy({
	"src": "/_astro/error-404.Ox42KQdE.png",
	"width": 512,
	"height": 512,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/Users/hiroyuki/Documents/GitHub/astro-blog/src/images/error-404.png";
	return target[name];
} });
//#endregion
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "404 - Page Not Found" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col items-center justify-items-center gap-7">${renderComponent($$result, "Image", $$Image, {
		"src": error_404_default,
		"alt": "404",
		"height": 250,
		"width": 250,
		"class": "mt-10"
	})}<h1 class="text-5xl">Page Not Found</h1><p class="text-2xl mb-10">Sorry, we couldn't find the page you were looking for.</p><a href="/" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">Go Back Home</a></div>` })}`;
}, "/Users/hiroyuki/Documents/GitHub/astro-blog/src/pages/404.astro", void 0);
var $$file = "/Users/hiroyuki/Documents/GitHub/astro-blog/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
