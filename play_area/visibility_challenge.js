let isVisibility = false;
let domElement = document.getElementById('app');

const handleVisibility = () => {
    isVisibility = !isVisibility;
    console.log(isVisibility);
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility App</h1>
            <button onClick={handleVisibility}>{ isVisibility ? 'Hide Details' : 'Show Details' }</button>
            { isVisibility && <p>this paragraph is showing because you want to see</p> }
        </div>
    );
    ReactDOM.render(jsx, domElement);
}

render();