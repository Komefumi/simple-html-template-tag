# Simple HTML Template Tag

A simple utility function. Bundled for different environments using Rollup, and making use of TypeScript.

## Usage

First install:

```bash
npm install @komefumi/html-template-tag
```

Usage is as follows:

```typescript
import html from "simple-html-template-tag";

const interpolated = 450;
const resulted = html`<h1>${interpolated}</h1>`;
```

## The Advantage

You get HTML syntax highlighting, formatting, and everything else that your text editor supports if it recognizes the html tag to mean the associated string to be in HTML. This allows the building of raw HTML strings within JavaScript.

To take advantage of this support (easily provided in VSCode), you have to import the package function as `html`, as you see in the example above.

i.e.,

```typescript
import html from "simple-html-template-tag";
```

And not

```typescript
import somethingElse from "simple-html-template-tag";
```

### More notes

Partially also a learning project, feel free to use the code as you see fit!
