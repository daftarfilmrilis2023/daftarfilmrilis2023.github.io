
console.log("OIASJDGFIOSJDGF")

const buttons = document.querySelectorAll("#ok");
const page = document.querySelector("#musicpage")


buttons.forEach(button => {
    button.addEventListener("click", () => {
        page.scrollIntoView({behavior: "smooth"});
    });
  });