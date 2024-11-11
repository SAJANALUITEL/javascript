'use strict';

const startyear= prompt('Enter starting year');
const endYear= prompt('Enter ending year');

/*
year % 4 === 0
year % 100 === 0
year % 400 === 0

year % 4 === 0 && year % 100 !==0 || year % 400 === 0
 */

for (let i = startyear; i <= endYear; i++){
    if(i % 4 === 0 && i% 100 !== 0 || i% 400 === 0){
        // add <li> to the page
        document.querySelector('#target').innerHTML += '<li';
    }
}