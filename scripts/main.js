var $ = jQuery;

$(document).ready(function(){

    $("#flipbook").turn({
        width: 600,
        height: 470
        },"center")
        .bind("turning", function(event, page) {

            if (page===1) {
                $(".outer-layer").css("display", "none");
                $(".depth-effect").css("display", "inline-block");
                $(".left").css("opacity", "0.4");
            }

            if (page===2) {
                $(".outer-layer").css("display", "inline-block");
                $(".depth-effect").css("display", "none");
                $(".left").css("opacity", "1");
            }

            if (page===21) {
                $(".right").css("opacity", "1");
            }

            if (page===22) {
                $(".right").css("opacity", "0.4");

                $(".share-button").click(function() {
                    FB.ui(
                        {
                            method: 'share',
                            href: 'http://www.znak.com.pl/kartoteka,ksiazka,93897,Wymazane',
                            app_id: '206540289883972'

                        },
                        // callback
                        function(response) {
                            if (response && !response.error_message) {
                                var code = Math.floor(Math.random() * (499 - 1 + 1)) + 1;
                                $.getJSON('https://gist.githubusercontent.com/JohnGeorgiadis/5ab6a196cad8a763bfca1e1bf8a19b85/raw/db4b60bde19ba44f06c169a3cc0ffb73c8b6e684/book-codes',
                                    function(data) {
                                        $( ".code-area" ).text(data[code]);
                                        $(".share-button").css("display","none");
                                    }
                                );
                            } else {
                                concole.log("Please share the post to get your code");
                            }
                        }
                    );
                })
            }

            if (page===24) {
                event.preventDefault();
            }
        });
    
        $(".left").click(function () {
            $("#flipbook").turn("previous");
        });

        $(".right").click(function () {
            $("#flipbook").turn("next");
        });

});
