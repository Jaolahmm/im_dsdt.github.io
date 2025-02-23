// ====== พิมพ์ "Im-_dsdt....</>" ======
const text = "Im-_dsdt....</>";
const lazyText = "I'm lazy ";
let index = 0;
const typingElement = document.getElementById("typing");
const lazyContainer = document.getElementById("lazy-container");

function type() {
    typingElement.textContent = text.slice(0, index++);
    if (index > text.length) {
        typeLazyText(3);
        return;
    }
    setTimeout(type, 150);
}

// ====== แสดง "I'm Lazy . . ." และลูป `...` ======
function typeLazyText(linesCount) {
    for (let i = 0; i < linesCount; i++) {
        const lineElement = document.createElement("div");
        lineElement.textContent = lazyText;
        lazyContainer.appendChild(lineElement);

        let dotIndex = 0;
        setInterval(() => {
            lineElement.textContent = lazyText + ".".repeat((dotIndex++ % 3) + 1);
        }, 500);
    }
}

type();

// ====== จุดเรืองแสง (ล่างจอ) ======
setInterval(() => {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${3 + Math.random() * 2}s`;
    document.getElementById("particles-container").appendChild(particle);
    setTimeout(() => particle.remove(), 5000);
}, 100);

// ====== สุ่มโค้ดทุก 5 วินาที ======
const randomCodeElement = document.getElementById("random-code-text");
const codeSamples = [
    "console.log('Hello, World!');",
    "let x = 10;\nconsole.log(x * 2);",
    "function greet(name) {\n  return 'Hello, ' + name;\n}",
    "const arr = [1,2,3];\nconsole.log(arr.length);"
];

function changeRandomCode() {
    randomCodeElement.textContent = codeSamples[Math.floor(Math.random() * codeSamples.length)];
}

setInterval(changeRandomCode, 5000);
changeRandomCode();
