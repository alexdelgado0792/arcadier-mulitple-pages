var scriptSrc = document.currentScript.src;

function MainFunction() {
    var re = /([a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12})/i;
    this.packageId = re.exec(scriptSrc.toLowerCase())[1];
    this.customFieldPrefix = this.packageId.replace(/-/g, "");
    this.packagePath = scriptSrc.replace('/scripts/scripts.js', '').trim();

    if (document.getElementById('packageId') != null) {
        if (document.getElementById('packageId').value == this.packageId) {

            let page1 = document.getElementById('btn-page1');
            if (page1 != null) {
                page1.href = `/admin/plugins/${this.packageId}/page-1.html`;
            }

            let page2 = document.getElementById('btn-page2');
            if (page2 != null) {
                page2.href = `/admin/plugins/${this.packageId}/page-2.html`;
            }

            let page3 = document.getElementById('btn-page3');
            if (page3 != null) {
                page3.href = `/admin/plugins/${this.packageId}/page-3.html`;
            }

        }
    }

}

MainFunction.prototype.MethodName = function () {
}

var script_object = undefined;
$(document).ready(() => {
    script_object = new MainFunction();
});