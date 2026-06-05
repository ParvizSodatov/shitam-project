import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import {
  EnvironmentOutlined,
  GlobalOutlined,
  TranslationOutlined,
  StarOutlined,
  ArrowRightOutlined,
  HistoryOutlined,
  CompassOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const MW: React.CSSProperties = { maxWidth: 1400, margin: '0 auto', width: '100%' };

const FACTS = [
  { key: 'region',   Icon: EnvironmentOutlined, color: '#10b981' },
  { key: 'country',  Icon: GlobalOutlined,      color: '#0ea5e9' },
  { key: 'language', Icon: TranslationOutlined, color: '#f59e0b' },
  { key: 'religion', Icon: StarOutlined,        color: '#8b5cf6' },
];

export const AboutPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden" style={{ height: '60vh', minHeight: 380 }}>
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=85"
          alt="" className="w-full h-full object-cover hero-bg" style={{ objectPosition: 'center 65%' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg,rgba(0,0,0,.85) 0%,rgba(0,0,0,.2) 60%,transparent 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-14" style={MW}>
          <p className="font-heading font-bold uppercase text-emerald-400 mb-3" style={{ fontSize: 10, letterSpacing: '0.45em' }}>
            {t('about.subtitle')}
          </p>
          <h1 className="font-heading font-black text-white" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', lineHeight: 1 }}>
            {t('about.title')}
          </h1>
        </div>
      </div>

      {/* ── Intro lead ── */}
      <div style={{ ...MW, padding: '72px 32px 0' }}>
        <p className="font-heading" style={{ fontSize: 'clamp(1.3rem,2.6vw,1.9rem)', lineHeight: 1.5, color: '#1c1917', fontWeight: 600, maxWidth: 900 }}>
          Маленькое село в сердце Памира, где время течёт медленнее, а традиции хранятся веками.
        </p>
      </div>

      {/* ── History + Location cards ── */}
      <div style={{ ...MW, padding: '48px 32px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="about-cards">
          {/* History */}
          <div style={{ background: '#fff', border: '1px solid #ececec', borderRadius: 24, padding: '40px 44px', boxShadow: '0 4px 24px rgba(0,0,0,.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HistoryOutlined style={{ fontSize: 20, color: '#059669' }} />
              </div>
              <h2 className="font-heading font-bold text-stone-900" style={{ fontSize: 20 }}>{t('about.history_title')}</h2>
            </div>
            <p className="text-stone-500" style={{ fontSize: 16, lineHeight: 1.8 }}>{t('about.history_text')}</p>
          </div>

          {/* Location */}
          <div style={{ background: '#0a0a0a', borderRadius: 24, padding: '40px 44px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(14,165,233,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CompassOutlined style={{ fontSize: 20, color: '#38bdf8' }} />
              </div>
              <h2 className="font-heading font-bold text-white" style={{ fontSize: 20 }}>{t('about.location_title')}</h2>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#9ca3af' }}>{t('about.location_text')}</p>
            <Button
              type="primary"
              size="large"
              ghost
              onClick={() => navigate('/directions')}
              icon={<EnvironmentOutlined />}
              style={{ marginTop: 24, borderColor: '#38bdf8', color: '#38bdf8', fontWeight: 600 }}
            >
              Как добраться
            </Button>
          </div>
        </div>
      </div>

      {/* ── Facts ── */}
      <div style={{ ...MW, padding: '32px 32px 64px' }}>
        <p className="font-heading font-bold uppercase text-stone-400 mb-6" style={{ fontSize: 10, letterSpacing: '0.4em' }}>
          {t('about.facts_title')}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }} className="facts-grid">
          {FACTS.map(({ key, Icon, color }) => (
            <div
              key={key}
              style={{ background: '#fafafa', border: '1px solid #f0f0f0', borderRadius: 20, padding: '28px 24px', transition: 'all .3s' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,.08)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${color}1a`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <Icon style={{ fontSize: 22, color }} />
              </div>
              <p className="font-heading font-bold uppercase" style={{ fontSize: 9, letterSpacing: '0.25em', color: '#a8a29e', marginBottom: 8 }}>{key}</p>
              <p className="font-heading font-semibold text-stone-900" style={{ fontSize: 15, lineHeight: 1.4 }}>{t(`about.facts.${key}`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA strip ── */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: 280 }}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(0,0,0,.88) 0%, rgba(0,0,0,.55) 60%, rgba(0,0,0,.3) 100%)' }} />
        <div style={{ ...MW, padding: '64px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 28, position: 'relative' }}>
          <div>
            <p className="font-heading font-bold uppercase" style={{ fontSize: 10, letterSpacing: '0.42em', color: '#6ee7b7', marginBottom: 12 }}>ОТКРОЙТЕ ДЛЯ СЕБЯ</p>
            <h3 className="font-heading font-black text-white" style={{ fontSize: 'clamp(1.6rem,3.2vw,2.6rem)', lineHeight: 1.15, marginBottom: 10 }}>
              Красота Памира
            </h3>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 15 }}>Природа, культура и гостеприимство Шитама ждут вас</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button type="primary" size="large" onClick={() => navigate('/nature')} icon={<CompassOutlined />}
              style={{ background: '#fff', borderColor: '#fff', color: '#0f0f0f', fontWeight: 700, height: 50, paddingInline: 28, fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.08em', borderRadius: 8 }}>
              {t('nav.nature')}
            </Button>
            <Button size="large" ghost onClick={() => navigate('/gallery')} icon={<ArrowRightOutlined />}
              style={{ borderColor: 'rgba(255,255,255,.45)', color: '#fff', fontWeight: 700, height: 50, paddingInline: 28, fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.08em', borderRadius: 8 }}>
              {t('nav.gallery')}
            </Button>
          </div>
        </div>
      </div>

      {/* ── Photo strip ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', height: '35vh', minHeight: 200 }}>
        {[
          'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=700&q=80',
          'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=700&q=80',
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80',
        ].map((src, i) => (
          <div key={i} className="overflow-hidden group">
            <img src={src} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </div>
  );
};
