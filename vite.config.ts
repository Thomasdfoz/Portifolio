import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // carrega variáveis do .env (VITE_*) para o modo atual
  const env = loadEnv(mode, process.cwd(), '');

  // use VITE_BASE if provided, otherwise fallback to '/portfolio/' (replace with repo name)
  const basePath = env.VITE_BASE || '/Portifolio/';

  return {
    base: basePath, // IMPORTANT: change '/portfolio/' to '/<your-repo-name>/' or set VITE_BASE
    server: {
      port: 3000,
      host: '0.0.0.0',
      // opcional: habilitar cors, proxy ou fs.allow se precisar
    },
    plugins: [react()],
    define: {
      // Preservo seu mapeamento atual; preferível usar import.meta.env nas fontes
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.'),
      },
    },
    preview: {
      // Comando `vite preview` usa essa porta; útil para checar a build localmente
      port: 5000,
      host: '0.0.0.0',
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      // opcional: ajustar rollup options se tiver assets específicos
      // rollupOptions: { ... }
    },
    optimizeDeps: {
      // adicione packages que precisam ser otimizadas no dev
      // include: [],
      // exclude: []
    },
  };
});
