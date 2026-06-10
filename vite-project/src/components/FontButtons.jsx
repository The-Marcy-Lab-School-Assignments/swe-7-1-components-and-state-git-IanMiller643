export const FontButtons = ({ increment, decrement }) => {

    return (
        <div>
            <button onClick={increment}>A+</button>
            <button onClick={decrement}>A-</button>
        </div>
    )
}