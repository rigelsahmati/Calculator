var display = document.getElementById("number");
function plus() {
    if (display.innerText != '') {
        if (display.innerText.charAt(display.innerText.length - 1) != '*' &&
            display.innerText.charAt(display.innerText.length - 1) != '+' &&
            display.innerText.charAt(display.innerText.length - 1) != '-' &&
            display.innerText.charAt(display.innerText.length - 1) != '/') {
            display.innerText += '+';
        }
    }

}
function devide() {
    if (display.innerText != '') {
        if (display.innerText.charAt(display.innerText.length - 1) != '*' &&
            display.innerText.charAt(display.innerText.length - 1) != '+' &&
            display.innerText.charAt(display.innerText.length - 1) != '-' &&
            display.innerText.charAt(display.innerText.length - 1) != '/') {
            display.innerText += '/ ';
        }
    }

}
function minus() {
    if (display.innerText != '') {
        if (display.innerText.charAt(display.innerText.length - 1) != '*' &&
            display.innerText.charAt(display.innerText.length - 1) != '+' &&
            display.innerText.charAt(display.innerText.length - 1) != '-' &&
            display.innerText.charAt(display.innerText.length - 1) != '/') {
            display.innerText += '-';
        }
    }

}
function times() {
    if (display.innerText != '') {
        if (display.innerText.charAt(display.innerText.length - 1) != '*' &&
            display.innerText.charAt(display.innerText.length - 1) != '+' &&
            display.innerText.charAt(display.innerText.length - 1) != '-' &&
            display.innerText.charAt(display.innerText.length - 1) != '/') {
            display.innerText += '*';
        }
    }

}
function de() {
    display.innerText = display.innerText.slice(0, -1)
}
function equal() {
    if (display.innerText != '') {
        display.innerText = eval(display.innerText)
    }
}
function clearAll() {
    display.innerText = "";
}
function period() {
    if (display.innerText != '') {
        if (display.innerText.charAt(display.innerText.length - 1) != '*' &&
            display.innerText.charAt(display.innerText.length - 1) != '+' &&
            display.innerText.charAt(display.innerText.length - 1) != '.' &&
            display.innerText.charAt(display.innerText.length - 1) != '-' &&
            display.innerText.charAt(display.innerText.length - 1) != '/') {
            display.innerText += '.';
        }
    }
}
function nr00() {
    if (display.innerText != '') {
        display.innerText += '00';
    }
}
function nr0() {
    if (display.innerText != '') {
        display.innerText += 0;
    }
}
function nr1() {
    display.innerText += 1;
}
function nr2() {
    display.innerText += '2';
}
function nr3() {
    display.innerText += '3';
}
function nr4() {
    display.innerText += '4';
}
function nr5() {
    display.innerText += 5;
}
function nr6() {
    display.innerText += 6;
}
function nr7() {
    display.innerText += 7;
}
function nr8() {
    display.innerText += 8;
}
function nr9() {
    display.innerText += 9;
}