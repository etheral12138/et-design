import {
  createElementBlock,
  defineComponent,
  normalizeClass,
  onMounted,
  openBlock,
  ref,
  renderSlot
} from "./chunk-FSII2YHJ.js";

// node_modules/.pnpm/et-design@1.1.3/node_modules/et-design/dist/ui.es.js
var d = defineComponent({
  __name: "index",
  props: {
    loading: { type: Boolean },
    disabled: { type: Boolean },
    type: null,
    color: null
  },
  setup(t, { expose: n }) {
    const e = t, r = ref(), o = ref("");
    return onMounted(() => {
      o.value = e.color, o.value = e.type == "primary" ? "blue" : e.type == "success" ? "green" : e.type == "danger" ? "red" : "";
    }), n({
      ref: r
    }), (a, k) => (openBlock(), createElementBlock("button", {
      ref_key: "_ref",
      ref: r,
      class: normalizeClass(["et-button", `bg-${o.value}-500`, "py-2"])
    }, [
      renderSlot(a.$slots, "default")
    ], 2));
  }
});
var i = {
  install(t) {
    t.component("et-button", d);
  }
};
var m = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [r, o] of n)
    e[r] = o;
  return e;
};
var y = {};
function g(t, n) {
  return openBlock(), createElementBlock("div", null, "我是tag");
}
var b = m(y, [["render", g]]);
var v = {
  install(t) {
    t.component("et-tag", b);
  }
};
var B = [
  i,
  v
];
var E = {
  install(t) {
    B.forEach((n) => {
      t.use(n);
    });
  }
};
export {
  i as EtButton,
  v as EtTag,
  E as default
};
//# sourceMappingURL=et-design.js.map
