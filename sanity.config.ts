import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { postType } from "./sanity/schemaTypes/post";

export default defineConfig({
  name: "esperit-website",
  title: "EsperIT Blog",
  projectId: "d5f61lrs",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [postType],
  },
});
