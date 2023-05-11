const updateText = document.getElementById('update');

function updateBTN() {
    if (updateText.innerHTML == "HTML and CSS") {
        updateText.innerHTML = "javascript"
    } else {
        updateText.innerHTML = "HTML and CSS";
    }

    console.log(updateText);
}
