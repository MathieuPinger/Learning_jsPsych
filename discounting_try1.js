// load JSON file
document.querySelector('#start').addEventListener('click', loadTrials);

function loadTrials(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'testtrials.json', true);
    console.log(xhr);
    
    xhr.onload = function(){
        console.log(this.status == 200);
        if(this.status == 200){
            
            var trial_data = JSON.parse(this.responseText);
            //console.log(trial_data);

        }
        
    }
    xhr.send()
}

console.log(trial_data);
// assign arrays for trials
//const immediate = [];


//const delayed = [];