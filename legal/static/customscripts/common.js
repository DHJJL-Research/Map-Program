let apiBaseUrl = "/api";

async function callAjax(method, apiUrl, inputData, callBack, loaderRequire = true,isAsync=true) {
    if (loaderRequire) {
        showLoader();
    }

    $.ajax({
        type: method,
        data: inputData,
        url: apiUrl,
        contentType: "application/json",
        async: isAsync,
        headers: { 'X-CSRFToken': $('input[name="csrfmiddlewaretoken"]').val() },
        success: function (result) {
            hideLoader();
            callBack(result);
        },
        error: function (result) {
            hideLoader();
            if (result && result.responseJSON && result.responseJSON.status === 2) {
                displayUnauthorized();
            }
        }
    });
}

function showLoader() {
    $('.spinner-center').show();
}

function hideLoader() {
    $('.spinner-center').hide();
}

function IsPressEnter(e, controlId) {
    let key = (e.which) ? e.which : e.keyCode;

    if (key == 13) {
        $("#" + controlId).click();
    }

    return true;
}