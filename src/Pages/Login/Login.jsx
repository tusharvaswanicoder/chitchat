import React from "react";
import Button from "../../Components/Button/Button";
import {
  Container,
  Content,
  Logo,
  Heading,
  Form,
  InputGroup,
  InputGroupHeading,
  InputGroupInputBox,
  ChangePage,
  Inputs,
} from "./styles";

function Login() {
  return (
    <Container>
      <Content>
        <Logo src="./assets/images/logo.webp" />
        <Heading>Sign in to Chitchat</Heading>
        <Form>
          <Inputs>
            <InputGroup>
              <InputGroupHeading>Enter email</InputGroupHeading>
              <InputGroupInputBox />
            </InputGroup>
            <InputGroup>
              <InputGroupHeading>Enter password</InputGroupHeading>
              <InputGroupInputBox />
            </InputGroup>
          </Inputs>
          <Button text="login" />
          <ChangePage>Forgot Password</ChangePage>
          <ChangePage href="/signup">No account? Signup now</ChangePage>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;
