document.querySelector('.get-jokes').addEventListener('click', getJokes); //listen for a click on the button(get jokes button)

function getJokes(e){
  const number = document.querySelector('input[type="number"]').value; //getJokes is the function, there's  only one input but to be specific we included the type number  

  const xhr = new XMLHttpRequest(); 

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true); 

  xhr.onload = function() {
    if(this.status === 200) { 
      const response = JSON.parse (this.responseText); //turns json string into an object 

      let output = ''; //initializes 

      if(response.type === 'success') {
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }
      document.querySelector('.jokes').innerHTML = output; 
    }
  }

  xhr.send();

  e.preventDefault(); //prevent default behavior
}

 