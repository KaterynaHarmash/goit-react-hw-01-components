import { ProfileCard, Avatar, UserDescription, UserName, UserTag, Location, StatsList, StatsListItem, StatsName, StatsValue } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <ProfileCard>
  <UserDescription>
    <Avatar
        src={avatar}
        alt={username}
    />
    <UserName>{username}</UserName>
    <UserTag>@{tag}</UserTag>
    <Location>{location}</Location>
  </UserDescription>

  <StatsList>
    <StatsListItem>
      <StatsName>Followers</StatsName>
      <StatsValue>{stats.followers}</StatsValue>
    </StatsListItem>
    <StatsListItem>
      <StatsName>Views</StatsName>
      <StatsValue>{stats.views}</StatsValue>
    </StatsListItem>
    <StatsListItem>
      <StatsName>Likes</StatsName>
      <StatsValue>{stats.likes}</StatsValue>
    </StatsListItem>
  </StatsList>
</ProfileCard>
}