import { r as registerInstance, h, H as Host } from './index-1ad46950.js';
import { g as getIonMode } from './ionic-global-d77af0d9.js';

const thumbnailCss = ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}";

class Thumbnail {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: getIonMode(this) }, h("slot", null)));
    }
}
Thumbnail.style = thumbnailCss;

export { Thumbnail as ion_thumbnail };
