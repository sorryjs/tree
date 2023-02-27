<template>
  <button :class="classes" :disabled="disabled" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: { type: String, default: "primary" },
    size: { type: String, default: "md" },
    disabled: { type: Boolean, default: false },
  },
  computed: {
    classes() {
      const baseClasses =
        "font-medium p-20 rounded focus:outline-none py-1 px-2";

      switch (this.type) {
        case "primary":
          return `bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 ${baseClasses}`;

        case "secondary":
          return `bg-gray-300 text-gray-800 hover:bg-gray-400 active:bg-gray-500 ${baseClasses}`;

        case "danger":
          return `bg-red-600 text-white hover:bg-red-700 active:bg-red-800 ${baseClasses}`;

        default:
          return "";
      }
    },
  },
};
</script>
