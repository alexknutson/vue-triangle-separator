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
    <h2>Prop Demos</h2>
    <div class="examples">
      <h3 id="swap-disabled">
        <i class="fa fa-arrow-down" aria-hidden="true"></i> Swap Disable - (Default)
      </h3>
      <TriangleSeparator></TriangleSeparator>
      <h3 id="swap-enabled">
        <i class="fa fa-arrow-down" aria-hidden="true"></i> Swap Enabled
      </h3>
      <TriangleSeparator swap></TriangleSeparator>
      <h3 id="rotate-enabled">
        <i class="fa fa-arrow-down" aria-hidden="true"></i> Rotate Enabled
      </h3>
      <TriangleSeparator rotate></TriangleSeparator>
      <h3 id="rotate-and-swap-enabled">
        <i class="fa fa-arrow-down" aria-hidden="true"></i> Swap + Rotate Enabled
      </h3>
      <TriangleSeparator swap rotate></TriangleSeparator>
      <h3 id="fill-color">
        <i class="fa fa-arrow-down" aria-hidden="true"></i> Custom Fill Color
      </h3>
      <TriangleSeparator fill-color="#420999"></TriangleSeparator>
      <h3 id="swap-rotate-and-gradient">
        <i class="fa fa-arrow-down" aria-hidden="true"></i> With Gradient
      </h3>
      <TriangleSeparator
        swap
        rotate
        should-apply-gradient
        gradient-color-one="red"
        gradient-color-two="blue"
      ></TriangleSeparator>
      <h3 id="size">
        <i class="fa fa-arrow-down" aria-hidden="true"></i> Size
      </h3>
      <TriangleSeparator swap :size="250"></TriangleSeparator>
      <h3 id="disable-height">
        <i class="fa fa-arrow-down" aria-hidden="true"></i> Disable Height
      </h3>
      <p>
        By default, the triangle separator will take up space in the DOM.
        <br />Adding the
        <code>disable-height</code> prop will remove the container height, so the triangle can overlap the content below it in the DOM.
      </p>
      <TriangleSeparator disable-height></TriangleSeparator>
      <div class="example-content-box">Example Content Box</div>
      <TriangleSeparator pull-up swap rotate disable-height></TriangleSeparator>
      <h3 id="pull-up-enabled">
        <i class="fa fa-arrow-up" aria-hidden="true"></i> Pull-Up Enabled
      </h3>
      <p>
        You can add the
        <code>pull-up</code> prop to reposition the triangle up the DOM based on the
        <code>size</code> value
      </p>
    </div>
    <div class="examples layout-examples">
      <h2>That's pretty kew, but what can I do with it?</h2>
      <p class="section-quote">Well basic stuff like this...</p>
      <!-- LAYOUT 1 EXAMPLE -->
      <section v-for="i in 3" :key="`layoutOneExample-${i}`">
        <template v-if="i % 2 == 0">
          <TriangleSeparator
            fill-color="white"
            :size="parseInt(`${i * layoutOneSize}`)"
            disable-height
          ></TriangleSeparator>
          <div
            class="example-content-box-full-height"
            :style="`background-image: url('https://picsum.photos/1920/108${i}'); background-size: cover;`"
          ></div>
          <TriangleSeparator
            fill-color="white"
            :size="parseInt(`${i * layoutOneSize}`)"
            pull-up
            swap
            rotate
            disable-height
          ></TriangleSeparator>
        </template>
        <template v-else>
          <TriangleSeparator
            fill-color="white"
            swap
            :size="parseInt(`${i * layoutOneSize}`)"
            disable-height
          ></TriangleSeparator>
          <div
            class="example-content-box-full-height"
            :style="`background-image: url('https://picsum.photos/1920/108${i}'); background-size: cover;`"
          ></div>
          <TriangleSeparator
            fill-color="white"
            :size="parseInt(`${i * layoutOneSize}`)"
            pull-up
            rotate
            disable-height
          ></TriangleSeparator>
        </template>
      </section>
      <p class="section-quote">or maybe something like...</p>
      <!-- LAYOUT 2 EXAMPLE -->
      <section v-for="i in 3" :key="`layoutTwoExample-${i}`">
        <TriangleSeparator fill-color="rgba(0,0,0,0.9)" swap :size="layoutTwoSize" disable-height></TriangleSeparator>
        <div
          class="example-content-box-full-height"
          :style="`background-image: url('https://picsum.photos/1920/108${i}'); background-size: cover;`"
        ></div>
        <TriangleSeparator
          fill-color="rgba(0,0,0,0.9)"
          :size="layoutTwoSize"
          pull-up
          rotate
          disable-height
        ></TriangleSeparator>
      </section>
      <p class="section-quote">or if you're feeling funky...</p>
      <!-- LAYOUT 3 EXAMPLE -->
      <section v-for="i in 2" :key="`layoutThreeExample-${i}`">
        <TriangleSeparator
          should-apply-gradient
          gradient-color-one="red"
          gradient-color-two="blue"
          swap
          :size="layoutThreeSize"
          disable-height
        ></TriangleSeparator>
        <TriangleSeparator
          should-apply-gradient
          gradient-color-one="red"
          gradient-color-two="blue"
          :size="layoutThreeSize"
          disable-height
        ></TriangleSeparator>
        <div
          class="example-content-box-full-height"
          :style="`background-image: url('https://picsum.photos/1920/108${i}'); background-size: cover;`"
        ></div>
        <TriangleSeparator
          v-if="i == 1"
          should-apply-gradient
          gradient-color-one="red"
          gradient-color-two="blue"
          :size="layoutThreeSize"
          pull-up
          rotate
          disable-height
        ></TriangleSeparator>
        <TriangleSeparator
          v-if="i == 1"
          should-apply-gradient
          gradient-color-one="red"
          gradient-color-two="blue"
          :size="layoutThreeSize"
          pull-up
          rotate
          swap
          disable-height
        ></TriangleSeparator>
        <TriangleSeparator
          v-if="i == 2"
          should-apply-gradient
          gradient-color-one="red"
          gradient-color-two="blue"
          :size="layoutThreeSize"
          pull-up
          rotate
          disable-height
        ></TriangleSeparator>
        <TriangleSeparator
          v-if="i == 2"
          should-apply-gradient
          gradient-color-one="red"
          gradient-color-two="blue"
          :size="layoutThreeSize"
          pull-up
          rotate
          swap
          disable-height
        ></TriangleSeparator>
        <TriangleSeparator
          v-if="i == 3"
          should-apply-gradient
          gradient-color-one="blue"
          gradient-color-two="red"
          :size="layoutThreeSize"
          pull-up
          rotate
          disable-height
        ></TriangleSeparator>
        <TriangleSeparator
          v-if="i == 3"
          should-apply-gradient
          gradient-color-one="blue"
          gradient-color-two="red"
          :size="layoutThreeSize"
          pull-up
          rotate
          swap
          disable-height
        ></TriangleSeparator>
      </section>
      <p
        class="section-quote"
      >Combine triangles of different colors, sizes and rotations to create your own!</p>
    </div>
    <footer>
      <a href="https://github.com/alexknutson/vue-triangle-separator">
        <i class="fa fa-github" aria-hidden="true"></i>
        <span>GITHUB</span>
      </a>
      <span class="current-version">
        Current Version
        <br />
        <strong>{{version}}</strong>
      </span>
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
  data: function () {
    return {
      layoutOneSize: 100,
      layoutTwoSize: 125,
      layoutThreeSize: 225,
      version: require("../package.json").version,
    };
  },
  computed: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
#app {
  font-family: "Bebas Neue", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  letter-spacing: 1px;
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.example-content-box-full-height {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    transform: scale(1.3);
  }
}
code {
  background-color: rgb(64, 92, 145);
  padding: 5px 10px;
  color: white;
  font-weight: bold;
  border: 1px solid black;
}
h1 {
  position: relative;
  z-index: 2;
}
h2 {
  margin-top: 85px;
  font-size: 35px;
  line-height: 54px;
  padding: 45px 15px 0;
}
h3 {
  font-size: 25px;
  padding-top: 40px;
}
p {
  line-height: 28px;
  padding: 0 0 25px;
}
.fa-github {
  font-size: 50px;
  margin-right: 15px;
}
.section-quote {
  padding: 25px;
  position: relative;
  background-color: rgb(255 255 255);
  z-index: 2;
  border-radius: 6px;
  font-size: 35px;
  line-height: 45px;
}
.examples {
  background-color: white;
  padding-bottom: 1px;
}
@media all and (min-width: 1068px) {
  .social-links {
    position: absolute;
    right: 150px;
    top: 66px;
  }
  .current-version {
    position: absolute;
    left: 150px;
    top: 66px;
    text-align: left;
    color: black;
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
