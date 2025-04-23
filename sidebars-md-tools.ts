import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const sidebars: SidebarsConfig = {
  "md-tools": {
    "概览": [
      'overview'
    ],
    "编译构建": [
      'build'
    ],
    "使用 md-tools": [
      'quick-start',
      'docker-image'
    ]
  },
}

export default sidebars;
