import React, {useRef,useEffect} from 'react';
import {Button,Modal} from 'components/core/';
import './App.css';

function App() {
  const logSomething = ()=> console.log("hi");
  
  return (
    <div className="App" inert={true?"":null}>
        <Button type="primary" onClick={logSomething} >
        Share 
        <img src='icons/share.svg' alt=""/>
      </Button>
      <Modal isOpen={true}>
        Hello
        <Button type="primary" onClick={logSomething} >
        Share 
        <img src='icons/share.svg' alt=""/>
      </Button>
      </Modal>
      {/* </header> */}
    </div>
  );
}

export default App;
