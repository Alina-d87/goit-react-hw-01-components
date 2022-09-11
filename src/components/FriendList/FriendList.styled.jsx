import styled from "@emotion/styled"

export const Friends = styled.ul`
display: block;
margin: auto;
justify-content: center;
list-style: none;
`

export const OneFriends = styled.li`
display: flex;
height: 100px;
width: 400px;
`
export const StatusFriend = styled.span`
justify-content: center;
margin: auto;
color: green;
`
export const AvatarFriend = styled.img`
justify-content: center;
margit-top: 10px;
height: 80px;
width: 100px;
`
export const NameFriend = styled.p`
justify-content: center;
text-aling: center;
font-size: 32px;
`

//import { IconContext } from "react-icons";

//<IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
//  <div>
//    <FaFolder />
//  </div>
//</IconContext.Provider>
//Залежно від пропа isOnline, повинен змінюватися колір фону span.status. Це можна зробити за допомогою різних CSS-класів або Styled Components.