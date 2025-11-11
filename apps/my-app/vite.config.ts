import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server:
  {
    port: 3001,
    open: false,
  },
  resolve:
  {
    alias:
    {
      '@ui/components': path.resolve(__dirname, '../../libs/ui/src'),
    },
  },
});

