// src/stores/modules.js
import { defineStore } from 'pinia';

export const useModuleStore = defineStore('moduleStore', {
  state: () => ({
    activeModules: [],
  }),
  actions: {
    loadModule(moduleName) {
      if (!this.activeModules.includes(moduleName)) {
        this.activeModules.push(moduleName);
        loadModuleRoutes(moduleName);  // Esta función debería estar disponible en el contexto adecuado
      }
    },
    unloadModule(moduleName) {
      this.activeModules = this.activeModules.filter((m) => m !== moduleName);
      // Lógica adicional para descargar el módulo si es necesario
    },
  },
});