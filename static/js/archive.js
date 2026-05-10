const records = [
  {
    id: "demo-1",
    title: "Demo Test 1",
    answer: "Lisinopril",
    question: "A patient develops a dry cough after starting a new blood pressure medicine. Which drug is most likely responsible?",
    clues: [
      "The drug affects the renin-angiotensin system.",
      "It can cause increased bradykinin.",
      "Angioedema is a serious adverse effect.",
      "It is commonly used for hypertension and heart failure.",
      "Classic examples include lisinopril and enalapril."
    ]
  },
  {
    id: "demo-2",
    title: "Demo Test 2",
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

document.addEventListener('DOMContentLoaded', function () {
  const recordsGrid = document.getElementById('archive-grid');
  if (!recordsGrid) return;

  recordsGrid.innerHTML = '';

  records.slice().reverse().forEach((record, index) => {
    recordsGrid.appendChild(createRecordTile(record, records.length - index));
  });
});

function createRecordTile(record, number) {
  const tile = document.createElement('div');
  tile.className = 'archive-tile';
  tile.dataset.testId = record.id;

  tile.innerHTML = `
    <div class="tile-number">${number}</div>
    <div class="tile-date">${escapeHtml(record.title)}</div>
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
  tile.setAttribute('aria-label', `Open ${record.title}`);

  return tile;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
