// Information to reach API
const apiKey = 'ec5a0dd7daee4709954ac8b519b45e04';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten})
  fetch(url,{
    method:'POST',
    headers:{
  		'Content-type': 'application/json',
		  'apikey': apiKey
		},
    body: data
  });
}

// I learned how update code to using the Rebrandly URL Shortener API.
