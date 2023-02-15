import { defineComponent as u, ref as s, onMounted as p, openBlock as c, createElementBlock as l, normalizeClass as _, renderSlot as f } from "vue";
const d = /* @__PURE__ */ u({
  __name: "index",
  props: {
    loading: { type: Boolean },
    disabled: { type: Boolean },
    type: null,
    color: null
  },
  setup(t, { expose: n }) {
    const e = t, r = s(), o = s("");
    return p(() => {
      o.value = e.color, o.value = e.type == "primary" ? "blue" : e.type == "success" ? "green" : e.type == "danger" ? "red" : "";
    }), n({
      ref: r
    }), (a, k) => (c(), l("button", {
      ref_key: "_ref",
      ref: r,
      class: _(["et-button", `bg-${o.value}-500`, "py-2"])
    }, [
      f(a.$slots, "default")
    ], 2));
  }
}), i = {
  install(t) {
    t.component("et-button", d);
  }
}, m = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [r, o] of n)
    e[r] = o;
  return e;
}, y = {};
function g(t, n) {
  return c(), l("div", null, "我是tag");
}
const b = /* @__PURE__ */ m(y, [["render", g]]), v = {
  install(t) {
    t.component("et-tag", b);
  }
}, B = [
  i,
  v
];
const E = {
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
