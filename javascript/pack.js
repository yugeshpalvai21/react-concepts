class TilApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <AddTopic />
                <Topics topics={['first', 'second', 'third']}/>
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
    render() {
        return (
            <div>
                <form>
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