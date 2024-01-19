import { ProfileCard, Avatar, UserDescription, UserName, UserTag, Location, StatsList, StatsListItem, StatsName, StatsValue } from "./Profile.styled";

export const UserInfo = ({ user }) => {
    return <ProfileCard>
  <UserDescription>
    <Avatar
        src={user.avatar}
        alt={user.username}
    />
    <UserName>{user.username}</UserName>
    <UserTag>@{user.tag}</UserTag>
    <Location>{user.location}</Location>
  </UserDescription>

  <StatsList>
    <StatsListItem>
      <StatsName>Followers</StatsName>
      <StatsValue>{user.stats.followers}</StatsValue>
    </StatsListItem>
    <StatsListItem>
      <StatsName>Views</StatsName>
      <StatsValue>{user.stats.views}</StatsValue>
    </StatsListItem>
    <StatsListItem>
      <StatsName>Likes</StatsName>
      <StatsValue>{user.stats.likes}</StatsValue>
    </StatsListItem>
  </StatsList>
</ProfileCard>
}