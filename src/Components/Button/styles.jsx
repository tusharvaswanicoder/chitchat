import styled from "styled-components";

export const Container = styled.a`
  color: #fff;
`;

export const Content = styled.div`
  background: var(--primary);
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  transition: 0.2s background;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  line-height: 1.15;
  text-transform: uppercase;
  &:hover {
    background: var(--primary-dark);
  }
`;
