import styled from "@emotion/styled"

export const StatisticsSection = styled.section`
margin: auto;
display: inline;
justify-content: center;
text-align: center;
height: 60px;
width: 400px;
`

export const HeadStatistic = styled.h2`
font-size: 32px;
text-align: center;`

export const ListStatistics = styled.ul`
list-style: none;
display: flex;
gap: 20px;
justify-content: center;`

export const ItemStatics = styled.li`
text-align: center;`

export const StaticsLabel = styled.span`
display: block;
text-align: center;
font-size: 20px;
font-weight: bold;
`

export const StaticsPercentage = styled.span`
text-align: center;
font-size: 20px;
`
//Колір фону елемента статистики в оформленні можна пропустити або створити функцію для генерації випадкового кольору.
////display: inline-block; display: block;