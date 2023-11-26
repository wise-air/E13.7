import {sum} from './math';
import './style.css';
const postscribe = require('postscribe');

fetch('http://localhost:3000/contacts')
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    const parsedData = JSON.parse(text);
    for (let i in parsedData) {
        postscribe('#ad', parsedData[i].name + '  ')
        }
  })
  .catch(function(error) {
    log('Request failed', error)
  });




