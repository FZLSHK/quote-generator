import React, { useState, useEffect } from 'react';

function QuoteBox() {
    const [quote, setQuote] = useState('Loading...');
    const [author, setAuthor] = useState('');

    const fetchRandomQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            setQuote('Failed to fetch quote.');
            setAuthor('');
        }
    };

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    return (
        <div className="quote-box">
            <p id="quote">{quote}</p>
            <p id="author">- {author}</p>
            <button id="new-quote" onClick={fetchRandomQuote}>New Quote</button>
        </div>
    );
}

export default QuoteBox;
