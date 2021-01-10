import React from 'react';
import PropTypes from 'prop-types';
import FriendListItemStyles from './FriendListItem.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={FriendListItemStyles.Item}>
      <span
        className={
          isOnline
            ? FriendListItemStyles.StatusIsOnline
            : FriendListItemStyles.StatusIsOfline
        }></span>
      <img
        className={FriendListItemStyles.Avatar}
        src={avatar}
        alt=''
        width='48'
      />
      <p className={FriendListItemStyles.Name}>{name}</p>
    </li>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
