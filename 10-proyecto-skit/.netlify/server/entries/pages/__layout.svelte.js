var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => _layout
});
var import_index_2dc61825 = __toModule(require("../../chunks/index-2dc61825.js"));
const Footer = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  return `<center><h5>\xA9Yirsis Serrano - Curso SvelteKit ${(0, import_index_2dc61825.e)(new Date().getFullYear())}</h5></center>`;
});
const Navbar = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  return `<nav><a href="${"/"}">Home</a>
  <a href="${"/about"}">About</a>
  <a href="${"/suport"}">Suport</a></nav>`;
});
const _layout = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2dc61825.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${(0, import_index_2dc61825.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
