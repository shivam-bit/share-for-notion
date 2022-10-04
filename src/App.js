import React, { useRef, useEffect, useState } from 'react';
import _ from 'lodash';
import { Button } from 'components/core/';
import { AccessibilityModal, SharePopover } from 'components/containers';
import './App.css';

function App() {
  const logSomething = () => console.log('hi');
  return (
    <div className="App">
      <Button type="primary" onClick={logSomething}>
        Share
        <img src="icons/share.svg" alt="" />
      </Button>
      <SharePopover />
      <AccessibilityModal />
    </div>
  );
}

export default App;
