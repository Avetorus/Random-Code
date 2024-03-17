let msg = prompt('Enter Message...');
let times = parseInt(prompt("How many times??"), '');
window.InputEvent = window.Event || window.InputEvent;
let event = new InputEvent('Input', {bubbles: true});
let textbox = document.getElementsByClassName("_3Uu1_")[1];
let index = 0;
for(index = 0; index < times; index++)
{
    textbox.innerHTML = msg;
    textbox.dispatchEvent(event);
    document.getElementsByClassName("_2xy_p _3XKXx")[0].click();
}
