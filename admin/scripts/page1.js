var page1ScriptSrc = document.currentScript.src;

function Page1() {
    var re = /([a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12})/i;
    this.packageId = re.exec(page1ScriptSrc.toLowerCase())[1];
    this.customFieldPrefix = this.packageId.replace(/-/g, "");
    this.packagePath = page1ScriptSrc.replace('/scripts/scripts.js', '').trim();

    if (document.getElementById('packageId') != null) {
        if (document.getElementById('packageId').value == this.packageId) {

          console.log('script of page 1')

        }
    }

}

Page1.prototype.ShowAddModal = function (modalid) {
    $(`#${modalid}`).modal({ "show": true });
}

var page1 = undefined;
$(document).ready(() => {
    page1 = new Page1();
});