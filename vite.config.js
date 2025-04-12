import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // ТУТА

export default defineConfig({
    plugins: [tailwindcss()],  // ТУТА
});