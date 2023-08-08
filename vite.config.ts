import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
// export default defineConfig({
// 	base: "/nova-poshta-test-task/",
// 	plugins: [react()],
// });
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				404: resolve(__dirname, "public/404.html"),
			},
		},
	},
});
