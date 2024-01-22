import { ListOfFriends } from "./FriendList.styled";
import { FriendListItem } from "./FriendsListItems";
export const FriendList = ({ friends }) => {
    
    return <ListOfFriends>
        {friends.map(({avatar,name,isOnline,id}) =><FriendListItem key={id} isOnline={ isOnline } avatar={ avatar } name={ name }/>)}
    </ListOfFriends>
 }