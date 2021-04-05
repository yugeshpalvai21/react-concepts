class TilApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: []
        };

        this.handleAdd = this.handleAdd.bind(this);
    }
    
    handleAdd(item) {
        this.setState((prevState) => {
            return { topics: [...prevState.topics, item]}
        });
    }
    
    render() {
        return (
            <div>
                <Header />
                <AddTopic handleAdd={this.handleAdd}/>
                <Topics topics={this.state.topics}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h4>Today I Learned</h4>
                <p>small app that stores topics that you learned everyday</p>
            </div>
        );
    }
}

class AddTopic extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newItem = document.getElementById('newTopic').value;
        document.getElementById('newTopic').value = '';
        this.props.handleAdd(newItem);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="newTopic" placeholder="write new topic here.."></input>
                    <input type="submit" value="Add To List"></input>
                </form>
            </div>
        );
    }
}

class Topics extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                { this.props.topics === undefined ? <p>No Topics Found</p> : this.props.topics.length }
            </div>
        );
    }
}

const domElement = document.getElementById('app');

ReactDOM.render(<TilApp />, domElement);