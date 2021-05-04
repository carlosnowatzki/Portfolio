import { Link } from "react-scroll";
import * as S from "./styles";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <S.Wrapper>
      <S.Links>
        <S.LinksWrapper>
          <li>
            <Link
              to="about"
              spy={true}
              smooth="easeInOutQuart"
              duration={1000}
              activeClass="active"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              spy={true}
              smooth="easeInOutQuart"
              duration={1000}
              activeClass="active"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/carlos-miguel-8b75b51b5/" target="_blank" rel="noopener">
              Linkedin
            </a>
          </li>
        </S.LinksWrapper>
      </S.Links>
      <S.Copyright>© {currentDate} - Carlos Nowatzki</S.Copyright>
    </S.Wrapper>
  );
};

export default Footer;
