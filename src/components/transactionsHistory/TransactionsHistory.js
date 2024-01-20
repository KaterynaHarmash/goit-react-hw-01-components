import { TransactionRows } from "./TransactionsRows"
import { TransactionsHistoryHeader, TransactionsTable, } from "./TransactionsHistory.styled"
export const TransactionHistory = ({ items }) => {
    return <TransactionsTable>
        <thead>
            <tr>
            <TransactionsHistoryHeader>Type</TransactionsHistoryHeader>
            <TransactionsHistoryHeader>Amount</TransactionsHistoryHeader>
            <TransactionsHistoryHeader>Currency</TransactionsHistoryHeader>
            </tr>
        </thead>
        <tbody>
            <TransactionRows items={ items } />
        </tbody>
    </TransactionsTable>
    
}