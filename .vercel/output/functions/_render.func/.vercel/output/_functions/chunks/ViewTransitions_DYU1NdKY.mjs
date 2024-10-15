import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro } from './astro/server_DQr9dNq9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/wanderlee/projects/wanderlee-porfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

export { $$ViewTransitions as $ };
