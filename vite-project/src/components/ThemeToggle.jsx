export const ThemeToggle = ({ mode, toggleMode }) => {

    return (
        <header>
            <button onClick={() => toggleMode(prev => !prev)}>
                {mode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
        </header>

    )
}