$(document).ready(function () {

    const now = new Date();

    var timestamp_now = now.setDate(now.getDate() + 1);
    var timestamp_end = now.setDate(now.getDate() + 15);

    const date_start_last = new Date(timestamp_now)
    const date_end_last = new Date(timestamp_end)


    document.getElementById("date_start").valueAsDate = date_start_last;
    document.getElementById("date_end").valueAsDate = date_end_last;


    //recupère les données de l'api node 
    $.get(`https://reporting.antennesb.fr/app/json/formats`, function (formats) {


        let list_formats = `<option value="" selected disabled>Sélectionner un format</option>`;
        //pour chaque éléments crée un option dans le select
        formats.forEach((format) => {
            list_formats += `<option value="${format.format_group}">${format.format_group}</option>`
        });

        //on affiche sur la page l'ensemble des données
        $("#format").html(list_formats);

    })

    $.get(`https://reporting.antennesb.fr/app/json/packs`, function (packs) {

        let list_pack = `<option value="" selected disabled>Sélectionner un packs</option>`;

        packs.forEach((pack) => {
            list_pack += `<option value="${pack.pack_id}">${pack.pack_name}</option>`
        });

        $("#packs").html(list_pack);

    })

    $.get(`https://reporting.antennesb.fr/app/json/countrys`, function (countrys) {


        $("#span").html(`<input class="form-check-input" type="checkbox" name="countries" id="countries" value="${countrys[0].country_id}" checked="checked">`)


        $("#span").show();


    })

})

//event du click action requête
$("#btn").click(function () {

    //récupère les valeurs des input (ajax)

    let date_start = $("#date_start").val();
    let date_end = $("#date_end").val();
    let format = $("#format").val();
    let packs = $("#packs").val();
    let countries = $("#countries").val();




    let req = new XMLHttpRequest();
   // let url = "http://127.0.0.1:3000/app/forecast/add";
    let url = "https://reporting.antennesb.fr/app/forecast/add";

    method = "POST";
    data = data = {
        date_start: date_start,
        date_end: date_end,
        format: format,
        packs: packs,
        countries: countries
    }

    //envoie requête format json
    dataSend = JSON.stringify(data);
    req.open(method, url);
    req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    req.responseType = "json";
    req.send(dataSend);




    req.onreadystatechange = function () {
            //ecoute statut

        if (this.readyState == 4 && this.status == 200) {



            //recupère la reponse envoyer via api node en json
            let reponses = req.response;

            if (reponses.success != false) {

                //si success true save la data dans le localstorage
                localStorage.setItem('data', JSON.stringify(req.response.table));

                //revoie vers la page
                window.location.replace("./forecast.html")


            } else {


                //sinon success false envoie un message erreur en ajax 
                var message = reponses.message.message

                    $("#alert").html(`<div class="alert alert-danger alert-dismissible fade show text-dark" role="alert">
                    ${message}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>`)


                $("#alert").show();
            }

        }
    };
    //  
    //  


});

//deconnexion
$("#logout").click(function () {


    let req = new XMLHttpRequest();
    let url = "https://reporting.antennesb.fr/app/logout";
    //let url = "http://127.0.0.1:3000/app/logout";

    method = "GET";


    req.open(method, url);
    req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    req.responseType = "json";
    req.send();




    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let reponses = req.response;

            if (reponses.success === true) {

                localStorage.clear();

                //revoie vers la page
                window.location.replace("./index.html")


            } 


           
        }
    };
    //  
    //  

})