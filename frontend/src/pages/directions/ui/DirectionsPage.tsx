import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { RocketOutlined, CarOutlined, WarningOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Map } from '@/shared/ui/Map';

const MW: React.CSSProperties = { maxWidth: 1400, margin: '0 auto', width: '100%' };

const ROUTES = [
  { k: 'from_dushanbe', Icon: RocketOutlined, dist: '~600 км', accent: '#059669' },
  { k: 'from_khorog',   Icon: CarOutlined,    dist: '~40 км',  accent: '#0ea5e9' },
];

export const DirectionsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="directions-header" style={{ background: '#0a0a0a', padding: '110px 32px 64px' }}>
        <div style={MW}>
          <p className="font-heading font-bold uppercase text-emerald-400 mb-4" style={{ fontSize: 10, letterSpacing: '0.45em' }}>
            {t('directions.subtitle')}
          </p>
          <h1 className="font-heading font-black text-white" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', lineHeight: 1 }}>
            {t('directions.title')}
          </h1>
        </div>
      </div>

      {/* Route cards */}
      <div className="directions-routes-wrap" style={{ padding: '64px 32px' }}>
        <div className="routes-grid" style={{ ...MW, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {ROUTES.map(({ k, Icon, dist, accent }) => (
            <div key={k} style={{ borderTop: `4px solid ${accent}`, background: '#f8f8f8', borderRadius: 20, padding: '40px 44px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                <span style={{ fontSize: 42, color: accent }}><Icon /></span>
                <span className="font-heading font-bold" style={{ fontSize: 13, color: accent, background: '#fff', padding: '4px 14px', borderRadius: 999 }}>{dist}</span>
              </div>
              <h2 className="font-heading font-bold text-stone-900" style={{ fontSize: 22, marginBottom: 14 }}>{t(`directions.${k}`)}</h2>
              <p className="text-stone-500" style={{ fontSize: 15, lineHeight: 1.75 }}>{t(`directions.${k}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="directions-map-wrap" style={{ padding: '0 32px 64px' }}>
        <div style={MW}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <EnvironmentOutlined style={{ fontSize: 20, color: '#059669' }} />
            <h2 className="font-heading font-bold text-stone-900" style={{ fontSize: 22 }}>Шитам на карте</h2>
          </div>
          <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,.1)' }}>
            <Map center={[37.6, 71.8]} zoom={9} label="Шитам, ГБАО" height={440} />
          </div>
          <div className="directions-map-buttons" style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button
              type="primary"
              size="large"
              icon={<EnvironmentOutlined />}
              href="https://www.openstreetmap.org/?mlat=37.6&mlon=71.8#map=9/37.6/71.8"
              target="_blank"
              style={{ background: '#059669', borderColor: '#059669', fontWeight: 600 }}
            >
              Открыть в OpenStreetMap
            </Button>
            <Button
              size="large"
              icon={<RocketOutlined />}
              href="https://www.google.com/maps?q=37.6,71.8"
              target="_blank"
              style={{ fontWeight: 600 }}
            >
              Маршрут в Google Maps
            </Button>
          </div>
        </div>
      </div>

      {/* Warning */}
      <div className="directions-warning-wrap" style={{ padding: '0 32px 80px' }}>
        <div style={{ ...MW, borderTop: '4px solid #f59e0b', background: '#fffbeb', borderRadius: 16, padding: '24px 32px', display: 'flex', gap: 16 }}>
          <WarningOutlined style={{ fontSize: 22, color: '#f59e0b', flexShrink: 0, marginTop: 2 }} />
          <p className="text-amber-900" style={{ fontSize: 15, lineHeight: 1.7 }}>{t('directions.note')}</p>
        </div>
      </div>
    </div>
  );
};
