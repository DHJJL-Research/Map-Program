function fetchCustomerData(){
    console.log("inside js");
    
    callAjax("GET", apiBaseUrl + "/customer/list",null,function(result){
        if(result.status){
            console.log(result.data);
        }
        else{
            console.error("error fetching data ",result.message);
        }
    })
}

function saveMarkers() {
    const markers = document.querySelectorAll('.marker');
    const markerData = Array.from(markers).map((marker, index) => {
        const x = parseInt(marker.style.left, 10);
        const y = parseInt(marker.style.top, 10);
        const number = index + 1; // Assign a sequential number on submission
        const textboxValue = marker.querySelector('input').value;
        return { x, y, number, textboxValue };
    });

    console.log(markerData);
}