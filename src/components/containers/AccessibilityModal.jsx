import React, { useRef, useEffect, useState } from 'react';
import _ from 'lodash';
import { Button, Modal } from 'components/core/';
import {
  AccessibilityModalHeader,
  AccessibilityModalBody,
  AccessibilityModalFooter,
} from 'components/modules';
import { useKeyPress } from 'hooks';
import { data } from 'fakeData';

function AccessibilityModal() {
  const sortByFrequency = (data) => {
    Object.keys(data).forEach((objectType) => {
      data[objectType] = _.orderBy(data[objectType], 'frequency');
    });
    return data;
  };

  const logSomething = () => console.log('hi');
  const [query, setQuery] = useState('');
  console.log(query);

  return (
    <Modal alignment="vertical" isOpen={true}>
      <AccessibilityModalHeader setQuery={setQuery} />
      <AccessibilityModalBody data={sortByFrequency(data)} />
      <AccessibilityModalFooter />
    </Modal>
  );
}

export default AccessibilityModal;
