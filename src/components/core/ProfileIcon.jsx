import React from 'react';

const ProfileIcon = ({ type, className, name, location, ...restProps }) => {
  const getImageClassName = (type) => {
    const profileTypes = {
      person: 'icon-circle',
      group: 'icon-square',
      workspace: 'icon-circle',
    };
    const iconClassName = profileTypes[type?.toLowerCase()] || '';
    return `profile-icon ${iconClassName} ${className ? className : ''}`;
  };
  return (
    <div className={getImageClassName(type)}>
      {' '}
      {location ? (
        <img src={location} alt="" height="100%" width="100%" />
      ) : (
        name.charAt(0)
      )}
    </div>
  );
};

export default ProfileIcon;
