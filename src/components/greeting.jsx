import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 90%;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.72rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">초대합니다</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up">
        뜨거운 여름 햇살 아래,
        <br />
        <br />
        저희 두 사람이 사랑으로 결실을 맺으려 합니다.
        <br />
        <br />
        오셔서 앞날을 축복해 주시면 감사하겠습니다.
      </Content>
      <GroomBride data-aos="fade-up">
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀 {BRIDE_NAME}
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
