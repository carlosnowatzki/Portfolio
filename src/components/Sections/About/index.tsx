import { Container } from "styles/globals";
import * as S from "./styles";

import Title from "components/UI/Title";
import useAnimateOnScroll from "hooks/useAnimateOnScroll";

const AboutSection = () => {
  const myCurrentAge = new Date().getFullYear() - 1 - 2003;
  const elementRef = useAnimateOnScroll();

  return (
    <S.AboutSection id="about" ref={elementRef}>
      <Container>
        <Title>About</Title>

        <S.AboutTexts>
          My name is Carlos Nowatzki, I’m from Brazil and I’m 19 years
          old.
        </S.AboutTexts>
        <S.AboutTexts>
        To be honest I can't say when I really started to like programming, I just know that it came out of nowhere in my life! Previously my hobby was playing soccer, I was an active member of several clubs, i was member of the following teams : Novo Hamburgo, Aimoré, Juventude, Ivoti and lastly Grêmio.
        </S.AboutTexts>
        <S.AboutTexts>
        Last year I started in college and my computer engineering course. I'm not very curious about the method used to encompass electrical engineering with programming, for some people who dont know, computer engineering is the union of electrical engineering with computer science.
        </S.AboutTexts>
        <S.AboutTexts>
        As I mentioned earlier, I didn’t really like college, so I made the switch to computer science where I’m really enjoying the course. I started in 2020 to work in an e-commerce company where talking to several programmers from the company that I really started to make progress in my field of learning.
        </S.AboutTexts>
        <S.AboutTexts>
        In this portfolio I aim to show my applications that I uploaded to my Github, I am very grateful to my friend Caio, who gave me the opportunity to learn from this portfolio!
        </S.AboutTexts>
        <S.AboutTexts>
        If you want to have a friendship with me just call me to play  ( ͡° ͜ʖ ͡°) # ▄︻̷̿┻̿═━一 {" "} 
          <a
            href="https://www.ubisoft.com/pt-br/game/rainbow-six/siege"
            target="_blank"
            title="Rainbow Six Siege"
            rel="noopener"
          >
            Rainbow Six Siege
          </a>
          .
        </S.AboutTexts>
        <S.AboutTexts>
          I work as Front-end developer using techs like{" "}
          <a
            href="https://pt-br.reactjs.org/"
            target="_blank"
            title="React.js's documentation"
            rel="noopener"
          >
            React.js
          </a>
          ,{" "}
          <a
            href="https://www.php.net/"
            target="_blank"
            title="PHP documentation"
            rel="noopener"
          >
            PHP
          </a>
          ,{" "}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            title="Documentation of TypeScript"
            rel="noopener"
          >
            TypeScript
          </a>
          ,{" "}
          <a
            href="https://testing-library.com/docs/react-testing-library/intro/"
            target="_blank"
            title="Documentation of React Testing Library"
            rel="noopener"
          >
            React Testing Library
          </a>{" "}
          and more.
        </S.AboutTexts>
      </Container>
    </S.AboutSection>
  );
};

export default AboutSection;
