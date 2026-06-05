import { useTranslation } from 'react-i18next';

const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=85', tall: true  },
  { src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=85',  tall: false },
  { src: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=85',  tall: false },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85',  tall: false },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=85',  tall: false },
  { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000&q=85', tall: true  },
];

export const GalleryPage = () => {
  const { t } = useTranslation();

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '100px 32px 80px' }}>
        <p className="font-heading font-bold uppercase text-emerald-400" style={{ fontSize: 10, letterSpacing: '0.5em', marginBottom: 16 }}>{t('gallery.title')}</p>
        <h1 className="font-heading font-black text-white" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', lineHeight: 1, marginBottom: 48 }}>
          {t('gallery.subtitle')}
        </h1>

        <div className="columns-1 sm:columns-2 lg:columns-3" style={{ gap: 12 }}>
          {PHOTOS.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl break-inside-avoid" style={{ marginBottom: 12, cursor: 'pointer' }}>
              <img
                src={p.src} alt=""
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${p.tall ? 'aspect-3/4' : 'aspect-video'}`}
              />
              <div className="absolute inset-0 rounded-2xl" style={{ background: 'rgba(0,0,0,0)', transition: 'background .3s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,.15)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0)')}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
