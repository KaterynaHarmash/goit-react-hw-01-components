import user from "./path/to/user.json";
import data from './path/to/data.json';

import { GlobalStyle } from "./GlobalStyle";

import {Profile } from "./user_profile/Profile";
import { Statistics } from "./statistics/Statistics";

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
    </div>
  );
};
