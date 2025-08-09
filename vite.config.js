import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // Prioridad: PORT (producción) > VITE_PORT (desarrollo) > 3000 (fallback)
  const port = parseInt(process.env.PORT) || parseInt(env.VITE_PORT) || 3000;

  return {
    plugins: [tailwindcss(), react()],
    server: {
      port: port,
      open: mode === "development", // Solo abrir en desarrollo
      host: true, // Permitir acceso desde red externa (importante para producción)
    },
    preview: {
      port: port, // También para el comando 'vite preview'
      host: true,
    },
  };
});
