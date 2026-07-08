// Rank Rows Configuration
// Groups ranks into rows with labels for the row layout

import { policeRanks } from './rankData';

export const rankRows = [
  { id: 'row1', label: 'Council', ranks: [policeRanks[0]] },
  {
    id: 'row2',
    label: 'High Command',
    ranks: [policeRanks[1], policeRanks[2], policeRanks[3]],
  },
  {
    id: 'row3',
    label: 'Command',
    ranks: [policeRanks[4], policeRanks[5], policeRanks[6]],
  },
  {
    id: 'row4',
    label: 'NCO',
    ranks: [policeRanks[7], policeRanks[8], policeRanks[9]],
  },
  {
    id: 'row5',
    label: 'Officer',
    ranks: [policeRanks[10], policeRanks[11], policeRanks[12], policeRanks[13]],
  },
  {
    id: 'row6',
    label: 'Cadet',
    ranks: [policeRanks[14], policeRanks[15]],
  },
];

// Row configuration with metadata
export const rowConfig = {
  row1: { label: 'Council', icon: 'faCrown', color: '#ffd700' },
  row2: { label: 'High Command', icon: 'faUserShield', color: '#ff6b6b' },
  row3: { label: 'Command', icon: 'faStar', color: '#ff9500' },
  row4: { label: 'NCO', icon: 'faUserTie', color: '#34c759' },
  row5: { label: 'Officer', icon: 'faUser', color: '#007aff' },
  row6: { label: 'Cadet', icon: 'faGraduationCap', color: '#5856d6' },
};