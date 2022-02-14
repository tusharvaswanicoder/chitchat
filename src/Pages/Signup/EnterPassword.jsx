import { useState } from "react";
import {
  InputGroup,
  InputGroupHeading,
  InputGroupInputBox,
  PasswordNotMatches,
  Inputs,
} from "./styles";

function EnterEmail({ setData, data }) {
  const [passwordMatches, setPaswwordMatches] = useState(true);
  let matchPassword = (e) => {
    setPaswwordMatches(e.target.value === data.password);
  };
  return (
    <>
      <Inputs>
        <InputGroup>
          <InputGroupHeading>Strong Password</InputGroupHeading>
          <InputGroupInputBox
            type="password"
            onKeyUp={(e) => {
              setData((data) => {
                return { ...data, password: e.target.value };
              });
              matchPassword(e);
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroupHeading>Confirm Password</InputGroupHeading>
          <InputGroupInputBox
            type="password"
            onKeyUp={matchPassword}
            passwordMatches={passwordMatches}
          />
        </InputGroup>
      </Inputs>
      <PasswordNotMatches display={!passwordMatches}>
        Password does not match
      </PasswordNotMatches>
    </>
  );
}

export default EnterEmail;
