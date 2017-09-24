var $ = jQuery;

$(document).ready(function(){

    $("#flipbook").turn({
        width: 960,
        height: 700
        },"center")
        .bind("turning", function(event, page) {
            console.log(page)
            if (page===1) {
                $(".outer-layer").css("display", "none");
                $(".depth-effect").css("display", "inline-block");
            }
            if (page===2) {
                $(".outer-layer").css("display", "inline-block");
                $(".depth-effect").css("display", "none");
            }
            if (page===22) {
                $(".share-button").click(function() {
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
                                // event.preventDefault();
                            }
                        }
                    );
                })
            }
            if (page===24) {
                event.preventDefault();
            }
        });

    // $.getJSON('https://gist.githubusercontent.com/JohnGeorgiadis/d3bf915dc51d8e67622b7964d891caeb/raw/e1dfffe30ef513aad47f3cfa81c1c03918d711e8/witkowski',
    //     function(data) {
    //         $.each(data.pages, function(index, value) {
    //             $( ".page-"+index ).append(value);
    //         })
    // });

});
