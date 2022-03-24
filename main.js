let button = document.querySelector( 'button' );
let quote = document.querySelector( '.quote' );
let taller = document.querySelector( '.name' );
let a = 1;
button.onclick = function ()
{   
    if ( a === quotesArr.length )
    {
        a = 1;
    }
    quote.innerHTML = `${ quotesArr[ a++ ] }`;
    taller.innerHTML = `${ namesArr[ a++ ] }`;
};
let quotesArr = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "Life is what happens when you're busy making other plans.",
];
let namesArr = [
    "Nelson Mandela",
    "Walt Disney",
    "Steve Jobs",
    "Eleanor Roosevelt",
    "Oprah Winfrey",
    "James Cameron",
    "John Lennon"
];
