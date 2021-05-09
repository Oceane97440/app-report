function functionValue() {
  var essai= $('#email').val();

  //alert(essai)

  document.getElementById("demo").innerHTML = essai

  
  var email = document.getElementById("email").value;
  var mdp = document.getElementById("mdp").value;


  var data = {
    email: email,
    mdp: mdp
  };
  //console.log('functionValue',data)

  return data;

}

/*
// Requete Ajax 
let data, method;



let req = new XMLHttpRequest();
let url = 'https://reporting.antennesb.fr/login/add';
data = functionValue();

method = "POST"
req.open(method, url);
req.responseType = "json";
req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req.send(data);
console.log(data)
console.log(method)
console.log(url)



//if (req.readyState == XMLHttpRequest.DONE && req.status == 200) {}
if (req.readyState == XMLHttpRequest.DONE && req.status == 200) {
  document.getElementById("demo").innerHTML = "Vous avez été connecté avec succès !"

}
*/
/*
function sendForm()
{
// Récupération des valeurs des champs de formulaire
var post_id = document.getElementById('post_id').value;
var name = document.getElementById('name').value;
var comment = document.getElementById('comment').value;

// Préparation de la querystring d'URL
var params = '?post_id=' + encodeURIComponent(post_id);
params += '&name=' + encodeURIComponent(name);
params += '&comment=' + encodeURIComponent(comment);

// Récupération de l'objet XHR
var xhr = getXhr();

// On assigne une fonction qui, lorsque l'état de la requête change, va traiter le résultat
xhr.onreadystatechange = function()
{
// readyState 4 = requête terminée
if (xhr.readyState == 4)
{
// status 200 = page requêtée trouvée
if (xhr.status == 200)
ajaxBox_setText(xhr.responseText);
// Page non trouvée
else
ajaxBox_setText('Error...');
}
};

// Passage des paramètres à l'URL puis éxecution de la requête
var url = 'http://site.com/send-form.php' + params;
xhr.open('GET', url, true);
xhr.send(null);
}



// Fonction de mise à jour du contenu de l'élement HTML #result
function ajaxBox_setText(pText)
{
var p = document.getElementById('result');
p.appendChild(document.createTextNode(pText));
}
 */