import { FriendItem, FriendStatus, Avatar, Name } from "./FriendList.styled"

export const FriendListItem = ({isOnline,avatar,name}) => {
    return <FriendItem>
            <FriendStatus $status={isOnline}></FriendStatus>
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
        </FriendItem>
}