//Create a function named getRandomQuote:
function getRandomQuote() {
  //which selects a random quote object from the quotes array & returns the randomly selected quote object
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

//When the quote changes, randomly change the background color of the page - function created.
function randomRGB() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

//Create a function named printQuote which follows these rules:
function printQuote() {
  //printQuote calls the getRandomQuote function and stores the returned quote object in a variable
  var randomQuote = getRandomQuote();
  //printQuote constructs a string containing the different properties of the quote object using the following HTML template:
  /*    <p class="quote"> [quote here] </p>
        <p class="source"> [source here]
        <span class="citation"> [citation here] </span>
        <span class="year"> [year here] </span>
        </p>  */
  var theQuote = '<p class="quote">' + randomQuote.quote + '</p>';
  theQuote += '<p class="source">' + randomQuote.source;
  //printQuote doesn't add a for a missing citation or a if the year property is missing
  if (randomQuote.citation) theQuote += '<span class="citation">' + randomQuote.citation + '</span>';
  if (randomQuote.year) theQuote += '<span class="year">' + randomQuote.year + '</span>';
  theQuote += '</p>';
  //Add more properties to the quote object. For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize each quote.
  theQuote += '<p class="tags">' + randomQuote.tags + '</p>';
  //printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
  document.getElementById('quote-box').innerHTML = theQuote;
  //When the quote changes, randomly change the background color of the page - function called.
  document.body.style.backgroundColor = randomRGB();
  //To help reviewers (and yourself) verify that the quotes don’t repeat until they’ve all been displayed, log the quote to the console each time the “Show Another Quote” button is clicked.
  console.log(randomQuote);
  //Don't display a random quote more than once until ALL quotes from the array have been displayed.
  quotes.pop(randomQuote);
  if(quotes.length === 0){
    location.reload();
  }
}

printQuote();

//Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use the setInterval() or setTimeout() method to do this -- see the links in the “Additional Resources” section).
var intervalID = window.setInterval(printQuote, 15000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);