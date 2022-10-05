import React, { createContext, useState, useLayoutEffect } from 'react';
import { data } from 'fakeData';

export const ShareContext = createContext({});

const accessLevels = ['Full access', 'Can edit', 'Can view', 'No access'];
export const ShareContextProvider = ({ children }) => {
  const [isAccessibilityModalOpen, setIsAccessibilityModalOpen] =
    useState(false);
  const [userAndGroupsList, setUserAndGroupsList] = useState(data);
  const [selectedUserAndRoles, setSelectedUserAndRoles] = useState([]);
  const [activeSelections, setActiveSelections] = useState([]);
  const [activeAccessLevel, setActiveAccessLevel] = useState(accessLevels[0]);
  const [shareToWeb, setShareToWeb] = useState(false);

  // move selected items from activeSelections to selectedUserAndRoles
  // resets activeSelections
  const saveSelections = () => {
    activeSelections.forEach(
      (selection) => (selection.accessLevel = activeAccessLevel)
    );
    setSelectedUserAndRoles((prevSelectedUsersAndRoles) => {
      return [...prevSelectedUsersAndRoles, ...activeSelections];
    });
    setActiveSelections([]);
  };

  // update access level
  const updateAccessLevel = (newAccessLevel, type, email, name) => {
    if (!type) {
      // update access level called from accessibility modal
      setActiveAccessLevel(newAccessLevel);
    } else {
      // update access level called from share popover
      const targetedItemIndex = selectedUserAndRoles.findIndex(
        (selectedItem) => {
          return (
            selectedItem.itemType === type &&
            (selectedItem.item.email === email ||
              selectedItem.item.name === name)
          );
        }
      );
      if (targetedItemIndex > -1) {
        setSelectedUserAndRoles((prevSelectedUserAndRoles) => {
          prevSelectedUserAndRoles[targetedItemIndex].accessLevel =
            newAccessLevel;
          return [...prevSelectedUserAndRoles];
        });
      }
    }
  };

  // loads the workspaces in user share popover be default
  useLayoutEffect(() => {
    const userWorkspaces = userAndGroupsList['workspaces'];
    setSelectedUserAndRoles(
      userWorkspaces.map((workspace) => {
        return {
          itemType: 'workspaces',
          item: { ...workspace },
          accessLevel: accessLevels[0],
        };
      })
    );
  }, []);

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
    shareToWeb,
    setShareToWeb,
  };
  return (
    <ShareContext.Provider value={value}>{children}</ShareContext.Provider>
  );
};
