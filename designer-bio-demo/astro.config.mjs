import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://your-demo-profile-site.com", // Update with actual deployed site URL
  output: 'static',
});
