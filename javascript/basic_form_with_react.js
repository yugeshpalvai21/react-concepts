// Functions with React
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.children[0].value);
    // alert(e.type + 'Triggered');
}
const jsx = (
    <div>
        <form id="myForm" onSubmit={handleSubmit}>
            <input type="text" name="title" />
            <br /><br />
            <input type="submit" value="Submit Form"/>
        </form>
    </div>
);

const element = document.getElementById('app')

ReactDOM.render(jsx, element);