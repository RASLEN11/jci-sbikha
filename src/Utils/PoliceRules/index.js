// Police Rules Data Index
// Central export point for all police-related data

// Import all data from their respective files
import { policeUnits } from './policeUnits';
import { policeRules } from './policeRules';
import { policeRobberies } from './policeRobberies';
import { policeRadioCodes, policeRadioSystem, policeRadioExamples } from './policeRadioCodes';
import { policeCarBoosting, carBoostingRules } from './policeCarBoosting';

// Re-export all data
export { policeUnits } from './policeUnits';
export { policeRules } from './policeRules';
export { policeRobberies } from './policeRobberies';
export { policeRadioCodes, policeRadioSystem, policeRadioExamples } from './policeRadioCodes';
export { policeCarBoosting, carBoostingRules } from './policeCarBoosting';

// Combined data for search/filter operations
export const allPoliceData = {
  units: policeUnits,
  rules: policeRules,
  robberies: policeRobberies,
  radioCodes: policeRadioCodes,
  radioSystem: policeRadioSystem,
  radioExamples: policeRadioExamples,
  carBoosting: policeCarBoosting,
  carBoostingRules: carBoostingRules,
};

// Data mapping for tab identification
export const policeDataMap = {
  rules: { data: policeRules, label: 'Police Rules', count: policeRules.length },
  robberies: { data: policeRobberies, label: 'Robberies', count: policeRobberies.length },
  carboosting: { data: policeCarBoosting, label: 'Car Boosting', count: policeCarBoosting.length },
  radiocodes: { 
    data: policeRadioCodes, 
    label: 'Radio Codes', 
    count: policeRadioCodes.length,
    extraData: { system: policeRadioSystem, examples: policeRadioExamples }
  },
  units: { data: policeUnits, label: 'Units', count: policeUnits.length },
};

// Combined search function
export const searchPoliceData = (searchTerm) => {
  if (!searchTerm || searchTerm.trim() === '') {
    return allPoliceData;
  }

  const term = searchTerm.toLowerCase().trim();
  
  return {
    units: policeUnits.filter(
      (unit) =>
        unit.name.toLowerCase().includes(term) ||
        unit.description.toLowerCase().includes(term) ||
        unit.supervisor.toLowerCase().includes(term) ||
        unit.leader.toLowerCase().includes(term)
    ),
    rules: policeRules.filter(
      (section) =>
        section.title.toLowerCase().includes(term) ||
        section.rules.some((rule) => rule.toLowerCase().includes(term))
    ),
    robberies: policeRobberies.filter(
      (robbery) =>
        robbery.title.toLowerCase().includes(term) ||
        robbery.description.toLowerCase().includes(term) ||
        robbery.level.toLowerCase().includes(term)
    ),
    radioCodes: policeRadioCodes.filter(
      (code) =>
        code.code.toLowerCase().includes(term) ||
        code.meaning.toLowerCase().includes(term) ||
        code.category.toLowerCase().includes(term)
    ),
    radioSystem: policeRadioSystem.filter((rule) => rule.toLowerCase().includes(term)),
    radioExamples: policeRadioExamples.filter((example) =>
      example.title.toLowerCase().includes(term)
    ),
    carBoosting: policeCarBoosting.filter(
      (boost) =>
        boost.title.toLowerCase().includes(term) ||
        boost.level.toLowerCase().includes(term) ||
        boost.description.toLowerCase().includes(term)
    ),
    carBoostingRules: carBoostingRules.filter((rule) => rule.toLowerCase().includes(term)),
  };
};

// Statistics helper
export const getPoliceStats = () => ({
  totalUnits: policeUnits.length,
  totalRules: policeRules.reduce((acc, section) => acc + section.rules.length, 0),
  totalRobberies: policeRobberies.length,
  totalRadioCodes: policeRadioCodes.length,
  totalBoostingClasses: policeCarBoosting.length,
  councilOnlyUnits: policeUnits.filter((u) => u.isCouncilOnly).length,
});