import { TransactionsCol, TransactionsRow } from "./TransactionsHistory.styled"
export const TransactionRows = ({ items }) => {
    return items.map(item => {
        return <TransactionsRow key={item.id}>
            <TransactionsCol>{ item.type }</TransactionsCol>
            <TransactionsCol>{ item.amount }</TransactionsCol>
            <TransactionsCol>{ item.currency }</TransactionsCol>
        </TransactionsRow>
    })
}