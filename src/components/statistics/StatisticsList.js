import { StatisticsList, StatisticsItem } from "./Statistics.styled"
export const StatList = ({ data }) => {
  return <StatisticsList>
    {data.map(item => (
        <StatisticsItem key={item.id} $label={ item.label }>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
        </StatisticsItem>
    ))}
  </StatisticsList>}