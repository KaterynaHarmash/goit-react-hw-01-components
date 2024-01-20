import { FriendItem, FriendStatus, Avatar, Name } from "./FriendList.styled"

export const Friends = ({ data }) => {

    return data.map(friend => <FriendItem key={friend.id}>
            <FriendStatus $status={friend.isOnline}>{friend.isOnline}</FriendStatus>
            <Avatar src={friend.avatar} alt={friend.name} width="48" />
            <Name>{friend.name}</Name>
        </FriendItem>)
}