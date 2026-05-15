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
    title: "Bacteria 1",
    date: "May 15, 2026",
    answer: "Corynebacterium diphtheriae",
    question: "A 7-year-old boy is brought to the ED with 4 days of worsening sore throat, fever, and difficulty swallowing.",
clues: [
  "The parents report that he is not fully vaccinated and missed several childhood immunizations due to travel",
  "He appears ill and lethargic, with fever (38.5°C) and mild neck swelling.",
  "Oropharynx shows a thick gray-white adherent membrane over the tonsils and posterior pharyngeal wall.",
  "Removal of the membrane causes bleeding, with cervical lymphadenopathy and “bull neck” appearance.",
  "Suspected toxin-mediated infection inhibiting protein synthesis by ADP-ribosylation of EF-2, causing systemic complications like myocarditis and neuropathy."
],
answer: "Corynebacterium diphtheriae",
summary: "Diphtheria. This unvaccinated child presents with sore throat, fever, dysphagia, and a gray pseudomembrane that bleeds on removal, along with “bull neck” lymphadenopathy. The most likely cause is Corynebacterium diphtheriae, which produces an exotoxin that inhibits protein synthesis by ADP-ribosylating elongation factor-2 (EF-2), leading to local tissue damage and potential systemic complications such as myocarditis and neuropathy."
  },
  {
    id: "micro-bacteria-2",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 2",
    date: "May 15, 2026",
    question: "A 35-year-old man is brought to the ED with unable to open mouth and painful muscle stiffness.",
clues: [
  "His family reports he stepped on a rusty nail 5 days ago while working at a construction site and cleaned the wound at home without medical care.",
  "Intermittent, severe generalized muscle spasms are triggered by minor stimuli such as light touch and sound.",
  "Vital signs show mild tachycardia and elevated blood pressure during spasms.",
  "The wound on his foot appears small but contaminated with dirt and necrotic tissue.",
  "The physician suspects a toxin infection blocking release of inhibitory neurotransmitters (GABA and glycine), causing muscle rigidity and spastic paralysis."
],
answer: "Clostridium tetani",
summary: "Tetanus. This patient presents with trismus (lockjaw), muscle stiffness, and painful spasms after a contaminated wound injury. The most likely cause is Clostridium tetani, which produces tetanospasmin that blocks the release of inhibitory neurotransmitters (GABA and glycine) in the CNS, leading to uncontrolled muscle contraction and spastic paralysis."
  },
  {
    id: "micro-bacteria-3",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 3",
    date: "May 15, 2026",
    answer: "Haemophilus influenzae",
    question: "A 4-year-old boy is brought to the emergency department with sudden onset of high fever, severe sore throat, and difficulty breathing.",
clues: [
  "His parents report that he was well earlier in the day but rapidly developed trouble swallowing and has been drooling continuously.",
  "He prefers to sit leaning forward and refuses to lie down. His voice sounds muffled.",
  "Oropharyngeal examination is avoided due to concern for airway compromise.",
  "Blood cultures later grow a small, gram-negative coccobacillus that requires factors V (NAD⁺) and X (hemin) for growth.",
  "A lateral neck X-ray shows a swollen, thumb-shaped epiglottis."
],
answer: "Haemophilus influenzae",
summary: "Epiglottitis due to Haemophilus influenzae. This small, gram-negative coccobacillus requires factors X (hemin) and V (NAD⁺) for growth and is cultured on chocolate agar. The encapsulated type b (Hib) strain is highly virulent due to its polysaccharide PRP capsule, which prevents phagocytosis and enables bloodstream spread. In unvaccinated children, it can rapidly infect the epiglottis, causing severe airway obstruction, and is also a cause of meningitis, pneumonia, and otitis media. Prevention is achieved with the Hib conjugate vaccine."
  },
  {
    id: "micro-bacteria-4",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 4",
    date: "May 15, 2026",
    answer: "Streptococcus pneumoniae",
    question: "A 58-year-old man presents with 24 hours of fever, severe headache, confusion, and neck stiffness.",
clues: [
  "He also complains of nausea, sensitivity to light, and worsening drowsiness.",
  "He has a history of chronic alcohol use and a recently untreated otitis media.",
  "He is febrile, disoriented, with positive Kernig and Brudzinski signs.",
  "CSF shows high opening pressure, turbid fluid, high protein, low glucose, and neutrophils.",
  "Gram stain of the CSF reveals gram-positive, lancet-shaped diplococci."
],
answer: "Streptococcus pneumoniae",
summary: "Pneumococcal meningitis due to Streptococcus pneumoniae which commonly colonizes the nasopharynx and can spread from a nearby focus such as untreated otitis media into the bloodstream or directly through contiguous tissues. From there, the bacteria cross the blood–brain barrier and enter the subarachnoid space, where they multiply rapidly in the cerebrospinal fluid. The bacterial cell wall components trigger a strong inflammatory response, leading to increased permeability of the blood–brain barrier, cerebral edema, elevated intracranial pressure, and the accumulation of neutrophils and protein in the CSF, producing the classic features of acute bacterial meningitis."
  },
  {
    id: "micro-bacteria-5",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 5",
    date: "May 15, 2026",
    answer: "Clostridium perfringens",
    question: "A 35-year-old man is brought to the emergency department after a motorcycle accident in a rural area.",
clues: [
  "He sustained a deep, contaminated laceration to his thigh that was initially cleaned and sutured at a small clinic.",
  "Two days later, he develops severe wound pain with fever and increasing thigh swelling.",
  "On examination, his temperature is 38.9°C, heart rate is 120/min, and blood pressure is 90/60 mmHg.",
  "The skin is discolored with bullae, crepitus, and foul-smelling discharge.",
  "This Bacteria releases alpha toxin (lecithinase) causing myonecrosis and hemolysis."
],
answer: "Clostridium perfringens",
summary: "Gas gangrene (clostridial myonecrosis) due to Clostridium perfringens. This anaerobic, gram-positive, spore-forming rod is commonly found in soil and contaminates deep traumatic wounds. In low-oxygen environments, it proliferates rapidly and produces alpha toxin (lecithinase), which destroys cell membranes, causing myonecrosis, hemolysis, and tissue destruction. Gas production from carbohydrate fermentation leads to crepitus and soft tissue gas on imaging. The infection progresses rapidly with severe pain out of proportion to exam and requires urgent surgical debridement and antibiotics."
  },
  {
    id: "micro-bacteria-6",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 6",
    date: "May 15, 2026",
    answer: "Staphylococcus aureus (Inflammatory disease)",
    question: "A 32-year-old man presents to the emergency department with 10 days of high-grade fever, chills, profound fatigue, and shortness of breath.",
clues: [
  "He reports pleuritic chest pain and a persistent cough producing small amounts of blood-tinged sputum.",
  "He admits to daily intravenous heroin use and says he often reuses needles.",
  "Cardiac auscultation reveals a new holosystolic murmur best heard at the left lower sternal border that increases with inspiration.",
  "There is no prior history of heart disease.",
  "Over the past few days, he has noticed painless red spots on his palms and soles and dark streaks under his fingernails."
],
answer: "Staphylococcus aureus(Inflammatory disease)",
summary: "Infective endocarditis due to Staphylococcus aureus. This Gram-positive, catalase- and coagulase-positive coccus from normal skin flora can enter the bloodstream after skin breaches or IV drug use. It is highly virulent and can infect even normal valves by forming fibrin-platelet vegetations. Its toxins and enzymes cause tissue destruction and immune evasion, and embolization of vegetations can lead to infarcts in multiple organs. Diagnosis is by blood cultures and echocardiography, and treatment requires prolonged IV antibiotics with MRSA coverage."
  
  },
  {
    id: "micro-bacteria-7",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 7",
    date: "May 15, 2026",
    answer: "Streptococcus pyogenes (Toxigenic)",
    question: "A 9-year-old previously healthy boy presents with 4 days of high fever, malaise, sore throat, abdominal pain, and repeated vomiting.",
clues: [
  "His parents report that he stopped eating due to painful swallowing. He appears toxic.",
  "Over the last 24 hours, the child has become increasingly irritable and complains of pain when moving his neck.",
  "The texture of the skin feels unusually coarse.",
  "Throat swab culture grows gram-positive cocci in chains showing complete hemolysis on blood agar.",
  "The organism is catalase-negative and sensitive to bacitracin."
],
answer: "Streptococcus Pyogenes(Toxigenic)",
summary: "Scarlet fever caused by Streptococcus pyogenes. This organism colonizes the pharynx and produces pyrogenic (erythrogenic) exotoxins that act as superantigens, triggering widespread T-cell activation and cytokine release, which leads to the diffuse inflammatory rash and systemic symptoms. Its pathogenesis also involves M protein mediated adherence and immune evasion, along with enzymes that facilitate tissue spread. The toxigenic component of streptococcal pyrogenic exotoxins (Spe A, Spe C) is responsible for the characteristic skin findings and fever by driving an exaggerated immune response rather than direct tissue invasion."
  },
  {
    id: "micro-bacteria-8",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 8",
    date: "May 15, 2026",
    answer: "Listeria monocytogenes",
    question: "A 68-year-old man is brought to the emergency department with 2 days of fever, headache, vomiting, and increasing confusion.",
clues: [
  "His family reports that he has become progressively drowsy and has difficulty maintaining balance while walking.",
  "He also complains of neck stiffness and sensitivity to light.",
  "His medical history includes type 2 diabetes mellitus and chronic corticosteroid use for an autoimmune condition.",
  "Lumbar puncture shows elevated opening pressure, increased protein, low glucose, and a predominance of neutrophils.",
  "Gram stain of the cerebrospinal fluid shows small gram-positive rods."
],
answer: "Listeria monocytogenes",
summary: "Meningitis due to Listeria monocytogenes.This bacterium is a motile, facultative intracellular, gram-positive rod transmitted through contaminated foods such as unpasteurized dairy products and deli meats. It is notable for causing meningitis and sepsis in neonates, the elderly, pregnant women, and immunocompromised individuals. The organism survives within macrophages, spreads cell-to-cell using actin polymerization (“actin rockets”), and can cross both the intestinal barrier and the blood–brain barrier. In the central nervous system, it induces inflammation of the meninges, producing bacterial meningitis with a neutrophilic CSF profile. It is characteristically treated with ampicillin."
  },
  {
    id: "micro-bacteria-9",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 9",
    date: "May 15, 2026",
    answer: "Staphylococcus saprophyticus",
    question: "A 22-year-old woman presents with 2 days of dysuria, frequency, and urgency.",
clues: [
  "She is sexually active and recently began a new sexual relationship.",
  "Her past medical history is unremarkable. She is not on any medications.",
  "She has mild suprapubic discomfort, normal vitals, and no flank tenderness.",
  "Urinalysis shows positive leukocyte esterase, numerous white blood cells, and bacteria.",
  "Urine culture grows gram-positive cocci arranged in clusters that are catalase-positive, coagulase-negative, and resistant to novobiocin."
],
answer: "Staphylococcus saprophyticus",
summary: "Acute uncomplicated UTI is also called as Honeymooner’s cystitis is caused by Staphylococcus saprophyticus. This gram-positive, catalase-positive, coagulase-negative coccus is a common cause of urinary tract infections in sexually active young women. It is part of the normal flora of the genitourinary tract and can ascend the urethra into the bladder after sexual activity. A key distinguishing feature is its resistance to novobiocin, which differentiates it from other coagulase-negative staphylococci."
  },
  {
    id: "micro-bacteria-10",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 10",
    date: "May 15, 2026",
    answer: "Treponema pallidum",
    question: "A 29-year-old man had a painless genital ulcer 2 months ago that healed without treatment.",
clues: [
  "He now has fatigue, low-grade fever, and a rash spreading to his palms and soles.Patchy hair loss.",
  "He is sexually active with multiple partners and inconsistently uses protection.",
  "No genital ulcers are currently present.",
  "Physical examination now reveals generalized lymphadenopathy and multiple mucous patches in the oral cavity.",
  "Positive VDRL."
],
answer: "Treponema pallidum",
summary: "Secondary syphilis due to Treponema pallidum. After initial sexual transmission, the spirochete penetrates mucous membranes or skin and causes a painless chancre at the entry site (primary stage), which heals spontaneously. The organism then disseminates hematogenously throughout the body. This systemic spread leads to the secondary stage, characterized by a diffuse rash involving the palms and soles, lymphadenopathy, mucous patches, and constitutional symptoms. The bacteria evade the immune system through antigenic variation and minimal surface antigen exposure, allowing persistent infection and progression if untreated."
  },
  {
    id: "micro-bacteria-11",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 11",
    date: "May 15, 2026",
    answer: "Bacillus anthracis (cutaneous anthrax)",
    question: "A 41-year-old man presents to the ED with a rapidly enlarging painless skin lesion on his right forearm.",
clues: [
  "He reports that about one week ago, he was working in a textile factory handling imported animal hides.",
  "Initially, he noticed a small itchy bump at the site, which he assumed was an insect bite.",
  "He also reports mild fever, malaise, and a feeling of generalized fatigue.",
  "Over the next several days, the lesion expanded and developed a central area of black discoloration.",
  "The physician suspects a spore-forming gram-positive rod from infected animal products producing lethal and edema toxins causing tissue necrosis and systemic toxicity."
],
answer: "Bacillus anthracis(cutaneous anthrax)",
summary: "Cutaneous anthrax. This patient has a rapidly enlarging painless skin lesion with a black eschar and surrounding edema after exposure to animal hides, which is typical of Bacillus anthracis infection. Mimics adenylate cyclase(increase cAMP). It is a spore-forming gram-positive rod that produces edema toxin and lethal toxin, leading to tissue necrosis, painless ulceration, and potential systemic toxicity if untreated. And it is uncommonly progress to bacteremia and death."
  
  },
  {
    id: "micro-bacteria-12",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 12",
    date: "May 15, 2026",
    answer: "Vibrio cholerae",
    question: "A 30-year-old man presents to a rural health clinic with sudden onset of profuse watery diarrhea for the past 24 hours.",
clues: [
  "He also has repeated vomiting, intense thirst, and muscle cramps.",
  "There is no blood or mucus in the stool and no significant abdominal pain.",
  "He recently returned from a coastal village where he consumed untreated well water and ate raw seafood.",
  "He is severely dehydrated with hypotension, tachycardia, metabolic acidosis, and hypokalemia.",
  "Stool microscopy shows numerous comma-shaped, motile gram-negative rods. The organism grows well in alkaline media."
],
answer: "Vibrio cholerae",
summary: "Cholera due to Vibrio cholerae. This comma-shaped, motile, gram-negative rod is transmitted by ingestion of contaminated water or seafood and thrives in alkaline environments. After colonizing the small intestine, it produces cholera toxin, which activates adenylate cyclase via ADP-ribosylation of Gs proteins, leading to massive secretion of chloride ions and water into the intestinal lumen. This results in profuse “rice-water” diarrhea, rapid dehydration, electrolyte loss, and metabolic acidosis. The disease spreads through fecal–oral transmission, especially in areas with poor sanitation and unsafe water supplies."
  
  },
  {
    id: "micro-bacteria-13",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 13",
    date: "May 15, 2026",
    answer: "Bordetella pertussis",
    question: "A 5-year-old boy is brought to the clinic with a 3-week history of worsening cough.",
clues: [
  "The illness began with mild rhinorrhea, low-grade fever, and occasional cough that resembled a common cold.",
  "He is fully immunized according to schedule. There is no history of asthma or allergies.",
  "After about a week, the cough became more frequent and severe.",
  "For 10 days, he has had recurrent severe coughing fits with difficulty speaking or inhaling.",
  "He appears relatively well but fearful of the next spell."
],
answer: "Bordetella pertussis",
summary: "Whooping cough (pertussis) caused by Bordetella pertussis. The illness progresses in stages as the bacteria attach to ciliated respiratory epithelium and release toxins that impair mucociliary clearance and disrupt immune responses. It begins with a catarrhal stage resembling a mild upper respiratory infection with rhinorrhea and low-grade fever, during which bacterial replication and transmission are highest. This is followed by the paroxysmal stage, characterized by repeated, forceful coughing episodes due to accumulation of mucus and damaged cilia, often ending with difficulty inhaling and exhaustion. Finally, in the convalescent stage, the frequency and severity of coughing gradually decrease as the epithelium recovers, though the cough may persist for weeks."
  
  },
  {
    id: "micro-bacteria-14",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 14",
    date: "May 15, 2026",
    answer: "Staphylococcus aureus (Toxin-mediated disease)",
    question: "A 3-year-old boy is brought to the hospital with 48 hours of fever, irritability, and progressive skin redness.",
clues: [
  "Three days earlier, he had mild conjunctival discharge and crusting around the nose.",
  "Skin is markedly tender with a positive Nikolsky sign.",
  "The oral cavity, tongue, and genital mucosa appear normal without erosions or ulcers.",
  "Biopsy shows superficial intraepidermal splitting at the granular layer without significant inflammation or full-thickness necrosis.",
  "A swab from the nasopharynx grows gram-positive cocci in clusters that are catalase-positive and coagulase-positive."
],
answer: "Staphylococcus aureus(Toxin-mediated disease)",
summary: "Staphylococcal scalded skin syndrome (SSSS).This is a toxin-mediated disease caused by Staphylococcus aureus. The organism produces exfoliative toxins (ETA, ETB) that disseminate hematogenously from a distant focus (often nasopharynx or conjunctiva). These toxins are serine proteases that specifically cleave desmoglein-1, a cadherin responsible for cell adhesion in the superficial epidermis (stratum granulosum). Loss of this adhesion leads to superficial intraepidermal splitting, causing fragile skin, positive shearing with pressure, and sheet-like desquamation. Mucous membranes are spared because they rely primarily on desmoglein-3 rather than desmoglein-1 for epithelial integrity. The skin lesions are sterile because the pathology is toxin-mediated rather than due to direct bacterial invasion."

  },
  {
    id: "micro-bacteria-15",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 15",
    date: "May 15, 2026",
    answer: "Mycobacterium avium complex",
    question: "A 41-year-old man presents with 3 months of fever, night sweats, diarrhea, abdominal pain, and weight loss.",
clues: [
  "He was diagnosed with HIV infection 8 years ago but has been poorly compliant with antiretroviral therapy.",
  "His CD4+ T-cell count is 35 cells/µL.",
  "Blood cultures are obtained and later grow acid-fast bacilli.",
  "He has lymphadenopathy, hepatosplenomegaly, anemia, and elevated alkaline phosphatase.",
  "Stool studies are negative for common bacterial pathogens. Chest X-ray does not show focal consolidation."
],
answer: "Mycobacterium avium complex",
summary: "Disseminated infection due to Mycobacterium avium complex. This nontuberculous, acid-fast mycobacterium is an opportunistic pathogen seen in patients with advanced AIDS, especially when CD4 counts fall below 50 cells/µL. It is acquired from the environment and spreads hematogenously, infecting macrophages in multiple organs such as the liver, spleen, lymph nodes, and bone marrow. The intracellular accumulation of organisms leads to systemic symptoms including fever, weight loss, diarrhea, anemia, hepatosplenomegaly, and elevated alkaline phosphatase."
  
  },
  {
    id: "micro-bacteria-16",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 16",
    date: "May 15, 2026",
    answer: "Pseudomonas aeruginosa",
    question: "A 58-year-old man with long-standing poorly controlled diabetes mellitus presents to the clinic with ear pain for the past week.",
clues: [
  "He reports purulent ear discharge, decreased hearing, and worsening pain at night.",
  "The external auditory canal is swollen, erythematous, and filled with granulation tissue and purulent discharge.",
  "Imaging of the skull base shows evidence of osteomyelitis.",
  "Culture of the ear discharge grows a gram-negative, oxidase-positive rod that produces a blue-green pigment and has a fruity odor.",
  "Physician started a piperacillin-tazobactam."
],
answer: "Pseudomonas aeruginosa",
summary: "Malignant (necrotizing) otitis externa due to Pseudomonas aeruginosa. This opportunistic, gram-negative, oxidase-positive rod thrives in moist environments and readily colonizes the external auditory canal. In patients with poorly controlled diabetes, impaired immunity and microvascular disease allow the organism to invade beyond the ear canal into soft tissue and the skull base, causing osteomyelitis and cranial nerve involvement (often the facial nerve). P. aeruginosa produces tissue-damaging toxins and forms protective biofilms, while its characteristic blue-green pigments and fruity odor reflect active growth. The infection progresses from severe otitis externa to destructive, necrotizing disease because the bacteria can persist in moist tissue, resist host defenses, and spread along fascial planes and bone."
  
  },
  {
    id: "micro-bacteria-17",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 17",
    date: "May 15, 2026",
    answer: "Streptococcus pyogenes (Pyogenic)",
    question: "A 7-year-old boy is brought to the clinic with multiple itchy skin lesions around his nose and mouth for the past 4 days.",
clues: [
  "The lesions began as small red spots that quickly progressed to fluid-filled blisters which ruptured easily.",
  "His mother reports that the area now has thick, golden-yellow crusts.",
  "No lymphadenopathy is noted.",
  "Several children in his class recently had similar skin infections. He has no fever and otherwise feels well.",
  "Swab test is positive for antistreptolysin O (ASO)."
],
answer: "Streptococcus pyogenes(Pyogenic)",
summary: "Impetigo due to Streptococcus pyogenes. This organism spreads through direct skin contact, especially among children, and enters through minor breaks in the skin. It produces enzymes and toxins that allow superficial invasion of the epidermis, leading to small vesicles that rupture easily. The dried exudate forms the characteristic honey-colored crusts. The infection remains limited to the superficial skin layers, which is why systemic symptoms are usually absent, but it is highly contagious and can spread rapidly in close-contact settings."
  
  },
  {
    id: "micro-bacteria-18",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 18",
    date: "May 15, 2026",
    answer: "Nocardia asteroides",
    question: "A 52-year-old man presents to the hospital with a 2-week history of worsening headache, low-grade fever, and progressive confusion.",
clues: [
  "He had a kidney transplant a year ago and takes tacrolimus and prednisone.",
  "He also reports a chronic cough with occasional blood-streaked sputum and unintentional weight loss over the past month.",
  "He works as a landscaper and frequently handles soil and compost.",
  "Chest X-ray reveals multiple nodular infiltrates with cavitation.",
  "A biopsy of one of the lesions demonstrates branching, filamentous, weakly acid-fast, gram-positive organisms."
],
answer: "Nocardia asteroides",
summary: "Diagnosis: Disseminated nocardiosis due to Nocardia asteroides. This soil-dwelling, branching, weakly acid-fast bacterium is acquired by inhalation, first causing a chronic pulmonary infection with nodular or cavitary lesions. In immunocompromised individuals, such as transplant patients on immunosuppressive therapy, the organism can spread through the bloodstream from the lungs to distant organs, especially the brain, where it forms multiple abscesses. The resulting inflammation and mass effect produce neurological deficits and characteristic ring-enhancing lesions on imaging."
  
  },
  {
    id: "micro-bacteria-19",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 19",
    date: "May 15, 2026",
    answer: "Legionella pneumophila",
    question: "A 67-year-old man presents with 4 days of fever, dry cough, dyspnea, and confusion.",
clues: [
  "His family notes that he recently returned from a weekend stay at a large hotel where he frequently used the hot tub and indoor pool.",
  "Labs show hyponatremia and leukocytosis, and chest X-ray shows multilobar infiltrates.",
  "A urine antigen test returns positive.",
  "His past medical history includes chronic obstructive pulmonary disease and a 40-pack-year smoking history.",
  "Physician started Azithromycin and Fluoroquinolones."
],
answer: "Legionella pneumophila",
summary: "Atypical pneumonia due to Legionella pneumophila. This gram-negative bacterium is found in freshwater environments and spreads through inhalation of contaminated aerosolized water from sources such as hot tubs, air-conditioning systems, and hotel water supplies. It survives and replicates inside macrophages, leading to a severe atypical pneumonia characterized by high fever, dry cough, confusion, diarrhea, hyponatremia, and multilobar infiltrates on imaging. It does not stain well on Gram stain and is commonly diagnosed with a urine antigen test."
  
  },
  {
    id: "micro-bacteria-20",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 20",
    date: "May 15, 2026",
    answer: "Helicobacter pylori",
    question: "A 45-year-old man has 4 months of burning epigastric pain relieved by food and antacids.",
clues: [
  "He also reports frequent bloating, nausea, and early satiety.",
  "Over the past month, he has noticed dark, tarry stools and increasing fatigue.",
  "On examination, he has mild epigastric tenderness. Laboratory tests reveal iron deficiency anemia.",
  "An upper endoscopy reveals a duodenal ulcer.",
  "Gastric biopsy shows curved gram-negative rods with a positive urease test."
],
answer: "Helicobacter pylori",
summary: "Peptic ulcer disease due to Helicobacter pylori. This curved, motile, gram-negative rod colonizes the gastric mucosa by producing urease, which converts urea to ammonia and buffers stomach acid, allowing survival in the acidic environment. It damages the protective mucous layer and induces chronic inflammation, leading to gastritis and duodenal ulcers. H. pylori is also associated with gastric adenocarcinoma and MALT lymphoma. It is diagnosed by urease testing, biopsy, urea breath test, or stool antigen testing and treated with combination antibiotic therapy plus acid suppression ."
  
  },
  {
    id: "micro-bacteria-21",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 21",
    date: "May 15, 2026",
    answer: "Borrelia burgdorferi",
    question: "A 32-year-old woman presents to the clinic with fatigue, low-grade fever, headache, and muscle aches for the past week.",
clues: [
  "She recently returned from a hiking trip in a wooded area of the northeastern United States.",
  "She recalls removing a small tick from her leg about 10 days ago.",
  "On examination, a large annular erythematous rash with central clearing is seen on her thigh.",
  "Over the past two days, she has developed joint pain in her knees and episodes of palpitations with lightheadedness.",
  "Mild swelling of the right knee is present. An ECG shows atrioventricular conduction abnormalities."
],
answer: "Borrelia burgdorferi",
summary: "Lyme disease due to Borrelia burgdorferi. This tick-borne spirochete is transmitted by Ixodes deer ticks and first produces an expanding erythema migrans rash at the bite site. The organism then spreads hematogenously and evades host immunity through antigenic variation of its surface proteins. As infection disseminates, it can involve multiple systems—causing migratory arthritis (especially the knees), cardiac conduction abnormalities such as AV block, and neurologic manifestations. Without treatment, the disease progresses from early localized infection to early disseminated and late-stage systemic involvement."
 
  },
  {
    id: "micro-bacteria-22",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 22",
    date: "May 15, 2026",
    answer: "Mycoplasma pneumoniae",
    question: "A 19-year-old college student presents to the campus clinic with a 10-day history of persistent dry cough, low-grade fever, headache, and fatigue.",
clues: [
  "He reports that several students in his dormitory have had similar symptoms over the past two weeks.",
  "He denies chest pain or productive sputum.",
  "Chest X-ray shows diffuse, patchy interstitial infiltrates that appear worse than his physical examination findings would suggest.",
  "A peripheral blood smear shows red blood cell agglutination at cold temperatures.",
  "Sputum Gram stain does not reveal any organisms."
],
answer: "Mycoplasma pneumoniae",
summary: "Atypical (“walking”) pneumonia due to Mycoplasma pneumoniae. This organism is a small bacterium that lacks a cell wall, which explains why it does not appear on Gram stain and is not susceptible to beta-lactam antibiotics. It spreads through respiratory droplets, especially in close living environments such as dormitories. Mycoplasma pneumoniae attaches to the respiratory epithelium using specialized adhesion proteins, causing inflammation and damage to the airway lining that leads to a persistent dry cough and interstitial pneumonia. It is also associated with cold agglutinin formation, where antibodies cross-react with red blood cells, causing mild hemolytic anemia."
  
  
  },
  {
    id: "micro-bacteria-23",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 23",
    date: "May 15, 2026",
    answer: "Chlamydia trachomatis (Types D-K)",
    question: "A 23-year-old woman presents with a week of lower abdominal pain, abnormal vaginal discharge, and dyspareunia.",
clues: [
  "She also reports burning during urination and irregular menstrual spotting.",
  "She is sexually active with multiple partners and does not consistently use protection.",
  "A nucleic acid amplification test (NAAT) performed on a cervical swab detects an obligate intracellular organism.",
  "Can lead to PID.",
  "Physician treated this patient with Doxycycline."
],
    summary: "Cervicitis and pelvic inflammatory disease risk due to Chlamydia trachomatis (Types D-K). This obligate intracellular bacterium is among the most common sexually transmitted infections. It infects columnar epithelial cells and can ascend to cause pelvic inflammatory disease, leading to complications such as infertility and ectopic pregnancy. Diagnosis is by NAAT on cervical or urine samples, and treatment is doxycycline."
  },
  {
    id: "micro-bacteria-24",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 24",
    date: "May 15, 2026",
    answer: "Bartonella henselae",
    question: "A 17-year-old boy presents to the clinic with a 2-week history of low-grade fever, fatigue, and swelling in his right armpit.",
clues: [
  "He was scratched on the forearm by his pet kitten.",
  "A small red bump appeared at the site of the scratch, which later crusted over and healed.",
  "There is a large, tender, swollen lymph node in the right axillary region. Laboratory tests show mild leukocytosis.",
  "A biopsy of the lymph node shows granulomatous inflammation with stellate microabscesses.",
  "Silver stain reveals small pleomorphic gram-negative bacilli."
],
answer: "Bartonella henselae",
summary: "Cat scratch disease due to Bartonella henselae. This small, pleomorphic, gram-negative bacillus is transmitted through scratches or bites from cats, especially kittens. After inoculation into the skin, it causes a localized papule at the scratch site and then spreads to nearby lymph nodes through the lymphatic system. The organism induces granulomatous inflammation with characteristic stellate microabscesses, leading to tender regional lymphadenopathy, low-grade fever, and fatigue."
  
  },
  {
    id: "micro-bacteria-25",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 25",
    date: "May 15, 2026",
    answer: "Yersinia enterocolitica",
    question: "A 24-year-old man presents to the clinic with pain and swelling in his right knee and left ankle for the past week.",
clues: [
  "He has 2 dogs and 1 cat.",
  "Two weeks earlier, he had an episode of fever, abdominal cramps, and diarrhea after eating undercooked pork at a barbecue.",
  "Conjunctival redness is noted in both eyes.",
  "Stool culture from the earlier diarrheal illness had grown a gram-negative coccobacillus with Bipolar staining.",
  "Further complication can be pseudoappendicitis."
],
answer: "Yersinia enterocolitica.",
summary: "Reactive arthritis following enteritis due to Yersinia enterocolitica. This gram-negative coccobacillus is acquired from pet feces, contaminated food, especially undercooked pork, and can grow at low temperatures. After causing a self-limited diarrheal illness, bacterial antigens persist and trigger an immune-mediated reaction in genetically susceptible individuals (often HLA-B27 positive). This post-infectious response leads to sterile joint inflammation, conjunctivitis, and urethritis—features of reactive arthritis—despite the absence of bacteria in the joints."
  
  },
  {
    id: "micro-bacteria-26",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 26",
    date: "May 15, 2026",
    answer: "Campylobacter jejuni",
    question: "A 26-year-old man presents to the clinic with 3 days of fever, abdominal cramps, and diarrhea that has recently become bloody.",
clues: [
  "One week earlier, he attended a picnic where he ate undercooked chicken and unpasteurized milk.",
  "Laboratory studies show leukocytosis. Stool microscopy reveals numerous white blood cells and red blood cells.",
  "Stool culture grows a curved, gram-negative rod that is oxidase-positive and grows best at 42°C in a microaerophilic environment.",
  "Two weeks after recovery, he develops progressive weakness and tingling in his legs that ascends upward.",
  "Physician treated this patient with Azithromycin"
],
answer: "Campylobacter jejuni",
summary: "Enterocolitis with post-infectious Guillain-Barré risk due to Campylobacter jejuni. This curved, oxidase-positive, gram-negative rod is transmitted by ingestion of undercooked poultry or unpasteurized milk and grows best at 42 °C in a microaerophilic environment. After surviving gastric acid, it invades the intestinal mucosa—especially the jejunum, ileum, and colon—causing inflammatory, often bloody diarrhea with fever and abdominal cramps. Its lipooligosaccharide structures can mimic peripheral nerve gangliosides, triggering an autoimmune response that may lead to Guillain-Barré syndrome after the diarrheal illness resolves."
  
  },
  {
    id: "micro-bacteria-27",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 27",
    date: "May 15, 2026",
    answer: "Mycobacterium tuberculosis",
    question: "A 54-year-old man presents to the clinic with a 4-month history of persistent cough, intermittent low-grade fever, night sweats, and unintentional weight loss.",
clues: [
  "He also reports occasional blood-streaked sputum and increasing fatigue.",
  "His past medical history is significant for poorly controlled type 2 diabetes mellitus.",
  "His temperature is 37.9°C. Lung examination reveals crackles over the upper lobes bilaterally.",
  "6 months back he travelled to Nepal",
  "A biopsy of a lung lesion reveals caseating granulomas with multinucleated giant cells."
],
answer: "Mycobacterium tuberculosis",
summary: "Pulmonary tuberculosis due to Mycobacterium tuberculosis.This bacteria is an obligate aerobic, acid-fast bacillus with mycolic acids in its cell wall, making it resistant to drying, disinfectants, and Gram staining. It spreads via airborne droplets and infects the lungs. After inhalation, it survives inside alveolar macrophages by inhibiting phagolysosome fusion, triggering a type IV hypersensitivity reaction and forming caseating granulomas with Langhans giant cells.It commonly involves the oxygen-rich upper lobes, causing cavitary lesions, chronic cough, hemoptysis, fever, night sweats, and weight loss. The infection may remain latent and reactivate when immunity declines. Diagnosis is by acid-fast stain, culture, and TB testing, and treatment requires prolonged multidrug therapy."
  
  },
  {
    id: "micro-bacteria-28",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 28",
    date: "May 15, 2026",
    answer: "Streptococcus agalactiae (Group B streptococci)",
    question: "A 3-day-old newborn is brought to the emergency department with poor feeding, lethargy, fever, and irritability.",
clues: [
  "The baby was born at term via vaginal delivery.",
  "On examination, the infant is febrile, hypotonic, and has respiratory distress.",
  "A lumbar puncture shows cloudy cerebrospinal fluid with elevated protein, low glucose, and numerous neutrophils.",
  "Gram stain of the CSF shows gram-positive cocci arranged in chains.",
  "Further testing reveals the organism is beta-hemolytic, catalase-negative, and produces a positive CAMP test."
],
answer: "Streptococcus agalactiae(Group B streptococci)",
summary: "Streptococcus agalactiae (Group B Streptococcus). This gram-positive, beta-hemolytic coccus in chains commonly colonizes the maternal vagina and rectum and is transmitted to the newborn during vaginal delivery, especially with prolonged rupture of membranes or absent intrapartum prophylaxis. Its polysaccharide capsule helps it evade phagocytosis, allowing rapid spread into the bloodstream and then to the meninges, causing early-onset neonatal sepsis, pneumonia, and meningitis within the first week of life. Diagnosis is by culture and characteristic lab features (beta-hemolysis, positive CAMP test). Prevention relies on maternal screening at 35–37 weeks and intrapartum IV penicillin, while treatment in affected neonates is IV ampicillin or penicillin with gentamicin."
  
  },
  {
    id: "micro-bacteria-29",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 29",
    date: "May 15, 2026",
    answer: "Streptococcus pyogenes (Immunologic)",
    question: "A 12-year-old boy is brought to the clinic with fever, fatigue, and joint pain for the past week.",
clues: [
  "Severe joint pain limits walking, and swelling shifts from one joint to another.",
  "His heart rate is elevated, and a new blowing systolic murmur is heard at the apex.",
  "A faint, pink, ring-shaped rash is noted over his trunk.",
  "Two weeks ago, he had a sore throat with fever that resolved without medical treatment.",
  "Laboratory tests show elevated ESR and CRP, leukocytosis, and a high antistreptolysin O (ASO) titer."
],
summary: "Acute rheumatic fever due to Streptococcus pyogenes. Following an untreated streptococcal throat infection, the body mounts an immune response that cross-reacts with host tissues (molecular mimicry). Antibodies formed against streptococcal M proteins mistakenly attack the heart, joints, skin, and central nervous system. This leads to migratory polyarthritis, carditis with new murmurs and PR prolongation, subcutaneous nodules, erythema marginatum, and Sydenham chorea. The disease is immune-mediated rather than due to direct bacterial invasion, and evidence of prior infection is supported by elevated ASO titers. Early recognition and antibiotic treatment of strep pharyngitis can prevent this complication."  },
  {
    id: "micro-bacteria-30",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 30",
    date: "May 15, 2026",
    answer: "Staphylococcus epidermidis",
    question: "A 68-year-old man with diabetes and end-stage renal disease develops fever and chills during a hemodialysis session.",
clues: [
  "He denies cough, urinary symptoms, or abdominal pain.",
  "Cardiac examination reveals no new murmurs. Lungs are clear. There is no peripheral stigmata of endocarditis.",
  "The catheter exit site shows mild erythema without purulence.",
  "The organism is catalase-positive, coagulase-negative, and resistant to multiple beta-lactam antibiotics.",
  "Further testing shows the organism can adhere strongly to plastic and prosthetic material."
],
answer: "Staphylococcus epidermidis",
summary: "Catheter-related bloodstream infection due to Staphylococcus epidermidis. This skin commensal becomes pathogenic when it gains access to the bloodstream through indwelling devices such as dialysis catheters. Its key pathogenic feature is the production of a polysaccharide biofilm that firmly adheres to synthetic surfaces, protecting the bacteria from host defenses and limiting antibiotic penetration. This allows persistent bacteremia until the infected device is removed, as antimicrobial therapy alone is often insufficient to eradicate organisms embedded within the biofilm."
  
  },
  {
    id: "micro-virus-1",
    domain: "microbiology",
    subdomain: "virus",
    title: "Virus",
    date: "May 14, 2026",
    answer: "Influenza virus",
    question: "A 29-year-old woman presents to the gynecology clinic with 6 days of intense vulvar itching, burning, and discomfort while walking.",
    clues: [
      "Two weeks earlier, she completed a course of broad-spectrum antibiotics for a urinary tract infection. ",
      "She reports a thick vaginal discharge that she describes as clumpy and difficult to wash away.",
      "She reports no foul odor, has external burning with urination, and is sexually active on oral contraceptives.",
      "The cervix appears normal. Vaginal pH is 4.2.",
      "KOH prep shows budding yeast with pseudohyphae."
    ],
    summary: "Vulvovaginitis due to Candida albicans.This organism is part of normal vaginal flora but overgrows when bacterial competition is reduced, such as after antibiotic therapy, or when hormonal and metabolic factors favor its proliferation. It forms budding yeast and pseudohyphae that adhere to and penetrate mucosal epithelium, producing intense inflammation, itching, and thick adherent discharge. Unlike bacterial causes of vaginitis, the vaginal pH remains normal because lactobacilli are still present and producing lactic acid."
  
  },
  {
  id: "micro-fungi-1",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 1",
  date: "May 15, 2026",
  answer: "Candida albicans",
  question: "A 29-year-old woman presents to the gynecology clinic with 6 days of intense vulvar itching, burning, and discomfort while walking.",
    clues: [
      "Two weeks earlier, she completed a course of broad-spectrum antibiotics for a urinary tract infection. ",
      "She reports a thick vaginal discharge that she describes as clumpy and difficult to wash away.",
      "She reports no foul odor, has external burning with urination, and is sexually active on oral contraceptives.",
      "The cervix appears normal. Vaginal pH is 4.2.",
      "KOH prep shows budding yeast with pseudohyphae."
    ],
    summary: "Vulvovaginitis due to Candida albicans.This organism is part of normal vaginal flora but overgrows when bacterial competition is reduced, such as after antibiotic therapy, or when hormonal and metabolic factors favor its proliferation. It forms budding yeast and pseudohyphae that adhere to and penetrate mucosal epithelium, producing intense inflammation, itching, and thick adherent discharge. Unlike bacterial causes of vaginitis, the vaginal pH remains normal because lactobacilli are still present and producing lactic acid."
  
},

{
  id: "micro-fungi-2",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 2",
  date: "May 15, 2026",
  answer: "Pneumocystis jirovecii",
  question: "A 38-year-old man presents with 2 weeks of progressive shortness of breath, dry cough, low-grade fever, and fatigue.",
clues: [
  "Over the past several months, he has experienced significant weight loss and recurrent oral sores but has not sought medical care.",
  "Laboratory testing shows lymphopenia and CD4 count drops<200 cells/mm3.",
  "Chest radiograph reveals diffuse bilateral interstitial infiltrates.",
  "High-resolution CT scan shows widespread ground-glass opacities.",
  "BAL with silver stain shows round cysts in a foamy background."
],
answer: "Pneumocystis jirovecii",
summary: "Pneumocystis pneumonia caused by Pneumocystis jirovecii. This atypical fungus primarily affects individuals with impaired cell-mediated immunity, especially reduced CD4⁺ T-cell function. It resides in the alveoli where it multiplies and generates a foamy, protein-rich exudate that disrupts gas exchange, leading to progressive hypoxemia with relatively mild auscultatory findings. The organism does not grow on routine culture media, so diagnosis relies on identification of cystic forms in respiratory specimens using special stains."
},

{
  id: "micro-fungi-3",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 3",
  date: "May 15, 2026",
  answer: "Sporothrix schenckii(Sporotrichosis)",
  question: "A 42-year-old landscape architect presents with a 6-week history of gradually spreading skin lesions on his right hand and forearm.",
clues: [
  "He did not seek care initially, assuming it was an insect bite.",
  "Regional lymph nodes are mildly enlarged. No other lesions are found.",
  "Biopsy of a nodule shows granulomatous inflammation with cigar-shaped budding yeast on special staining.",
  "He says it started as a small painless papule on his finger after a puncture injury while handling rose bushes and sphagnum moss.",
  "Microscopy shows thin septate hyphae with rosette (“daisy head”) clusters of conidia at the tips of conidiophores."
],
answer: "Sporothrix schenckii(Sporotrichosis)",
summary: "Sporotrichosis caused by Sporothrix schenckii. This Fungi is a thermally dimorphic fungus found in soil, sphagnum moss, and rose thorns that enters the skin through minor trauma. In tissue, it converts to a cigar-shaped yeast and triggers a granulomatous reaction, forming an initial painless papule that may ulcerate. The organism then spreads along superficial lymphatic channels, producing a linear chain of subcutaneous nodules (sporotrichoid pattern) with minimal systemic symptoms, explaining the ascending lesions from the primary site."
},

{
  id: "micro-fungi-4",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 4",
  date: "May 15, 2026",
  answer: "Malassezia furfur(Pityrosporum)",
  question: "A 24-year-old man presents with a 3-month history of gradually spreading skin discoloration.",
clues: [
  "The lesions are not painful but are associated with mild itching, especially after sweating.",
  "He recently returned from a humid coastal trip and noticed the patches became more visible after tanning.",
  "Gentle scraping of the lesions produces a fine powdery scale (evoked scale sign).",
  "He often uses oily skin products and stays in sweaty clothes after workouts.",
  "Microscopy shows round yeast cells with short curved hyphae—the classic “spaghetti and meatballs” pattern."
],
answer: "Malassezia furfur (Pityrosporum)",
summary: "Tinea (pityriasis) versicolor caused by Malassezia furfur (Pityrosporum). It is a lipophilic yeast that is part of normal skin flora but overgrows in warm, humid conditions and in the presence of oily skin and sweat. It invades the superficial stratum corneum and produces azelaic acid, which interferes with melanin production, leading to hypo- or hyperpigmented scaly macules on the upper trunk. KOH microscopy shows the classic “spaghetti and meatballs” appearance due to round yeast cells with short curved hyphae."
},

{
  id: "micro-fungi-5",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 5",
  date: "May 15, 2026",
  answer: "Tinea corporis",
  question: "A 29-year-old woman presents with a 4-week history of an expanding itchy rash on her right forearm and lower abdomen.",
clues: [
  "The lesion began as a small red patch and gradually enlarged despite the use of over-the-counter moisturizing creams.",
  "She reports that the itching worsens with sweating and after exercise.",
  "Exam shows well-defined circular red plaques with raised scaly edges and central clearing on the forearm and abdomen.",
  "Microscopy reveals long, branching, septate hyphae.",
  "Fungal culture later grows a dermatophyte that forms white cottony colonies on Sabouraud agar."
],
answer: "Tinea corporis",
summary: "Tinea corporis (dermatophyte infection of glabrous skin). Most commonly caused by Trichophyton rubrum (and sometimes Microsporum canis from kittens). These fungi digest keratin and remain confined to the stratum corneum. The lesion expands outward because the organism is most active at the advancing scaly edge, while the center begins to clear as inflammation subsides. Therefore, skin scrapings from the active border show septate branching hyphae on KOH and give the highest diagnostic yield."
},

{
  id: "micro-fungi-6",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 6",
  date: "May 15, 2026",
  answer: "Histoplasma capsulatum(Histoplasmosis)",
  question: "A 38-year-old man presents to the emergency department with 3 weeks of fever, fatigue, dry cough, and unintentional weight loss.",
clues: [
  "He recently came back for Ohio River valley",
  "His past medical history is significant for untreated HIV infection.",
  "He is febrile with hepatosplenomegaly, lymphadenopathy, oral ulcers, and diffuse crackles on chest exam.",
  "Pancytopenia on CBC.",
  "BAL is performed. Special staining of the specimen reveals small oval yeast forms within macrophages."
],
answer: "Histoplasma capsulatum(Histoplasmosis)",
summary: "Histoplasmosis caused by Histoplasma capsulatum. It is a dimorphic fungus acquired by inhaling spores from soil contaminated with bird or bat droppings. In the lungs, it converts to a yeast form and survives inside macrophages, spreading through the reticuloendothelial system to cause hepatosplenomegaly, lymphadenopathy, oral ulcers, pancytopenia, and diffuse lung infiltrates, especially in immunocompromised patients."
},

{
  id: "micro-fungi-7",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 7",
  date: "May 15, 2026",
  answer: "Aspergillus fumigatus(ABPA)",
  question: "A 19-year-old student has recurrent wheezing, cough, and shortness of breath for several months.",
clues: [
  "He has a history of poorly controlled asthma since childhood and uses his inhaler frequently.",
  "Investigations show markedly elevated IgE with peripheral eosinophilia.",
  "He coughs out brown sticky mucus, and his symptoms get worse in damp, moldy places.",
  "CT scan of the chest showing central bronchiectasis",
  "Sputum microscopy reveals 45 degree acute angle branching of septate hyphae."
],
answer: "Aspergillus fumigatus(ABPA)",
summary: "Allergic Bronchopulmonary Aspergillosis (ABPA) caused by Aspergillus fumigatus.This Fungi colonizes the airways of people with asthma and triggers a strong allergic (hypersensitivity) reaction rather than an invasive infection. This leads to very high IgE, eosinophilia, thick brown mucus plugs, recurrent wheezing, and over time central bronchiectasis. Symptoms worsen in damp, moldy environments due to increased exposure to fungal spores."
},

{
  id: "micro-fungi-8",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 8",
  date: "May 15, 2026",
  answer: "Coccidioides immitis(Coccidioidomycosis)",
  question: "A 34-year-old construction worker has 2 weeks of fever, dry cough, chest pain, joint pain and fatigue.",
clues: [
  "Joint pains in his knees and ankles and has noticed tender red nodules on the front of his legs over the past few days.",
  "There are erythematous tender nodules over both shins.",
  "Chest X-ray shows patchy pulmonary infiltrates with hilar lymphadenopathy.",
  "He recently worked on a large excavation project in a dry, dusty desert region.",
  "Special staining reveals large, thick-walled spherical structures filled with numerous endospores."
],
summary: "Coccidioidomycosis caused by Coccidioides immitis.It is a dimorphic soil fungus endemic to dry desert regions. Infection occurs by inhaling airborne arthroconidia when dust is disturbed. In the lungs, these spores transform into large, thick-walled spherules filled with numerous endospores. When spherules rupture, endospores spread locally within lung tissue, triggering inflammation and pulmonary infiltrates.This produces a flu-like respiratory illness with fever, cough, and chest pain. The immune response may also cause joint pains and erythema nodosum (tender red nodules on the shins). Most infections are self-limited in healthy individuals, but the organism can disseminate in immunocompromised patients."
},

{
  id: "micro-fungi-9",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 9",
  date: "May 15, 2026",
  answer: "Cryptococcus neoformans",
  question: "A 36-year-old man with poorly controlled HIV has 10 days of headache, fever, vomiting, and confusion.",
clues: [
  "CD4 count is <100",
  "On exam, he is febrile, drowsy, and has neck stiffness with blurred vision.",
  "Lumbar puncture shows high opening pressure, low glucose, high protein, and lymphocytes in CSF.",
  "He recently cleaned a storage attic heavily soiled by birds.",
  "CSF microscopy shows round budding yeast with a wide clear halo, and antigen testing is positive for a capsulated yeast."
],

summary: "Cryptococcal meningitis caused by Cryptococcus neoformans. It is an encapsulated yeast acquired from environments contaminated with bird droppings. In immunocompromised patients, it spreads to the CNS, causing meningitis with high CSF opening pressure, low glucose, high protein, and lymphocytes. Microscopy classically shows round budding yeast with a wide clear halo due to its thick capsule, and CSF antigen testing is positive."
},
{
    id: "micro-fungi-10",
    domain: "microbiology",
    subdomain: "fungi",
    title: "Fungi 10",
    date: "May 15, 2026",
    answer: "Rhizopus and Mucor(Mucormycosis)",
    question: "A 55-year-old man presents with 4 days of facial pain, nasal congestion, fever, and swelling around the left eye.",
clues: [
  "He has a history of poorly controlled diabetes mellitus.",
  "Was recently treated for diabetic ketoacidosis.",
  "CT scan of the sinuses shows opacification of the maxillary and ethmoid sinuses with invasion into the orbital region.",
  "A dark, dead-looking area is seen on the nasal turbinate.",
  "Biopsy shows broad, ribbon-like hyphae without septa and right-angle branching invading blood vessels."
],

summary: "Mucormycosis caused by Rhizopus and Mucor. Infection occurs after inhalation of spores in susceptible patients, especially those with uncontrolled diabetes or ketoacidosis. These molds form broad, non-septate hyphae that invade blood vessels, leading to thrombosis, poor blood supply, and rapid tissue death in the sinuses with extension toward the orbit and brain. This angioinvasive nature explains the rapidly progressive course and dark, devitalized nasal tissue. IV liposomal amphotericin B, urgent surgical removal of dead tissue, and correction of underlying risk factors, followed by step-down therapy with posaconazole or isavuconazole."
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
    id: "pharma-psychiatry-1",
    domain: "pharma",
    subdomain: "psychiatry",
    title: "Psychiatry",
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

function showRecords(domain, subdomain) {

  const recordsGrid =
    document.getElementById('archive-grid');

  if (!recordsGrid) return;

  recordsGrid.innerHTML = '';

  const filteredRecords =
    getRecordsByCategory(domain, subdomain);

  filteredRecords.forEach((record, index) => {

    recordsGrid.appendChild(
      createRecordTile(record, index + 1)
    );

  });

  recordsGrid.scrollIntoView({
    behavior: "smooth"
  });
}

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

   if (typeof showQuestion === "function") {

      showQuestion(
         record.domain,
         record.subdomain,
         record
      );

   }

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
