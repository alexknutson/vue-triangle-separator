<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Vue Triangle Separator Examples</h1>

    <h2>Swap Disable - (Default)</h2>
    <VueTriangleSeparator></VueTriangleSeparator>
    <h2>Swap Enabled</h2>
    <VueTriangleSeparator swap></VueTriangleSeparator>
    <h2>Rotate Enabled</h2>
    <VueTriangleSeparator rotate></VueTriangleSeparator>
    <h2>Swap + Rotate Enabled</h2>
    <VueTriangleSeparator swap rotate></VueTriangleSeparator>
    <h2>With Gradient</h2>
    <VueTriangleSeparator
      swap
      rotate
      should-apply-gradient
      gradient-color-one="red"
      gradient-color-two="blue"
    ></VueTriangleSeparator>
  </div>
</template>

<script>
import VueTriangleSeparator from "./components/VueTriangleSeparator";
export default {
  name: "vue-triangle-separator-demo",
  components: {
    VueTriangleSeparator,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
}
</style>
