const input = document.getElementById("input-text");
const consolee = document.querySelector(".console");
const text = document.querySelector(".text");
const consoleBody = document.querySelector(".console-body");
const completed = document.querySelector(".completed");
const body = document.querySelector(".body");
const footer = document.querySelector(".footer");
var valorInput = input.value;
//rgb bandera
var g = 0;
var r = 0;
var b = 0;

//modo claro bandera
var mb = 0;

console.log("red");
console.log("green");
console.log("blue");

//objectives points
var rgb = 0;

const juego = () => {
  inputValue = input.value;

  switch (inputValue) {
    case "hola":
      console.log("holiii");
      break;
    //rgb objective
    case "green":
      consoleBody.style.color = "green";
      g += 1;
      if (g == 1) {
        rgb += 1;
      }

      break;

    case "red":
      consoleBody.style.color = "red";
      r += 1;
      if (r == 1) {
        rgb += 1;
      }

      break;

    case "blue":
      consoleBody.style.color = "blue";
      b += 1;
      if (b == 1) {
        rgb += 1;
      }
      break;

    case "pi":
      inputValue = `<p>${"3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679"}</p>`;
      break;
    case "god":
      inputValue = "@Zambottinico";
      break;
    case "trap":
      inputValue = "EL Doctor";
      break;
    case "white":
      body.style.background = "white";
      footer.style.background = "gray";
      mb += 1;
      break;
    case "black":
      body.style.background = "#1F1F1F";
      footer.style.background = "#2A2A2A";
      break;
    default:
      break;
  }
};

const agregarLogro = (logro) => {
  completed.innerHTML += `<p>${logro}</p> `;
};
const Logros = () => {
  if (rgb == 3) {
    agregarLogro("Consola gamer : Cambiar los colores de la consola");
    rgb += 1;
  }
  if (mb == 1) {
    agregarLogro("AAH MIS OJOS : Cambiar a modo claro");
    mb += 1;
  }
};

const Enter = () => {
  juego();
  Logros();
  text.innerHTML += `<p>${inputValue}</p>`;

  input.value = "";
};

input.addEventListener("keydown", (event) => {
  inputValue = input.value;
  var codeValue = event.code;

  if (codeValue == "Enter") {
    event.preventDefault();
    Enter();
  }
});

consolee.addEventListener("click", (event) => {
  input.focus();
});
