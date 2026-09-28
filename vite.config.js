import { defineConfig } from 'vite';

// 상대 경로를 사용해 username.github.io 및 /repository/ 주소 모두 지원합니다.
export default defineConfig({ base: './' });
