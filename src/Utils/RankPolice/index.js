// Rank Police Data Index
// Central export point for all rank-related data

// Import all data
import { policeRanks } from './rankData';
import { rankRows, rowConfig } from './rankRows';

// Re-export all data
export { policeRanks } from './rankData';
export { rankRows, rowConfig } from './rankRows';

// Re-export helpers that are used externally
export { getUnitIcon } from './helpers';
export { getRankById } from './helpers';
export { getRanksByRow } from './helpers';
export { getTotalOfficers } from './helpers';
export { getOfficersByRank } from './helpers';
export { getAllOfficersWithRank } from './helpers';
export { hasMembers } from './helpers';
export { getOfficerByBadge } from './helpers';
export { getOfficersByUnitName } from './helpers';
export { getUniqueUnits } from './helpers';
export { getRankStatistics } from './helpers';
export { getRowStatistics } from './helpers';
export { searchOfficers } from './helpers';

// Combined data
export const allRankData = {
  ranks: policeRanks,
  rows: rankRows,
  rowConfig,
};

// Data mapping
export const rankDataMap = {
  ranks: { data: policeRanks, label: 'Police Ranks', count: policeRanks.length },
  rows: { data: rankRows, label: 'Rank Rows', count: rankRows.length },
};

// Statistics helper
export const getRankStats = () => {
  const totalOfficers = policeRanks.reduce((acc, rank) => acc + rank.members.length, 0);
  const ranksWithOfficers = policeRanks.filter((rank) => rank.members.length > 0).length;
  const emptyRanks = policeRanks.filter((rank) => rank.members.length === 0).length;

  return {
    totalRanks: policeRanks.length,
    totalOfficers,
    ranksWithOfficers,
    emptyRanks,
    councilMembers: policeRanks.find((r) => r.rank === 'Council')?.members.length || 0,
    highCommandCount: policeRanks.filter((r) =>
      ['Chief of Police', 'Assistant Chief Police', 'Deputy Chief Police'].includes(r.rank)
    ).length,
    ncoCount: policeRanks.filter((r) =>
      ['Staff Sergeant', 'Sergeant', 'Corporal'].includes(r.rank)
    ).length,
    officerCount: policeRanks.filter((r) =>
      ['Senior Officer', 'Officer III', 'Officer II', 'Officer I'].includes(r.rank)
    ).length,
    cadetCount: policeRanks.filter((r) => ['Cadet', 'Academy'].includes(r.rank)).length,
  };
};

// Search function
export const searchRanks = (searchTerm) => {
  if (!searchTerm || searchTerm.trim() === '') {
    return policeRanks;
  }

  const term = searchTerm.toLowerCase().trim();

  return policeRanks.filter(
    (rank) =>
      rank.rank.toLowerCase().includes(term) ||
      rank.description.toLowerCase().includes(term) ||
      rank.members.some(
        (member) =>
          member.name.toLowerCase().includes(term) ||
          (member.badge && member.badge.includes(term)) ||
          (member.unit && member.unit.toLowerCase().includes(term))
      )
  );
};

// Get officers by unit
export const getOfficersByUnit = (unitName) => {
  const officers = [];
  policeRanks.forEach((rank) => {
    rank.members.forEach((member) => {
      if (member.unit && member.unit.toLowerCase().includes(unitName.toLowerCase())) {
        officers.push({ ...member, rank: rank.rank });
      }
    });
  });
  return officers;
};

// Get all officers with their ranks
export const getAllOfficers = () => {
  const officers = [];
  policeRanks.forEach((rank) => {
    rank.members.forEach((member) => {
      officers.push({ ...member, rank: rank.rank });
    });
  });
  return officers;
};