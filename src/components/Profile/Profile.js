import { ProfileCard, Avatar, UserDescription, UserName, UserTag, Location, StatsList, StatsListItem, StatsName, StatsValue } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats: {followers,views,likes} }) => {
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
      <StatsValue>{followers}</StatsValue>
    </StatsListItem>
    <StatsListItem>
      <StatsName>Views</StatsName>
      <StatsValue>{views}</StatsValue>
    </StatsListItem>
    <StatsListItem>
      <StatsName>Likes</StatsName>
      <StatsValue>{likes}</StatsValue>
    </StatsListItem>
  </StatsList>
</ProfileCard>
}