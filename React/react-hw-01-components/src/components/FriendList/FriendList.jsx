import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import FriendListStyles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={FriendListStyles['friend-list']}>
      {friends.map((friend) => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
};
FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
