import { type PageModel } from "@stackbit/types";

export const page: PageModel = {
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
        { name: "tagline", type: "string" },
      ],
    },
  ],
};
