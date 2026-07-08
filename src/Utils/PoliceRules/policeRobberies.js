// Police Robberies Data
// Complete structure for robbery types and limits

import { faBuilding } from '@fortawesome/free-solid-svg-icons';

export const policeRobberies = [
  {
    id: 1,
    title: 'Small Robbery',
    icon: faBuilding,
    level: 'Small',
    color: '#34c759',
    criminals: 'Max 2',
    vehicles: 'Max 1',
    police: 'Max 4 (2 Vehicles)',
    hostages: 'No Hostages',
    description: 'Shop / ATM / House / Roof Running / Container (Normal)',
    note: 'Note: Small robbery player can switch once. Police can shoot tires after the switch.',
  },
  {
    id: 2,
    title: 'Medium Robbery',
    icon: faBuilding,
    level: 'Medium',
    color: '#ff9500',
    criminals: 'Min 4 & Max 6',
    vehicles: 'Max 3',
    police: 'Max 8 (4 Vehicles & 1 Helicopter)',
    hostages: 'Max 1',
    description: 'Laundromat / Containers (Via Tablet)',
    note: 'Note: Police can shoot tires when reaching max vehicles limit.',
  },
  {
    id: 3,
    title: 'Large Robbery',
    icon: faBuilding,
    level: 'Large',
    color: '#ff3b30',
    criminals: 'Min 4 & Max 6',
    vehicles: 'Max 3',
    police: 'Max 10 (6 Vehicles & 1 Helicopter)',
    hostages: 'Min 2 & Max 4',
    description: 'Jewelry',
    note: '',
  },
];

// Helper functions for robberies
export const getRobberyById = (id) => policeRobberies.find((robbery) => robbery.id === id);
export const getRobberiesByLevel = (level) =>
  policeRobberies.filter((robbery) => robbery.level === level);
export const getRobberyLevelBadge = (level) => {
  const levelMap = {
    Small: 'level-small',
    Medium: 'level-medium',
    Large: 'level-large',
  };
  return levelMap[level] || '';
};
export const getMaxCriminals = () => Math.max(...policeRobberies.map((r) => parseInt(r.criminals.match(/\d+/)?.[0] || 0)));
export const getMaxPolice = () => Math.max(...policeRobberies.map((r) => parseInt(r.police.match(/\d+/)?.[0] || 0)));