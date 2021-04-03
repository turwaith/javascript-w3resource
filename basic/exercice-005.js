document.getElementById("problem").textContent = "Basic Problem N0 5";
document.getElementById("solution").textContent = "Basic Solution N0 5";

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