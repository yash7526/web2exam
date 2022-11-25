th = document.querySelectorAll('[name="theme"]');
// console.log(th);
th.forEach((theme) => {
    theme.addEventListener("click", () => localStorage.setItem("theme", theme.id));
});

function app() {
    st = localStorage.getItem("theme");
    th.forEach((theme) => {
        if (theme.id === st) {
            theme.checked = true;
        }
    });
}
document.onload = app();


function loadDoc() {
    var name = document.getElementById('movie').value;
    document.getElementById('demo').innerHTML = '';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            for (var i = 0; i < response.length; i++) {
                let r = response[i].show.image.medium;
                document.getElementById('demo').innerHTML = document.getElementById('demo').innerHTML + `<img src ='${r}' />`;
            }
        }
    };
    xhttp.open("GET", `https://api.tvmaze.com/search/shows?q=${name}`, true);
    xhttp.send();
}