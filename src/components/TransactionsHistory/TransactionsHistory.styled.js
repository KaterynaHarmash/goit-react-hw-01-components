import styled from "styled-components";

export const TransactionsTable = styled.table`
    width: 300px;
    text-align: left;
    border-collapse: collapse;
    font-weight: bold;
	font-size: 13px;
	border: 1px solid #54585d;
`
export const TransactionsHistoryHeader = styled.th`
    background-color: #54585d;
	color: #ffffff;
    height: 40px;
    padding: 5px;
`
export const TransactionsRow = styled.tr`
    height: 40px;
    background-color: #ebecec;
    &:nth-child(odd) {
        background-color: #ffffff;
    }
`
export const TransactionsCol = styled.td`
    padding: 5px;
`