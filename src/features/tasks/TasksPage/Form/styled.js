import styled from 'styled-components'

export const FormContainer = styled.form`
  background-color: #fff;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Button = styled.button`
  flex-basis: 20%;
  background-color: teal;
  color: #fff;
  padding: 13px;
  border: unset;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background-color: rgb(3, 192, 192);
    transform: scale(1.1);
  }
  @media (max-width: 767px) {
    flex-basis: 100%;
    padding: 10px;
  }
`
