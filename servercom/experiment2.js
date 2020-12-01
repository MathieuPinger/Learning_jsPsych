document.querySelector("#getForm").addEventListener('submit', sendNumber);

function sendNumber(e) {
    e.preventDefault();
    // build url
    let url = "http://localhost/ajaxcrash/servercom/calculation.py"
    let number = document.querySelector('#number').value;

    // define http request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        loadjson(this.responseText);
    }
    };

    // specify and start http request
    xhttp.open("POST", url, true);
    xhttp.send();
    };
}