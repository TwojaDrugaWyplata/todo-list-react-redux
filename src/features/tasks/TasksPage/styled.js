import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Button = styled.button`
color: teal;
cursor: pointer;
background-color: transparent;
border: none;
font-size: 15px;
transition: 1s;
&:hover{
  color: rgb(10, 218, 218);
}
&:disabled{
  color: gray;
}
`