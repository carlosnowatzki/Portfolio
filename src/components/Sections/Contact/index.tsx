import Title from "components/UI/Title";
import Button from "components/UI/Button";

import * as S from "./styles";

import { Container } from "styles/globals";

const ContactSection = () => {
  return (
    <S.ContactSection id="contact">
      <Container>
        <Title>Contact</Title>

        <S.ContactMeText>
          If you want to carry out a project or chat with me, do not hesitate to
          send me an email:{" "}
          <a href="mailto:carlosmiguelnowaztki@outlook.com">carlosmiguelnowaztki@outlook.com</a>
        </S.ContactMeText>

        <a href="https://www.linkedin.com/in/carlos-miguel-8b75b51b5/" target="_blank" rel="noopener">
          <Button>Contact</Button>
        </a>
      </Container>
    </S.ContactSection>
  );
};

export default ContactSection;
