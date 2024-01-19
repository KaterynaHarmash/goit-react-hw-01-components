import user from "./user.json";
import { UserInfo } from "./user_profile/Profile";
import { GlobalStyle } from "./GlobalStyle";
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    ><GlobalStyle />
      <UserInfo user={user}/>
    </div>
  );
};
