


function Counter() {
    const [count, setCount] = useState(0);
    return (

 

    <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() =>  setCount(count - 1)}>Decrement</button>
        <button onClick={() =>  setCount(0)}>Reset</button>

        <p>Current Count: {count} </p>
    </div>
       );
};