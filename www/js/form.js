$(document).ready(function () {


    //recupère les données de l'api node 
    $.get(`http://127.0.0.1:3000/app/json/formats`, function (formats) {
        console.log(formats)


        let list_formats = `<option value="" selected disabled>Sélectionner un format</option>`;
        //pour chaque éléments crée un option dans le select
        formats.forEach((format) => {
            list_formats += `<option value="${format.format_group}">${format.format_group}</option>`
        });

        //on affiche sur la page l'ensemble des données
        $("#format").html(list_formats);

    })

    $.get(`http://127.0.0.1:3000/app/json/packs`, function (packs) {
        console.log(packs)

        let list_pack = `<option value="" selected disabled>Sélectionner un packs</option>`;

        packs.forEach((pack) => {
            list_pack += `<option value="${pack.pack_id}">${pack.pack_name}</option>`
        });

        $("#packs").html(list_pack);

    })

    $.get(`http://127.0.0.1:3000/app/json/countrys`, function (countrys) {


        $("#span").html(`<input class="form-check-input" type="checkbox" name="countries" id="countries" value="${countrys[0].country_id}" checked="checked">`)


        $("#span").show();


    })

})


$("#btn").click(function () {

//récupère les valeurs des input (ajax)

    let date_start = $("#date_start").val();
    let date_end = $("#date_end").val();
    let format = $("#format").val();
    let packs = $("#packs").val();
    let countries = $("#countries").val();




    let req = new XMLHttpRequest();
    let url = "http://127.0.0.1:3000/app/forecast/add";
    //let url = "https://reporting.antennesb.fr/login/add";

    method = "POST";
    data = data = {
        date_start: date_start,
        date_end: date_end,
        format: format,
        packs: packs,
        countries: countries
    }
    console.log(data)

    dataSend = JSON.stringify(data);
    req.open(method, url);
    req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    req.responseType = "json";
    req.send(dataSend);




    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(req)
            console.log('readyState', req.readyState)
            console.log('status', req.status)
            console.log('reponse', req.response)
            console.log('table', req.response.table)

            //revoie vers la page
            window.location.replace("./test.html")

        }
    };
    //  
    //  


});