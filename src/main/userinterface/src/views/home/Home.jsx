import React, { useState, useEffect } from 'react';
import backgroundImage from './image/background.jpg';
import thoughts from './components/thoughts.json';
import Loading from '../../components/Loading';

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
        >
            <div className='relative'>
                {backgroundImage ? <img src={backgroundImage} className='h-screen w-screen object-cover' /> : <Loading />}
                <div className='flex justify-center items-center absolute inset-0' >
                    <div className="backdrop-blur  p-10 border-solid border-amber-400 border-2 rounded-lg flex flex-col">
                        <p className="text-lg font-bold text-white rounded ">{randomQuote.quote}</p>
                        <p className="mt-2 text-white self-end font-mono">- {randomQuote.author}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
