import styled from "@emotion/styled"

export const TransactionTable = styled.table`
display: table;
width: 400px;
border-collapse: collapse;
margin: auto;
border-radius: 10px;
`

export const TransactionHead = styled.thead`
background-color: SteelBlue;
color: white;
height: 40px;
font-size: 20px;
text-align: center;
border-radius: 5px;
border: 1px solid grey;
`
export const HeadTable = styled.th`
border: 1px solid grey;
`
export const StringTransaction = styled.tr`
height: 40px;
font-size: 20px;
color: grey;
:nth-of-type(2n) {
	background-color: LightBlue;
}
border: 1px solid grey;
`
export const DataTable = styled.td`
padding-left: 10px;
text-aling: left;
border: 1px solid grey;`