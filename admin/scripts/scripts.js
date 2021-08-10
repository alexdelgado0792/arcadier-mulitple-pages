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

MainFunction.prototype.ApiCallMethodName = function (adminId, adminToken, data) {
    var deferred = $.Deferred();

    $.ajax({
        "url": `https://${window.location.host}/api/v2/admins/${adminId}/custom-field-values?referenceTable=Users&pageSize=&pageNumber`,
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${adminToken}`,
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
        success: function (response) {
            deferred.resolve(response);
        },
        fail: function (response, status) {
            deferred.reject(response);
        },
        error: function (response, status) {
            deferred.reject(response);
        }
    });

    return deferred.promise();
}

var script_object = undefined;
$(document).ready(() => {
    script_object = new MainFunction();
});