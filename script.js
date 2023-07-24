const quotes = [
    "'The measure of intelligence is the ability to change' -Albert Einstein",
"'The greatest discovery of all time is that a person can change his future by merely changing his attitude' -Oprah Winfrey",
"'Every day the clock resets. Your wins don't matter. Your failures don't matter. Don't stress on what was, fight for what could be.' -Sean Higgins",
"'Don’t let rejection create self-doubt. The founder of Starbucks was turned down by 217 of the 242 investors he initially spoke with.' -Elizabeth Galbut",
"'Everyone thinks of changing the world, but no one thinks of changing himself.' -Leo Tolstoy",
"'Play to your strengths. If you aren’t great at something, do more of what you’re great at.' -Jason Lemkin",
"'Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.' -Harriet Tubman"
];
function generateQuote() {
   const random = Math.floor(Math.random() * quotes.length);
   quoteContainer.textContent = quotes[random];
}


const quoteContainer = document.getElementById('quote-container');
const btn = document.getElementById('quote-generator');

btn.addEventListener('click',generateQuote);

