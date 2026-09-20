import { f as renderTemplate, h as addAttribute, p as maybeRenderHead, w as createAstro } from "./server_CxzrZujQ.mjs";
import { o as createComponent } from "./consts_CrxX3-q1.mjs";
import "./_astro_assets_BaPhbnba.mjs";
import { t as capitalize } from "./utils_ClM5Zg3a.mjs";
//#region src/components/Tags.astro
createAstro("https://astro.build");
var $$Tags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Tags;
	const { tags } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-wrap gap-2">${tags.map((tag, index) => renderTemplate`<span${addAttribute(index % 2 === 0 ? "px-2 py-1 bg-green-500 text-white rounded-full text-xs hover:opacity-90" : "px-2 py-1 bg-indigo-500 text-white rounded-full text-xs hover:opacity-90", "class")}><a${addAttribute("/articles/tag/" + tag, "href")}>#${capitalize(tag)}</a></span>`)}</div>`;
}, "/Users/hiroyuki/Documents/GitHub/astro-blog/src/components/Tags.astro", void 0);
//#endregion
export { $$Tags as t };
