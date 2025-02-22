const text = "im_Ps_dsdt.....";
let index = 0;
const typingElement = document.getElementById("typing");

function type() {
    typingElement.textContent = text.slice(0, index);
    index++;
    if (index > text.length) {
        index = 0;
    }
}

setInterval(type, 300);