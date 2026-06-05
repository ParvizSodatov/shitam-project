import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { PictureOutlined } from '@ant-design/icons';

const CARDS = [
  {
    to: '/about',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85',
    tag: 'О СЕЛЕ',
    titleKey: 'home.sections.about_title',
    descKey: 'home.sections.about_desc',
  },
  {
    to: '/nature',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=85',
    tag: 'ПРИРОДА',
    titleKey: 'home.sections.nature_title',
    descKey: 'home.sections.nature_desc',
  },
  {
    to: '/people',
    img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900&q=85',
    tag: 'КУЛЬТУРА',
    titleKey: 'home.sections.culture_title',
    descKey: 'home.sections.culture_desc',
  },
];

export const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="bg-white">

      {/* ─── HERO — full screen, живой фон ─── */}
      <section className="relative overflow-hidden" style={{ height: '100vh', minHeight: 600 }}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90"
          alt="Памир"
          className="hero-bg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        {/* плывущее свечение заката */}
        <div className="sky-glow" />
        {/* плывущие облака */}
        <div className="clouds-layer" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,.1) 0%,rgba(0,0,0,.45) 50%,rgba(0,0,0,.82) 100%)' }} />

        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px' }}>
          <p className="anim-up font-heading font-semibold uppercase text-emerald-300 mb-6"
            style={{ fontSize: 11, letterSpacing: '0.45em' }}>
            Горно-Бадахшанская автономная область · Таджикистан
          </p>
          <h1
            className="anim-up anim-up-2 font-heading font-black text-white uppercase"
            style={{ fontSize: 'clamp(4rem,12vw,10rem)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 20, textShadow: '0 4px 60px rgba(0,0,0,.45)' }}
          >
            {t('home.hero_title')}
          </h1>
          <p
            className="anim-up anim-up-3 font-heading font-light text-white/70"
            style={{ fontSize: 'clamp(1rem,2vw,1.5rem)', fontStyle: 'italic', marginBottom: 36 }}
          >
            {t('home.hero_subtitle')}
          </p>
          <div className="anim-up anim-up-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              size="large"
              ghost
              onClick={() => navigate('/gallery')}
              icon={<PictureOutlined />}
              style={{ borderColor: 'rgba(255,255,255,.55)', color: '#fff', fontWeight: 700, height: 52, paddingInline: 36, fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: 12, borderRadius: 999 }}
            >
              {t('nav.gallery')}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '60px 24px 28px', background: 'linear-gradient(0deg,rgba(0,0,0,.7) 0%,transparent 100%)' }}>
          <div style={{ maxWidth: 560, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', textAlign: 'center' }}>
            {[
              { v: 'home.stats.altitude_val', l: 'home.stats.altitude' },
              { v: 'home.stats.region_val',   l: 'home.stats.region'   },
              { v: 'home.stats.language_val', l: 'home.stats.language' },
            ].map(({ v, l }) => (
              <div key={l}>
                <p className="font-heading font-bold text-white" style={{ fontSize: 'clamp(1.1rem,2.5vw,1.8rem)' }}>{t(v)}</p>
                <p className="font-heading" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginTop: 4 }}>{t(l)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="intro-section" style={{ maxWidth: 1400, margin: '0 auto', padding: '80px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}
          className="intro-grid">
          <div>
            <p className="font-heading font-bold uppercase text-emerald-600" style={{ fontSize: 10, letterSpacing: '0.4em', marginBottom: 16 }}>О МЕСТЕ</p>
            <h2 className="font-heading font-black text-stone-900" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', lineHeight: 1.15, marginBottom: 20 }}>
              Деревня на краю небес
            </h2>
            <p className="text-stone-500" style={{ fontSize: 17, lineHeight: 1.75, marginBottom: 28 }}>
              Шитам — жемчужина Памира, где вековые традиции шугнанского народа живут рядом с суровой красотой высокогорья. Здесь небо кажется ближе, а воздух чище.
            </p>
            <Link
              to="/about"
              className="font-heading font-bold uppercase text-emerald-700"
              style={{ fontSize: 12, letterSpacing: '0.18em', borderBottom: '2px solid #059669', paddingBottom: 2, textDecoration: 'none' }}
            >
              Узнать больше →
            </Link>
          </div>
          <div className="intro-img" style={{ height: 380, borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,.12)' }}>
            <img
              src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=85"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ─── CARDS — реально full width, 3 колонки без пустот ─── */}
      <section className="home-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 3 }}>
        {CARDS.map(card => (
          <Link
            key={card.to}
            to={card.to}
            style={{ position: 'relative', display: 'block', height: '62vh', minHeight: 340, overflow: 'hidden', textDecoration: 'none' }}
            className="group"
          >
            <img
              src={card.img}
              alt=""
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .7s ease' }}
              className="group-hover:scale-105"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(0,0,0,.88) 0%,rgba(0,0,0,.06) 60%,transparent 100%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 36px' }}>
              <p className="font-heading font-bold uppercase text-emerald-400" style={{ fontSize: 9, letterSpacing: '0.4em', marginBottom: 8 }}>{card.tag}</p>
              <h3 className="font-heading font-bold text-white" style={{ fontSize: 'clamp(1.1rem,1.8vw,1.5rem)', lineHeight: 1.3, marginBottom: 8 }}>{t(card.titleKey)}</h3>
              <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, lineHeight: 1.6, marginBottom: 20, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{t(card.descKey)}</p>
              <span className="font-heading font-bold uppercase group-hover:text-emerald-400" style={{ fontSize: 10, letterSpacing: '0.3em', color: 'rgba(255,255,255,.3)', transition: 'color .3s' }}>
                {t('home.sections.read_more')} →
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* ─── QUOTE ─── */}
      <section style={{ background: '#0f0f0f', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(5,150,105,.07) 0%, transparent 65%)' }} />
        <p style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontSize: 'clamp(1.25rem,2.8vw,2rem)', color: 'rgba(255,255,255,.82)', maxWidth: 780, margin: '0 auto', lineHeight: 1.65, position: 'relative' }}>
          «Место, где горы касаются неба, а время замедляется»
        </p>
        <div style={{ width: 36, height: 2, background: '#059669', margin: '32px auto 0', borderRadius: 9 }} />
      </section>

      {/* ─── GALLERY ─── */}
      <section className="gallery-section" style={{ background: '#f8f7f5', padding: '80px 40px 90px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* Header */}
          <div className="gallery-header" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40 }}>
            <div>
              <p className="font-heading font-bold uppercase text-emerald-600" style={{ fontSize: 10, letterSpacing: '0.4em', marginBottom: 10 }}>{t('gallery.title')}</p>
              <h2 className="font-heading font-black text-stone-900" style={{ fontSize: 'clamp(1.6rem,2.8vw,2.4rem)', lineHeight: 1.1 }}>{t('gallery.subtitle')}</h2>
            </div>
            <Link
              to="/gallery"
              className="font-heading font-bold uppercase group"
              style={{ fontSize: 11, letterSpacing: '0.18em', color: '#1c1917', border: '1.5px solid #1c1917', padding: '11px 24px', borderRadius: 999, textDecoration: 'none', transition: 'all .25s', flexShrink: 0, marginLeft: 24, display: 'flex', alignItems: 'center', gap: 7 }}
            >
              Все фото <span>→</span>
            </Link>
          </div>

          {/* Editorial grid: 1 large (2 rows) + 4 small */}
          <div className="gallery-editorial-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gridTemplateRows: '230px 230px', gap: 10 }}>
            {/* Featured */}
            <div style={{ gridRow: '1 / 3', borderRadius: 20, overflow: 'hidden', position: 'relative' }} className="group">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .7s ease' }}
                className="group-hover:scale-105"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(0,0,0,.55) 0%,transparent 55%)' }} />
              <span style={{ position: 'absolute', top: 18, right: 18, background: 'rgba(255,255,255,.15)', backdropFilter: 'blur(8px)', padding: '4px 11px', borderRadius: 999, fontSize: 11, color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, letterSpacing: '0.06em' }}>01</span>
              <p style={{ position: 'absolute', bottom: 22, left: 22, color: 'rgba(255,255,255,.7)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>Горные пейзажи</p>
            </div>
            {/* 4 small */}
            {[
              { src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&q=80', label: 'Звёздное небо' },
              { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=500&q=80', label: 'Культура' },
              { src: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=500&q=80', label: 'Природа' },
              { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80', label: 'Вершины' },
            ].map(({ src, label }, i) => (
              <div key={i} style={{ borderRadius: 16, overflow: 'hidden', position: 'relative' }} className="group gallery-editorial-small">
                <img src={src} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .7s ease' }} className="group-hover:scale-105" />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.2)', transition: 'background .3s' }} className="group-hover:[background:rgba(0,0,0,.1)]" />
                <span style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(255,255,255,.18)', backdropFilter: 'blur(6px)', padding: '3px 9px', borderRadius: 999, fontSize: 10, color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>0{i + 2}</span>
                <p style={{ position: 'absolute', bottom: 14, left: 14, color: 'rgba(255,255,255,.65)', fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, opacity: 0, transition: 'opacity .3s' }} className="group-hover:opacity-100!">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
