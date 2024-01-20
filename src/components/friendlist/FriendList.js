import { ListOfFriends } from "./FriendList.styled";
import { Friends } from "./FriendsListItems";
export const FriendList = ({ friends }) => {
    
    return <ListOfFriends>
        <Friends data={ friends } />
    </ListOfFriends>
 }