$(document).ready(function () {

  //recupère la valeur des input
  let email = document.getElementById("email");
  let mdp = document.getElementById("mdp");
  let bouton = document.getElementById("submit")


  let req = new XMLHttpRequest();
  //let url = "http://127.0.0.1:3000/app/login/add";
  let url = "https://reporting.antennesb.fr/app/login/add";
  let method, data, dataSend;



  // login action
  bouton.addEventListener('click', evt => {
    evt.preventDefault();
    method = "POST";
    data = {
      email: email.value,
      mdp: mdp.value
    }

    dataSend = JSON.stringify(data);
    req.open(method, url);
    req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    req.responseType = "json";
    req.send(dataSend);





    req.onreadystatechange = function () {

      if (this.readyState == 4 && this.status == 200) {
        let reponses = req.response;

        if (reponses.success != false) {

          //rediction vers le formulaire forecast
          window.location.replace("./form.html")

        } else {

          //affiche la model avec le message erreur
          $("#exampleModal").modal("show");


          var message = reponses.message.message


          let alert = `${message}`;



          $("#alert").html(alert);


        }




      }
    };






  })
})