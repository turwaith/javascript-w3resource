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
    PROBLEM = document.getElementById("output-problem"),
    SOLUTION = document.getElementById("output-solution"),
    SCRIPT_CONTENT = document.getElementById("output-code-content");

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

    fetch(`${e.target.value}.js`)
      // Handle success
      .then((response) => {
        if (!response.ok) {
          // make the promise be rejected if we didn't get a 2xx response
          throw new Error("The file doesn't exists");
        } else {
          return response.text();
        }
      })
      .then((content) => {
        document.body.appendChild(newScriptTag);
        // remove setProblem & setSolution function
        // remove 2 or more blank by one
        let removeComment = /\/\/\s\*exclude\*.*?(\r*?\n*?.*?){1,}?\/\/\s\*exclude\*/g;
        let removeDisplay = /(setProblem|setSolution).*?(\r*?\n*?.*?){1,}?;/g;

        content = content.replace(removeComment, "");
        content = content.replace(removeDisplay, "");
        content = content.trim();
        
        SCRIPT_CONTENT.textContent = content;
        hljs.highlightAll(SCRIPT_CONTENT);
      }) //print data to console
      .catch((err) => (PROBLEM.innerText = "There is a problem\n" + err)); // Catch errors
  });
}
/**
 * Display the problem in the 'output-problem' div
 * @param {string} problem The problem to display
 */
function setProblem(problem) {
  document.getElementById("output-problem").innerText = problem;
}
/**
 * * Display the solution in the 'output-solution' div
 * @param {string} solution The solution to display
 * @param {boolean} element True if the solution is a html element to insert
 */
function setSolution(solution, element = false) {
  if (element) document.getElementById("output-solution").appendChild(solution);
  else document.getElementById("output-solution").innerText = solution;
}

const problem = document.getElementById("ouput-problem"),
  solution = document.getElementById("output-solution");
categorySelect();
