// event listener on number submission

document.querySelector("#getForm").addEventListener('submit', getName2);

function sendNumber(e) {
    // prevent default event, e = event parameter
    e.preventDefault();

    var name = document.querySelector('#number').value;
    var xhr = new XMLHttpRequest();
    // post data to python script
    xhr.open('POST', 'calculation.py, );

    xhr.onload = function(){
        output = this.responseText;
        document.querySelector('#msg').innerHTML=output;
    }

    xhr.send();
}