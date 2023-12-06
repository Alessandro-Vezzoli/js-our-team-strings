/*
Utilizzando i dati forniti, creare un array di stringhe con i nomi dei membri del team.
MILESTONE 0:
Creare l’array di stringhe contenente i nomi dei membri del team.
MILESTONE 1:
Stampare le informazioni su DOM come card.
MILESTONE 3:
Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
BONUS 1:
In generale curare la parte di UI e organizzare i singoli membri in card/schede.
BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.
*/

// cosa mi serve
//array
//document.getElementById
//function
//document.querySelector

//MILESTONE 1

// creare un array di stringhe conn i nome del membri dei team
var userName = ["Luca", "Matteo", "Asia", "Alessandro"];

//stampare le informazioni su delle card
for (var i = 0; i < userName.length; i++) {
  console.log(userName[i]);

  const div = document.createElement("div");
  div.className = "card m-3";
  div.style.width = "18rem";
  console.log(div);

  const img = document.createElement("img");
  img.src = "./img/user.png";
  img.className = "card-img-top";
  img.alt = "user";
  console.log(img);

  const secondDiv = document.createElement("div");
  secondDiv.className = "card-body";
  console.log(secondDiv);

  const titleUser = document.createElement("h5");
  titleUser.className = "card-title text-center";
  titleUser.textContent = userName[i];
  console.log(titleUser);

  secondDiv.appendChild(titleUser);
  div.appendChild(img);
  div.appendChild(secondDiv);
  document.getElementById("card-container").appendChild(div);
}
function card() {}
