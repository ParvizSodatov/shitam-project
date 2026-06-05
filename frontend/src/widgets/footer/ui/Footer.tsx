import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EnvironmentOutlined, GlobalOutlined, CopyrightOutlined } from '@ant-design/icons';

const MW: React.CSSProperties = { maxWidth: 1400, margin: '0 auto', width: '100%' };

export const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { to: '/about',      k: 'nav.about'      },
    { to: '/nature',     k: 'nav.nature'     },
    { to: '/gallery',    k: 'nav.gallery'    },
    { to: '/people',     k: 'nav.people'     },
    { to: '/directions', k: 'nav.directions' },
  ];

  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,.06)' }}>
      <div style={{ ...MW, padding: '80px 32px 48px' }}>

        {/* Top */}
        <div
          className="footer-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: 48, marginBottom: 64 }}
        >
          {/* Brand */}
          <div>
            <p className="font-heading font-black text-white" style={{ fontSize: 30, letterSpacing: '0.2em', marginBottom: 16 }}>
              ШИТАМ
            </p>
            <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.8, maxWidth: 300 }}>
              {t('footer.desc')}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 22, color: '#9ca3af' }}>
              <EnvironmentOutlined style={{ fontSize: 14, color: '#10b981' }} />
              <span style={{ fontSize: 13 }}>ГБАО, Таджикистан</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-heading font-bold uppercase" style={{ color: '#4b5563', fontSize: 10, letterSpacing: '0.4em', marginBottom: 22 }}>
              Навигация
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {links.map(({ to, k }) => (
                <NavLink
                  key={to}
                  to={to}
                  className="footer-link font-heading font-medium"
                  style={({ isActive }) => ({
                    fontSize: 14,
                    color: isActive ? '#10b981' : '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color .2s',
                    width: 'fit-content',
                  })}
                >
                  {t(k)}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="font-heading font-bold uppercase" style={{ color: '#4b5563', fontSize: 10, letterSpacing: '0.4em', marginBottom: 22 }}>
              Расположение
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, color: '#9ca3af', fontSize: 14 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <GlobalOutlined style={{ fontSize: 13, color: '#10b981' }} />
                <span>Таджикистан</span>
              </div>
              <p style={{ marginLeft: 21, lineHeight: 1.6 }}>Горно-Бадахшанская</p>
              <p style={{ marginLeft: 21, lineHeight: 1.6 }}>автономная область</p>
              <p style={{ marginLeft: 21, lineHeight: 1.6 }}>Памир</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,.05)', paddingTop: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#4b5563', fontSize: 12 }}>
            <CopyrightOutlined style={{ fontSize: 12 }} />
            <span>{new Date().getFullYear()} Шитам · {t('footer.rights')}</span>
          </div>
          <p style={{ color: '#4b5563', fontSize: 12 }}>ГБАО · Таджикистан · Памир</p>
        </div>
      </div>
    </footer>
  );
};
