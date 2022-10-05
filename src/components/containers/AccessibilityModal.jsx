import React, { useEffect, useState, useContext } from 'react';
import _ from 'lodash';
import { ShareContext } from 'context';
import { Modal } from 'components/core/';
import {
  AccessibilityModalHeader,
  AccessibilityModalBody,
  AccessibilityModalFooter,
} from 'components/modules';
import { data } from 'fakeData';
import { sortByFrequency, filterByQuery } from 'utils';

function AccessibilityModal() {
  const {
    isAccessibilityModalOpen,
    setIsAccessibilityModalOpen,
    userAndGroupsList,
    setUserAndGroupsList,
    activeSelections,
    setActiveSelections,
  } = useContext(ShareContext);
  const [query, setQuery] = useState('');

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

  // updates result according to searched text
  useEffect(() => {
    const clonedDataObject = _.cloneDeep(data);
    filterByQuery(query, clonedDataObject);
    setUserAndGroupsList(clonedDataObject);
  }, [query]);

  // handles tag deletion
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
        // adding back to list
        userAndGroupsList[removedItem.itemType].push(removedItem.item);
      }
      return [...prevActiveSelections];
    });
  };

  return (
    <Modal
      alignment="vertical"
      isOpen={isAccessibilityModalOpen}
      toggleModal={setIsAccessibilityModalOpen}
    >
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
