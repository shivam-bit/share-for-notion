import React, { createContext, useState, useEffect } from 'react';
import { data } from 'fakeData';

export const ShareContext = createContext({});

export const ShareContextProvider = ({ children }) => {
  const accessLevels = ['Full access', 'Can edit', 'Can view', 'No access'];
  const [isAccessibilityModalOpen, setIsAccessibilityModalOpen] =
    useState(false);
  const [userAndGroupsList, setUserAndGroupsList] = useState(data);
  const [selectedUserAndRoles, setSelectedUserAndRoles] = useState([]);
  const [activeSelections, setActiveSelections] = useState([]);
  const [activeAccessLevel, setActiveAccessLevel] = useState(accessLevels[0]);

  const saveSelections = () => {
    activeSelections.forEach(
      (selection) => (selection.accessLevel = activeAccessLevel)
    );
    setSelectedUserAndRoles((prevSelectedUsersAndRoles) => {
      return [...prevSelectedUsersAndRoles, ...activeSelections];
    });
    setActiveSelections([]);
  };

  const updateAccessLevel = (newAccessLevel, type, email, name) => {
    if (!type) {
      setActiveAccessLevel(newAccessLevel);
    } else {
      const targetedItemIndex = selectedUserAndRoles.findIndex(
        (selectedItem) => {
          return (
            selectedItem.itemType === type &&
            (selectedItem.item.email === email ||
              selectedItem.item.name === name)
          );
        }
      );
      console.log({ targetedItemIndex });
      if (targetedItemIndex > -1) {
        setSelectedUserAndRoles((prevSelectedUserAndRoles) => {
          prevSelectedUserAndRoles[targetedItemIndex].accessLevel =
            newAccessLevel;
          return [...prevSelectedUserAndRoles];
        });
      }
    }
  };

  const value = {
    isAccessibilityModalOpen,
    setIsAccessibilityModalOpen,
    userAndGroupsList,
    setUserAndGroupsList,
    activeSelections,
    setActiveSelections,
    selectedUserAndRoles,
    setSelectedUserAndRoles,
    saveSelections,
    activeAccessLevel,
    setActiveAccessLevel,
    updateAccessLevel,
  };
  return (
    <ShareContext.Provider value={value}>{children}</ShareContext.Provider>
  );
};
