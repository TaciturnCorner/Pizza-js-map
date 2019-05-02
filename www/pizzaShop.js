$(document).ready(function() {


    var map;
    function initialize()	{
        map =	{
            center:	new	google.maps.LatLng(50.464379,30.519131),
            zoom:	11
        };
        var html_element =	document.getElementById("googleMap");
        var mMap	=	new	google.maps.Map(html_element, map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    google.maps.event.addListener(map,'click',function(me){
        var coordinates	=	me.latLng;
        google.maps.LatLng(...)
    });

    function	calculateRoute(A_latlng,	 B_latlng,	callback)	{
        var directionService =	new	google.maps.DirectionsService();
        directionService.route({
            origin:	A_latlng,
            destination:	B_latlng,
            travelMode:	google.maps.TravelMode["DRIVING"]
        },	function(response,	status)	{
            if	(	status	==	google.maps.DirectionsStatus.OK )	{
                varleg	=	response.routes[	0	].legs[	0	];
                callback(null,	{
                    duration:	leg.duration
                });
            }	else	{
                callback(new	Error("Can'	not	find	direction"));
            }
        });
    }



    $(".bl-clearAll").click(function(){

    }
    );

    $(".bt-buySmall").click(function () {
        var clone = $("#clonePizza");
        clone.css("visibility", "visible");
        clone.css("position", "relative");

        var name = $(this).parent().parent().find(".bl-pizzaName").text();
        $(clone).find(".bl-pizzaCopyName").text(name);

        var diam = $(this).parent().parent().find(".bl-labDiamS").text();
        $(clone).find(".bl-copySize").text(diam);

        var weight = $(this).parent().parent().find(".bl-labWeightS").text();
        $(clone).find(".bl-copyWeight").text(weight);

        var price = $(this).parent().parent().find(".bl-labPriceS").text();
        $(clone).find(".bl-labelPrice").text(price);



    });

    $(".bt-buyBig").click(function () {
        var clone = $("#clonePizza");
        clone.css("visibility", "visible");
        clone.css("position", "relative");

        var name = $(this).parent().parent().find(".bl-pizzaName").text();
        $(clone).find(".bl-pizzaCopyName").text(name);

        var diam = $(this).parent().parent().find(".bl-labDiamB").text();
        $(clone).find(".bl-copySize").text(diam);

        var weight = $(this).parent().parent().find(".bl-labWeightB").text();
        $(clone).find(".bl-copyWeight").text(weight);

        var price = $(this).parent().parent().find(".bl-labPriceB").text();
        $(clone).find(".bl-labelPrice").text(price);

    });

    $(".bt-plus").click(function()
        {
            var i = $(this).parent().find(".bl-labelNum").text();

            i++;
            $(this).parent().find(".bl-labelNum").text(i);
        }
    );

    $(".bt-minus").click(function () {
        var i = $(this).parent().find(".bl-labelNum").text();
        if (i > 1) {
            i--;
            $(this).parent().find(".bl-labelNum").text(i);
        } else if (i <= 1) {
            alert("Неможливо виконати дію");
        }
    });

    $(".bt-x").click(function(){
        $(this).parent().remove();
        var n = $(this).parent().parent().find(".bl-numbOrders").text();

            n--;
            $(this).parent().parent().find(".bl-numbOrders").text(n);

    });



});



