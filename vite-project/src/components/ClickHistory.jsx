export const History = ({ history, clearHistory }) => {

    return (
        <div>
            <h2>History</h2>
            {history.length === 0
                ? <p>No selections yet</p>
                : history.map((language) => <p>{language}</p>)
            }
            <button onClick={clearHistory}>Clear History</button>
        </div>
    )
}