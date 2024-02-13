document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    displayGreeting();
    fetchQuote();
  
    document.getElementById('refreshBtn').addEventListener('click', fetchQuote);
  });
  
  function updateTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
        setTimeout(startTime, 1000);
      }
      
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  
                return i;
      }
  
  function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let greeting = '';
    if (hours >= 6 && hours < 12) {
      greeting = 'Good morning!';
    } else if (hours >= 12 && hours < 20) {
      greeting = 'Good afternoon!';
    } else {
      greeting = 'Good evening!';
    }
    greetingElement.textContent = greeting;
  }
  
  async function fetchQuote() {
    const quoteElement = document.getElementById('quote');
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex].text;
      quoteElement.textContent = randomQuote;
    } catch (error) {
      console.error('Error fetching quote:', error);
      quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
    }
  }
  