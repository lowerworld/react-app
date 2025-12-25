/// <reference types="vite/client" />

// biome-ignore lint/suspicious/noEmptyInterface: _
interface ImportMetaEnv {
  // readonly VITE_APP_: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
