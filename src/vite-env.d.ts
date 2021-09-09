/// <reference types="vite/client" />
/// <reference types="vue/ref-macros" />

interface ImportMetaEnv {
  VITE_PORT: number;
  VITE_USE_MOCK: boolean;
  VITE_PROXY_HOST: string;
  VITE_API_URL: string;
}
