import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { postType } from "./schemaTypes/post";

export default defineConfig({
  name: "esperit-website",
  title: "EsperIT Blog",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool()],
  schema: {
    types: [postType],
  },
});
