import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
    return (
        <div>
            <h1>This Is Heading</h1>
            <p>This is Paragraph from Header Component Renderrr</p>
        </div>
    )
}

const domElement = document.getElementById('app');

ReactDOM.render(<Header />, domElement);


// console.log(typeof React);
// console.log(typeof ReactDOM);

// console.dir(React);

