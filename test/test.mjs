import assert from "assert";
import html from "../dist/simple-html-template-tag.cjs.mjs";

const interpolated = 450;

const answer = `<h1>${interpolated}</h1>`;
const resulted = html`<h1>${interpolated}</h1>`;

assert(answer, resulted);
