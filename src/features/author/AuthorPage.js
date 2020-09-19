import React from "react";
import Section from "../../common/Section";
import Container from "../../common/Container";
import "../../fontello/css/fontello.css";
import profile from "../../kd.jpg";
import { AuthorDescribeContainer, Img, AuthorDescribe } from "./styled";

export default () => (
  <Container>
    <h1>O autorce</h1>
    <Section
      title="Kamila Duda"
      body={
        <AuthorDescribeContainer>
          <Img src={profile}></Img>
          <AuthorDescribe>
            W 2019 roku podjęłam decyzję o przebranżowieniu się w kierunku
            programowania. Zaczęłam od nauki języka <b>HTML</b>, potem poznałam{" "}
            <b>CSS</b> i odrobinę <b>JavaScript</b>, którego uczę się obecnie na
            kursie YouCode :) Znam <b>Bootstrapa</b>, odrobinę <b>PHP</b> oraz{" "}
            <b>MySQL</b>. Każdego dnia systematycznie pogłębiam swoją wiedzę z
            książek, kursów online, blogów, stron internetowych. Robię własne
            projekty, dzięki którym utrwalam to co już poznałam oraz uczę się
            nowych zagadnień.
          </AuthorDescribe>
        </AuthorDescribeContainer>
      }
    />
  </Container>
);
