// Minimal browser shim for node:async_hooks AsyncLocalStorage used by some TanStack packages.
// This provides the AsyncLocalStorage API surface used at runtime but is a no-op in the browser.
export class AsyncLocalStorage<T = any> {
  private _store: T | undefined;
  constructor() {}
  getStore(): T | undefined {
    return this._store;
  }
  run<R>(store: T, fn: () => R): R {
    const prev = this._store;
    this._store = store;
    try {
      return fn();
    } finally {
      this._store = prev;
    }
  }
  enterWith(store: T): void {
    this._store = store;
  }
}

export default AsyncLocalStorage;
