import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mittweida_app/', // 👉 wichtig für GitHub Pages
  plugins: [react()],
})