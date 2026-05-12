const records = [
  {
    id: "demo-1",
    title: "Question 1",
    date: "May 10, 2026",
    answer: "Fenoldopam",
    question: "A 44-year-old man has a 3-day history of persistent headaches. He has a history of hypertension and poor medical follow-up.",
    clues: [
      "BP is 228/119 mmHg and pulse is 67/min. He has mild confusion but no focal neurologic deficits.",
      "Funduscopic examination shows bilateral papilledema. Serum creatinine is 1.4 mg/dL.",
      "An IV medication is given that causes arteriolar dilation while improving renal perfusion and increasing natriuresis.",
      "At lower doses it causes vasodilation, while at higher doses it causes vasoconstriction.",
      "It is a D1 receptor agonist."
    ],
    summary: "Fenoldopam is a short-acting selective dopamine-1 (D1) receptor agonist used mainly as an intravenous antihypertensive agent for rapid blood pressure control in hypertensive emergencies and severe postoperative hypertension. It works by activating peripheral D1 receptors, causing arteriolar vasodilation in the kidneys, mesentery, and coronary arteries, which lowers systemic vascular resistance while improving renal blood flow, urine output, and sodium excretion."
  },
  {
    id: "demo-2",
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
  }
];

window.cluerxRecords = records;

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
