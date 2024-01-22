import { TransactionsHistoryHeader, TransactionsTable, TransactionsCol, TransactionsRow } from "./TransactionsHistory.styled"
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
            {items.map(({id,type,amount,currency}) =><TransactionsRow key={id}>
                    <TransactionsCol>{type}</TransactionsCol>
                    <TransactionsCol>{amount}</TransactionsCol>
                    <TransactionsCol>{currency}</TransactionsCol>
                </TransactionsRow>
            )}
        </tbody>
    </TransactionsTable>
    
}