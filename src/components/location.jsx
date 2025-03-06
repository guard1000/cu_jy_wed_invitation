import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1733392898587",
    "key" : "2mfja",
    "mapWidth" : "720",
    "mapHeight" : "420"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />
      <Map
        id="daumRoughmapContainer1733392898587"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <Content>
        서울특별시 영등포구 여의도공원로 101
        <br />
        CCMM빌딩 12층 루나미엘레 컨벤션홀
        <br />
        <br />
        <Title>🚌 셔틀버스 운행 🚌</Title>
        <br />
        <br />
        5호선&9호선 여의도역 3번 출 앞
        <br />
        <br />
        <Title>🚍 버스 이용시 🚍</Title> 
        <br />
        <br />
        여의도공원 환승센터 하차 (여의 공원 건너편 CCMM빌딩)
        <br />
        일반버스: 10, 11-1, 11-2, 83, 88, 510, 5012, 5618, 5623, 6623, 6628, 5615, 6513, 6654
        <br />
        간선버스: 160, 162, 260, 261, 262, 360, 600, 662
        <br />
        좌석버스: 301, 320, 871, 5609, 8600, 8601, 8601A, G6001
        <br />
        <br />
        여의도 순복음교회 하차 (여의도 공원 방향 200M)
        <br />
        일반버스: 10, 1002, 5534, 5615, 5618, 5633, 5713, 6623, 7613
        <br />
        간선버스: 261, 461, 463, 753
        <br />
        좌석버스: 108, 7007-1
        <br />
        <br />
        <Title>🚇 지하철 이용시 🚇</Title>
        <br />
        <br />
        5호선 여의나루역 하차 (1번 출구 도보 10분)
        <br />
        9호선 국회의사당역 하차 (3번 출구 도보 6분)
      </Content>
    </Wrapper>
  );
};

export default Location;
