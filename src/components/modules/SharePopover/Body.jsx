import React from 'react';
import { Button, ProfileIcon } from 'components/core';
import { ThreeColumnDataBox } from 'components/layout';
const Body = () => {
  return (
    <div className="share-popover__body">
      <div className="share-popover__body--input-container">
        <input
          type="text"
          className="share-popover__body--input-box"
          placeholder="People, emails, groups"
        />
        <Button className="share-popover__body--invite-button">Invite</Button>
      </div>

      <ThreeColumnDataBox
        icon={
          <ProfileIcon
            location="workspaces/oslash-workspace.svg"
            type="person"
            name={'person.name'}
            className="profile-icon--large"
          />
        }
        title={`Everyone at ${'Oslash'}`}
        description={` ${'25'} workspace members`}
        actionButton={<div>asa</div>}
      />
      <ThreeColumnDataBox
        icon={
          <ProfileIcon
            location="workspaces/oslash-workspace.svg"
            type="person"
            name={'person.name'}
            className="profile-icon--large"
          />
        }
        title={`Everyone at ${'Oslash'}`}
        description={` ${'25'} workspace members`}
        actionButton={<div>asa</div>}
      />
    </div>
  );
};

export default Body;
