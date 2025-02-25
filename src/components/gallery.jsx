import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/gallery_p_1.jpeg";
import GalleryPhoto2 from "../assets/gallery_p_2.jpeg";
import GalleryPhoto3 from "../assets/gallery_p_3.jpeg";
import GalleryPhoto4 from "../assets/gallery_p_4.jpeg";
import GalleryPhoto5 from "../assets/gallery_p_5.jpeg";
import GalleryPhoto6 from "../assets/gallery_p_6.jpeg";
import GalleryPhoto7 from "../assets/gallery_p_7.jpeg";
import GalleryPhoto8 from "../assets/gallery_p_8.jpeg";
import GalleryPhoto9 from "../assets/gallery_p_9.jpeg";
import GalleryPhoto10 from "../assets/gallery_p_10.jpeg";
import GalleryPhoto11 from "../assets/gallery_p_11.jpeg";
import GalleryPhoto12 from "../assets/gallery_p_12.jpeg";
import GalleryPhoto13 from "../assets/gallery_p_13.jpeg";
import GalleryPhoto14 from "../assets/gallery_p_14.jpeg";
import GalleryPhoto15 from "../assets/gallery_p_15.jpeg";
import GalleryPhoto16 from "../assets/gallery_p_16.jpeg";
import GalleryPhoto17 from "../assets/gallery_p_17.jpeg";
import GalleryPhoto18 from "../assets/gallery_p_18.jpeg";
import GalleryPhoto19 from "../assets/gallery_p_19.jpeg";


const Wrapper = styled.div`
  padding-top: 42px;
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11,
  },
  {
    original: GalleryPhoto12,
    thumbnail: GalleryPhoto12,
  },
  {
    original: GalleryPhoto13,
    thumbnail: GalleryPhoto13,
  },
  {
    original: GalleryPhoto14,
    thumbnail: GalleryPhoto14,
  },
  {
    original: GalleryPhoto15,
    thumbnail: GalleryPhoto15,
  },
  {
    original: GalleryPhoto16,
    thumbnail: GalleryPhoto16,
  },
  {
    original: GalleryPhoto17,
    thumbnail: GalleryPhoto17,
  },
  {
    original: GalleryPhoto18,
    thumbnail: GalleryPhoto18,
  },
  {
    original: GalleryPhoto19,
    thumbnail: GalleryPhoto19,
  },
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 순간들</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
