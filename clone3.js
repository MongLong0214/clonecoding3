let target = document.querySelector("#dynamic");
let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JS", "Learn to Python"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");


function randomString() {
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JS", "Learn to Python"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

//타이핑 리셋
function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}




function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(() => {
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 2000);
    }
}

dynamic(randomString());

function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);