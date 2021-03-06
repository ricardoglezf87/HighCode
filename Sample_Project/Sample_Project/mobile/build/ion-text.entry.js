import { r as registerInstance, h, H as Host } from './index-1ad46950.js';
import { g as getIonMode } from './ionic-global-08321e45.js';
import { c as createColorClasses } from './theme-d8afa044.js';

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
class Text {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { class: Object.assign(Object.assign({}, createColorClasses(this.color)), { [mode]: true }) }, h("slot", null)));
    }
}
Text.style = textCss;

export { Text as ion_text };
