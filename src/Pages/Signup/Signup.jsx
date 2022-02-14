import { useState } from "react";
import Button from "../../Components/Button/Button";
import EnterEmail from "./EnterEmail";
import EnterName from "./EnterName";
import EnterPassword from "./EnterPassword";
import ProfilePic from "./ProfilePic";
import { Container, Content, Logo, Heading, Form, ChangePage } from "./styles";

function Login() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    profilePic: "",
    email: "",
    password: "",
  });
  const steps = [
    <EnterName setData={setData} />,
    <EnterEmail setData={setData} />,
    <EnterPassword setData={setData} data={data} />,
  ];
  return (
    <Container>
      <Content>
        <Logo src="./assets/images/logo.webp" />
        <Heading>Sign up to Chitchat</Heading>
        <Form>
          {steps[step]}
          <Button
            text={step < steps.length - 1 ? "Next" : "Signup"}
            onClick={() => {
              step === steps.length - 1 ? (() => {})() : setStep(step + 1);
            }}
          />
          <Button
            text="Back"
            onClick={() => {
              if (step !== 0) {
                setStep(step - 1);
              }
            }}
            style={{ marginTop: "20px" }}
          />
          <ChangePage href="/login">Already got an account? Login</ChangePage>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;
