import { r as registerInstance, h } from './index-1ad46950.js';
import './ionic-global-d77af0d9.js';
import { C as ConftokenProvider, s as sql, u as util, m as msg } from './messages-65fb7542.js';
import './utils-30f0564d.js';
import './index-fb0d54fa.js';
import './helpers-d94a0dba.js';
import './animation-6c25f42e.js';
import './index-0cbc1957.js';
import './ios.transition-e8b1df9c.js';
import './md.transition-03140845.js';
import './cubic-bezier-92995175.js';
import './index-1da44cf3.js';
import './index-53f14fc6.js';
import './hardware-back-button-c2d005b0.js';
import './index-28dab2f8.js';
import './overlays-e769172f.js';
import './jquery-4ed57fb2.js';
import { n as nav } from './navigation-538e1aae.js';
import { c as cam } from './camera-b5d0744d.js';

const flxImagemanagerCss = "flx-imagemanager{}";

class FlxImagemanager {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hasGallery = false;
        this.nocamB64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAH0AfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC1RRRXoHxIUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFF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FFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//9k=';
    }
    async componentWillLoad() {
        this.hasGallery = (navigator.camera ? true : false);
        this.objConf = (await ConftokenProvider.config()).objectConfig[this.object];
        this.objectGUID = await sql.getValue('select _rowguid from `' + this.objConf.tableName + '` where `' + this.objConf.imageConfig.objectPK + '`=?', [this.objectid]);
        this.lastOrder = await sql.getValue('select max(OrderNumber) from `flxImages` where ObjectName=\'' + this.object + '\' and ObjectId=\'' + this.objectid + '\'');
        if (!this.lastOrder) {
            this.lastOrder = 0;
        }
    }
    async refresh(ev) {
        let imgs = document.querySelector('flx-imagegallery');
        return imgs.refresh().then(() => { ev.target.complete(); });
    }
    getPicture(multi = false) {
        cam.getPicture().then((b64) => {
            let image = { "ImageId": util.GUID(), "ObjectName": this.object, "ObjectId": this.objectid, "ObjectGUID": this.objectGUID, "Name": this.object + ' ' + this.lastOrder, "Descrip": null, "ImageClassId": this.objConf.imageConfig.defaultCategoryId, "MainImage": (this.lastOrder == 0 ? true : false), "OrderNumber": this.lastOrder, "URL": null, "B64": b64 };
            cam.savePicture(image).then(() => {
                let imgs = document.querySelector('flx-imagegallery');
                imgs.addImage(image);
                this.lastOrder++;
                if (multi) {
                    this.getPicture(multi);
                }
            });
        }).catch((err) => {
            if (err != 'User cancelled photos app') {
                let image = { "ImageId": util.GUID(), "ObjectName": this.object, "ObjectId": this.objectid, "ObjectGUID": null, "Name": 'Sample.jpg', "Descrip": null, "ImageClassId": null, "MainImage": false, "OrderNumber": null, "URL": null, "B64": this.nocamB64 };
                cam.savePicture(image).then(() => {
                    let imgs = document.querySelector('flx-imagegallery');
                    imgs.addImage(image);
                    msg.showError(err);
                });
            }
        });
    }
    getGalleryPicture() {
        cam.getGalleryPicture().then((b64) => {
            let image = { "ImageId": util.GUID(), "ObjectName": this.object, "ObjectId": this.objectid, "ObjectGUID": null, "Name": this.object + ' ' + this.lastOrder, "Descrip": null, "ImageClassId": this.objConf.imageConfig.defaultCategoryId, "MainImage": (this.lastOrder == 0 ? true : false), "OrderNumber": this.lastOrder, "URL": null, "B64": b64 };
            cam.savePicture(image).then(() => {
                let imgs = document.querySelector('flx-imagegallery');
                imgs.addImage(image);
            });
        }).catch((err) => {
            if (err != 'User cancelled photos app') {
                let image = { "ImageId": util.GUID(), "ObjectName": this.object, "ObjectId": this.objectid, "ObjectGUID": null, "Name": 'Sample.jpg', "Descrip": null, "ImageClassId": null, "MainImage": false, "OrderNumber": null, "URL": null, "B64": this.nocamB64 };
                cam.savePicture(image).then(() => {
                    let imgs = document.querySelector('flx-imagegallery');
                    imgs.addImage(image);
                    msg.showError(err);
                });
            }
        });
    }
    render() {
        return [
            h("ion-header", null, h("ion-toolbar", { color: "header", class: "ion-text-center" }, h("ion-buttons", { slot: "start" }, h("ion-menu-button", { color: "outstanding" })), h("ion-buttons", { slot: "end" }, h("ion-button", { color: "outstanding", onClick: () => { nav.goBack(); } }, h("ion-icon", { slot: "icon-only", name: "arrow-undo-outline" }))), h("ion-title", null, h("span", { id: "menuTitle" }, "Gallery")))),
            h("ion-content", null, h("ion-refresher", { slot: "fixed", id: "refresher", onIonRefresh: (ev) => { this.refresh(ev); } }, h("ion-refresher-content", { "pulling-icon": "chevron-down-circle-outline", refreshingSpinner: "bubbles" })), h("flx-imagegallery", { object: this.object, filter: 'ObjectName=\'' + this.object + '\' and ObjectId=\'' + this.objectid + '\'' })),
            h("ion-fab", { vertical: "bottom", horizontal: "end", slot: "fixed" }, h("ion-fab-button", null, h("ion-icon", { name: "apps-outline" })), h("ion-fab-list", { side: "top" }, h("ion-fab-button", { color: "dark", onClick: () => { this.getPicture(false); } }, h("ion-icon", { name: "camera" })), h("ion-fab-button", { color: "dark", onClick: () => { this.getPicture(true); } }, h("ion-icon", { name: "refresh-outline" }))), ((this.hasGallery) ?
                h("ion-fab-list", { side: "start" }, h("ion-fab-button", { color: "dark", onClick: () => { this.getGalleryPicture(); } }, h("ion-icon", { name: "image" }))) : ''))
        ];
    }
}
FlxImagemanager.style = flxImagemanagerCss;

export { FlxImagemanager as flx_imagemanager };
