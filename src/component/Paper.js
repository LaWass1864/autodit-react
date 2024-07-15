import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Header from './Header';
import Note from './Note';
import Section from './Section';
import Page from './Page';
import Projets from './Projets';
import Exercice4 from './Exercice4';


// Composition des pages
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
          {/* Page 1 */}
          <Page pageNumber={1} pageNumberStyle={pageNumberStyle} pageNumberClass={pageNumberClass} className="page">
            <Header />
            <Note />
            <Section start={0} end={0} /> {/* Exercice 1 */}
          </Page>
          {/* Page 2 */}
          <Page pageNumber={2} pageNumberStyle={pageNumberStyle} pageNumberClass={pageNumberClass} className="page">
            <Section start={1} end={1} /> {/* Exercice 2 */}
          </Page>
          {/* Page 3 */}
          <Page pageNumber={3} pageNumberStyle={pageNumberStyle} pageNumberClass={pageNumberClass} className="page">
            <Section start={2} end={2} /> {/* Exercice 3 */}
            <Projets /> {/* Projets */}
          </Page>
          {/* Page 4 */}
          <Page pageNumber={4} pageNumberStyle={pageNumberStyle} pageNumberClass={pageNumberClass} className="page">
            <Section start={3} end={3} /> {/* Exercice 4 */}
            <Exercice4 /> {/* Contact */}
          </Page>
        </div>
      ) : (
        <Slider {...settings}>
          {/* Page 1 */}
          <Page pageNumber={1} pageNumberStyle={pageNumberStyle} pageNumberClass={pageNumberClass}>
            <Header />
            <Note />
            <Section start={0} end={1} /> {/* Exercice 1 et Exercice 2 */}
          </Page>
          {/* Page 2 */}
          <Page pageNumber={2} pageNumberStyle={pageNumberStyle} pageNumberClass={pageNumberClass}>
            <Section start={2} end={2} /> {/* Exercice 3 */}
            <div className="desktop-exercice3">
              <Projets /> {/* Projets */}
            </div>
          </Page>
          {/* Page 3 */}
          <Page pageNumber={3} pageNumberStyle={pageNumberStyle} pageNumberClass={pageNumberClass}>
            <Section start={3} end={3} /> {/* Exercice 4 */}
            <div className="desktop-exercice4">
              <Exercice4 /> {/* Contact */}
            </div>
          </Page>
        </Slider>
      )}
    </div>
  );
};

export default Paper;
