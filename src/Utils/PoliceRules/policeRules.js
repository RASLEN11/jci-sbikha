// Police Rules Data
// Complete rules structure for police conduct and procedures

import { faUserShield, faShield, faGavel, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

export const policeRules = [
  {
    id: 1,
    title: 'Professional Conduct & Corruption',
    icon: faUserShield,
    rules: [
      'Being a corrupt police officer is strictly forbidden. You are not allowed to sell or give away any police or sheriff equipment, including confiscated items.',
      'It is prohibited to leak any information from investigations or the MDT, or to release criminals without a valid RP reason.',
      '⚠️ Only a few specially approved players may have exceptions under clear supervision.',
      'When off-duty, return all police vehicles and items, switch to civilian clothes, and stay consistent with your RP.',
      '⚠️ Only high command members are allowed to carry weapons while off-duty.',
    ],
  },
  {
    id: 2,
    title: 'Use of Force & Equipment',
    icon: faShield,
    rules: [
      "You're not allowed to shoot if your life is not in danger. You should only use your baton or taser in such cases.",
      "Searching a criminal or suspect outside the station is not allowed unless there's a severe emergency alert.",
      "You're not allowed to troll, be toxic, or disrespect other players while playing as police. Always maintain a serious and respectful attitude.",
      'You can only leave the police force through a proper RP death scenario (dossier mort RP). No random or unjustified exits are allowed.',
      'You are not allowed to identify or recognize vehicles without having access to their license plate.',
      "You're not allowed to fabricate charges against a criminal or force them to give you information. You can only negotiate or make deals.",
    ],
  },
  {
    id: 3,
    title: 'Gang & Mafia Operations',
    icon: faGavel,
    rules: [
      "You're not allowed to enter a gang HQ or mafia house without a direct order from high command.",
      'Any raid on a HQ must respect the limit of 30 police for gangs and 35 for mafia or cartel.',
      'An official announcement must be made at least 1 hour in advance.',
      'In case of a fight scene, when you arrive, activate your siren from a distance and call for backup.',
      'You can only intervene if the number of police is equal to or greater than the number of illegal players.',
      'If not, just gather intel and report it to high command so they can collect a valid reason for an HQ raid.',
    ],
  },
  {
    id: 4,
    title: 'Cayo Perico Rules',
    icon: faMoneyBillWave,
    rules: [
      'Police raids for Cayo will occur as weekly random events.',
      'Police are not allowed to arrest players coming or going for Cayo.',
      'Cayo loot and passes are legal items (for time being).',
    ],
  },
];

// Helper functions for rules
export const getRuleById = (id) => policeRules.find((rule) => rule.id === id);
export const getRulesByTitle = (title) => policeRules.filter((rule) => rule.title.includes(title));
export const getTotalRuleCount = () => policeRules.reduce((acc, section) => acc + section.rules.length, 0);
export const getWarningRules = () => {
  const warnings = [];
  policeRules.forEach((section) => {
    section.rules.forEach((rule) => {
      if (rule.startsWith('⚠️')) {
        warnings.push({ section: section.title, rule: rule.replace('⚠️ ', '') });
      }
    });
  });
  return warnings;
};