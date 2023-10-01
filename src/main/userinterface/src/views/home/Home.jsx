import React, { useState, useEffect } from 'react';
import backgroundImage from './image/background.jpg';
import thoughts from './components/thoughts.json';

function Home() {
    const [randomQuote, setRandomQuote] = useState('');

    useEffect(() => {
        const selectRandomQuote = () => {
            const randomIndex = Math.floor(Math.random() * thoughts.length);
            setRandomQuote(thoughts[randomIndex]);
        };

        // Initial random quote.
        selectRandomQuote();

        // Set a timer to change the quote every 30 minutes.
        const intervalId = setInterval(selectRandomQuote, 30 * 60 * 1000);

        // Clean up the timer when the component unmounts.
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div
            className="min-h-screen bg-cover flex flex-col justify-center items-center"
            style={{
                position: 'fixed', // Fixed position
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden', // Hide any overflowing content
            }}
        >
            <div className="bg-white p-8 rounded-md shadow-lg text-center translate-x-[70px]">
                <p className="text-lg font-bold text-black">{randomQuote.quote}</p>
                <p className="mt-2 text-black">- {randomQuote.author}</p>
            </div>
        </div>
    );
}

export default Home;
