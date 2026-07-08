// Police Radio Codes Data
// Complete structure for radio codes, system rules, and examples

export const policeRadioCodes = [
  { code: '10-4', meaning: 'Copy that', category: 'Confirmation' },
  { code: '10-10', meaning: 'On duty / Name Badge', category: 'Status' },
  { code: '10-11', meaning: 'Off duty / Name Badge Time', category: 'Status' },
  { code: '10-17', meaning: 'Going to the last call', category: 'Movement' },
  { code: '10-18', meaning: 'Emergency Call', category: 'Emergency' },
  { code: '10-19', meaning: 'Report your Situation', category: 'Status' },
  { code: '10-25', meaning: 'Report your location', category: 'Location' },
  { code: '10-32', meaning: 'Need backup', category: 'Emergency' },
  { code: '10-76', meaning: 'Prowl. Detective in mission / All units leave area', category: 'Mission' },
  { code: '10-90', meaning: 'All units regroup / Police/Sheriff Department', category: 'Command' },
  { code: 'PR', meaning: 'Pursuit', category: 'Action' },
  { code: 'ETA', meaning: 'Estimated time of arrival', category: 'Time' },
  { code: 'CODE 2', meaning: 'Da3m 3ady (Regular Support)', category: 'Code' },
  { code: 'CODE 3', meaning: 'Da3m 7ala 9oswa (Emergency Support)', category: 'Code' },
  { code: 'CODE 4', meaning: '7ala 3adiya / clear (Situation Clear)', category: 'Code' },
  { code: 'CODE 5', meaning: 'Mayo9reb 7ad l zone heki (Keep Area Clear)', category: 'Code' },
  { code: 'CODE 6', meaning: 'Ki bech tahbet mel karahba (Vehicle Stop)', category: 'Code' },
  { code: 'CODE 7', meaning: 'Me5ou wa9t ra7a (Break Time - 15 min)', category: 'Code' },
  { code: 'CODE 10', meaning: 'Priority f radio (Radio Priority)', category: 'Code' },
];

export const policeRadioSystem = [
  'All cops should be in radio 1',
  'All cops should follow dispatch instructions',
  'Kif yabda fama dispatch w we7ed yotlob da3em mamnou3 temchy ma8ir me y9ollek dispatch',
  'Kif we7ed yestaamel Code 10 bch ya5ou priority f radio lezem nes lkol toskot hata li ken yaati f info y9os aliha',
  'Code 10 Me yetstaamel ken f severe emergency situation',
  'Kif Sheriff yotlob Code 3 w nemchiw lel nord dispatch lezem yaati order mta3 transition mel Radio 1 lel 3',
  'Kif situation tkoun f Nord, lspd Officers should follow instructions mta3 Sheriff Dispatch',
  'Unit number yemchy haseb el number mta3 el karhba eli tsou9ou fyha',
  'Kbal me to5rej mel markez lezem tekteb el Unit number mte3k f zone dispatch fel MDW',
  'Kif ysir ay changement badaltou el karahba taawed t\'updati el unit number fel zone dispatch fel MDW',
];

export const policeRadioExamples = [
  {
    title: 'Example 1: Unit Request',
    content: `Officer 300: Ta7yeti zoumale7 Officer 300 On duty
Officer 300: Officer 300 to dipatch tasma3 jeweb
Dispatch: Dispatch aal ensat
Officer 300: Officer 300 wa7di fel markez nest7a9 integration f unit
Dispatch: Copy, men dispatch to unit 301 twajah lel markez hez zamilek maak
Unit 301: Copy on my way`,
  },
  {
    title: 'Example 2: Pursuit Request',
    content: `Unit 427: Mel Unit 427 lel Dispatch tesma3 jeweb
Dispatch: Dispatch aal ensat
Unit 427: Fi poursuite kodem GC wra supra 7amra need Code 2
Dispatch: Copy, mel dispatch lel Unit 302 twajah lel code 2
Unit 302: Copy, omw`,
  },
  {
    title: 'Example 3: Code 10 Emergency',
    content: `Unit 427: Mel Unit 427 lel Dispatch tesma3 jeweb
Dispatch: Dispatch aal ensat
Unit 427: Fi poursuite kodem Casino wra ... (tlanca code 10 me kamalch jomltou)
Unit 500 Code 10, code10 mel unit 500 lel dispatch Code 3 f red garage fama tabedol etle9 nar
Dispatch: Dispatch to all units Code 3 f Red garage nes lko tetawjah.
Unit 501 Copy
Unit 502 Copy
Unit 503 Copy
Unit 504 Copy`,
  },
  {
    title: 'Example 4: Unit Numbers',
    content: `Dispatch: Mel Dispatch to all units, Mel Dispatch to all units nes lkol taatini el Units number mte3ha fel dispatch
Unit 501 Copy
Unit 502 Copy
Unit 503 Copy
Unit 504 Copy`,
  },
];

// Helper functions for radio codes
export const getRadioCodeByCode = (code) =>
  policeRadioCodes.find((c) => c.code === code);
export const getRadioCodesByCategory = (category) =>
  policeRadioCodes.filter((c) => c.category === category);
export const getRadioCodeCategories = () => [...new Set(policeRadioCodes.map((c) => c.category))];
export const getRadioSystemRules = () => policeRadioSystem;
export const getRadioExamples = () => policeRadioExamples;
export const getRadioCodeCount = () => policeRadioCodes.length;