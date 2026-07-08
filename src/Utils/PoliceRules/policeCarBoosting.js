// Police Car Boosting Data
// Complete structure for car boosting classes and rules

import { faCar } from '@fortawesome/free-solid-svg-icons';

export const policeCarBoosting = [
  {
    id: 1,
    title: 'Car Boosting Class C & D',
    icon: faCar,
    level: 'C & D',
    color: '#34c759',
    criminals: 'Max 3',
    vehicles: 'Max 2 (Including Boosting Car)',
    police: 'Max 4 (2 Vehicles)',
    description: 'Basic boosting operations',
    class: 'C & D',
  },
  {
    id: 2,
    title: 'Car Boosting Class A & B',
    icon: faCar,
    level: 'A & B',
    color: '#ff9500',
    criminals: 'Min 3 & Max 6',
    vehicles: 'Max 3 (Including Boosting Car)',
    police: 'Max 10 (6 Vehicles & 1 Helicopter)',
    description: 'Advanced boosting operations',
    class: 'A & B',
  },
  {
    id: 3,
    title: 'Car Boosting Class S & S+',
    icon: faCar,
    level: 'S & S+',
    color: '#ff3b30',
    criminals: 'Min 4 & Max 8',
    vehicles: 'Max 4 (Including Boosting Car)',
    police: 'Max 12 (8 Vehicles & 1 Helicopter)',
    description: 'Elite boosting operations',
    class: 'S & S+',
  },
];

// Car Boosting General Rules
export const carBoostingRules = [
  'Only police cars (no bikes) are allowed to chase boosting vehicles. The pursuit must be vehicle-type consistent (e.g., car vs. car).',
  'You must have a boosting tablet in your inventory during the boost.',
  'You cannot deliver the car before completing the hacking and pursuit—doing so is considered Fail RP and script abuse.',
  'Police cannot shoot at secondary criminal vehicles unless they are directly threatened with guns.',
  'If hacking is required, you must have a driver and a hacker in the boosting car.',
];

// Helper functions for car boosting
export const getBoostById = (id) => policeCarBoosting.find((boost) => boost.id === id);
export const getBoostByClass = (className) =>
  policeCarBoosting.filter((boost) => boost.class === className);
export const getBoostingRules = () => carBoostingRules;
export const getBoostLevelBadge = (level) => {
  const levelMap = {
    'C & D': 'level-cd',
    'A & B': 'level-ab',
    'S & S+': 'level-ss',
  };
  return levelMap[level] || '';
};
export const getMaxBoostVehicles = () => Math.max(...policeCarBoosting.map((b) => parseInt(b.vehicles.match(/\d+/)?.[0] || 0)));
export const getMaxBoostPolice = () => Math.max(...policeCarBoosting.map((b) => parseInt(b.police.match(/\d+/)?.[0] || 0)));