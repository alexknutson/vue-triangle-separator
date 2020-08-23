<template>
  <div class="triangle-separator__container">
    <div
      class="triangle-separator__wrapper"
      :class="setRotationClass"
      :style="setWrapperStyles"
      ref="wrapper"
    >
      <svg
        :width="this.getIdealWidth()"
        class="triangle-separator__svg"
        :height="this.setSvgHeight()"
      >
        <polygon :style="setFillColor" :points="getIdealTrianglePoints" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss">
.triangle-separator {
  &__svg {
    width: 100%;
  }
}
.triangle-separator__wrapper {
  width: 100%;
  position: absolute;
}
.triangle-separator__svg {
  width: 100%;

  polygon {
    fill: $brand-dark-blue;
  }
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
export default {
  name: "TriangleSeparator",
  props: {
    fillColor: {
      type: String,
      default: "rgb(38 60 89)",
    },
    size: {
      type: Number,
      default: 120,
    },
    zIndexOverride: {
      type: Number,
      default: 1,
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
  },
  data: function () {
    return {
      swapControl: this.swap,
      rotateControl: this.rotate,
    };
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
    setFillColor: function () {
      return {
        fill: this.fillColor,
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
  },
  methods: {
    getIdealWidth: function () {
      return `${window.innerWidth}px`;
    },
    setSvgHeight: function () {
      return `${this.size}px`;
    },
  },
};
</script>
