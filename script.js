const toggleSwitch = document.getElementById('toggle');

var today = new Date();
const targetDay = new Date("08/26/2022");
let remainingDays = (targetDay - today)/(1000 * 3600 * 24);


toggleSwitch.addEventListener('change', function() {
  if (this.checked){
    document.body.style.backgroundColor = 'white';
    document.getElementById('days').value = Math.ceil(remainingDays);
    document.getElementById('days').style.backgroundColor = 'white';  
  } else {
    document.body.style.backgroundColor = 'black';
    document.getElementById('days').style.backgroundColor = 'black';
  } 
});


