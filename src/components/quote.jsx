import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: "mom_to_daughter";
  text-align: center;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Quote = () => {
  return (
    <Wrapper>
      <Image src={Flower} data-aos="fade-up" />
      <Content data-aos="fade-up">
        서로의 이름을 부르는 것만으로도
        <br />
        사랑의 깊이를 확인할 수 있는 두 사람이
        <br />
        꽃과 나무처럼 걸어와서
        <br />
        서로의 모든 것이 되기 위해
        <br />
        오랜 기다림 끝에
        <br />
        혼례식을 치르는 날 세상은 더욱 아름다워라
        <br />
        <br />
        - 이해인, (사랑의 사람들이여) -
        <br />
        <br />
      </Content>
    </Wrapper>
  );
};

export default Quote;
