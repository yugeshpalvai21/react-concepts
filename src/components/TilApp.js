import { useState } from "react";

const Header = () => (
  <div>
    <h4>Today I Learned</h4>
    <p>small app that stores topics that you learned everyday</p>
  </div>
);

const AddTopic = (props) => {
  const [newTopic, setNewTopic] = useState("");

  const handleSubmit = () => {
    props.handleAdd(newTopic);
    setNewTopic("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="write new topic here.."
        value={newTopic}
        onChange={(e) => setNewTopic(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Add Topic</button>
    </div>
  );
};

const Topics = (props) => {
  return (
    <div>
      <ul>
        {props.topics.map((topic) => (
          <Topic
            key={topic}
            topic={topic}
            handleDeleteTopic={props.handleDeleteTopic}
          />
        ))}
      </ul>
    </div>
  );
};

const Topic = (props) => {
  const handleDeleteTopic = () => {
    props.handleDeleteTopic(props.topic);
  };

  return (
    <li>
      {props.topic} &nbsp;&nbsp;&nbsp;
      <button onClick={handleDeleteTopic}>Delete This Item</button>
    </li>
  );
};

export const TilApp = () => {
  const [topics, setTopics] = useState([]);

  const handleAdd = (item) => {
    setTopics([...topics, item]);
  };

  const handleDeleteTopic = (delItem) => {
    setTopics(topics.filter((item) => item !== delItem));
  };

  return (
    <div>
      <Header />
      <AddTopic handleAdd={handleAdd} />
      <Topics topics={topics} handleDeleteTopic={handleDeleteTopic} />
    </div>
  );
};
