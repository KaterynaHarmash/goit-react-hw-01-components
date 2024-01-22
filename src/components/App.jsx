import user from "../path/to/user.json";
import data from '../path/to/data.json';
import friends from '../path/to/friends.json';
import transactions from '../path/to/transactions.json';

import { GlobalStyle } from "./GlobalStyle";

import {Profile } from "Profile/Profile.js";
import { Statistics } from "Statistics/Statistics.js";
import { FriendList } from "Friendlist/FriendList.js";
import { TransactionHistory } from "TransactionsHistory/TransactionsHistory.js"

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        gap: '30px',
        padding: "50px"
      }}
    ><GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
