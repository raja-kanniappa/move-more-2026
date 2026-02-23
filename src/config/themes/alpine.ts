import type { ThemeTokens } from './types';

export const alpine: ThemeTokens = {
  // ─── Brand ───────────────────────────────────────────────────────────────
  primary: '#4dabff',
  primaryDark: '#2A8FE0',
  primaryDarkest: '#003A80',
  primaryForeground: '#00050d',
  accent: '#ff4d6d',
  accentDark: '#d02f4d',
  accentForeground: '#ffffff',

  // ─── Surfaces ────────────────────────────────────────────────────────────
  background: '#00050d',
  card: '#001026',
  secondary: '#001a40',
  secondaryForeground: '#4dabff',
  secondaryActive: '#002366',
  muted: '#001a40',
  mutedForeground: '#cbd5e1',
  inputBackground: '#001a40',
  surfaceHover: '#00204d',

  // ─── Text ────────────────────────────────────────────────────────────────
  foreground: '#ffffff',
  mutedText: '#cbd5e1',
  placeholder: '#4a6080',
  disabled: '#3a5070',

  // ─── Borders & Interactive ───────────────────────────────────────────────
  border: '#021c45',
  borderStrong: '#033070',
  switchBackground: '#021c45',
  ring: '#4dabff',

  // ─── Status ──────────────────────────────────────────────────────────────
  destructive: '#ff3333',
  destructiveForeground: '#ffffff',
  statusSuccessBg: '#002E1A',
  statusSuccessText: '#4ADE80',
  statusWarningBg: '#2E1500',

  // ─── Charts ──────────────────────────────────────────────────────────────
  chart1: '#4dabff',
  chart2: '#ff4d6d',
  chart3: '#ffb3c1',
  chart4: '#80bfff',
  chart5: '#ff0033',

  // ─── Metric Indicators ───────────────────────────────────────────────────
  metricDistance: '#4dabff',
  metricDuration: '#80bfff',
  metricPace: '#ffb3c1',
  metricComplete: '#4ADE80',
  leaderboardText: '#ffffff',

  // ─── Warning / At-Risk ───────────────────────────────────────────────────
  warning: '#ff9900',
  warningBg: '#1F1000',
  warningBorder: '#4D2800',

  // ─── Metric-Section UI ───────────────────────────────────────────────────
  metricIconBg: '#001a40',
  metricSectionBgWarm: '#0d0010',
  metricSectionBgCool: '#000d26',
  metricDividerGold: '#2E1800',
  metricSectionHover: '#00204d',
  metricSliderTrack: '#021c45',
  metricDividerGreen: '#00260D',

  // ─── Rules Section ───────────────────────────────────────────────────────
  rulesBg: '#000d20',
  rulesHover: '#001026',

  // ─── Notice ──────────────────────────────────────────────────────────────
  noticeBg: '#00050d',
  noticeBorder: '#021c45',
  noticeText: '#cbd5e1',
  noticeAccent: '#ff4d6d',

  // ─── Destructive-Soft ────────────────────────────────────────────────────
  destructiveSoft: '#ff6680',
  destructiveSoftBg: '#1A000D',

  // ─── Hover / Interaction ─────────────────────────────────────────────────
  surfaceHoverSubtle: '#000d20',
  surfaceHoverWarm: '#000a1a',

  // ─── Unmet-State / Table ─────────────────────────────────────────────────
  cellUnmet: '#00080f',
  borderSubtle: '#011530',
  rowHighlight: '#000d20',

  // ─── Device Disconnection ────────────────────────────────────────────────
  disconnectBg: '#1A0008',

  // ─── Strava Badge ────────────────────────────────────────────────────────
  stravaBg: '#1A0A00',

  // ─── Stat-Tile Icon Backgrounds ──────────────────────────────────────────
  statIconBgPrimary: '#001a40',
  statIconBgDuration: '#00102E',
  statIconBgDistance: '#001540',
  statIconBgWarm: '#1A0D00',
  statTileValue: '#ffffff',
  scrollFadeBg: '#00050d',
  avatarPalette: ['#4dabff', '#ff4d6d', '#80bfff', '#ffb3c1', '#4ADE80', '#ff9900', '#60A5FA', '#F472B6', '#34D399', '#FBBF24', '#818CF8', '#FCA5A5'],

  // ─── Layout ──────────────────────────────────────────────────────────────
  radius: '0.75rem',
};
