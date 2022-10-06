let data;
accessData();
function accessData() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://ghibliapi.herokuapp.com/films", "true");

  request.onload = function () {
    data = JSON.parse(this.response);

    if (request.status == 200) {
      console.log("Response OK.");
      console.log(data.title);
      let i = 0;
      data.forEach((movie) => {
        let newElt = document.createElement("option");

        let textNode = document.createTextNode(data[i].title);
        newElt.appendChild(textNode);

        document.querySelector("#options").appendChild(newElt);
        i++;
      });
    } else {
      console.log(`Error occurred: Status: ${request.status}`);
    }
  };

  request.send();
}

function getItemSelected() {
  let selectedItem = document.querySelector("#options").selectedIndex;
  let newElt = document.createElement("p");

  newElt.appendChild(
    document.createTextNode("Title: " + data[selectedItem].title)
  );

  newElt.appendChild(document.createElement("br"));
  newElt.appendChild(document.createElement("br"));

  newElt.appendChild(
    document.createTextNode("Description: " + data[selectedItem].description)
  );

  document.querySelector("#main").appendChild(newElt);
}
function clearScreen() {
  document.querySelector("#main").innerHTML = "";
}
