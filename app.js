// https://www.omnicalculator.com/construction/gallons-per-minute

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const flowrateRadio = document.getElementById('flowrateRadio');
const volumeRadio = document.getElementById('volumeRadio');
const timeRadio = document.getElementById('timeRadio');

let flowrate;
let volume = v1;
let time = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

flowrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume';
  variable2.textContent = 'Time';
  volume = v1;
  time = v2;
  result.textContent = '';
});

volumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Flow rate';
  variable2.textContent = 'Time';
  flowrate = v1;
  time = v2;
  result.textContent = '';
});

timeRadio.addEventListener('click', function() {
  variable1.textContent = 'Flow rate';
  variable2.textContent = 'Volume';
  flowrate = v1;
  volume = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(flowrateRadio.checked)
    result.textContent = `Flow rate = ${computeflowrate().toFixed(2)}`;

  else if(volumeRadio.checked)
    result.textContent = `Volume = ${computevolume().toFixed(2)}`;

  else if(timeRadio.checked)
    result.textContent = `Time = ${computetime().toFixed(2)}`;
})

// calculation

function computeflowrate() {
  return (Number(volume.value) / Number(time.value)) * 60;
}

function computevolume() {
  return (Number(flowrate.value) / 60) * Number(time.value);
}

function computetime() {
  return Number(volume.value) / (Number(flowrate.value) / 60);
}