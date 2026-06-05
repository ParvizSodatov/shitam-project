import { useTranslation } from 'react-i18next';

const MW = { maxWidth: 1400, margin: '0 auto', width: '100%' };

const ITEMS = [
  { key: 'shughni',    img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000&q=85', dark: true  },
  { key: 'traditions', img: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1000&q=85', dark: false },
  { key: 'ismaili',    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&q=85', dark: true  },
];

export const PeoplePage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ height: '60vh', minHeight: 380 }}>
        <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&q=85" alt="" className="w-full h-full object-cover" style={{ objectPosition: 'center 30%' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg,rgba(0,0,0,.85) 0%,rgba(0,0,0,.2) 60%,transparent 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-12" style={MW}>
          <p className="font-heading font-bold uppercase text-amber-400 mb-3" style={{ fontSize: 10, letterSpacing: '0.45em' }}>{t('people.subtitle')}</p>
          <h1 className="font-heading font-black text-white" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', lineHeight: 1 }}>{t('people.title')}</h1>
        </div>
      </div>

      {/* Sections */}
      {ITEMS.map(({ key, img, dark }, i) => (
        <div key={key} style={{ background: dark ? '#0c0c0c' : '#fff', minHeight: '55vh' }}>
          <div style={{ ...MW, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 48, minHeight: 'inherit' }}>
            <div className={`relative overflow-hidden ${i % 2 === 1 ? 'order-last' : ''}`} style={{ minHeight: 300 }}>
              <img src={img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,.15)' }} />
            </div>
            <div className="flex flex-col justify-center px-12 py-16">
              <h2 className={`font-heading font-bold mb-5 ${dark ? 'text-white' : 'text-stone-900'}`} style={{ fontSize: 'clamp(1.4rem,2.5vw,2.2rem)', lineHeight: 1.2 }}>
                {t(`people.${key}_title`)}
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: dark ? '#9ca3af' : '#6b7280' }}>{t(`people.${key}_desc`)}</p>
              <div style={{ width: 32, height: 2, background: '#059669', marginTop: 28 }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
