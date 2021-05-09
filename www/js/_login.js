$(document).ready(function () {
  $("button").click(function () {
     var email = $('#email').val();
     var mdp = $('#mdp').val();

  
    /*  var data =   {
        "email": email,
        "mdp":mdp
    };*/
    var data ='{"email":'+email+',"mdp":'+mdp+'}'


      

          let req = new XMLHttpRequest();
          // let url = 'https://reporting.antennesb.fr/login/add';
          let url = 'http://127.0.0.1:3000/app/login/add';
          data = data;
          console.log(data)

          method = "POST"
          req.open(method, url);
          req.responseType = "json";
          req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          req.send(data);
          


          if (req.readyState == XMLHttpRequest.DONE && req.status == 200) {
          
          }


    

  });
});

