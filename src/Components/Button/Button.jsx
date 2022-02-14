import { Container, Content } from "./styles";

function Button({ style, text, link, onClick }) {
  return (
    <Container style={style} onClick={onClick} href={link}>
      <Content>{text}</Content>
    </Container>
  );
}

export default Button;
