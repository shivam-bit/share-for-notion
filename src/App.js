import Button from 'components/core/Button';
import './App.css';

function App() {
  const logSomething = ()=> console.log("hi");
  return (
    <div className="App">
      <header className="App-header">
      <Button type="primary" onClick={logSomething} >
        Share 
        <img src='icons/share.svg' alt=""/>
      </Button>
      </header>
    </div>
  );
}

export default App;
