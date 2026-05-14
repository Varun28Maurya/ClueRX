const records = [
{
  id: "autonomic-1",
  domain: "pharma",
  subdomain: "autonomic-drugs",
  title: "Autonomic Drugs 1",
  date: "May 14, 2026",
  answer: "Methacholine",
  question: "A 19-year-old woman presents with recurrent episodes of chest tightness, shortness of breath, and wheezing for the past year.",
  clues: [
    "The episodes occur 2–3 times per week, often at night, and sometimes wake her from sleep.",
    "She denies smoking, recent infections, or occupational exposures.",
    "After administration of an inhaled bronchodilator, there is no significant change in values.",
    "The physician orders a bronchial provocation test to assess airway hyperresponsiveness.",
    "During the test, she inhales a drug that stimulates muscarinic receptors, causing bronchoconstriction."
  ],
  summary: "Asthma. Methacholine challenge testing is used to provoke bronchoconstriction and demonstrate airway hyperresponsiveness when baseline spirometry is normal or inconclusive."
},

{
  id: "autonomic-2",
  domain: "pharma",
  subdomain: "autonomic-drugs",
  title: "Autonomic Drugs 2",
  date: "May 14, 2026",
  answer: "Pilocarpine",
  question: "A 60-year-old woman presents with sudden severe left eye pain, headache, nausea, and vomiting that began while reading in dim light.",
  clues: [
    "She took an over-the-counter decongestant earlier and has no prior eye history.",
    "Visual acuity is decreased in the affected eye.",
    "Intraocular pressure is markedly elevated, and slit-lamp exam shows a shallow anterior chamber.",
    "The physician gives a drug that stimulates muscarinic receptors, causing miosis and improving aqueous outflow.",
    "Also used in xerostomia associated with Sjogren syndrome."
  ],
  summary: "Pilocarpine is a muscarinic agonist used in acute angle-closure glaucoma to produce miosis and improve aqueous humor outflow."
},

{
  id: "autonomic-3",
  domain: "pharma",
  subdomain: "autonomic-drugs",
  title: "Autonomic Drugs 3",
  date: "May 14, 2026",
  answer: "Anticholinesterase poisoning",
  question: "A 36-year-old man becomes weak and confused while spraying pesticides in a poorly ventilated greenhouse.",
  clues: [
    "He complained of abdominal cramps, nausea, and blurred vision before collapsing.",
    "On arrival, he is lethargic and drenched in sweat.",
    "Vital signs show bradycardia, hypotension, wheezing, and copious secretions.",
    "His pupils are pinpoint and minimally reactive to light.",
    "Atropine and pralidoxime are given to treat this patient."
  ],
  summary: "Organophosphate poisoning causes excess acetylcholine at muscarinic and nicotinic receptors due to acetylcholinesterase inhibition."
},

{
  id: "autonomic-4",
  domain: "pharma",
  subdomain: "autonomic-drugs",
  title: "Autonomic Drugs 4",
  date: "May 14, 2026",
  answer: "Anticholinesterase",
  question: "A 56-year-old woman presents with progressive muscle weakness that worsens toward the evening.",
  clues: [
    "She reports difficulty climbing stairs, chewing food, and drooping eyelids by the end of the day.",
    "Symptoms improve after rest.",
    "On examination, she has bilateral ptosis and fatigable proximal muscle weakness.",
    "The physician suspects antibodies against acetylcholine receptors at the neuromuscular junction.",
    "Treatment is started to increase acetylcholine availability."
  ],
  summary: "Myasthenia gravis is treated with acetylcholinesterase inhibitors such as pyridostigmine and neostigmine."
},

{
  id: "autonomic-5",
  domain: "pharma",
  subdomain: "autonomic-drugs",
  title: "Autonomic Drugs 5",
  date: "May 14, 2026",
  answer: "Bethanechol",
  question: "A 72-year-old man develops urinary retention after elective hip replacement surgery.",
  clues: [
    "He has suprapubic discomfort and bladder fullness.",
    "There is no fever, dysuria, or hematuria.",
    "Physical examination reveals a distended tender bladder.",
    "Urinary retention is due to postoperative bladder atony.",
    "A muscarinic agonist is given to increase detrusor tone and promote urination."
  ],
  summary: "Bethanechol is a muscarinic agonist used in postoperative urinary retention and bladder atony."
},

{
  id: "autonomic-6",
  domain: "pharma",
  subdomain: "autonomic-drugs",
  title: "Autonomic Drugs 6",
  date: "May 14, 2026",
  answer: "Mirabegron",
  question: "A 64-year-old woman has urinary urgency, frequency, and urge incontinence for several months.",
  clues: [
    "She wakes multiple times at night to urinate.",
    "Urinalysis and urine culture are normal.",
    "Lifestyle modifications have not improved symptoms.",
    "She has narrow-angle glaucoma and chronic dry mouth.",
    "A β3 agonist is prescribed to relax the detrusor muscle and increase bladder capacity."
  ],
  summary: "Mirabegron is a β3 adrenergic agonist used for overactive bladder without causing anticholinergic side effects."
},

{
  id: "autonomic-7",
  domain: "pharma",
  subdomain: "autonomic-drugs",
  title: "Autonomic Drugs 7",
  date: "May 14, 2026",
  answer: "Atropine",
  question: "A 23-year-old man develops confusion and excessive sweating after insecticide exposure.",
  clues: [
    "He has profuse salivation, tearing, diarrhea, and vomiting.",
    "Vitals show bradycardia and hypotension.",
    "Physical examination reveals miosis and bronchorrhea.",
    "Organophosphate poisoning is suspected.",
    "Treatment is started with a muscarinic antagonist."
  ],
  summary: "Atropine is a muscarinic antagonist used to reverse parasympathetic excess in organophosphate poisoning."
},

{
  id: "autonomic-8",
  domain: "pharma",
  subdomain: "autonomic-drugs",
  title: "Autonomic Drugs 8",
  date: "May 14, 2026",
  answer: "Epinephrine",
  question: "A 19-year-old woman develops sudden wheezing, throat tightness, and hypotension after eating peanuts.",
  clues: [
    "She has lip and tongue swelling.",
    "Blood pressure is severely decreased.",
    "Oxygen saturation continues to worsen despite oxygen therapy.",
    "Airway and circulatory collapse are developing.",
    "A drug that stimulates α1, β1, and β2 receptors is administered."
  ],
  summary: "Epinephrine is the first-line treatment for anaphylaxis due to its α1, β1, and β2 adrenergic effects."
},

{
  id: "autonomic-9",
  domain: "pharma",
  subdomain: "autonomic-drugs",
  title: "Autonomic Drugs 9",
  date: "May 14, 2026",
  answer: "Amphetamine",
  question: "A 27-year-old man is brought to the ED with agitation, insomnia, and aggressive behavior.",
  clues: [
    "He has not slept for several days.",
    "He is pacing with pressured speech and flight of ideas.",
    "Physical examination reveals tachycardia, diaphoresis, and dilated pupils.",
    "Blood pressure is elevated.",
    "An illicit stimulant causing excess catecholamine activity is suspected."
  ],
  summary: "Amphetamine intoxication causes CNS stimulation and peripheral sympathomimetic effects due to increased norepinephrine and dopamine release."
},

{
  id: "autonomic-10",
  domain: "pharma",
  subdomain: "autonomic-drugs",
  title: "Autonomic Drugs 10",
  date: "May 14, 2026",
  answer: "PDE-5 inhibitors",
  question: "A 61-year-old man presents with progressively worsening erectile dysfunction.",
  clues: [
    "He has difficulty achieving and maintaining erections.",
    "Libido and testosterone levels are normal.",
    "The physician attributes symptoms to reduced nitric oxide mediated penile blood flow.",
    "A drug is considered that inhibits cGMP breakdown.",
    "The medication improves penile blood flow during sexual stimulation."
  ],
  summary: "PDE-5 inhibitors such as sildenafil and tadalafil improve erectile dysfunction by increasing cGMP mediated vasodilation."
},

{
  id: "autonomic-11",
  domain: "pharma",
  subdomain: "autonomic-drugs",
  title: "Autonomic Drugs 11",
  date: "May 14, 2026",
  answer: "Cocaine",
  question: "A 29-year-old man develops severe chest pain and agitation after recreational drug use at a nightclub.",
  clues: [
    "He becomes paranoid and restless.",
    "Physical examination reveals dilated pupils and diaphoresis.",
    "He has marked psychomotor agitation.",
    "The drug blocks reuptake of norepinephrine, dopamine, and serotonin.",
    "Coronary vasoconstriction leads to myocardial ischemia."
  ],
  summary: "Cocaine intoxication causes CNS stimulation and coronary vasoconstriction leading to chest pain and myocardial ischemia."
},
  {
    id: "demo-2",
    domain: "pharma",
    subdomain: "anti-microbial",
    title: "Demo Test 2",
    date: "May 9, 2026",
    answer: "Vancomycin",
    question: "A patient has flushing, itching, and red man syndrome during an IV antibiotic infusion. Which drug is suggested?",
    clues: [
      "The reaction is infusion-rate related.",
      "It is used for serious gram-positive infections.",
      "It covers MRSA.",
      "Slowing the infusion can reduce the reaction.",
      "The drug is vancomycin."
    ]
  },
  {
    id: "demo-3",
    domain: "pharma",
    subdomain: "cardio-renal",
    title: "Digoxin",
    date: "May 8, 2026",
    answer: "Digoxin",
    question: "70-year-old man with chronic systolic heart failure and atrial fibrillation develops atrial tachycardia with AV block.",
    clues: [
      "Treating physician explains that the drug increases intracellular calcium to improve cardiac contractility while simultaneously increasing vagal tone to slow AV nodal conduction.",
      "The patient complains of nausea, vomiting, and unusual yellow-green visual halos that began shortly after adjustment of his cardiac medication.",
      "As the ECG abnormalities continue, the cardiologist warns students that this medication has a very narrow therapeutic index and becomes especially dangerous in hypokalemic patients.",
      "It is a Na/K ATPase inhibiting medication.",
      "The drug is digoxin."
    ],
    summary: {
      overview: "Digoxin is a cardiac glycoside mainly used in heart failure and atrial fibrillation to improve cardiac output and control heart rate.",
      mechanism: "It works by inhibiting the Na+/K+ ATPase pump in cardiac cells, which increases intracellular calcium and leads to stronger heart contractions while also increasing vagal tone to slow AV nodal conduction and heart rate.",
      toxicity: "Digoxin has a narrow therapeutic index, so toxicity can occur easily, especially in elderly patients, renal failure, or hypokalemia. Common symptoms include nausea, vomiting, confusion, weakness, visual disturbances such as yellow-green vision or halos around lights, and dangerous arrhythmias.",
      ecg: "Characteristic ECG findings include scooped ST-segment depression and bradyarrhythmias.",
      management: "Management of toxicity involves stopping the drug, correcting electrolyte imbalance, and in severe cases giving digoxin immune Fab."
    }
  },
  {
    id: "micro-bacteria-1",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria",
    date: "May 14, 2026",
    answer: "Streptococcus pneumoniae",
    question: "A 67-year-old man develops fever, pleuritic chest pain, and a productive cough with rust-colored sputum.",
    clues: [
      "Chest x-ray shows lobar consolidation.",
      "The organism is a gram-positive, lancet-shaped diplococcus.",
      "It is alpha-hemolytic and optochin sensitive.",
      "A polysaccharide capsule is a major virulence factor.",
      "It is a common cause of pneumonia, meningitis, and otitis media."
    ],
    summary: "Streptococcus pneumoniae is an encapsulated gram-positive lancet-shaped diplococcus that commonly causes community-acquired pneumonia, meningitis, otitis media, and sinusitis."
  },
  {
    id: "micro-virus-1",
    domain: "microbiology",
    subdomain: "virus",
    title: "Virus",
    date: "May 14, 2026",
    answer: "Influenza virus",
    question: "A college student has abrupt fever, myalgias, headache, dry cough, and malaise during winter.",
    clues: [
      "The virus has a segmented, negative-sense RNA genome.",
      "Antigenic drift causes seasonal epidemics.",
      "Antigenic shift can cause pandemics.",
      "Neuraminidase helps release newly formed virions.",
      "Oseltamivir can reduce illness duration if started early."
    ],
    summary: "Influenza virus is an enveloped, segmented, negative-sense RNA virus. Antigenic drift causes seasonal outbreaks, while antigenic shift can cause pandemics."
  },
  {
    id: "micro-fungi-1",
    domain: "microbiology",
    subdomain: "fungi",
    title: "Fungi",
    date: "May 14, 2026",
    answer: "Candida albicans",
    question: "A patient with diabetes develops white oral plaques that can be scraped off, leaving an erythematous base.",
    clues: [
      "The organism is a budding yeast that forms pseudohyphae.",
      "Germ tube formation is seen at 37 C.",
      "It is part of normal mucosal flora.",
      "Risk increases with diabetes, antibiotics, steroids, and immunosuppression.",
      "It can cause thrush, vaginitis, esophagitis, and disseminated infection."
    ],
    summary: "Candida albicans is a budding yeast with pseudohyphae and germ tube formation. It commonly causes mucocutaneous disease and can disseminate in immunocompromised patients."
  },
  {
    id: "micro-parasite-1",
    domain: "microbiology",
    subdomain: "parasite",
    title: "Parasite",
    date: "May 14, 2026",
    answer: "Giardia lamblia",
    question: "A camper develops foul-smelling, greasy diarrhea, bloating, and flatulence after drinking stream water.",
    clues: [
      "The organism causes malabsorption without tissue invasion.",
      "Cysts are transmitted through contaminated water.",
      "Trophozoites have a pear-shaped appearance with two nuclei.",
      "IgA deficiency increases the risk of recurrent infection.",
      "Metronidazole or tinidazole is commonly used for treatment."
    ],
    summary: "Giardia lamblia is a protozoan parasite transmitted by cysts in contaminated water. It causes malabsorptive, foul-smelling diarrhea and bloating."
  },
  {
    id: "pharma-physiology-1",
    domain: "pharma",
    subdomain: "physiology",
    title: "Physiology",
    date: "May 14, 2026",
    answer: "Baroreceptor reflex",
    question: "A patient stands up quickly from bed and has a brief drop in arterial pressure followed by tachycardia.",
    clues: [
      "Stretch receptors in the carotid sinus and aortic arch sense the pressure change.",
      "Afferent signals travel through cranial nerves IX and X.",
      "Reduced stretch decreases firing to the nucleus tractus solitarius.",
      "Sympathetic tone increases and parasympathetic tone decreases.",
      "The response increases heart rate, contractility, and peripheral vascular resistance."
    ],
    summary: "The baroreceptor reflex is a rapid autonomic response to changes in blood pressure. Reduced arterial stretch increases sympathetic output and decreases vagal tone."
  }
];

window.cluerxRecords = records;

function normalizeCategory(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getRecordsByCategory(domain, subdomain) {
  const normalizedDomain = normalizeCategory(domain);
  const normalizedSubdomain = normalizeCategory(subdomain);

  return records.filter(record =>
    normalizeCategory(record.domain) === normalizedDomain &&
    normalizeCategory(record.subdomain) === normalizedSubdomain
  );
}

function getClueRxRecordForCategory(domain, subdomain) {
  const matches = getRecordsByCategory(domain, subdomain);
  if (!matches.length) return null;
  return matches[Math.floor(Math.random() * matches.length)];
}

window.normalizeClueRxCategory = normalizeCategory;
window.getClueRxRecordsByCategory = getRecordsByCategory;
window.getClueRxRecordForCategory = getClueRxRecordForCategory;

const ARCHIVE_RESULTS_KEY = 'cluerx_archive_results';

document.addEventListener('DOMContentLoaded', function () {
  const recordsGrid = document.getElementById('archive-grid');
  if (!recordsGrid) return;

  recordsGrid.innerHTML = '';

  records.forEach((record, index) => {
  recordsGrid.appendChild(createRecordTile(record, index + 1));
});
});

function createRecordTile(record, number) {
  const tile = document.createElement('div');
  tile.className = 'archive-tile';
  tile.dataset.testId = record.id;
  const result = getArchiveResult(record.id);

  if (result === 'won') tile.classList.add('completed');
  if (result === 'lost') tile.classList.add('failed');

  tile.innerHTML = `
  <div class="tile-header">
    <div class="tile-number">${number}</div>
    ${createResultBadge(result)}
  </div>
  <div class="tile-date">${escapeHtml(record.date || '')}</div>
`;

  tile.addEventListener('click', () => {
    window.location.href = `/index.html?test=${encodeURIComponent(record.id)}`;
  });

  tile.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      tile.click();
    }
  });

  tile.setAttribute('tabindex', '0');
  tile.setAttribute('role', 'button');
  const resultLabel = result === 'won' ? ', completed correctly' : result === 'lost' ? ', completed incorrectly' : '';
  tile.setAttribute('aria-label', `Open ${record.title}${resultLabel}`);

  return tile;
}

function getArchiveResults() {
  try {
    return JSON.parse(localStorage.getItem(ARCHIVE_RESULTS_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function saveArchiveResults(results) {
  try {
    localStorage.setItem(ARCHIVE_RESULTS_KEY, JSON.stringify(results));
  } catch (error) {
    // Ignore storage failures so records still open normally.
  }
}

function getArchiveResult(recordId) {
  const results = getArchiveResults();
  return results[recordId] || null;
}

function markArchiveCompleted(recordId, won) {
  if (!recordId) return;
  const results = getArchiveResults();
  results[recordId] = won ? 'won' : 'lost';
  saveArchiveResults(results);
}

function createResultBadge(result) {
  if (result === 'won') {
    return '<span class="checkmark-circle" aria-hidden="true"><span class="checkmark">&#10003;</span></span>';
  }

  if (result === 'lost') {
    return '<span class="x-circle" aria-hidden="true"><span class="x-mark">&times;</span></span>';
  }

  return '';
}

window.markArchiveCompleted = markArchiveCompleted;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
