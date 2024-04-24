/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@app': path.resolve(__dirname, './src/App'),
            '@assets': path.resolve(__dirname, './src/Assets'),
            '@common': path.resolve(__dirname, './src/common'),
            '@components': path.resolve(__dirname, './src/Components'),
            '@hooks': path.resolve(__dirname, './src/Hooks'),
            '@modules': path.resolve(__dirname, './src/Modules'),
            '@pages': path.resolve(__dirname, './src/Pages'),
            '@providers': path.resolve(__dirname, './src/providers'),
            '@sections': path.resolve(__dirname, './src/Sections'),
            '@ui': path.resolve(__dirname, './src/UI'),
            '@utils': path.resolve(__dirname, './src/utils'),
        },
    },
})
