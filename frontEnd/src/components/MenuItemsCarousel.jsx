import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MenuItemCard({ item }) {
  const images = item.images?.length ? item.images : item.image ? [item.image] : [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentImage = images[selectedIndex];

  return (
    <article className="menu-item-card">
      {currentImage && (
        <img
          className="menu-item-card__main-image"
          src={currentImage}
          alt={`${item.name} imagem ${selectedIndex + 1}`}
        />
      )}

      <div className="menu-item-card__content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <span>{item.price}</span>

        {images.length > 1 && (
          <div className="image-selector">
            {images.map((src, index) => (
              <button
                key={src + index}
                type="button"
                className={`image-selector__button ${index === selectedIndex ? 'active' : ''}`}
                onClick={() => setSelectedIndex(index)}
                aria-label={`Ver imagem ${index + 1} de ${item.name}`}
              >
                <img src={src} alt={`${item.name} miniatura ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function MenuItemsCarousel({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="menu-items-carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.name}>
            <MenuItemCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MenuItemsCarousel;
