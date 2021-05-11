$(document).ready(function () {

    //recupère les données du local storage
    var storage_data = localStorage.getItem('data');

    const json = storage_data;
    const obj = JSON.parse(json);

    //affiche les donnés sur la vue
    document.getElementById("date-start").innerHTML = obj.StartDate;
    document.getElementById("date-end").innerHTML = obj.EndDate;
    document.getElementById("format").innerHTML = obj.format;


    document.getElementById("impression").innerHTML = obj.sommeImpressions;
    document.getElementById("occupied").innerHTML = obj.sommeOccupied;
    document.getElementById("dispo").innerHTML = obj.volumeDispo;

//deconnexion
    $("#logout").click(function () {


        let req = new XMLHttpRequest();
        let url = "https://reporting.antennesb.fr/app/logout";
        // let url = "http://127.0.0.1:3000/app/logout";

        method = "GET";


        req.open(method, url);
        req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        req.responseType = "json";
        req.send();




        req.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let reponses = req.response;

                if (reponses.success === true) {

                    //supprime le localstorage après deco
                    localStorage.clear();

                    //revoie vers la page
                    window.location.replace("./index.html")


                }



            }
        };
      

    })

})



$("#back").click(function () {


    //revoie vers la page
    window.location.replace("./form.html")






})