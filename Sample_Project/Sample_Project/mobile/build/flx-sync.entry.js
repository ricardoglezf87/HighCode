import { r as registerInstance, h } from './index-1ad46950.js';
import './ionic-global-d77af0d9.js';
import { C as ConftokenProvider, b as ConftokenService, m as msg, u as util } from './messages-65fb7542.js';
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
import { j as jquery } from './jquery-4ed57fb2.js';
import { n as nav } from './navigation-538e1aae.js';

const flxSyncCss = ".loading-content{overflow:auto}";

class FlxSync {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.lastSync = '-';
    }
    componentWillLoad() {
        this.refresh();
    }
    async refresh() {
        return ConftokenProvider.config().then((cnf) => {
            if (cnf && cnf.lastSync) {
                this.lastSync = moment(cnf.lastSync).locale(cnf.user.currentUserCultureId).format('L LT');
            }
        });
    }
    sendData() {
        let cnf = new ConftokenService();
        this.popOverInfo(cnf).then(() => {
            cnf.sendDataStart().catch((err) => {
                msg.showError(err);
                jquery('ion-loading')[0].dismiss();
            });
        });
    }
    syncTemplates() {
        let cnf = new ConftokenService();
        cnf.getAppTemplates().catch((err) => {
            msg.showError(err);
        }).then(() => {
            msg.success('Templates updated');
        });
    }
    getAllData(forced) {
        let cnf = new ConftokenService();
        this.popOverInfo(cnf).then(() => {
            cnf.getAppConfiguration(forced).catch((err) => {
                msg.showError(err);
                jquery('ion-loading')[0].dismiss();
            });
        });
    }
    async popOverInfo(cnf) {
        let loading = document.createElement('ion-loading');
        loading.message = 'Please wait...';
        loading.backdropDismiss = false;
        loading.translucent = true;
        document.body.appendChild(loading);
        await loading.present();
        let s1 = cnf.onStatusChange.subscribe((itm) => {
            loading.message = itm.tableName + ' <b>' + itm.rows + '</b>';
            console.log(itm);
        });
        let s2 = cnf.onRowsReceivedChange.subscribe((itm) => {
            loading.message = itm.tableName + ' <b>' + itm.rows + '</b>';
            console.log(itm);
        });
        let s3 = cnf.onFinish.subscribe((syncRes) => {
            if (syncRes.success) {
                this.refresh();
                loading.dismiss().then(() => { loading = null; });
            }
            else {
                if (syncRes.error) {
                    msg.showError(syncRes.error);
                }
                else {
                    for (let key in syncRes.data) {
                        if (syncRes.data[key].state == 'error') {
                            msg.showError(syncRes.data[key].lastError);
                        }
                    }
                }
                loading.dismiss().then(() => { loading = null; });
            }
            s1.unsubscribe();
            s2.unsubscribe();
            s3.unsubscribe();
        });
        return loading.present();
    }
    render() {
        return [
            h("ion-header", null, h("ion-toolbar", { color: "header", class: "ion-text-center" }, h("ion-buttons", { slot: "start" }, h("ion-button", { color: "outstanding", onClick: () => { nav.goHome(); } }, h("ion-icon", { slot: "icon-only", name: "home" }))), h("ion-buttons", { slot: "end" }, h("ion-button", { color: "outstanding", onClick: () => { nav.goLogin(); } }, h("ion-icon", { slot: "icon-only", name: "exit" }))), h("ion-title", null, h("span", null, "Sync")))),
            h("ion-content", { color: "light", class: "ion-padding" }, h("ion-grid", { fixed: true }, h("ion-row", null, h("ion-col", { size: "12" }, h("h5", null, h("ion-icon", { name: "timer" }), " ", util.translate('sync.last')), h("h2", null, this.lastSync))), h("ion-row", null, h("ion-col", { size: "12" }, h("div", { class: "square-container", color: "outstanding" }, h("div", { class: "square" }, h("div", { class: "content", onClick: () => this.getAllData(false) }, h("img", { src: "./assets/img/sync-data.png" }), h("h6", null, util.translate('sync.refresh')))), h("div", { class: "square" }, h("div", { class: "content", onClick: () => this.sendData() }, h("img", { src: "./assets/img/send-data.png" }), h("h6", null, util.translate('sync.send'))))), (this.lastSync ?
                h("div", { class: "square-container", color: "outstanding" }, h("div", { class: "square" }, h("div", { class: "content", onClick: () => msg.confirm(util.translate('sync.confirmOverwrite'), util.translate('sync.confirmOverwriteText')).then(() => { this.getAllData(true); }) }, h("img", { src: "./assets/img/overwrite-data.png" }), h("h6", null, util.translate('sync.overwrite')))), h("div", { class: "square" }, h("div", { class: "content", onClick: () => this.syncTemplates() }, h("img", { src: "./assets/img/sync-templates.png" }), h("h6", null, util.translate('sync.templates')))))
                : h("div", null))))))
        ];
    }
}
FlxSync.style = flxSyncCss;

export { FlxSync as flx_sync };
