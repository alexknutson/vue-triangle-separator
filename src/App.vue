<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Vue Triangle Separator Examples</h1>

    <h2>Swap Disable - (Default)</h2>
    <TriangleSeparator></TriangleSeparator>
    <h2>Swap Enabled</h2>
    <TriangleSeparator swap></TriangleSeparator>
    <h2>Rotate Enabled</h2>
    <TriangleSeparator rotate></TriangleSeparator>
    <h2>Swap + Rotate Enabled</h2>
    <TriangleSeparator swap rotate></TriangleSeparator>
    <h2>With Gradient</h2>
    <TriangleSeparator
      swap
      rotate
      should-apply-gradient
      gradient-color-one="red"
      gradient-color-two="blue"
    ></TriangleSeparator>
  </div>
</template>

<script>
import TriangleSeparator from "./components/TriangleSeparator";
export default {
  name: "vue-triangle-separator-demo",
  components: {
    TriangleSeparator,
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
