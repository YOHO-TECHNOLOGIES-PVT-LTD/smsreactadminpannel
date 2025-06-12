// React compatibility shim for libraries that expect React to be globally available
import * as React from 'react';

// Ensure React is available in all possible global contexts
if (typeof window !== 'undefined') {
  (window as any).React = React;
  // Also ensure it's available on the global object
  if (typeof (window as any).global === 'undefined') {
    (window as any).global = window;
  }
  (window as any).global.React = React;
}

// Make it available on globalThis for Node.js environments
if (typeof globalThis !== 'undefined') {
  (globalThis as any).React = React;
}

// Also make it available on the global object if it exists
declare const global: any;
if (typeof global !== 'undefined') {
  global.React = React;
}

// Force React to be available immediately
const reactGlobal = React;
(globalThis as any).React = reactGlobal;

export default React;