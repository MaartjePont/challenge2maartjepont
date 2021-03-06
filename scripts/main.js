(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){
    var currentTime     = document.getElementById('current-time'),
        currentDate     = document.getElementById('current-date'),
        welcomeText     = document.getElementById('welcome-text'),
        activityImage   = document.getElementById('activity-image'),
        sun             = document.getElementById('sun'),
        moon            = document.getElementById('moon');

    setInterval(function() {
        var d = new Date();

        var hours   = d.getHours(),
            minutes = d.getMinutes(),
            day     = formatDay(d.getDay()),
            month   = formatMonth(d.getMonth()),
            date    = d.getDate(),
            text    = "";

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        // welcome text and image
        if (hours == 8) {
            text = "Goedemorgen Maartje, het is tijd om op te staan!";
            document.getElementById("activity-image").src = "styles/images/hi.png";
        } 
        else if (hours == 9) {
            text = "Goedemorgen Maartje, het is tijd om te ontbijten!";
            document.getElementById("activity-image").src = "styles/images/ontbijt.png";
        }
        else if (hours == 10) {
            text = "Goedemorgen Maartje, het is tijd om je hond uit te laten!";
            document.getElementById("activity-image").src = "styles/images/dog.png";
        }
        else if (hours == 11) {
            text = "Goedemorgen Maartje, het is tijd om naar muziekles te gaan!";
            document.getElementById("activity-image").src = "styles/images/music.png";
        }
        else if (hours >= 12 && hours < 14) {
            text = "Goedemiddag Maartje, het is tijd om te lunchen!";
            document.getElementById("activity-image").src = "styles/images/lunch.png";
        }
        else if (hours == 14) {
            text = "Goedemiddag Maartje, het is tijd om je hond uit te laten!";
            document.getElementById("activity-image").src = "styles/images/dog.png";
        }
        else if (hours == 15) {
            text = "Goedemiddag Maartje, het is snacktime!";
            document.getElementById("activity-image").src = "styles/images/snack.png";
        }
        else if (hours == 16) {
            text = "Goedemiddag Maartje, het is koffietijd!";
            document.getElementById("activity-image").src = "styles/images/coffee.png";
        }
        else if (hours == 17) {
            text = "Goedemiddag Maartje, het is tijd om te sporten!";
            document.getElementById("activity-image").src = "styles/images/sport.png";
        }
        else if (hours == 18) {
            text = "Goedenavond Maartje, het is tijd om avond te eten!";
            document.getElementById("activity-image").src = "styles/images/food.png";
        }
        else if (hours >= 19 && hours < 21) {
            text = "Goedenavond Maartje, je kan even lekker tv kijken!";
            document.getElementById("activity-image").src = "styles/images/tv.png";
        }
        else if (hours == 21) {
            text = "Goedenavond Maartje, het is tijd om je hond uit te laten!";
            document.getElementById("activity-image").src = "styles/images/dog.png";
        }
        else if (hours == 22) {
            text = "Goedenavond Maartje, het is tijd om te relaxen!";
            document.getElementById("activity-image").src = "styles/images/relax.png";
        }
        else {
            text = "Goedenavond Maartje, het is tijd om te slapen!";
            document.getElementById("activity-image").src = "styles/images/sleep.png";
        }

        // show sun or moon
        if (hours >= 7 && hours < 20) {
            document.getElementById("moon").style.display = "none";
        } else {
            document.getElementById("sun").style.display = "none";
        }

        // background color
        if (hours == 7) {
            document.body.style.backgroundImage = "linear-gradient(#60BDFF 70%, #FFCA40)";
        }
        else if (hours == 8) {
            document.body.style.backgroundImage = "linear-gradient(#60BDFF 60%, #FFCA40)";
        }
        else if (hours == 9) {
            document.body.style.backgroundImage = "linear-gradient(#60BDFF 50%, #FFCA40)";
        }
        else if (hours >= 10 && hours < 18) {
            document.body.style.backgroundImage = "linear-gradient(#1EA2FF, #60BDFF)";
        }
        else if (hours == 18) {
            document.body.style.backgroundImage = "linear-gradient(#60BDFF 60%, #FFCA40)";
        }
        else if (hours == 19) {
            document.body.style.backgroundImage = "linear-gradient(#60BDFF 70%, #FFCA40)";
        }
        else { 
            document.body.style.backgroundImage = "linear-gradient(#00081C, #001954)";
            document.body.style.color = "white";
        }

        // de stand van de zon of maan 
        if (hours == 7 || hours == 19) {
            document.getElementById("sun").style.bottom = "0%";
        }
        else if (hours == 8 || hours == 18) {
            document.getElementById("sun").style.bottom = "10%";
        }
        else if (hours == 9 || hours == 17) {
            document.getElementById("sun").style.bottom = "20%";
        }
        else if (hours == 10 || hours == 16) {
            document.getElementById("sun").style.bottom = "30%";
        }
        else if (hours == 11 || hours == 15) {
            document.getElementById("sun").style.top = "20%";
        }
        else if (hours == 12 || hours == 14) {
            document.getElementById("sun").style.top = "10%";
        }
        else if (hours == 13) {
            document.getElementById("sun").style.top = "0%";
        }
        else if (hours == 6 || hours == 20) {
            document.getElementById("moon").style.bottom = "0%";
        }
        else if (hours == 5 || hours == 21) {
            document.getElementById("moon").style.bottom = "15%";
        }
        else if (hours == 4 || hours == 22) {
            document.getElementById("moon").style.bottom = "30%";
        }
        else if (hours == 3 || hours == 23) {
            document.getElementById("moon").style.top = "30%";
        }
        else if (hours == 2 || hours == 24) {
            document.getElementById("moon").style.top = "15%";
        } else {
            document.getElementById("moon").style.top = "0%";
        }

        currentTime.innerHTML = hours + ':' + minutes;
        currentDate.textContent = day + ' ' + date + ' ' + month;
        welcomeText.textContent = text;
    }, 1000);
        
    function formatDay(w) {
        w = parseInt(w, 7);

        if (w < 0) {
            w = 0;
        } else if (w > 6) {
            w = 6;
        }

        var dayNames = [
            'Zondag', 'Maandag', 'Dinsdag', 'Woensdag',
            'Donderdag', 'Vrijdag', 'Zaterdag'
        ];

        return dayNames[w];
    }

    function formatMonth(m) {
        m = parseInt(m, 10);

        if (m < 0) {
            m = 0;
        } else if (m > 11) {
            m = 11;
        }

        var monthNames = [
            'januari', 'februari', 'maart',
            'april', 'mei', 'juni',
            'juli', 'augustus', 'september',
            'oktober', 'november', 'december'
        ];

        return monthNames[m];
    }

    // animation clock: "tik-tak"
    var tl1 = new TimelineMax();
    tl1.to(currentTime, 1, {left: 40, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: -40, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 40, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: -40, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 40, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: -40, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 40, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: -40, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 40, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: -40, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 40, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 0, ease: Sine.easeInOut});

});

})();
