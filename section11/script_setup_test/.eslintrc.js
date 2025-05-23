module.exports = {
  root: true,
  env: {
    node: true,
  },
  // global: {
  //   defineProps: "readonly",
  //   defineEmits: "readonly",
  //   defineExpose: "readonly",
  //   withDefaults: "readonly",
  // },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
