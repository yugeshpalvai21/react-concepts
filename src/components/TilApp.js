import { useState } from 'react';

const Header = () => {
    return (
        <div>
            <h4>Today I Learned</h4>
            <p>small app that stores topics that you learned everyday</p>
        </div>
    );
}

const AddTopic = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = document.getElementById('newTopic').value;
        document.getElementById('newTopic').value = '';
        props.handleAdd(newItem);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="newTopic" placeholder="write new topic here.."></input>
                <input type="submit" value="Add To List"></input>
            </form>
        </div>
    );
}

const Topics = (props) => {
    return (
        <div>
            <ul>
                { props.topics.map((item) => <Topic key={item} itemValue={item} handleDeleteItem={props.handleDeleteItem}/>) }
            </ul>
        </div>
    );
}



const Topic = (props) => {
    const handleDelete = (e) => {
        props.handleDeleteItem(props.itemValue);
    }

    return (
        <li>
            {props.itemValue} &nbsp;&nbsp;&nbsp;
            <button onClick={handleDelete}>Delete This Item</button>
        </li>
    )
}

export const TilApp = () => {
    const [topics, setTopics] = useState([]);

    const handleAdd = (item) =>  {
      setTopics([...topics, item]);
    }

    const handleDeleteItem = (delItem) => {
        console.log("you're trying to delete - ", delItem);
        setTopics(topics.filter((item) => item !== delItem ));
    }

    return (
        <div>
            <Header />
            <AddTopic handleAdd={handleAdd}/>
            <Topics topics={topics} handleDeleteItem={handleDeleteItem} />
        </div>
    );
}