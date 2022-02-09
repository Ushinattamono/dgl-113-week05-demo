'use strict';

let temperatures = [ 100, 102, 34, -5, 0, 20];
let windspeeds = [0, 0, 5, 55, 25, 30];

let buttonEl = document.getElementById('show');
let tbody = document.getElementById('simpleTableBody');
buttonEl.addEventListener('click', showWeather );

function showWeather(e){
    console.log('showWeather()');
    
    for(let i = 0; i < temperatures.length; i++){

        let thisRow = `<tr>`

        if(temperatures[i] < 0){
            thisRow += `<td class="table-danger">${temperatures[i]}</td>`;
        } else {
            thisRow += `<td>${temperatures[i]}</td>`;
        }

        if(windspeeds[i] > 25 ){
            thisRow += `<td class="table-danger">${windspeeds[i]}</td>`;
        } else {
            thisRow += `<td>${windspeeds[i]}</td>`;
        }

        thisRow += `</tr>`;
        tbody.innerHTML += thisRow;
    }
}