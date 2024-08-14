import styles from './App.module.css';

function Person(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      { props.isMajor && <h3>you're eligible to drive</h3> }
    </div>
  );
}

function App() {
  return (
    <div>
      <Person name="Yugesh" age={25} isMajor={true} />
      <Person name="Palvai" age={25} isMajor={false}/>
    </div>
  );
}

export default App;
