import {
  InputGroup,
  InputGroupHeading,
  InputGroupInputBox,
  Inputs,
} from "./styles";

function EnterName({ setData }) {
  return (
    <>
      <Inputs>
        <InputGroup>
          <InputGroupHeading>First Name</InputGroupHeading>
          <InputGroupInputBox
            onKeyUp={(e) => {
              setData((data) => {
                return { ...data, firstName: e.target.value };
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroupHeading>Last Name</InputGroupHeading>
          <InputGroupInputBox
            onKeyUp={(e) => {
              setData((data) => {
                return { ...data, lastName: e.target.value };
              });
            }}
          />
        </InputGroup>
      </Inputs>
    </>
  );
}

export default EnterName;
