import { StatisticsCard, StatisticsHeader, StatisticsList, StatisticsItem  } from "./Statistics.styled"
export const Statistics = ({ title, stats }) => {
    return <StatisticsCard>
        {title && <StatisticsHeader>{title}</StatisticsHeader>}
        <StatisticsList>
            {stats.map(({id,label,percentage}) => (
                <StatisticsItem key={id} $label={ label }>
                    <span>{label}</span>
                    <span>{percentage}%</span>
                </StatisticsItem>
            ))}
        </StatisticsList>
    </StatisticsCard>
}
