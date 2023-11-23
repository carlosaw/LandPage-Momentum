function updateTime() {
  let timeDiv = document.querySelector('.middle h1');

  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  timeDiv.innerHTML = `${hours}:${minutes}`;
}

const btn = document.querySelector('#send');

function updateGreeting() {
  let greetingDiv = document.querySelector('.middle h3');
  let now = new Date();
  let hours = now.getHours();
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('#name');
    const myName = name.value;
   
    if (hours > 0 && hours < 12) {
      greetingDiv.innerHTML = `Bom dia, ${myName}.`;
    } else if (hours >= 12 && hours < 18) {
      greetingDiv.innerHTML = `Boa tarde, ${myName}.`;
    } else {
      greetingDiv.innerHTML = `Boa noite, ${myName}.`;
    } 
  }); 
}

function updateAll() {
  updateTime();
  updateGreeting();
}

updateAll();
setInterval(updateAll, 1000);