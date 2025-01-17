/// <reference types="vite/client" />

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImportMetaEnv {
  // readonly VITE_APP_: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
