<script async src="https://www.googletagmanager.com/gtag/js?id=G-WTX3771TKG"></script>

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-WTX3771TKG');


function myFunction() {
    var x = document.getElementById("nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        document.getElementById("nav2").style.backgroundColor = "#1ba0f2";
    }

    var a = document.getElementById("activate-menu");
    var d = document.getElementById("deactivate-menu");
    if (a.style.display === "block") {
        a.style.display = "none";
        d.style.display = "block";
        document.getElementById("nav2").style.backgroundColor = "#1565C0";
    } else {
        d.style.display = "none";
        a.style.display = "block";
        document.getElementById("nav2").style.backgroundColor = "#1ba0f2";
    }
}