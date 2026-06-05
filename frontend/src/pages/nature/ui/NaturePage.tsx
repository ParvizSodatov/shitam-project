import { useTranslation } from 'react-i18next';

const MW = { maxWidth: 1400, margin: '0 auto', width: '100%' };

const ITEMS = [
  { key: 'mountains', num: '01', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1000&q=85', dark: false },
  { key: 'rivers',    num: '02', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=85', dark: true  },
  { key: 'sky',       num: '03', img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1000&q=85', dark: false },
];

export const NaturePage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ height: '60vh', minHeight: 380 }}>
        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=85" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg,rgba(0,0,0,.85) 0%,rgba(0,0,0,.2) 60%,transparent 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-12" style={MW}>
          <p className="font-heading font-bold uppercase text-sky-400 mb-3" style={{ fontSize: 10, letterSpacing: '0.45em' }}>{t('nature.subtitle')}</p>
          <h1 className="font-heading font-black text-white" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', lineHeight: 1 }}>{t('nature.title')}</h1>
        </div>
      </div>

      {/* Sections */}
      {ITEMS.map(({ key, num, img, dark }, i) => (
        <div key={key} style={{ background: dark ? '#0c0c0c' : '#fff', minHeight: '55vh' }}>
          <div className="nature-item-grid" style={{ ...MW, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 48, minHeight: 'inherit' }}>
            <div className={`nature-item-img relative overflow-hidden ${i % 2 === 1 ? 'order-last' : ''}`} style={{ minHeight: 300 }}>
              <img src={img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="nature-item-text flex flex-col justify-center px-12 py-16">
              <p className="nature-item-num font-heading font-black select-none mb-3" style={{ fontSize: 80, lineHeight: 1, color: dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.05)' }}>{num}</p>
              <h2 className={`font-heading font-bold mb-4 ${dark ? 'text-white' : 'text-stone-900'}`} style={{ fontSize: 'clamp(1.4rem,2.5vw,2.2rem)', lineHeight: 1.2 }}>
                {t(`nature.${key}_title`)}
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: dark ? '#9ca3af' : '#6b7280' }}>{t(`nature.${key}_desc`)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
