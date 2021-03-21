console.log('React Play with CDNs');

var jsx = React.createElement('div', null, 
                            React.createElement('h1', null, 'Hello World'), 
                            React.createElement('p', null, 'This Is Subtitle'));

ReactDOM.render(jsx, document.getElementById('app'));