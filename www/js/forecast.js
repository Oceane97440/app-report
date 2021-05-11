$(document).ready(function () {
var storage_data = localStorage.getItem('data');
console.log(storage_data)

const json = storage_data;
const obj = JSON.parse(json);

document.getElementById("date-start").innerHTML = obj.StartDate ;
document.getElementById("date-end").innerHTML = obj.EndDate ;
document.getElementById("format").innerHTML = obj.format ;


document.getElementById("impression").innerHTML = obj.sommeImpressions ;
document.getElementById("occupied").innerHTML = obj.sommeOccupied ;
document.getElementById("dispo").innerHTML = obj.volumeDispo ;


$("#logout").click(function () {


    let req = new XMLHttpRequest();
    let url = "https://reporting.antennesb.fr/app/logout";
   // let url = "http://127.0.0.1:3000/app/logout";

    method = "GET";


    req.open(method, url);
    req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    req.responseType = "json";
    req.send();


    console.log(req)


    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let reponses = req.response;
            console.log(reponses.success)

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

})


