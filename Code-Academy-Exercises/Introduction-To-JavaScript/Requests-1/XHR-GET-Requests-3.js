
const getSuggestions = () => {
	const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
 				 renderResponse(xhr.response)
		}
  };
  xhr.open('GET', endpoint);
  xhr.send();
}

// I learned how to make a GET request to the API
