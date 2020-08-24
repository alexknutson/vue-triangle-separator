<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Vue Triangle Separator Examples</h1>
    <div class="social-links">
      <a href="https://github.com/alexknutson/vue-triangle-separator">
        <i class="fa fa-github" aria-hidden="true"></i>
        <span>GITHUB</span>
      </a>
    </div>
    <div class="examples">
      <h2>
        <i class="fa fa-arrow-down" aria-hidden="true"></i> Swap Disable - (Default)
      </h2>
      <TriangleSeparator></TriangleSeparator>
      <h2>
        <i class="fa fa-arrow-down" aria-hidden="true"></i> Swap Enabled
      </h2>
      <TriangleSeparator swap></TriangleSeparator>
      <h2>
        <i class="fa fa-arrow-down" aria-hidden="true"></i> Rotate Enabled
      </h2>
      <TriangleSeparator rotate></TriangleSeparator>
      <h2>
        <i class="fa fa-arrow-down" aria-hidden="true"></i> Swap + Rotate Enabled
      </h2>
      <TriangleSeparator swap rotate></TriangleSeparator>
      <h2>
        <i class="fa fa-arrow-down" aria-hidden="true"></i> With Gradient
      </h2>
      <TriangleSeparator
        swap
        rotate
        should-apply-gradient
        gradient-color-one="red"
        gradient-color-two="blue"
      ></TriangleSeparator>
      <h2>
        <i class="fa fa-arrow-down" aria-hidden="true"></i> Ignoring Height
      </h2>
      <p>
        By default, the triangle separator will take up space in the DOM.
        <br />Adding the
        <code>:should-apply-container-height="false"</code> will remove the container height, so the triangle can overlap the content below it in the DOM.
      </p>
      <TriangleSeparator :should-apply-container-height="false"></TriangleSeparator>
      <div class="example-content-box"></div>
      <TriangleSeparator pull-up swap rotate :should-apply-container-height="false"></TriangleSeparator>
      <h2>
        <i class="fa fa-arrow-up" aria-hidden="true"></i> Pull-Up Enabled
      </h2>
      <p>
        You can add the
        <code>pull-up</code> prop to reposition the triangle up the DOM based on the
        <code>size</code> value
      </p>
    </div>
    <footer>
      <a href="https://github.com/alexknutson/vue-triangle-separator">
        <i class="fa fa-github" aria-hidden="true"></i>
        <span>GITHUB</span>
      </a>
    </footer>
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
  background-color: rgb(0 0 0 / 6%);
}
.example-content-box {
  width: 100%;
  height: 400px;
  background-color: rgb(128 128 128 / 55%);
}
code {
  background-color: rgb(64, 92, 145);
  padding: 5px 10px;
  color: white;
  font-weight: bold;
  border: 1px solid black;
}
.examples {
  background-color: white;
}
h2:not(:last-of-type) {
  border-top: 5px solid rgb(0 0 0 / 4%);
  margin-top: 80px;
  padding-top: 40px;
}
p {
  line-height: 28px;
}
p:last-of-type {
  margin-bottom: 0;
  padding-bottom: 40px;
}
.fa-github {
  font-size: 50px;
  margin-right: 15px;
}
@media all and (min-width: 1068px) {
  .social-links {
    position: absolute;
    right: 150px;
    top: 66px;
  }
}
a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
}
.social-links a:hover {
  color: rgba(0, 0, 0, 0.64);
}
footer {
  background-color: rgb(0 0 0 / 6%);
  color: white;
  border-top: 5px solid rgb(0 0 0 / 4%);
  padding-top: 40px;
  height: 300px;
}
</style>
