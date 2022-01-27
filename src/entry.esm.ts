import { App, Plugin } from "vue";

// Import vue components
import component from "./scroll.vue";

// Define typescript interfaces for installable component
type InstallableComponent = typeof component & { install: Exclude<Plugin['install'], undefined> };

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
export default /*#__PURE__*/((): InstallableComponent => {
  // Assign InstallableComponent type
  const installable = component as unknown as InstallableComponent;

  // Attach install function executed by Vue.use()
  installable.install = (app: App) => {
    app.component('Scroll', installable);
  };
  return installable;
})();
