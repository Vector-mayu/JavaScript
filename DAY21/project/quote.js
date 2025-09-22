const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "It always seems impossible until it's done. — Nelson Mandela",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "Happiness depends upon ourselves. — Aristotle",
  "In the middle of every difficulty lies opportunity. — Albert Einstein",
  "Don’t let yesterday take up too much of today. — Will Rogers",
  "Act as if what you do makes a difference. It does. — William James",
  "Dream big and dare to fail. — Norman Vaughan",
  "Turn your wounds into wisdom. — Oprah Winfrey",
  "Everything you’ve ever wanted is on the other side of fear. — George Addair",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "Opportunities don't happen, you create them. — Chris Grosser",
  "Do what you love and the money will follow. — Marsha Sinetar",
  "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "Fall seven times and stand up eight. — Japanese Proverb",
  "If you’re going through hell, keep going. — Winston Churchill",
  "Strive not to be a success, but rather to be of value. — Albert Einstein",
  "Failure is simply the opportunity to begin again, this time more intelligently. — Henry Ford",
  "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
  "The best way to predict the future is to create it. — Peter Drucker",
  "Do one thing every day that scares you. — Eleanor Roosevelt",
  "Opportunities multiply as they are seized. — Sun Tzu",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. — Roy T. Bennett",
  "Great things never come from comfort zones. — Anonymous",
  "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
  "Go confidently in the direction of your dreams. Live the life you have imagined. — Henry David Thoreau",
  "Big journeys begin with small steps. — Anonymous",
  "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau"
];



function generateQuote(){
  const text = document.getElementById("quote");
  
  const index = Math.floor(Math.random()*quotes.length);
  text.textContent = quotes[index];
}

setInterval(generateQuote,3000);


