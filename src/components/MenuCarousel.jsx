import { useState } from 'react';

function MenuCarousel({ images = [], altText = '' }) {
  const [index, setIndex] = useState(0);
  const count = images.length || 0;

  if (count === 0) {
    return <div style={{ height: 180, background: '#efeaea' }} />;
  }

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <div className="carousel" style={{ position: 'relative' }}>
      <img src={images[index]} alt={altText} />
      {count > 1 && (
        <>
          <button
            aria-label="Anterior"
            onClick={prev}
            style={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.4)',
              color: '#fff',
              border: 'none',
              padding: '0.5rem',
              borderRadius: '999px',
              cursor: 'pointer',
            }}
          >
            ‹
          </button>
          <button
            aria-label="Próximo"
            onClick={next}
            style={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.4)',
              color: '#fff',
              border: 'none',
              padding: '0.5rem',
              borderRadius: '999px',
              cursor: 'pointer',
            }}
          >
            ›
          </button>
        </>
      )}
      {count > 1 && (
        <div
          className="carousel-indicators"
          style={{
            position: 'absolute',
            bottom: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 6,
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para ${i + 1}`}
              onClick={() => setIndex(i)}
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                border: 'none',
                background: i === index ? '#fff' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuCarousel;
