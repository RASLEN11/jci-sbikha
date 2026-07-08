// Rank Police Helper Functions
// Utility functions for working with rank data

import {
  faBuilding,
  faCar,
  faMotorcycle,
  faHelicopter,
  faUserSecret,
  faShieldAlt,
  faGraduationCap,
  faCrown,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

import { policeRanks } from './rankData';
import { rankRows } from './rankRows';

// Get unit icon based on unit name
export const getUnitIcon = (unit) => {
  if (!unit) return faBuilding;
  const unitLower = unit.toLowerCase();
  if (unitLower.includes('motorcycle')) return faMotorcycle;
  if (unitLower.includes('air') || unitLower.includes('helicopter')) return faHelicopter;
  if (unitLower.includes('criminal') || unitLower.includes('investigation') || unitLower.includes('cid'))
    return faUserSecret;
  if (unitLower.includes('patrol')) return faShieldAlt;
  if (unitLower.includes('interceptor')) return faCar;
  if (unitLower.includes('academy')) return faGraduationCap;
  if (unitLower.includes('council')) return faCrown;
  if (unitLower.includes('command')) return faStar;
  return faBuilding;
};

// Get rank by ID
export const getRankById = (id) => policeRanks.find((rank) => rank.id === id);

// Get ranks by row ID
export const getRanksByRow = (rowId) => {
  const row = rankRows.find((r) => r.id === rowId);
  return row ? row.ranks : [];
};

// Get total number of officers across all ranks
export const getTotalOfficers = () => {
  return policeRanks.reduce((acc, rank) => acc + rank.members.length, 0);
};

// Get officers by rank name
export const getOfficersByRank = (rankName) => {
  const rank = policeRanks.find((r) => r.rank === rankName);
  return rank ? rank.members : [];
};

// Get all officers with their rank information
export const getAllOfficersWithRank = () => {
  const officers = [];
  policeRanks.forEach((rank) => {
    rank.members.forEach((member) => {
      officers.push({
        ...member,
        rank: rank.rank,
        rankId: rank.id,
        rankColor: rank.color,
        rankIcon: rank.icon,
      });
    });
  });
  return officers;
};

// Check if a rank has members
export const hasMembers = (rankId) => {
  const rank = getRankById(rankId);
  return rank ? rank.members.length > 0 : false;
};

// Get officer by badge number
export const getOfficerByBadge = (badgeNumber) => {
  const allOfficers = getAllOfficersWithRank();
  return allOfficers.find((officer) => officer.badge === badgeNumber);
};

// Get officers by unit
export const getOfficersByUnitName = (unitName) => {
  const allOfficers = getAllOfficersWithRank();
  return allOfficers.filter(
    (officer) => officer.unit && officer.unit.toLowerCase().includes(unitName.toLowerCase())
  );
};

// Get unique units
export const getUniqueUnits = () => {
  const units = new Set();
  policeRanks.forEach((rank) => {
    rank.members.forEach((member) => {
      if (member.unit) {
        units.add(member.unit);
      }
    });
  });
  return Array.from(units).sort();
};

// Get rank statistics
export const getRankStatistics = () => {
  const stats = {};
  policeRanks.forEach((rank) => {
    stats[rank.rank] = {
      total: rank.members.length,
      hasMembers: rank.members.length > 0,
      members: rank.members.map((m) => m.name),
    };
  });
  return stats;
};

// Get row statistics
export const getRowStatistics = () => {
  const stats = {};
  rankRows.forEach((row) => {
    const total = row.ranks.reduce((acc, rank) => acc + rank.members.length, 0);
    stats[row.label] = {
      total,
      rankCount: row.ranks.length,
      ranks: row.ranks.map((r) => ({
        name: r.rank,
        members: r.members.length,
      })),
    };
  });
  return stats;
};

// Search officers by name or badge
export const searchOfficers = (query) => {
  if (!query || query.trim() === '') return [];
  const term = query.toLowerCase().trim();
  const allOfficers = getAllOfficersWithRank();
  return allOfficers.filter(
    (officer) =>
      officer.name.toLowerCase().includes(term) ||
      (officer.badge && officer.badge.includes(term)) ||
      (officer.unit && officer.unit.toLowerCase().includes(term)) ||
      officer.rank.toLowerCase().includes(term)
  );
};