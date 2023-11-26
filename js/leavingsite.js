var originalTitle = document.title; // Orginal title site
        var cooldownActive = false; // Cooldown = active

        // Change Title With Delay
        function changeTitleWithDelay() {
            setTimeout(function() {
                document.title = "Wróć na stronę - NOSPR";
            }, 3000); // 3000 miliseconds (3 seconds)
            cooldownActive = true;
        }

        // Changing Title to orginal
        function restoreTitle() {
                document.title = originalTitle;
                cooldownActive = false;
        }

        // Changing site script
        window.addEventListener('blur', changeTitleWithDelay);
        window.addEventListener('focus', restoreTitle);