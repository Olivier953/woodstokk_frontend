import React from 'react';
import Button from '../../utils/Button';

export const HomeFirstSlides = ({ furnituresFirstSlides, currentSlide }) => {
  return (
    <div className="furnituresSlides">
      {furnituresFirstSlides.map((item, index) => {
        return (
          <div
            className={
              index === currentSlide
                ? 'furnituresSlides_slide furnituresSlides_slide_current'
                : 'furnituresSlides_slide'
            }
            style={{ transition: '0.5s' }}
            key={item.id}
          >
            <div className="furnituresSlides_content">
              <h2 className="furnituresSlides_content_title">
                {item.fields.name}
              </h2>
              <Button
                className="furnituresSlides_content_btn"
                label="Shop now"
              />
            </div>
            <img
              className="furnituresSlides_picture"
              src={item.fields.image[0].url}
              alt={furnituresFirstSlides.fields?.name}
            />
          </div>
        );
      })}
    </div>
  );
};
