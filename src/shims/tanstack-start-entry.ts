// Client-side shim for #tanstack-start-entry used by @tanstack/start-client-core
// Exports a minimal `startInstance` with getOptions() so hydrateStart can run safely
export const startInstance = {
  async getOptions() {
    return {
      serializationAdapters: [],
      defaultSsr: false,
    } as const;
  },
};

export default startInstance;
