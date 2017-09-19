var $ = jQuery;

$(document).ready(function(){

    $("#flipbook").turn({
        width: 960,
        height: 600
        },"center");

    $.getJSON('https://gist.githubusercontent.com/JohnGeorgiadis/d3bf915dc51d8e67622b7964d891caeb/raw/e1dfffe30ef513aad47f3cfa81c1c03918d711e8/witkowski',
        function(data) {
            $.each(data.pages, function(index, value) {
                $( ".page-"+index ).append(value);
            })
    });

    $("#share-button").click(function(){
        console.log('clicked');
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
