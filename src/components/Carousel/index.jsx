/**
 * @fileoverview File that provides a carousel element and animation to the gallery container.
 */

/** Hooks */
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "images/okinawafoto1.jpg",
    altText: "Portão do Castelo Shuri",
    caption: "Shureimon",
    key: 1,
  },
  {
    src: "images/okinawafoto4.jpg",
    altText: "Novos karatecas sendo formados",
    caption: "Troca de faixa",
    key: 2,
  },
  {
    src: "images/okinawafoto3.jpg",
    altText: "Importância cultural em Okinawa",
    caption: "Apresentação numa avenida",
    key: 3,
  },
];

function CarouselContainer({ args, className }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className={className}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionHeader={item.caption}
          captionText={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      fade
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarouselContainer;
