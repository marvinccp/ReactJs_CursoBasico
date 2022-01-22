const App = () => {
  return (
    <di>
      <h1>Component</h1>
      <Component2 />
    </di>
  );
};

class Component2 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <h1>Class Component</h1>;
  }
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
