let email = document.getElementById("email");
let mdp = document.getElementById("mdp");
let bouton = document.getElementById("submit")

let req = new XMLHttpRequest();
let url = "http://127.0.0.1:3000/app/login/add";
let method, data, dataSend;



// Handle login action
bouton.addEventListener('click', evt => {
  evt.preventDefault();
  method = "POST";
  data = {
    email: email.value,
    mdp: mdp.value
  }
  console.log(data)

  dataSend = JSON.stringify(data);
  req.open(method, url);
  req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  req.responseType = "json";
  req.send(dataSend);


    //if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status == 204) {
        let reponses = req.response;
        console.log(reponses)
        console.log("OK")
     
      } else {
        let reponsess = req.response;
        console.log("NON OK")
        console.log(reponsess)
      }
  //  }
  
})

