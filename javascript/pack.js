const Header = (props) => {
    console.log(props);
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    );
}

Header.defaultProps = {
    title: 'Basic Title',
    description: 'Generic description'
}

const domElement = document.getElementById('app');

ReactDOM.render(<Header />, domElement)