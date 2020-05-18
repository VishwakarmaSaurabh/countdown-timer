(function () {
    document.querySelector("button").addEventListener("click", function () {
        var time = document.getElementById("time").value;
        document.getElementById("time").value = "";

        var counter = 0;
        var interval = setInterval(decrement, 1000);

        document.getElementById("countdown").style.visibility = "visible";

        function getMinSec(time) {
            var min = Math.floor(time / 60);
            var sec = time % 60;

            return min + "m : " + sec + "s";
        }

        function decrement() {
            document.getElementById("countdown").innerHTML = getMinSec(
                time - counter
            );
            counter += 1;
            if (counter > time) {
                clearInterval(interval);
                document.getElementById("countdown").innerHTML = "Time expired";
            }
        }
    });
})();
