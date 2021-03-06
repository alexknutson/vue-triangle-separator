# vue-triangle-separator
Quickly add full-bleed SVG-powered triangle separators to your page.

## Demo & Examples
Live demo - https://alexknutson.github.io/vue-triangle-separator/

![npm](https://img.shields.io/npm/v/vue-triangle-separator) ![npm](https://img.shields.io/npm/dt/vue-triangle-separator) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-triangle-separator) ![npm bundle size](https://img.shields.io/bundlephobia/min/vue-triangle-separator)

## Install
```bash
 npm install vue-triangle-separator
 ```

## Usage
Import & Register the component
```javascript
import { TriangleSeparator } from "vue-triangle-separator";

export default {
    components: {
        TriangleSeparator
    }
}
```

In your template, try one of the following...

```html
<template>
    <!-- The bare minimum -->
    <TriangleSeparator></TriangleSeparator>
    <!-- For a gradient-filled triangle -->
    <TriangleSeparator
        gradient-color-one="red"
        gradient-color-two="blue"
        should-apply-gradient
        swap
        rotate
    ></TriangleSeparator>
    <!-- or a solid fill color -->
    <TriangleSeparator fill-color="#420999"></TriangleSeparator>
    <!-- maybe a bigger triangle? -->  
    <TriangleSeparator :size="250"></TriangleSeparator>
</template>
```

### Props
| Name | Details | Example |
| ---- | --- | ---- |
| size | default: `120` | [Example](https://alexknutson.github.io/vue-triangle-separator#size) |
| swap | default: `false` | [Example](https://alexknutson.github.io/vue-triangle-separator#swap-disabled) |
| rotate | default: `false` | [Example](https://alexknutson.github.io/vue-triangle-separator#rotate-enabled) |
| pull-up | default: `false` | [Example](https://alexknutson.github.io/vue-triangle-separator#pull-up-enabled) |
| fill-color | default: `rgb(38 60 89)` | [Example](https://alexknutson.github.io/vue-triangle-separator#fill-color) |
| gradientColorOne | default: `red` | [Example](https://alexknutson.github.io/vue-triangle-separator#swap-rotate-and-gradient) |
| gradientColorTwo | default: `blue` | [Example](https://alexknutson.github.io/vue-triangle-separator#swap-rotate-and-gradient) |
| zIndexOverride | default: `1` | [Example](https://alexknutson.github.io/vue-triangle-separator#swap-disabled) |
| disableHeight | default: `false` | [Example](https://alexknutson.github.io/vue-triangle-separator#disable-height) |
| shouldApplyGradient | default: `false` | [Example](https://alexknutson.github.io/vue-triangle-separator#swap-rotate-and-gradient)|
