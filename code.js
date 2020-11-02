$(document).ready(
    function ()
    {
        // event handlers
        $("button").click(bacCalculation);

        //functions

        function bacCalculation() {
            //input beer quantity

            var beerQuantity =parseFloat($("#beers").val());


            //input wine quantity

            var wineQuantity = parseFloat($("#wine").val());

            //input shots quantity

            var shotsQuantity = parseFloat($("#shots").val());

            //input weight in pounds

            var weightPounds = parseFloat($("#weight").val());


            //input hour since first drink

            var hoursFirstDrink = parseFloat($("#hours").val());

            //BAC Calculation

            var absortionRate = ((beerQuantity * 0.54) + (wineQuantity * 0.6) + (shotsQuantity * 0.6)) * 7.5;
            var bac = (absortionRate / weightPounds) - (hoursFirstDrink * 0.015 );

            //Results from spans

            $("#result").text(bac.toFixed(3));
            $("p.output").show();
        }

    });

