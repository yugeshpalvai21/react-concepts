class TilApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: []
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }
    
    handleAdd(item) {
        this.setState((prevState) => {
            return { topics: [...prevState.topics, item]}
        });
    }

    handleDeleteItem(delItem) {
        console.log("you're trying to delete - ", delItem);
        this.setState((prevState) => {
            return { topics: prevState.topics.filter((item) => item != delItem ) }
        });
    }
    
    render() {
        return (
            <div>
                <Header />
                <AddTopic handleAdd={this.handleAdd}/>
                <Topics topics={this.state.topics} handleDeleteItem={this.handleDeleteItem} />
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
        return (
            <div>
                <ul>
                    { this.props.topics.map((item) => <Topic key={item} itemValue={item} handleDeleteItem={this.props.handleDeleteItem}/>) }
                </ul>
            </div>
        );
    }
}

class Topic extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        this.props.handleDeleteItem(this.props.itemValue);
    }

    render() {  
        return (
            <li>
                {this.props.itemValue} &nbsp;&nbsp;&nbsp;
                <button onClick={this.handleDelete}>Delete This Item</button>
            </li>
        )
    }
}

const domElement = document.getElementById('app');

ReactDOM.render(<TilApp />, domElement);