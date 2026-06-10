import './index.css';
import { Greeting } from './components/Greeting';
import { ThemeToggle } from './components/ThemeToggle';
import { useState } from 'react';


const App = () => {
    const [mode, toggleMode] = useState(true);

    const handleToggle = () => {
        toggleMode(prev => {
            document.body.className = prev ? "light" : "dark";
            return !prev;
        });
    }

    return (
        <>
            <ThemeToggle mode={mode} toggleMode={handleToggle} />
            <main>
                <Greeting />
            </main>
        </>
    )
}

export default App;
