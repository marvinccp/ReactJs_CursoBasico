const App = () => {
  return (
    <div>
      <h1>Component</h1>
      <Component2 />
    </div>
  );
};

class Component2 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<h1>Class Component</h1>);

  }
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
