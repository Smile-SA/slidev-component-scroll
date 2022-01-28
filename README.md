# slidev-component-scroll

[![NPM version](https://img.shields.io/npm/v/slidev-component-scroll?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-component-scroll)

Scroll navigation component for Slidev `Slidev`.  
Navigate through the slides using the mouse wheel.

## Installation

```bash
npm i slidev-component-scroll
```

## Usage

Create a `./setup/main.ts` file in your `Slidev` project and register the plugin:
```js
import { defineAppSetup } from '@slidev/types'
import Scroll from 'slidev-component-scroll'

export default defineAppSetup(({ app, router }) => {
  app.use(Scroll)
})
```

Create a `./global-top.vue` file in your `Slidev` project and use the component:
```vue
<template>
  <Scroll/>
</template>
```
