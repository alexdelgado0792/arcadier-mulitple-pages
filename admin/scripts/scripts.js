var scriptSrc = document.currentScript.src;

function MainFunction() {
    var re = /([a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12})/i;
    this.packageId = re.exec(scriptSrc.toLowerCase())[1];
    this.customFieldPrefix = this.packageId.replace(/-/g, "");
    this.packagePath = scriptSrc.replace('/scripts/scripts.js', '').trim();

    if (document.getElementById('packageId') != null) {
        if (document.getElementById('packageId').value == this.packageId) {

           
        }
    }
    
}

AlmacenesSucursales.prototype.MethodName = function () {
}
                
var script_object = undefined;
$(document).ready(() => {
    script_object = new MainFunction();
});