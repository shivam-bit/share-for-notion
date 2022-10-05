import React, { useEffect, useReducer } from 'react';
import { ProfileIcon } from 'components/core';
import { useKeyPress } from 'hooks';
import { flattenForNavigation } from 'utils';

const initialState = { selectedIndex: -1 };

let navigationalArray;

const reducer = (state, action) => {
  switch (action.type) {
    case 'arrowUp':
      return {
        selectedIndex:
          state.selectedIndex !== 0 && state.selectedIndex !== -1
            ? state.selectedIndex - 1
            : navigationalArray.length - 1,
      };
    case 'arrowDown':
      return {
        selectedIndex:
          state.selectedIndex !== navigationalArray.length - 1
            ? state.selectedIndex + 1
            : 0,
      };
    case 'select':
      return { selectedIndex: action.payload };
    default:
      throw new Error();
  }
};

const Body = ({ data, addToActiveSelection }) => {
  // custom hooks for key detection
  const arrowUpPressed = useKeyPress('ArrowUp');
  const arrowDownPressed = useKeyPress('ArrowDown');
  const [keypressState, keypressDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (arrowUpPressed) {
      keypressDispatch({ type: 'arrowUp' });
    }
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed) {
      keypressDispatch({ type: 'arrowDown' });
    }
  }, [arrowDownPressed]);

  useEffect(() => {
    const item =
      keypressState.selectedIndex >= 0 &&
      navigationalArray[keypressState.selectedIndex];
    const activeNode = document.getElementById(item?.id);
    if (activeNode && document.activeElement !== activeNode) {
      // focus that node so that tab navigation can continue from it
      activeNode?.focus();
    }
    activeNode?.scrollIntoView();
  }, [keypressState]);

  // updates keypressState using Tab navigation
  const updateSelectedIndex = (itemNodeId) => {
    keypressDispatch({ type: 'select', payload: itemNodeId });
  };

  const addItemToShare = (itemType, itemIndex, item) => {
    navigationalArray.slice(itemIndex, 1);
    addToActiveSelection({
      itemType,
      item,
    });
  };

  // flattens the fakeData object to create a 1D array that supports navigation
  navigationalArray = flattenForNavigation(data);

  return (
    <div className="accessibility-modal__body">
      {/* Renders all persons */}
      {data.persons.length != 0 ? (
        <div className="accessibility-modal-list">
          <div className="accessibility-modal-list__header">
            Select a person
          </div>
          <ul className="accessibility-modal-list__items-container">
            {data.persons.map((person, index) => (
              <div
                key={index}
                className="accessibility-modal-list__item"
                id={person.id}
                role="button"
                tabIndex={0}
                onFocus={() => updateSelectedIndex(index)}
                onClick={() => {
                  addItemToShare('persons', index, person);
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addItemToShare('persons', index, person);
                    e.target.blur();
                  }
                }}
              >
                <ProfileIcon
                  location={person.profileImage}
                  type="person"
                  name={person.name}
                />
                {person.name}
              </div>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Renders all groups */}
      {data.groups.length != 0 ? (
        <div className="accessibility-modal-list">
          <div className="accessibility-modal-list__header">Select a group</div>
          <ul className="accessibility-modal-list__items-container">
            {data.groups.map((group, index) => (
              <div
                key={index}
                className="accessibility-modal-list__item"
                id={group.id}
                role="button"
                tabIndex={0}
                onFocus={() =>
                  // take persons array length into consideration calculate final index position in navigation array.
                  updateSelectedIndex(
                    index + (data.persons.length != 0 ? data.persons.length : 0)
                  )
                }
                onClick={() => {
                  addItemToShare('groups', index, group);
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    // take persons array length into consideration calculate final index position in navigation array.
                    addItemToShare(
                      'groups',
                      index +
                        (data.persons.length != 0 ? data.persons.length : 0),
                      group
                    );
                    e.target.blur();
                  }
                }}
              >
                <ProfileIcon
                  location={group.profileImage}
                  type="group"
                  name={group.name}
                />
                {group.name}
              </div>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Body;
