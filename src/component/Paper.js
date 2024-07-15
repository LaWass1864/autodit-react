import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Header from './Header';
import Note from './Note';
import Section from './Section';
import Page from './Page';


// composition des pages
// déclaration variable pour le mode mobile
const Paper = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  return (
    <div className="w-full max-w-4xl mx-auto">
      {isMobile ? (
        <div className="vertical-scroll">
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
      ) : (
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
      )}
    </div>
  );
};

export default Paper;
