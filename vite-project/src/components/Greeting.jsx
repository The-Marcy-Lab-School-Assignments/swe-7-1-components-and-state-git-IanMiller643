import { useState } from 'react';
import { History } from './ClickHistory';
import { FontButtons } from "./FontButtons";

export const Greeting = () => {
    const greetings = [
        { language: 'English', phrase: 'Good morning' },
        { language: 'Spanish', phrase: 'Buenos días' },
        { language: 'Haitian Creole', phrase: 'Bonjou' },
        { language: 'Portuguese', phrase: 'Bom dia' },
        { language: 'French', phrase: 'Bonjour' },
        { language: 'Japanese', phrase: 'おはよう' },
        { language: 'German', phrase: 'Guten Morgen' },
        { language: 'Russian', phrase: 'Доброе утро' },
    ];

    const [history, setHistory] = useState([]);
    const [phrase, setPhrase] = useState('Please select a language');
    const [size, setSize] = useState(50);

    const increment = () => setSize(Math.min(size + 5, 72));
    const decrement = () => setSize(Math.max(size - 5, 12));

    const languagePressed = (greeting) => {
        setPhrase(greeting.phrase);
        setHistory(history => {
            const newHistory = history.length >= 5 ? history.slice(1) : history;
            return [...newHistory, greeting.language];
        });
    }

    const clearHistory = () => {
        setHistory([]);
    }


    return (
        <>
            <FontButtons increment={increment} decrement={decrement} />
            <h1 style={{ fontSize: `${size}px` }}>{phrase}</h1>
            <div>
                {greetings.map((greeting) => <button onClick={() => languagePressed(greeting)}>{greeting.language}</button>)}
            </div>
            <History history={history} clearHistory={clearHistory} />
        </>
    )
}