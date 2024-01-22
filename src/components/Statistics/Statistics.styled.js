import styled from "styled-components";
const getBgColor = props => {
    switch (props.$label) {
        case ".docx":
            return '#51C3F7';
        case ".pdf":
            return "#A43CF3";
        case ".mp3":
            return "#E64C66";
        case ".psd":
            return "#20B8C5";
        default:
            return "lightgray";
    }
}
export const StatisticsCard = styled.section`
    width: 400px;
    box-shadow: 2px 2px 15px lightgray;
`
export const StatisticsHeader = styled.h2`
    text-transform: uppercase;
    text-align: center;
    color: gray;
    margin-bottom: 30px;
    margin-top: 30px;
`
export const StatisticsList = styled.ul`
    display: flex;
`
export const StatisticsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100px;
    height: 100px;
    background: ${getBgColor};
    color: white;
`