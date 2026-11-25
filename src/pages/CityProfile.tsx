import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Section from '../components/ui/Section';
import DisclaimerBar from '../components/ui/DisclaimerBar';
import { Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import {
  Users,
  MapPin,
  Building2,
  Map,
  Award,
  TrendingUp,
  Calendar,
  ExternalLink,
  BarChart2,
  Wind,
  Droplets,
  Thermometer,
  CloudSun,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Government', href: '/government' },
  { label: 'Reports & Statistics', href: '/government/reports-and-statistics' },
  {
    label: 'Municipal Profile',
    href: '/government/reports-and-statistics/city-profile',
  },
];

// Source: PSA census results (as tabulated on Wikipedia — Tanza, Cavite)
const POPULATION_DATA = [
  { year: '2010', population: 188755 },
  { year: '2015', population: 226188 },
  { year: '2020', population: 312116 },
  { year: '2024', population: 339308 },
];

const ECONOMY_DATA = [
  { name: 'Industry & Manufacturing', value: 38, color: '#0052e0' },
  { name: 'Commerce & Services', value: 32, color: '#3b82f6' },
  { name: 'Real Estate', value: 18, color: '#93c5fd' },
  { name: 'Agriculture', value: 12, color: '#dbeafe' },
];

// Source: Wikipedia — Tanza, Cavite (awards section, citing DILG / NCC)
const AWARDS = [
  { year: '2021', title: 'Seal of Good Financial Housekeeping — DILG' },
  { year: '2019', title: 'Seal of Good Financial Housekeeping — DILG' },
  { year: '2018', title: 'Seal of Good Financial Housekeeping — DILG' },
  { year: '2016', title: 'Seal of Good Local Governance — DILG' },
  { year: '2014', title: 'Most Competitive in Economic Dynamism — NCC' },
  { year: '2012', title: 'Seal of Good Financial Housekeeping — DILG' },
  { year: '2011', title: 'Seal of Good Financial Housekeeping — DILG' },
];

// Source: Wikipedia — Tanza, Cavite / PSGC (41 barangays)
const BARANGAYS = [
  'Amaya 1',
  'Amaya 2',
  'Amaya 3',
  'Amaya 4',
  'Amaya 5',
  'Amaya 6',
  'Amaya 7',
  'Bagtas',
  'Biga',
  'Biwas',
  'Bucal',
  'Bunga',
  'Calibuyo',
  'Capipisa',
  'Daang Amaya 1',
  'Daang Amaya 2',
  'Daang Amaya 3',
  'Halayhay',
  'Julugan 1',
  'Julugan 2',
  'Julugan 3',
  'Julugan 4',
  'Julugan 5',
  'Julugan 6',
  'Julugan 7',
  'Julugan 8',
  'Lambingan',
  'Mulawin',
  'Paradahan 1',
  'Paradahan 2',
  'Poblacion 1',
  'Poblacion 2',
  'Poblacion 3',
  'Poblacion 4',
  'Punta 1',
  'Punta 2',
  'Sahud Ulan',
  'Sanja Mayor',
  'Santol',
  'Tanauan',
  'Tres Cruses',
];

const KEY_FACTS = [
  {
    icon: Users,
    value: '339,308',
    label: 'Population',
    sub: '2024 PSA Census',
    accent: 'from-blue-500 to-blue-400',
    iconBg: 'bg-blue-50 text-blue-600',
  },
  {
    icon: TrendingUp,
    value: '312,116',
    label: '2020 Census',
    sub: '+2.03% annual growth to 2024',
    accent: 'from-indigo-500 to-blue-400',
    iconBg: 'bg-indigo-50 text-indigo-700',
  },
  {
    icon: MapPin,
    value: '41',
    label: 'Barangays',
    sub: 'Administrative divisions',
    accent: 'from-violet-500 to-purple-400',
    iconBg: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Map,
    value: '78.33 km²',
    label: 'Land Area',
    sub: '7,833 hectares',
    accent: 'from-teal-500 to-cyan-400',
    iconBg: 'bg-teal-50 text-teal-700',
  },
  {
    icon: Building2,
    value: 'Municipality',
    label: 'Classification',
    sub: 'Province of Cavite',
    accent: 'from-sky-500 to-blue-400',
    iconBg: 'bg-sky-50 text-sky-600',
  },
  {
    icon: Calendar,
    value: '1760',
    label: 'Founded',
    sub: 'As Santa Cruz de Malabon',
    accent: 'from-amber-500 to-yellow-400',
    iconBg: 'bg-amber-50 text-amber-600',
  },
];

function weatherLabel(code: number): string {
  if (code === 0) return 'Clear Sky';
  if (code <= 2) return 'Partly Cloudy';
  if (code === 3) return 'Overcast';
  if (code <= 49) return 'Foggy';
  if (code <= 59) return 'Drizzle';
  if (code <= 69) return 'Rain';
  if (code <= 79) return 'Snow';
  if (code <= 84) return 'Rain Showers';
  if (code <= 99) return 'Thunderstorm';
  return 'Unknown';
}

function weatherEmoji(code: number): string {
  if (code === 0) return '☀️';
  if (code <= 2) return '⛅';
  if (code === 3) return '☁️';
  if (code <= 49) return '🌫️';
  if (code <= 69) return '🌧️';
  if (code <= 84) return '🌦️';
  return '⛈️';
}

// Tanza, Cavite coordinates: 14.3667°N, 120.8500°E
const WEATHER_CACHE_KEY = 'tz_weather_profile';
const WEATHER_CACHE_TIME_KEY = 'tz_weather_profile_time';
const THIRTY_MIN = 1_800_000;

function useWeather() {
  const [weather, setWeather] = useState<{
    temp: number;
    humidity: number;
    wind: number;
    code: number;
  } | null>(null);

  useEffect(() => {
    const cached = localStorage.getItem(WEATHER_CACHE_KEY);
    const cachedTime = localStorage.getItem(WEATHER_CACHE_TIME_KEY);
    if (
      cached &&
      cachedTime &&
      Date.now() - parseInt(cachedTime) < THIRTY_MIN
    ) {
      setWeather(JSON.parse(cached));
      return;
    }

    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=14.3667&longitude=120.8500&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=Asia%2FManila'
    )
      .then(r => r.json())
      .then(d => {
        const w = {
          temp: d.current.temperature_2m,
          humidity: d.current.relative_humidity_2m,
          wind: d.current.wind_speed_10m,
          code: d.current.weather_code,
        };
        localStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify(w));
        localStorage.setItem(WEATHER_CACHE_TIME_KEY, String(Date.now()));
        setWeather(w);
      })
      .catch(() => {});
  }, []);

  return weather;
}

export default function CityProfile() {
  const weather = useWeather();

  return (
    <>
      <SEO
        title="Municipal Profile & Statistics — Municipality of Tanza"
        description="Demographic data, population charts, barangay directory, economy breakdown, and awards for the Municipality of Tanza, Cavite."
        keywords="Tanza Cavite profile, population statistics, barangays, economy, Municipality of Tanza"
      />

      {/* Hero — left: title/stats, right: weather widget */}
      <div
        className="relative text-white overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #001044 0%, #003087 35%, #0a6e5a 70%, #1fa24a 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — title */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-blue-300 text-xs font-bold uppercase tracking-widest">
                <BarChart2 className="h-3.5 w-3.5" />
                Reports &amp; Statistics
              </div>
              <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
                Municipal Profile &amp; Statistics
              </h1>
              <p className="text-blue-100 text-base max-w-lg leading-relaxed mb-8">
                Demographic data, economic indicators, barangay directory, and
                recognition for the Municipality of Tanza — one of Cavite's
                fastest-growing localities.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  ['339K+', 'Population'],
                  ['41', 'Barangays'],
                  ['78.33 km²', 'Land Area'],
                  ['1760', 'Founded'],
                ].map(([val, lbl]) => (
                  <div
                    key={lbl}
                    className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-lg px-3 py-2"
                  >
                    <span className="text-sm font-black text-white">{val}</span>
                    <span className="text-xs text-blue-300 font-medium">
                      {lbl}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — live weather */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <CloudSun className="h-5 w-5 text-amber-300" />
                <div>
                  <p className="text-white font-black text-sm leading-none">
                    Current Weather
                  </p>
                  <p className="text-blue-300 text-[10px] mt-0.5">
                    Tanza, Cavite · Live
                  </p>
                </div>
              </div>
              {weather ? (
                <>
                  <div className="flex items-end gap-3 mb-5">
                    <span className="text-6xl leading-none">
                      {weatherEmoji(weather.code)}
                    </span>
                    <div>
                      <span className="text-5xl font-black text-white leading-none">
                        {weather.temp}°C
                      </span>
                      <p className="text-blue-200 text-sm mt-1">
                        {weatherLabel(weather.code)}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/10 rounded-xl p-3 flex flex-col items-center">
                      <Thermometer className="h-4 w-4 text-amber-300 mb-1" />
                      <span className="text-white font-black text-sm">
                        {weather.temp}°C
                      </span>
                      <span className="text-blue-300 text-[10px]">
                        Feels like
                      </span>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 flex flex-col items-center">
                      <Droplets className="h-4 w-4 text-blue-300 mb-1" />
                      <span className="text-white font-black text-sm">
                        {weather.humidity}%
                      </span>
                      <span className="text-blue-300 text-[10px]">
                        Humidity
                      </span>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 flex flex-col items-center">
                      <Wind className="h-4 w-4 text-blue-200 mb-1" />
                      <span className="text-white font-black text-sm">
                        {weather.wind}
                      </span>
                      <span className="text-blue-300 text-[10px]">km/h</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-32">
                  <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <Section className="py-10">
          <Breadcrumbs className="mb-10" items={BREADCRUMBS} />

          {/* Key Facts Grid */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-black text-primary-600 uppercase tracking-widest bg-primary-50 border border-primary-100 px-3 py-1 rounded-full">
                Key Facts
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {KEY_FACTS.map(
                ({ icon: Icon, value, label, sub, accent, iconBg }) => (
                  <div
                    key={label}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className={`h-1 bg-gradient-to-r ${accent}`} />
                    <div className="p-5 flex flex-col gap-3">
                      <div
                        className={`${iconBg} w-9 h-9 rounded-xl flex items-center justify-center`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xl font-black text-gray-900 leading-none mb-0.5">
                          {value}
                        </div>
                        <div className="text-xs font-bold text-gray-700 mb-0.5">
                          {label}
                        </div>
                        <div className="text-[10px] text-gray-400 leading-snug">
                          {sub}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-blue-100">
              <div className="bg-gradient-to-r from-blue-700 to-blue-500 px-5 py-4">
                <p className="text-white font-black text-sm">
                  Population Growth
                </p>
                <p className="text-blue-200 text-[10px] mt-0.5">
                  PSA census results, 2010–2024
                </p>
              </div>
              <div className="bg-white p-5">
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart
                    data={POPULATION_DATA}
                    margin={{ top: 0, right: 0, left: -10, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f3f5" />
                    <XAxis
                      dataKey="year"
                      tick={{ fontSize: 11, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}K`}
                      tick={{ fontSize: 11, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      formatter={v => [
                        Number(v ?? 0).toLocaleString(),
                        'Population',
                      ]}
                      contentStyle={{
                        borderRadius: '12px',
                        border: '1px solid #e9ecef',
                        fontSize: 12,
                      }}
                    />
                    <Bar
                      dataKey="population"
                      fill="#0052e0"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm border border-indigo-100">
              <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-4">
                <p className="text-white font-black text-sm">
                  Economic Sectors
                </p>
                <p className="text-indigo-200 text-[10px] mt-0.5">
                  Approximate distribution based on CLUP data
                </p>
              </div>
              <div className="bg-white p-5">
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={ECONOMY_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={85}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {ECONOMY_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend
                      iconType="circle"
                      iconSize={8}
                      formatter={(value: string) => (
                        <span style={{ fontSize: 11, color: '#374151' }}>
                          {value}
                        </span>
                      )}
                    />
                    <Tooltip
                      formatter={v => [`${v ?? 0}%`, 'Share']}
                      contentStyle={{
                        borderRadius: '12px',
                        border: '1px solid #e9ecef',
                        fontSize: 12,
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Population trend line */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-teal-100 mb-10">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-500 px-5 py-4">
              <p className="text-white font-black text-sm">
                Population Trend (2010–2024)
              </p>
              <p className="text-teal-100 text-[10px] mt-0.5">
                Growth driven by industrial, commercial, and residential
                development
              </p>
            </div>
            <div className="bg-white p-5">
              <ResponsiveContainer width="100%" height={160}>
                <LineChart
                  data={POPULATION_DATA}
                  margin={{ top: 0, right: 20, left: -10, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f3f5" />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 11, fill: '#6b7280' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}K`}
                    tick={{ fontSize: 11, fill: '#6b7280' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    formatter={v => [
                      Number(v ?? 0).toLocaleString(),
                      'Population',
                    ]}
                    contentStyle={{
                      borderRadius: '12px',
                      border: '1px solid #e9ecef',
                      fontSize: 12,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="population"
                    stroke="#0052e0"
                    strokeWidth={3}
                    dot={{
                      fill: '#0052e0',
                      r: 5,
                      strokeWidth: 2,
                      stroke: '#fff',
                    }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Barangays + Awards row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-violet-100">
              <div className="bg-gradient-to-r from-violet-600 to-purple-500 px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-black text-sm">41 Barangays</p>
                  <p className="text-violet-200 text-[10px] mt-0.5">
                    Administrative divisions of the Municipality of Tanza
                  </p>
                </div>
                <span className="text-4xl font-black text-white/20">41</span>
              </div>
              <div className="bg-white p-5">
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {BARANGAYS.map((b, i) => (
                    <div
                      key={b}
                      className="flex items-center gap-2 py-1 border-b border-gray-50"
                    >
                      <span className="text-[10px] font-black text-violet-400 w-5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs text-gray-700">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm border border-amber-100">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-400 px-5 py-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-white" />
                <div>
                  <p className="text-white font-black text-sm">
                    Awards & Recognition
                  </p>
                  <p className="text-amber-100 text-[10px] mt-0.5">
                    Official recognitions and honors
                  </p>
                </div>
              </div>
              <div className="bg-white p-5 space-y-3">
                {AWARDS.map(award => (
                  <div
                    key={award.title}
                    className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0"
                  >
                    <span className="shrink-0 text-[10px] font-black text-amber-600 bg-amber-50 border border-amber-100 px-2 py-1 rounded-full">
                      {award.year}
                    </span>
                    <span className="text-sm text-gray-700 leading-snug">
                      {award.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Municipal Map */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-primary-100 mb-6">
            <div className="bg-gradient-to-r from-primary-700 to-primary-500 px-5 py-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-white" />
              <div>
                <p className="text-white font-black text-sm">Municipal Map</p>
                <p className="text-blue-200 text-[10px] mt-0.5">
                  Municipality of Tanza · 78.33 km² land area · Cavite Province
                </p>
              </div>
            </div>
            <div className="min-h-[320px]">
              <iframe
                title="Tanza Municipality Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=120.8000%2C14.3333%2C120.9000%2C14.4500&layer=mapnik&marker=14.3667%2C120.8500"
                className="w-full min-h-[320px] border-0"
                loading="lazy"
              />
            </div>
            <div className="bg-white px-5 py-3 border-t border-gray-100">
              <a
                href="https://www.openstreetmap.org/?mlat=14.3667&mlon=120.8500#map=13/14.3667/120.8500"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-800 transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                Open larger map
              </a>
            </div>
          </div>

          {/* Data sources + links */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                Data Sources
              </p>
              <p className="text-sm text-gray-600">
                Philippine Statistics Authority (PSA) · DILG · CLUP · Official
                Municipality of Tanza Website
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <a
                href="https://www.tanza.gov.ph"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-2 rounded-lg transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                Official Site
              </a>
              <Link
                to="/government/transparency-documents/downloads"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors"
              >
                Planning Docs
              </Link>
            </div>
          </div>
          <DisclaimerBar />
        </Section>
      </div>
    </>
  );
}
