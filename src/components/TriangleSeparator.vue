<template>
  <div class="triangle-separator__container" :style="setContainerStyles">
    <div
      class="triangle-separator__wrapper"
      :class="setRotationClass"
      :style="setWrapperStyles"
      ref="wrapper"
    >
      <svg
        class="triangle-separator__svg"
        :width="this.getIdealWidth()"
        :height="this.setHeight()"
      >
        <polygon :style="setFill" :points="getIdealTrianglePoints" />
        <defs>
          <linearGradient :id="`lgradient-${this.id}`">
            <stop offset="0" :stop-color="this.gradientColorOne" />
            <stop offset="1" :stop-color="this.gradientColorTwo" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>

<style>
.triangle-separator__wrapper {
  width: 100%;
  position: absolute;
}
.triangle-separator__svg {
  width: 100%;
}
.triangle-separator__svg polygon {
  fill: "black";
}
.triangle-separator__container {
  position: relative;
}
.triangle-separator--rotateX {
  transform: rotateX(-180deg);
}
.triangle-separator--rotateY {
  transform: rotateY(-180deg);
}
.triangle-separator--rotateXY {
  transform: rotateX(-180deg) rotateY(-180deg);
}
</style>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  name: "TriangleSeparator",
  props: {
    size: {
      type: Number,
      default: 120,
    },
    swap: {
      type: Boolean,
      default: false,
    },
    rotate: {
      type: Boolean,
      default: false,
    },
    pullUp: {
      type: Boolean,
      default: false,
    },
    fillColor: {
      type: String,
      default: "rgb(38 60 89)",
    },
    gradientColorOne: {
      type: String,
      default: "red",
    },
    gradientColorTwo: {
      type: String,
      default: "blue",
    },
    zIndexOverride: {
      type: Number,
      default: 1,
    },
    disableHeight: {
      type: Boolean,
      default: false,
    },
    shouldApplyGradient: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      swapControl: this.swap,
      rotateControl: this.rotate,
      id: null,
    };
  },
  mounted() {
    this.id = uuidv4();
  },
  computed: {
    getIdealTrianglePoints: function () {
      let firstVector = `0,0`;
      let secondVector = `${window.innerWidth},0`;
      let thirdVector = `${window.innerWidth},${this.size}`;

      // Redefine the polygon points so it rotates the triangle.
      if (this.rotateControl) {
        firstVector = "0,0";
        secondVector = `0,${window.innerWidth}`;
        thirdVector = `${window.innerWidth},${this.size}`;
      }

      return `${firstVector} ${secondVector} ${thirdVector}`;
    },
    setWrapperStyles() {
      return {
        "z-index": this.zIndexOverride,
        top: this.pullUp ? `-${this.size}px` : `0`,
      };
    },
    setFill: function () {
      return {
        fill: this.shouldApplyGradient
          ? `url(#lgradient-${this.id})` // The gradient defined in the svg
          : this.fillColor,
      };
    },
    setRotationClass: function () {
      if (this.swapControl && this.rotateControl) {
        // Do nothing
      } else if (this.swapControl) {
        return `triangle-separator--rotateY`;
      } else if (this.rotateControl) {
        return `triangle-separator--rotateY`;
      }
      return "";
    },
    setContainerStyles: function () {
      return {
        height: this.disableHeight ? "" : this.setHeight(),
      };
    },
  },
  methods: {
    getIdealWidth: function () {
      return `${window.innerWidth}px`;
    },
    setHeight: function () {
      return `${this.size}px`;
    },
  },
};
</script>
