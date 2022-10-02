import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Modal } from 'components/core/';
import {
  AccessibilityModalHeader,
  AccessibilityModalBody,
  AccessibilityModalFooter,
} from 'components/modules';
import { data } from 'fakeData';
import { sortByFrequency, filterByQuery } from 'utils';

function AccessibilityModal() {
  const logSomething = () => console.log('hi');
  const [query, setQuery] = useState('');
  const [userAndGroupsList, setUserAndGroupsList] = useState(data);
  const [activeSelections, setActiveSelections] = useState([]);

  const addToActiveSelection = (sharedEntity) => {
    userAndGroupsList[sharedEntity.itemType] = userAndGroupsList[
      sharedEntity.itemType
    ].filter(({ name }) => {
      return name !== sharedEntity.item.name;
    });
    setActiveSelections((prevActiveSelections) => [
      ...prevActiveSelections,
      sharedEntity,
    ]);
  };
  useEffect(() => {
    const clonedDataObject = _.cloneDeep(data);
    filterByQuery(query, clonedDataObject);
    setUserAndGroupsList(clonedDataObject);
  }, [query]);

  const removeFromActiveSelection = (data) => {
    setActiveSelections((prevActiveSelections) => {
      const itemToBeRemovedIndex = prevActiveSelections.findIndex(
        (activeSelection) =>
          activeSelection.itemType === data.itemType &&
          activeSelection.item.name === data.item.name
      );
      if (itemToBeRemovedIndex > -1) {
        const removedItem = prevActiveSelections.splice(
          itemToBeRemovedIndex,
          1
        )[0];
        userAndGroupsList[removedItem.itemType].push(removedItem.item);
        console.log(
          '🚀 ~ file: AccessibilityModal.jsx ~ line 46 ~ setActiveSelections ~ removedItem',
          removedItem
        );
      }
      return [...prevActiveSelections];
    });
    console.log('anx', data);
  };

  return (
    <Modal alignment="vertical" isOpen={true}>
      <AccessibilityModalHeader
        setQuery={setQuery}
        activeSelections={activeSelections}
        removeFromActiveSelection={removeFromActiveSelection}
      />
      <AccessibilityModalBody
        data={sortByFrequency(userAndGroupsList)}
        addToActiveSelection={addToActiveSelection}
      />
      <AccessibilityModalFooter />
    </Modal>
  );
}

export default AccessibilityModal;
