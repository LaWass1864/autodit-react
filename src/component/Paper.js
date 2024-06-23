import React from 'react';
import Slider from 'react-slick';
import Header from './Header';
import Note from './Note';
import Section from './Section';
import Page from './Page';

const Paper = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Slider {...settings}>
        <Page>
          <Header />
          <Note />
          <Section start={0} end={1} />
        </Page>
        <Page>
          <Section start={2} end={2} />
        </Page>
      </Slider>
    </div>
  );
};

export default Paper;
