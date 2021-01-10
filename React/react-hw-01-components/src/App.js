import React from 'react';
import Profile from './components/Profile/Profile';
import userArr from './database/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './database/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './database/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import items from './database/transactions.json';

import './App.css';

function App() {
  return (
    <>
      <Profile
        name={userArr.name}
        tag={userArr.tag}
        location={userArr.location}
        avatar={userArr.avatar}
        stats={userArr.stats}
      />
      <Statistics title='upload stats' stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </>
  );
}

export default App;
