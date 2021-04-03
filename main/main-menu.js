const MENU = document.getElementsByClassName("contentMenu");

for (const item of MENU) {
    console.log(item);  
    item.addEventListener("click", (e) => {
        document.getElementsByClassName("contentActive")[0].classList.remove("contentActive");
        document.getElementById(`output-${e.target.id}`).classList.add("contentActive");
        // e.target.classList.add("activeMenu");
    });
}