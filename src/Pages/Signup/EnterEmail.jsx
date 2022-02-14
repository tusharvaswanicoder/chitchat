import {
  InputGroup,
  InputGroupHeading,
  InputGroupInputBox,
  Inputs,
} from "./styles";

function EnterEmail({ setData }) {
  return (
    <Inputs>
      <InputGroup>
        <InputGroupHeading>Enter email</InputGroupHeading>
        <InputGroupInputBox
          type="email"
          onKeyUp={(e) => {
            setData((data) => {
              return { ...data, email: e.target.value };
            });
          }}
        />
      </InputGroup>
    </Inputs>
  );
}

export default EnterEmail;
