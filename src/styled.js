import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.nav`
  background-color: teal;
`;
export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 15px;
`;
export const NavigationListItem = styled.li`
  margin-left: 20px;
  margin-right: 20px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName: "active",
}))`
  color: #fff;
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
`;
