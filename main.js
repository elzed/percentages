
var sel = document.getElementById('percentSelect');
var form = document.getElementById('enterXY');
var selIndex = 0;

sel.addEventListener('change', function() {
    selIndex = document.getElementById('percentSelect').selectedIndex;
})

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!enterX.value || !enterY.value) {
        alert('Please enter value in fields.');
    }

    var x = parseFloat(enterX.value);
    var y = parseFloat(enterY.value);

    if (selIndex == 0) {
        var result = ((y/100) * x);
        resultField.innerText = "Answer: " + result;
    } else if (selIndex == 1) {
        var result = ((100/y) * x);
        resultField.innerText = "Answer: " + result;
    } else if (selIndex == 2) {
        var result = (100 / (x/y));
        resultField.innerText = "Answer: " + result + "%";
    } else if (selIndex == 3) {
        var result = ((100/x) * y);
        resultField.innerText = "Answer: " + result;
    } else if (selIndex == 4) {
        var result = ((x/100) * y);
        resultField.innerText = "Answer: " + result;
    }

})
