import { StatList } from "./StatisticsList"
import { StatisticsCard, StatisticsHeader } from "./Statistics.styled"
export const Statistics = ({ title, stats }) => {
    return <StatisticsCard>
        {title && <StatisticsHeader>{title}</StatisticsHeader>}
        <StatList data={stats} />
    </StatisticsCard>
}
