import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Nurislam/', // <-- ИМЯ твоего репозитория
  plugins: [react()],
})
