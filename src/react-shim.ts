// React compatibility shim for libraries that expect React to be globally available
import * as React from 'react';

// Make React available globally for libraries that expect it
if (typeof window !== 'undefined') {
  (window as any).React = React;
}

// Also make it available on globalThis for Node.js environments
if (typeof globalThis !== 'undefined') {
  (globalThis as any).React = React;
}

export default React;