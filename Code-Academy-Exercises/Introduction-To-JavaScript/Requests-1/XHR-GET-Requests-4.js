
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
  const additionalParams = '&topics=';
  const queryParams = 'rel_jjb=';
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  
/* I learned how create a request to set a topic and find adjectives that describe
 the input word using query strings */
