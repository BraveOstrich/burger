$(function(){

    $(".create-form").on("submit", function(event){
        event.preventDefault();
        
        var newBurger = {
            name: $("#burger").val().trim()
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("Test Point Create");
                location.reload();
            }
        );
    });

    $(".devour").on("click", function(event){
        var id = $(this).data("id");

        $.ajax("/api/burger" + id, {
            type: "DELETE",
        }).then(
            function(){
                console.log("Test Burger Delete")
                location.reload();
            }
        );
    });
});