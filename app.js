const colorOne = document.getElementById("color1");
const colorTwo = document.getElementById("color2");
const labelOne = document.getElementById("label1")
const labelTwo = document.getElementById("label2")
const labelNameOne = document.getElementById("label1Name")
const labelNameTwo = document.getElementById("label2Name")
const backgroundBody = document.getElementById("body")
const range = document.getElementById("range")
const deg = document.getElementById("orientation")
const copy = document.getElementById("copy")
const modale = document.getElementById("modale")


colorOne.addEventListener("change", () => {
    labelOne.style.backgroundColor = colorOne.value;
    labelNameOne.textContent = colorOne.value.toUpperCase();
    hex_to_RGB(colorOne.value, labelOne)
    changeBodyBack(range.value, colorOne.value, colorTwo.value)
    modaleValidator(`Première couleur changée pour ${colorOne.value}`)
})

colorTwo.addEventListener("change", () => {
    labelTwo.style.backgroundColor = colorTwo.value;
    labelNameTwo.textContent = colorTwo.value.toUpperCase();
    hex_to_RGB(colorTwo.value, labelTwo)
    changeBodyBack(range.value, colorOne.value, colorTwo.value)
    modaleValidator(`Deuxième couleur changée pour ${colorTwo.value}`)
})

range.addEventListener("change", () => {
    deg.textContent = `${range.value}°`;
    changeBodyBack(range.value, colorOne.value, colorTwo.value)
    modaleValidator(`Orientation changée pour ${range.value}°`)
})

const  hex_to_RGB = (hex, label) => {
    let m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
        r = parseInt(m[1], 16);
        g = parseInt(m[2], 16);
        b = parseInt(m[3], 16);
if(r+g+b < 180) {
label.style.color = "white";
}
else {
    label.style.color = "black"
}
}

const changeBodyBack = (deg, col1, col2) => {
backgroundBody.style.background = `linear-gradient(${deg}deg, ${col1}, ${col2})`
}

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(`linear-gradient(${range.value}deg, ${colorOne.value}, ${colorTwo.value})`);
    modaleValidator("Gradient copié dans votre presse papier!")
})


const modaleValidator = (e) => {
modale.style.display = "flex"


setTimeout(
    function() {
        modale.style.width = "300px"
        modale.style.height = "100px"
    },
    8
)

setTimeout(
    function() {
        modale.textContent = e;
    },
    500
)


setTimeout(
    function() {
        modale.textContent = "";
        modale.style.width = "0"
        modale.style.height = "0"
    },
    1500
)

setTimeout(
    function() {
        modale.style.display = "none"
    },
    1850
)
}
