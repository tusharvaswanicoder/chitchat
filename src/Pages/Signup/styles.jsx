import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 720px;
`;

export const Logo = styled.img`
  width: 400px;
`;

export const Heading = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
`;

export const Form = styled.div``;

export const Inputs = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
  margin: 40px 0px;
`;

export const InputGroup = styled.div`
  position: relative;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #9e9e9e;
`;

export const InputGroupHeading = styled.div`
  position: absolute;
  background: #fff;
  padding: 0px 5px;
  top: -10px;
  left: 20px;
`;

export const InputGroupInputBox = styled.input`
  padding: 15px;
  width: 100%;
  border: 2px solid #dfe1e5;
  border-radius: 10px;
  transition: 0s border-color;
  &:hover {
    border-color: var(--primary);
  }
  &:focus {
    border-color: var(--primary);
  }
`;

export const ChangePage = styled.a`
  text-align: center;
  margin-top: 10px;
  padding: 15px;
  display: block;
  font-family: "Roboto";
  font-size: 16px;
  line-height: 1.15;
  font-weight: 400;
  color: var(--primary);
  border-radius: 10px;
  &:hover {
    background: var(--primary-light);
  }
`;

export const PasswordNotMatches = styled.div`
  color: red;
  display: ${(props) => (props.display ? "block" : "none")};
  margin-bottom: 20px;
`;
