const EXERCICES = [
  { category: "Basic", problems: 150 },
  { category: "Fundamental 1", problems: 150 },
  { category: "Fundamental 2", problems: 116 },
  { category: "Functions", problems: 29 },
  { category: "Recursion", problems: 9 },
  { category: "Conditional statements and loops", problems: 12 },
  { category: "Math", problems: 53 },
  { category: "Array", problems: 41 },
  { category: "DateTime", problems: 53 },
  { category: "String", problems: 49 },
  { category: "Validation with regular expression", problems: 21 },
  { category: "DOM", problems: 13 },
  { category: "Drawing", problems: 6 },
  { category: "Object", problems: 18 },
  { category: "Validation without regular expression", problems: 10 },
  { category: "Searching and Sorting Algorithm", problems: 14 },
];

function categorySelect() {
  const MENU = document.getElementById("menu"),
    CATEGORY = document.createElement("select");

  let option;

  CATEGORY.id = "category";
  option = document.createElement("option");
  option.value = "null";
  option.textContent = "Select category";
  CATEGORY.appendChild(option);

  for (i = 0; i < EXERCICES.length; i++) {
    option = document.createElement("option");
    option.value = EXERCICES[i].problems;
    option.textContent = EXERCICES[i].category;
    CATEGORY.appendChild(option);
  }

  MENU.appendChild(CATEGORY);
  CATEGORY.addEventListener("change", exerciceSelect);
}

function exerciceSelect(e) {
  const SUBMENU = document.getElementById("subMenu"),
    PREVIEW_EXERCICE = document.getElementById("exercice") || false,
    EXERCICE = document.createElement("select");

  let option;
  option = document.createElement("option");
  option.value = "none";
  option.textContent = "Select exercice";
  EXERCICE.appendChild(option);
  EXERCICE.id = "exercice";

  for (i = 1; i <= e.target.value; i++) {
    let exercicePrefix = "0".repeat(
      e.target.value.toString().length - i.toString().length
    );
    let repository = this.options[this.selectedIndex].textContent.toLowerCase();
    repository = repository.replace(/ /gi, "-");
    option = document.createElement("option");

    let name = `Exercice-${exercicePrefix + i.toString()}`;
    let link = `${repository}/${name.toLowerCase()}`;

    option.value = link;
    option.textContent = name;

    EXERCICE.appendChild(option);
  }

  if (PREVIEW_EXERCICE) SUBMENU.replaceChild(EXERCICE, PREVIEW_EXERCICE);
  else SUBMENU.appendChild(EXERCICE);

  changeScript();
}

function changeScript() {
  const EXERCICE_SCRIPT = document.getElementById("exercice"),
    PROBLEM = document.getElementById("problem"),
    SOLUTION = document.getElementById("solution"),
    SCRIPT_CONTENT = document.getElementById("scriptContent");

  EXERCICE_SCRIPT.addEventListener("change", (e) => {
    PROBLEM.textContent = "";
    SOLUTION.textContent = "";
    SCRIPT_CONTENT.textContent = "";
    // blank value selected
    if (e.target.value == "null") return;

    // remove script tag if already exist
    let oldScriptTag = document.getElementById("exerciceScript");
    if (oldScriptTag != null) oldScriptTag.remove();

    // create script tag
    let newScriptTag = document.createElement("script");
    newScriptTag.id = "exerciceScript";
    newScriptTag.src = `${e.target.value}.js`;

    // fetch(`${e.target.value}.js`).then(function (response) {
    //     if (response.ok) {
    //         // PROBLEM.textContent = response.text();
    //         response.blob().then(function (myBlob) {
    //             // var objectURL = URL.createObjectURL(myBlob);
    //             // myImage.src = objectURL;
    //             PROBLEM.textContent = myBlob.text();
    //         });

    //     } else {
    //         PROBLEM.textContent = 'Mauvaise réponse du réseau';
    //     }
    // })
    //     .catch(function (error) {
    //         PROBLEM.textContent = 'Il y a eu un problème avec l\'opération fetch: ' + error.message;
    //     });
    let xhttp = new XMLHttpRequest(); // create a ajax request object
    xhttp.onreadystatechange = function () {
      // when it's ok
      if (this.readyState == 4 && this.status == 200) {
        document.body.appendChild(newScriptTag);
       
        document.getElementById(
          "scriptContent"
        ).textContent = this.responseText;
        hljs.highlightAll();
      } else if (this.status == 404) {
        PROBLEM.textContent = "Il y a eu un problème avec l'opération  ";
      }
    };
    xhttp.open("GET", `${e.target.value}.js`, true);
    xhttp.send();
  });
}

categorySelect();
