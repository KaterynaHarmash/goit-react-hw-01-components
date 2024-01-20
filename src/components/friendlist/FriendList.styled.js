import styled from "styled-components";
const isOnlineColor = props => {
    switch (props.$status) {
        case true:
            return 'green';
        case false:
            return "red";
        default:
            return "lightgray";
    }
}
export const ListOfFriends = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const FriendItem = styled.li`
    width: 250px;
    box-shadow: 2px 2px 15px lightgray;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
`
export const FriendStatus = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${isOnlineColor};
`
export const Avatar = styled.img`
    display: block;
`
export const Name = styled.p`
    color: #6f6f6f;
    font-weight: bold;
    font-size: 24px;
`