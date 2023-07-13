import './CarouselImage.css';

export default function CarouselImage({ text }) {
  return (
    <div class="image-wrapper">
      <img src={text} alt="carousel-img" />
    </div>
  );
}
