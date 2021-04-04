const MENU = document.getElementsByClassName("menu");

for (const item of MENU) {    
    item.addEventListener("click", (e) => {
        document.getElementsByClassName("contentActive")[0].classList.remove("contentActive");
        document.getElementsByClassName("menuActive")[0].classList.remove("menuActive");        
        document.getElementById(`output-${e.target.id}`).classList.add("contentActive");
        e.target.classList.add("menuActive");
    });
}