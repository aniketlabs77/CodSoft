let screen = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let screenValue = "";

for (item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            try {
                screen.value = eval(screenValue);
                screenValue = screen.value;
            } catch {
                screen.value = "Error";
                screenValue = "";
            }
        }
        else if (buttonText == 'DEL') {
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}