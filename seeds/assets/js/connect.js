$("#submitBtn").on('click', () => {
    
    let data = {
        sName: $("#sName").val(),
        nAge: $("#nAge").val(),
        sCity: $("sCity").val(),
        sCountry: $("sCountry").val()
    } 

    $.ajax({
        url: '/', 
        type: 'POST',
        data: data,
        contentType: 'application/json',
        success: () => {
            console.log("Success...");
        },
        failed: () => {
            console.log("Error...");
        }
    });
});

function deleteItem(obj){
    let id = $(obj).attr("itemid");
    
    $.ajax({
        url: '/view-item/'+id, 
        type: 'GET',
        success: (result) => {
            console.log("Success...", result);
        },
        error: (err) => {
            console.log("Error...", err);
        }
    });
}