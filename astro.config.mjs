// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://embedded-universe.de',
	integrations: [mdx(), sitemap()],
	vite: {
		server:{
		  host: "0.0.0.0",
		  hmr: { clientPort: 3000 },
		  port: 3000, 
		  watch: { usePolling: true }
		}
	}
});
