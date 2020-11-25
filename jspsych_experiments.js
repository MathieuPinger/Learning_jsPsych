// create trial data
// trialData = [{
//     "id": 1,
//     "immediate": 1,
//     "delayed": 2,
//     "delay": "2 Wochen"
// },
// {
//     "id": 2,
//     "immediate": 1.50,
//     "delayed": 2.50,
//     "delay": "4 Wochen"
// },{
//     "id": 3,
//     "immediate": 1,
//     "delayed": 4,
//     "delay": "1 Jahr"
// },{
//     "id": 4,
//     "immediate": 5,
//     "delayed": 10,
//     "delay": "1 Woche"
// },{
//     "id": 5,
//     "immediate": 2,
//     "delayed": 2.50,
//     "delay": "2 Wochen"
// }];

// console.log(trialData);

let timeline = [];

let trial = {
    type: "html-keyboard-response",
    stimulus:
    "<div class = centerbox id='container'>" +
    "<p class = center-block-text>Please select the option that you would prefer pressing <strong>'q'</strong> for left <strong>'p'</strong> for right:</p><div class='table'>" +
    "<div class='row'><div id = 'option'><center><font color='green'>" +
    "1€" +
    "<br>" + "now" +
    "</font></center></div>" +
    "<div id = 'option'><center><font color='green'>" + "2€" +
    "<br>in 2 weeks" + "</font></center></div></div></div></div>",
    choices: ['q', 'p'],
    stimulus_duration: 2000,
    trial_duration: 2000
}

timeline.push(trial)

/* needed:
post_trial_gap
on_finish (highlight choice etc)
jsPsych.data.get() (store data)
jsPsych.data.addProperties()  (add data to all trials, e.g. ID)
*/

jsPsych.init({
     timeline: timeline});