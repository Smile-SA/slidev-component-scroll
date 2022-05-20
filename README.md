# slidev-component-scroll

[![NPM version](https://img.shields.io/npm/v/slidev-component-scroll?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-component-scroll)

Scroll navigation component for `Slidev`. 
 
Navigate through the slides using the mouse wheel.

## Installation

```bash
npm i slidev-component-scroll
```

## Configuration

Define this package into your slidev addons.

In your slides metadata (using frontmatter):
```
---
addons:
  - slidev-component-scroll
---
```

Or in your `package.json`:
```json
{
  "slidev": {
    "addons": [
      "slidev-component-scroll"
    ]
  }
}
```

## Usage

Create a `./global-top.vue` file in your `Slidev` project and use the component:
```vue
<template>
  <Scroll/>
</template>
```

## Components

### Scroll

Component for the scroll feature:
```vue
<Scroll/>
```
