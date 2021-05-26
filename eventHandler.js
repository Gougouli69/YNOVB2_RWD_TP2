loader = document.getElementById("image_loader")

$(document).ready(function(){
    $("#submitButton").click(function(){
        loader.classList.remove("d-none")

        setTimeout(function(){
            loader.classList.add("d-none")
            $("#modalSend").modal();
            $("input").each( function() {
                $(this).val("")
            })
        }, 2000);
    });
});


