import React from 'react';
import Slider from 'react-slick';
import Header from './Header';
import Note from './Note';
import Section from './Section';
import Page from './Page';


// composition des pages
const Paper = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  // pagination 
  const pageNumberStyle = {
    fontSize: '16px',
    color: 'var(--custom-red)',
    fontWeight: 'bold',
  };

  const pageNumberClass = 'custom-page-number';

  const isMobile = window.innerWidth <= 600;

  if (isMobile) {
    return (
      <div className="w-full max-w-4xl mx-auto vertical-scroll">
        {/* page 1 */}
        <Page pageNumber={1} pageNumberStyle={pageNumberStyle} pageNumberClass={pageNumberClass} className="page">
          <Header />
          <Note />
          <Section start={0} end={1} />
        </Page>
        {/* page 2 */}
        <Page pageNumber={2} pageNumberStyle={pageNumberStyle} pageNumberClass={pageNumberClass} className="page">
          <Section start={2} end={2} />
        </Page>
        {/* page 3 */}
        <Page pageNumber={3} pageNumberStyle={pageNumberStyle} pageNumberClass={pageNumberClass} className="page">
          <Section start={3} end={3} />
        </Page>
      </div>
    );
  } else {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <Slider {...settings}>
          {/* page 1 */}
          <Page pageNumber={1} pageNumberStyle={pageNumberStyle} pageNumberClass={pageNumberClass}>
            <Header />
            <Note />
            <Section start={0} end={1} />
          </Page>
          {/* page 2 */}
          <Page pageNumber={2} pageNumberStyle={pageNumberStyle} pageNumberClass={pageNumberClass}>
            <Section start={2} end={2} />
          </Page>
          {/* page 3 */}
          <Page pageNumber={3} pageNumberStyle={pageNumberStyle} pageNumberClass={pageNumberClass}>
            <Section start={3} end={3} />
          </Page>
        </Slider>
      </div>
    );
  }
};

export default Paper;
