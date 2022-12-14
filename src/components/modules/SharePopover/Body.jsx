import React, { useContext } from 'react';
import { ShareContext } from 'context';
import { Button, ProfileIcon } from 'components/core';
import { ThreeColumnDataBox } from 'components/layout';
import { AccessLevelMenu } from 'components/modules';
import { groupByType } from 'utils';

const Body = () => {
  const { setIsAccessibilityModalOpen, selectedUserAndRoles } =
    useContext(ShareContext);
  // grouping data according to it's type
  const shareData = groupByType(selectedUserAndRoles) || [];

  return (
    <div className="share-popover__body">
      <div className="share-popover__body--input-container">
        <input
          type="text"
          className="share-popover__body--input-box"
          placeholder="People, emails, groups"
          onClick={() => setIsAccessibilityModalOpen(true)}
          onChange={() => setIsAccessibilityModalOpen(true)}
        />
        <Button className="share-popover__body--invite-button">Invite</Button>
      </div>

      {/* Renders all workspaces by default  */}
      {shareData['workspaces']?.length !== 0
        ? shareData['workspaces']?.map(({ item, accessLevel }, index) => {
            return (
              <ThreeColumnDataBox
                key={index}
                icon={
                  <ProfileIcon
                    location={item.profileImage}
                    type="person"
                    name={item.name}
                    className="profile-icon--large"
                  />
                }
                title={`Everyone in ${item.name}`}
                description={` ${item.membersCount} group members`}
                actionButton={
                  <AccessLevelMenu
                    defaultAccessLevel={accessLevel}
                    entityType={'workspaces'}
                    email={''}
                    name={item.name}
                  />
                }
              />
            );
          })
        : null}

      {/* Renders all selected groups  */}
      {shareData['groups']?.length !== 0
        ? shareData['groups']?.map(({ item, accessLevel }, index) => {
            return (
              <ThreeColumnDataBox
                key={index}
                icon={
                  <ProfileIcon
                    location={item.profileImage}
                    type="group"
                    name={item.name}
                    className="profile-icon--large"
                  />
                }
                title={`Everyone in ${item.name}`}
                description={` ${item.membersCount} group members`}
                actionButton={
                  <AccessLevelMenu
                    defaultAccessLevel={accessLevel}
                    entityType={'groups'}
                    email={''}
                    name={item.name}
                  />
                }
              />
            );
          })
        : null}

      {/* Renders all selected persons  */}
      {shareData['persons']?.length !== 0
        ? shareData['persons']?.map(({ item, accessLevel }, index) => {
            return (
              <ThreeColumnDataBox
                key={index}
                icon={
                  <ProfileIcon
                    location={item.profileImage}
                    type="person"
                    name={item.name}
                    className="profile-icon--large"
                  />
                }
                title={item.name}
                description={item.email}
                actionButton={
                  <AccessLevelMenu
                    defaultAccessLevel={accessLevel}
                    entityType={'persons'}
                    email={item.email}
                    name={item.name}
                  />
                }
              />
            );
          })
        : null}
    </div>
  );
};

export default Body;
