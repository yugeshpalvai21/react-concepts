
let counter = 0;

const handleAddOne = () => {
    // console.log('AddOne Button Clicked')
    counter += 1;
    console.log(counter);
    render();
}

const handleMinusOne = () => {
    // console.log('MinusOne Button Clicked')
    counter -= 1;
    console.log(counter);
    render();
}

const handleReset = () => {
    // console.log('Reset Button Clicked')
    counter = 0;
    console.log(counter);
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h3>Counter: {counter}</h3> 
            {/* React.CreateElement("h3", null, "Conter: ", counter) */}
            <button onClick={handleAddOne}>AddOne(+1)</button>
            <button onClick={handleMinusOne}>MinusOne(-1)</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );

    const domElement = document.getElementById('app');

    ReactDOM.render(jsx, domElement);
}

render();
