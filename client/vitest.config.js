import {defineConfig} from 'vitest/config'; import react from '@vitejs/plugin-react';
export default defineConfig({root:'client',plugins:[react()],test:{environment:'jsdom',globals:true,setupFiles:'./src/test/setup.js',include:['src/**/*.test.{js,jsx}']}});
