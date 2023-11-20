import Link from "next/link";
import styled from "styled-components";

const NavBar = styled.nav`
  font-size: 1.5rem;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  bottom: 0; /* Stick to the bottom */
  background-color: #fff; /* Or any background color you prefer */
  padding: 10px; /* Optional, for better spacing */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); /* Optional, for better visual separation */
  z-index: 100; /* To ensure it stays above other content */
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export default function Navigation() {
  return (
    <NavBar>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">Art Pieces</StyledLink>
      <StyledLink href="/favorites">Favorites</StyledLink>
    </NavBar>
  );
}
