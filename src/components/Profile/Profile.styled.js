import styled from "styled-components";

export const ProfileCard = styled.div`
    width: 350px;
    box-shadow: 0px 1px 20px #ededed;
    padding: 40px 0 0 0;
    background: #e5f3ff;
`
export const Avatar = styled.img`
    display:block;
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
`
export const UserDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    margin-bottom: 30px;
    padding: 0 20px;
`
export const UserName = styled.p`
    font-size: 24px;
    font-weight: 700;
`
export const UserTag = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: gray;
`
export const Location = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: gray;
`
export const StatsList = styled.ul`
    padding: 10px 20px;
    display:flex;
    background: #bccddb;
    height: 50px;
    justify-content: space-between;
    text-align: center;
`
export const StatsListItem = styled.li`
    width: calc(350px / 3);
    display: flex;
    flex-direction: column;
`
export const StatsName = styled.span`
    font-size: 16px;
    color: #99a6b0;
    font-weight: 700;
`
export const StatsValue = styled.span`
    font-size: 22px;
    color: #5e6871;
    font-weight: 700;
`