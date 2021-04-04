let counter = 0;
let names = ['yugesh', 'palvai'];

const jsx = (
    <div>
        {/* Normar Expression */}
        <h1>Counter: {counter}</h1>
        {/* Arrays In Expression */}
        <p>{names}</p>
        {/* Conditional Expression */}
        <p>{ counter > 0 ? "Greater Than Zero" : "Not Greater Than Zero" }</p>
        {/* render elements only condition passed */}
        { counter > 0 && <p>Yey!!! Counter Is Greater</p>}
    </div>
);

const element = document.getElementById('app')

ReactDOM.render(jsx, element);