var $ = jQuery;

$(document).ready(function(){

    $("#flipbook").turn({
        width: 960,
        height: 600
        },"center")
        .bind("turning", function(event, page, view) {
        if (page==1) {
            event.preventDefault(); //will not happen at page 1
        }else{
            console.log("Turning the page to: "+page);
        }
    });

    $("#share-button").click(function(){
        FB.ui(
            {
                method: 'share',
                href: 'https://developers.facebook.com/docs/',
                app_id: '206540289883972'

            },
            // callback
            function(response) {
                if (response && !response.error_message) {
                    alert('Posting completed.');
                } else {
                    alert('Error while posting.');
                }
            }
        );
    })
});
