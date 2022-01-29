const facts = [
  { fact: '"Declarativo"', id: 1 },
  { fact: "Mantenido por facebook", id: 2 },
  { fact: "Fácil de aprender", id: 3 },
  { fact: "Aprendamos React Juntos!!", id: 4 },
  { fact: "Proyecto 1 OK", id:5},
];

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-container">
        <img src="../logoreact.png" alt="" />
        <h3>React Js</h3>
      </div>
    );
  }
}

const Main = ({ children }) => {
  return <div className="main-container">{children}</div>;
};

const Footer = ({ name3 }) => {
  return (
    <div className='footer-container'>
      <h4>{name3}</h4>
    </div>
  );
};

const Button = ({ handleClick }) => {
  return <button onClick={handleClick}>Check</button>;
};

const Item = ({ children }) => {
  return (
    <div className="facts-container">
      {facts.map((fact) => {
        return (
          <li className="li-facts" key={fact.id}>
            {fact.fact}
          </li>
        );
      })}
      {children}
    </div>
  );
};
const App = () => {
  let name3 = "TEV.Studio 2022"

  const handleClick = () => {
    alert("Learn React");
  };

  return (
    <div>
      <Header />

      <Main>
        <Item>
          <Button handleClick={handleClick} />
        </Item>
      </Main>

      <Footer name3={name3} />
    </div>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

