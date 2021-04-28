import React from "react";
import {
  DivFooter,
  ImgPokemon,
  DivImg,
  DivText,
  Title,
  Copyright,
  DivContainer
} from "./footerStyles";
import evee from "../../images/evee.png";
import sudo from "../../images/sudo.png";
import swinub from "../../images/swinub.png";

const Footer = () => {
  return (
    <DivFooter>
      <DivContainer>
      <DivImg>
        <ImgPokemon src={evee} />
        <ImgPokemon src={sudo} />
        <ImgPokemon src={swinub} />
      </DivImg>

      <DivText>
        <section>
          <Title>Desenvolvedores:</Title>
          <p>Danielle Costa</p>
          <p>Gabriel Musse</p>
          <p>Lucas Bacelar</p>
        </section>
      </DivText>
      </DivContainer>
      <Copyright>Copyright © 2020</Copyright>
    </DivFooter>
  );
};
export default Footer;
