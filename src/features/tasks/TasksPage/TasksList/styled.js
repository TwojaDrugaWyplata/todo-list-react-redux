import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const List = styled.ul`
  background-color: #fff;
  min-height: 70px;
  margin: 0;
  padding: 20px;
  list-style: none;
`

export const Item = styled.li`
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  margin: 10px;
  color: #fff;
  font-weight: bold;
  transition: 1s;
`
export const CheckButton = styled(Button)`
  background-color: green;

  &:hover {
    background-color: rgb(0, 223, 0);
  }
`

export const DeleteButton = styled(Button)`
  background-color: red;
  justify-self: flex-end;

  &:hover {
    background-color: rgb(255, 111, 111);
  }
`

export const Content = styled.span`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ taskDone }) =>
    taskDone &&
    css`
      text-decoration: line-through;
    `}
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: teal;
    transition: 0.3s;
    &:hover {
      color: rgb(10, 218, 218);
    }
`;
