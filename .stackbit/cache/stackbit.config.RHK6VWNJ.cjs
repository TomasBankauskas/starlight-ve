"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_types2 = require("@stackbit/types");
var import_cms_git = require("@stackbit/cms-git");

// .stackbit/models/page.ts
var import_types = require("@stackbit/types");
var page = {
  name: "page",
  type: "page",
  hideContent: true,
  urlPath: "/{slug}",
  filePath: "src/content/docs/{slug}.md",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "description", type: "string", required: true },
    {
      name: "hero",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "tagline", type: "string" }
      ]
    }
  ]
};

// stackbit.config.ts
var stackbit_config_default = (0, import_types2.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  devCommand: "node_modules/.bin/astro dev --port {PORT} --hostname 127.0.0.1",
  experimental: {
    ssg: {
      name: "Astro",
      logPatterns: {
        up: ["is ready", "astro"]
      },
      directRoutes: {
        "socket.io": "socket.io"
      },
      passthrough: ["/vite-hmr/**"]
    }
  },
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: "/Users/tomasbankauskas/Desktop/squalid-star",
      contentDirs: ["src/content/docs"],
      models: [page],
      assetsConfig: {
        referenceType: "static",
        staticDir: "src/assets/",
        uploadDir: "_images",
        publicPath: "/src/assets/"
      }
    })
  ],
  modelExtensions: [{ name: "page", type: "page", urlPath: "/{slug}" }]
});
//# sourceMappingURL=stackbit.config.RHK6VWNJ.cjs.map
