class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description
        }
    }
    
    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <p>{this.state.description}</p>
            </div>
        );
    }
}

const domElement = document.getElementById('app');

ReactDOM.render(<Header title='Main Title' description='main description'/>, domElement)

