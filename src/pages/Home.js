import { useContext, useEffect, useState } from 'react';
import { HomeFirstSlides } from '../components/home/HomeFirstSlides';
import HomeSecondSlides from '../components/home/HomeSecondSlides';
import { apiContext } from '../context/ApiContext';

const Home = () => {
  const { furnituresFirstSlides, furnituresSecondSlides } =
    useContext(apiContext);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        currentSlide === furnituresFirstSlides.length - 1 ? 0 : currentSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, furnituresFirstSlides.length]);

  return (
    <>
      <HomeFirstSlides
        furnituresFirstSlides={furnituresFirstSlides}
        currentSlide={currentSlide}
      />

      <HomeSecondSlides furnituresSecondSlides={furnituresSecondSlides} />
    </>
  );
};

export default Home;
