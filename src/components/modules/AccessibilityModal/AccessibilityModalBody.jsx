import React, { useRef, useEffect, useReducer } from 'react';
import _ from 'lodash';
import { Button, ProfileIcon } from 'components/core';
import { useKeyPress } from 'hooks';

const initialState = { selectedIndex: 0 };
let navigationalArray;
const reducer = (state, action) => {
  switch (action.type) {
    case 'arrowUp':
      return {
        selectedIndex:
          state.selectedIndex !== 0
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

const constructNavigationArray = (data) => {
  const result = [];
  Object.keys(data).forEach((objectType) => {
    data[objectType].forEach((a, index) => {
      a.id = `${objectType}-${index}`;
    });

    result.push(...data[objectType]);
  });
  return result;
};

const AccessibilityModalBody = ({ data, children, ...restProps }) => {
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
    const item = navigationalArray[keypressState.selectedIndex];
    const activeNode = document.getElementById(item.id);
    activeNode?.classList.add('accessibility-modal-list__item--active');
    activeNode?.scrollIntoView();
    return () => {
      activeNode?.classList.remove('accessibility-modal-list__item--active');
    };
  }, [keypressState]);

  console.log(keypressState);

  navigationalArray = constructNavigationArray(data);

  return (
    <div className="accessibility-modal__body">
      {data.persons.length != 0 ? (
        <div className="accessibility-modal-list">
          <div className="accessibility-modal-list__header">
            Select a person
          </div>
          <ul className="accessibility-modal-list__items-container">
            {data.persons.map(({ name, profileImage, id }, index) => (
              <li
                key={index}
                className="accessibility-modal-list__item"
                id={id}
              >
                <ProfileIcon
                  location={profileImage}
                  type="person"
                  name={name}
                />
                {name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {data.groups.length != 0 ? (
        <div className="accessibility-modal-list">
          <div className="accessibility-modal-list__header">Select a group</div>
          <ul className="accessibility-modal-list__items-container">
            {data.groups.map(({ name, profileImage, id }, index) => (
              <li
                key={index}
                className="accessibility-modal-list__item"
                id={id}
              >
                <ProfileIcon location={profileImage} type="group" name={name} />
                {name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default AccessibilityModalBody;
