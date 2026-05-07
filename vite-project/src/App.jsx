import './App.css'
import { useState } from 'react'

const ThemeToggle = () => {

    return (
        <header>
            <button>Switch Mode</button>
        </header>
    )
}

const FontButtons = ({ increment, decrement }) => {

    return (
        <div>
            <button onClick={increment}>A+</button>
            <button onClick={decrement}>A-</button>
        </div>
    )
}

const Greeting = ({ greeting, style }) => {

    return (
        <h1 style={style}>{greeting}</h1>
    )
}

const LanguageButtons = () => {

    return (
        <div>
            <button>English</button>
            <button>Spanish</button>
            <button>Haitian Creole</button>
            <button>Portuguese</button>
            <button>French</button>
            <button>Japanese</button>
        </div>
    )
}

const History = () => {

    return (
        <div>
            <h2>History</h2>
            <p>No selections yet</p>
            <button>Clear History</button>
        </div>
    )
}
const App = () => {
    const [size, setSize] = useState(50);

    const increment = () => setSize(Math.min(size + 5, 72));
    const decrement = () => setSize(Math.max(size - 5, 12));

    return (
        <main>
            <ThemeToggle />
            <FontButtons increment={increment} decrement={decrement} />
            <Greeting greeting="Hi" style={{ fontSize: `${size}px` }} />
            <LanguageButtons />
            <History />
        </main>
    )
}

export default App
