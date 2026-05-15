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
    question: "A 7-year-old unvaccinated boy presents with 4 days of worsening sore throat, fever, and difficulty swallowing with neck swelling.",
    clues: [
      "The parents report that he is not fully vaccinated and missed several childhood immunizations due to travel.",
      "Oropharynx shows a thick gray-white adherent membrane over the tonsils and posterior pharyngeal wall.",
      "Removal of the membrane causes bleeding.",
      "Cervical lymphadenopathy with a bull neck appearance is present.",
      "Suspected toxin-mediated infection inhibiting protein synthesis by ADP-ribosylation of EF-2.",
      "Systemic complications include myocarditis and neuropathy."
    ],
    summary: "Diphtheria. This unvaccinated child presents with sore throat, fever, dysphagia, and a gray pseudomembrane that bleeds on removal, along with bull neck lymphadenopathy. The most likely cause is Corynebacterium diphtheriae, which produces an exotoxin that inhibits protein synthesis by ADP-ribosylating elongation factor-2 (EF-2), leading to local tissue damage and potential systemic complications such as myocarditis and neuropathy."
  },
  {
    id: "micro-bacteria-2",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 2",
    date: "May 15, 2026",
    answer: "Clostridium tetani",
    question: "A 35-year-old man is brought to the ED unable to open his mouth with painful muscle stiffness after stepping on a rusty nail 5 days ago.",
    clues: [
      "He stepped on a rusty nail 5 days ago while working at a construction site and cleaned the wound at home without medical care.",
      "Intermittent, severe generalized muscle spasms are triggered by minor stimuli such as light touch and sound.",
      "Vital signs show mild tachycardia and elevated blood pressure during spasms.",
      "The wound on his foot appears small but contaminated with dirt and necrotic tissue.",
      "The physician suspects a toxin infection blocking release of inhibitory neurotransmitters (GABA and glycine).",
      "This causes muscle rigidity and spastic paralysis."
    ],
    summary: "Tetanus. This patient presents with trismus (lockjaw), muscle stiffness, and painful spasms after a contaminated wound injury. The most likely cause is Clostridium tetani, which produces tetanospasmin that blocks the release of inhibitory neurotransmitters (GABA and glycine) in the CNS, leading to uncontrolled muscle contraction and spastic paralysis."
  },
  {
    id: "micro-bacteria-3",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 3",
    date: "May 15, 2026",
    answer: "Haemophilus influenzae",
    question: "A 4-year-old boy presents with sudden onset of high fever, severe sore throat, difficulty breathing, and continuous drooling that developed rapidly within a day.",
    clues: [
      "He was well earlier in the day but rapidly developed trouble swallowing and has been drooling continuously.",
      "He prefers to sit leaning forward and refuses to lie down, with a muffled voice.",
      "Oropharyngeal examination is avoided due to concern for airway compromise.",
      "A lateral neck X-ray shows a swollen, thumb-shaped epiglottis.",
      "Blood cultures later grow a small, gram-negative coccobacillus that requires factors V (NAD⁺) and X (hemin) for growth.",
      "Prevention is achieved with the Hib conjugate vaccine."
    ],
    summary: "Epiglottitis due to Haemophilus influenzae. This small, gram-negative coccobacillus requires factors X (hemin) and V (NAD⁺) for growth and is cultured on chocolate agar. The encapsulated type b (Hib) strain is highly virulent due to its polysaccharide PRP capsule, which prevents phagocytosis and enables bloodstream spread. In unvaccinated children, it can rapidly infect the epiglottis, causing severe airway obstruction, and is also a cause of meningitis, pneumonia, and otitis media. Prevention is achieved with the Hib conjugate vaccine."
  },
  {
    id: "micro-bacteria-4",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 4",
    date: "May 15, 2026",
    answer: "Streptococcus pneumoniae",
    question: "A 58-year-old man with chronic alcohol use and untreated otitis media presents with 24 hours of fever, severe headache, confusion, and neck stiffness.",
    clues: [
      "He has a history of chronic alcohol use and a recently untreated otitis media.",
      "He is febrile, disoriented, with positive Kernig and Brudzinski signs.",
      "He also complains of nausea, sensitivity to light, and worsening drowsiness.",
      "CSF shows high opening pressure, turbid fluid, high protein, low glucose, and neutrophils.",
      "Gram stain of the CSF reveals gram-positive, lancet-shaped diplococci.",
      "The bacteria spread from a nearby focus into the bloodstream and crossed the blood-brain barrier."
    ],
    summary: "Pneumococcal meningitis due to Streptococcus pneumoniae which commonly colonizes the nasopharynx and can spread from a nearby focus such as untreated otitis media into the bloodstream or directly through contiguous tissues. From there, the bacteria cross the blood–brain barrier and enter the subarachnoid space, where they multiply rapidly in the cerebrospinal fluid. The bacterial cell wall components trigger a strong inflammatory response, leading to increased permeability of the blood–brain barrier, cerebral edema, elevated intracranial pressure, and the accumulation of neutrophils and protein in the CSF, producing the classic features of acute bacterial meningitis."
  },
  {
    id: "micro-bacteria-5",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 5",
    date: "May 15, 2026",
    answer: "Clostridium perfringens",
    question: "A 35-year-old man develops severe wound pain, fever, and increasing thigh swelling two days after a deep contaminated laceration sustained in a motorcycle accident.",
    clues: [
      "He sustained a deep, contaminated laceration to his thigh that was initially cleaned and sutured at a small clinic.",
      "His temperature is 38.9°C, heart rate is 120/min, and blood pressure is 90/60 mmHg.",
      "The skin is discolored with bullae, crepitus, and foul-smelling discharge.",
      "This bacteria releases alpha toxin (lecithinase) causing myonecrosis and hemolysis.",
      "Gas production from carbohydrate fermentation leads to crepitus and soft tissue gas on imaging.",
      "The infection requires urgent surgical debridement and antibiotics."
    ],
    summary: "Gas gangrene (clostridial myonecrosis) due to Clostridium perfringens. This anaerobic, gram-positive, spore-forming rod is commonly found in soil and contaminates deep traumatic wounds. In low-oxygen environments, it proliferates rapidly and produces alpha toxin (lecithinase), which destroys cell membranes, causing myonecrosis, hemolysis, and tissue destruction. Gas production from carbohydrate fermentation leads to crepitus and soft tissue gas on imaging. The infection progresses rapidly with severe pain out of proportion to exam and requires urgent surgical debridement and antibiotics."
  },
  {
    id: "micro-bacteria-6",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 6",
    date: "May 15, 2026",
    answer: "Staphylococcus aureus (Inflammatory disease)",
    question: "A 32-year-old IV heroin user with daily needle reuse presents with 10 days of high-grade fever, chills, profound fatigue, shortness of breath, and a new heart murmur.",
    clues: [
      "He admits to daily intravenous heroin use and says he often reuses needles.",
      "Cardiac auscultation reveals a new holosystolic murmur best heard at the left lower sternal border that increases with inspiration.",
      "There is no prior history of heart disease.",
      "He reports pleuritic chest pain and a persistent cough producing small amounts of blood-tinged sputum.",
      "He has noticed painless red spots on his palms and soles and dark streaks under his fingernails.",
      "Embolization of vegetations can lead to infarcts in multiple organs."
    ],
    summary: "Infective endocarditis due to Staphylococcus aureus. This Gram-positive, catalase- and coagulase-positive coccus from normal skin flora can enter the bloodstream after skin breaches or IV drug use. It is highly virulent and can infect even normal valves by forming fibrin-platelet vegetations. Its toxins and enzymes cause tissue destruction and immune evasion, and embolization of vegetations can lead to infarcts in multiple organs. Diagnosis is by blood cultures and echocardiography, and treatment requires prolonged IV antibiotics with MRSA coverage."
  },
  {
    id: "micro-bacteria-7",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 7",
    date: "May 15, 2026",
    answer: "Streptococcus pyogenes (Toxigenic)",
    question: "A 9-year-old boy presents with 4 days of high fever, malaise, sore throat, abdominal pain, repeated vomiting, and a coarse skin texture with neck pain on movement.",
    clues: [
      "He appears toxic and stopped eating due to painful swallowing.",
      "Over the last 24 hours, the child has become increasingly irritable and complains of pain when moving his neck.",
      "The texture of the skin feels unusually coarse.",
      "Throat swab culture grows gram-positive cocci in chains showing complete hemolysis on blood agar.",
      "The organism is catalase-negative and sensitive to bacitracin.",
      "Streptococcal pyrogenic exotoxins (Spe A, Spe C) drive an exaggerated immune response rather than direct tissue invasion."
    ],
    summary: "Scarlet fever caused by Streptococcus pyogenes. This organism colonizes the pharynx and produces pyrogenic (erythrogenic) exotoxins that act as superantigens, triggering widespread T-cell activation and cytokine release, which leads to the diffuse inflammatory rash and systemic symptoms. Its pathogenesis also involves M protein mediated adherence and immune evasion, along with enzymes that facilitate tissue spread. The toxigenic component of streptococcal pyrogenic exotoxins (Spe A, Spe C) is responsible for the characteristic skin findings and fever by driving an exaggerated immune response rather than direct tissue invasion."
  },
  {
    id: "micro-bacteria-8",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 8",
    date: "May 15, 2026",
    answer: "Listeria monocytogenes",
    question: "A 68-year-old man with type 2 diabetes and chronic corticosteroid use presents with 2 days of fever, headache, vomiting, increasing confusion, neck stiffness, and sensitivity to light.",
    clues: [
      "His medical history includes type 2 diabetes mellitus and chronic corticosteroid use for an autoimmune condition.",
      "His family reports progressive drowsiness and difficulty maintaining balance while walking.",
      "Lumbar puncture shows elevated opening pressure, increased protein, low glucose, and a predominance of neutrophils.",
      "Gram stain of the cerebrospinal fluid shows small gram-positive rods.",
      "The organism spreads cell-to-cell using actin polymerization (actin rockets).",
      "It is characteristically treated with ampicillin."
    ],
    summary: "Meningitis due to Listeria monocytogenes. This bacterium is a motile, facultative intracellular, gram-positive rod transmitted through contaminated foods such as unpasteurized dairy products and deli meats. It is notable for causing meningitis and sepsis in neonates, the elderly, pregnant women, and immunocompromised individuals. The organism survives within macrophages, spreads cell-to-cell using actin polymerization (actin rockets), and can cross both the intestinal barrier and the blood–brain barrier. In the central nervous system, it induces inflammation of the meninges, producing bacterial meningitis with a neutrophilic CSF profile. It is characteristically treated with ampicillin."
  },
  {
    id: "micro-bacteria-9",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 9",
    date: "May 15, 2026",
    answer: "Staphylococcus saprophyticus",
    question: "A 22-year-old sexually active woman presents with 2 days of dysuria, frequency, urgency, and mild suprapubic discomfort after recently beginning a new sexual relationship.",
    clues: [
      "She is sexually active and recently began a new sexual relationship.",
      "She has mild suprapubic discomfort, normal vitals, and no flank tenderness.",
      "Urinalysis shows positive leukocyte esterase, numerous white blood cells, and bacteria.",
      "Urine culture grows gram-positive cocci arranged in clusters that are catalase-positive and coagulase-negative.",
      "The organism is resistant to novobiocin.",
      "It is part of the normal flora of the genitourinary tract and can ascend the urethra after sexual activity."
    ],
    summary: "Acute uncomplicated UTI also called Honeymooner's cystitis is caused by Staphylococcus saprophyticus. This gram-positive, catalase-positive, coagulase-negative coccus is a common cause of urinary tract infections in sexually active young women. It is part of the normal flora of the genitourinary tract and can ascend the urethra into the bladder after sexual activity. A key distinguishing feature is its resistance to novobiocin, which differentiates it from other coagulase-negative staphylococci."
  },
  {
    id: "micro-bacteria-10",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 10",
    date: "May 15, 2026",
    answer: "Treponema pallidum",
    question: "A 29-year-old sexually active man with multiple partners presents with fatigue, low-grade fever, a rash on his palms and soles, patchy hair loss, and oral mucous patches, 2 months after a painless genital ulcer that healed on its own.",
    clues: [
      "He had a painless genital ulcer 2 months ago that healed without treatment.",
      "He is sexually active with multiple partners and inconsistently uses protection.",
      "No genital ulcers are currently present.",
      "Physical examination reveals generalized lymphadenopathy and multiple mucous patches in the oral cavity.",
      "Positive VDRL.",
      "The organism disseminates hematogenously, evading the immune system through antigenic variation."
    ],
    summary: "Secondary syphilis due to Treponema pallidum. After initial sexual transmission, the spirochete penetrates mucous membranes or skin and causes a painless chancre at the entry site (primary stage), which heals spontaneously. The organism then disseminates hematogenously throughout the body. This systemic spread leads to the secondary stage, characterized by a diffuse rash involving the palms and soles, lymphadenopathy, mucous patches, and constitutional symptoms. The bacteria evade the immune system through antigenic variation and minimal surface antigen exposure, allowing persistent infection and progression if untreated."
  },
  {
    id: "micro-bacteria-11",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 11",
    date: "May 15, 2026",
    answer: "Bacillus anthracis (cutaneous anthrax)",
    question: "A 41-year-old textile factory worker handling imported animal hides presents with a rapidly enlarging painless skin lesion on his right forearm developing a central black discoloration over one week.",
    clues: [
      "About one week ago, he was working in a textile factory handling imported animal hides.",
      "Initially, he noticed a small itchy bump at the site, which he assumed was an insect bite.",
      "He also reports mild fever, malaise, and a feeling of generalized fatigue.",
      "Over the next several days, the lesion expanded and developed a central area of black discoloration.",
      "The physician suspects a spore-forming gram-positive rod from infected animal products producing lethal and edema toxins causing tissue necrosis and systemic toxicity.",
      "Mimics adenylate cyclase (increases cAMP) and can uncommonly progress to bacteremia and death."
    ],
    summary: "Cutaneous anthrax. This patient has a rapidly enlarging painless skin lesion with a black eschar and surrounding edema after exposure to animal hides, which is typical of Bacillus anthracis infection. Mimics adenylate cyclase (increase cAMP). It is a spore-forming gram-positive rod that produces edema toxin and lethal toxin, leading to tissue necrosis, painless ulceration, and potential systemic toxicity if untreated. And it is uncommonly progress to bacteremia and death."
  },
  {
    id: "micro-bacteria-12",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 12",
    date: "May 15, 2026",
    answer: "Vibrio cholerae",
    question: "A 30-year-old man presents with 24 hours of sudden onset profuse watery diarrhea, repeated vomiting, intense thirst, and muscle cramps after returning from a coastal village where he consumed untreated well water and raw seafood.",
    clues: [
      "He recently returned from a coastal village where he consumed untreated well water and ate raw seafood.",
      "There is no blood or mucus in the stool and no significant abdominal pain.",
      "He is severely dehydrated with hypotension, tachycardia, metabolic acidosis, and hypokalemia.",
      "Stool microscopy shows numerous comma-shaped, motile gram-negative rods.",
      "The organism grows well in alkaline media.",
      "Cholera toxin activates adenylate cyclase via ADP-ribosylation of Gs proteins, causing massive fluid secretion into the intestinal lumen."
    ],
    summary: "Cholera due to Vibrio cholerae. This comma-shaped, motile, gram-negative rod is transmitted by ingestion of contaminated water or seafood and thrives in alkaline environments. After colonizing the small intestine, it produces cholera toxin, which activates adenylate cyclase via ADP-ribosylation of Gs proteins, leading to massive secretion of chloride ions and water into the intestinal lumen. This results in profuse rice-water diarrhea, rapid dehydration, electrolyte loss, and metabolic acidosis. The disease spreads through fecal–oral transmission, especially in areas with poor sanitation and unsafe water supplies."
  },
  {
    id: "micro-bacteria-13",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 13",
    date: "May 15, 2026",
    answer: "Bordetella pertussis",
    question: "A 5-year-old fully immunized boy presents with a 3-week history of worsening cough that began like a common cold and has now progressed to recurrent severe coughing fits with difficulty inhaling.",
    clues: [
      "The illness began with mild rhinorrhea, low-grade fever, and occasional cough that resembled a common cold.",
      "He is fully immunized according to schedule with no history of asthma or allergies.",
      "After about a week, the cough became more frequent and severe.",
      "For 10 days, he has had recurrent severe coughing fits with difficulty speaking or inhaling.",
      "He appears relatively well but fearful of the next spell.",
      "The bacteria attach to ciliated respiratory epithelium and release toxins that impair mucociliary clearance."
    ],
    summary: "Whooping cough (pertussis) caused by Bordetella pertussis. The illness progresses in stages as the bacteria attach to ciliated respiratory epithelium and release toxins that impair mucociliary clearance and disrupt immune responses. It begins with a catarrhal stage resembling a mild upper respiratory infection with rhinorrhea and low-grade fever, during which bacterial replication and transmission are highest. This is followed by the paroxysmal stage, characterized by repeated, forceful coughing episodes due to accumulation of mucus and damaged cilia, often ending with difficulty inhaling and exhaustion. Finally, in the convalescent stage, the frequency and severity of coughing gradually decrease as the epithelium recovers, though the cough may persist for weeks."
  },
  {
    id: "micro-bacteria-14",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 14",
    date: "May 15, 2026",
    answer: "Staphylococcus aureus (Toxin-mediated disease)",
    question: "A 3-year-old boy presents with 48 hours of fever, irritability, and progressive skin redness with marked tenderness and a positive Nikolsky sign, with sparing of the oral and genital mucosa.",
    clues: [
      "Three days earlier, he had mild conjunctival discharge and crusting around the nose.",
      "Skin is markedly tender with a positive Nikolsky sign.",
      "The oral cavity, tongue, and genital mucosa appear normal without erosions or ulcers.",
      "Biopsy shows superficial intraepidermal splitting at the granular layer without significant inflammation or full-thickness necrosis.",
      "A swab from the nasopharynx grows gram-positive cocci in clusters that are catalase-positive and coagulase-positive.",
      "Exfoliative toxins (ETA, ETB) specifically cleave desmoglein-1 in the superficial epidermis."
    ],
    summary: "Staphylococcal scalded skin syndrome (SSSS). This is a toxin-mediated disease caused by Staphylococcus aureus. The organism produces exfoliative toxins (ETA, ETB) that disseminate hematogenously from a distant focus (often nasopharynx or conjunctiva). These toxins are serine proteases that specifically cleave desmoglein-1, a cadherin responsible for cell adhesion in the superficial epidermis (stratum granulosum). Loss of this adhesion leads to superficial intraepidermal splitting, causing fragile skin, positive shearing with pressure, and sheet-like desquamation. Mucous membranes are spared because they rely primarily on desmoglein-3 rather than desmoglein-1 for epithelial integrity. The skin lesions are sterile because the pathology is toxin-mediated rather than due to direct bacterial invasion."
  },
  {
    id: "micro-bacteria-15",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 15",
    date: "May 15, 2026",
    answer: "Mycobacterium avium complex",
    question: "A 41-year-old man with HIV poorly compliant with antiretroviral therapy and a CD4 count of 35 presents with 3 months of fever, night sweats, diarrhea, abdominal pain, and weight loss.",
    clues: [
      "He was diagnosed with HIV infection 8 years ago but has been poorly compliant with antiretroviral therapy.",
      "His CD4+ T-cell count is 35 cells/µL.",
      "Blood cultures are obtained and later grow acid-fast bacilli.",
      "He has lymphadenopathy, hepatosplenomegaly, anemia, and elevated alkaline phosphatase.",
      "Stool studies are negative for common bacterial pathogens.",
      "Chest X-ray does not show focal consolidation."
    ],
    summary: "Disseminated infection due to Mycobacterium avium complex. This nontuberculous, acid-fast mycobacterium is an opportunistic pathogen seen in patients with advanced AIDS, especially when CD4 counts fall below 50 cells/µL. It is acquired from the environment and spreads hematogenously, infecting macrophages in multiple organs such as the liver, spleen, lymph nodes, and bone marrow. The intracellular accumulation of organisms leads to systemic symptoms including fever, weight loss, diarrhea, anemia, hepatosplenomegaly, and elevated alkaline phosphatase."
  },
  {
    id: "micro-bacteria-16",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 16",
    date: "May 15, 2026",
    answer: "Pseudomonas aeruginosa",
    question: "A 58-year-old man with poorly controlled diabetes mellitus presents with a week of ear pain, purulent discharge, decreased hearing, and worsening nighttime pain with evidence of skull base osteomyelitis on imaging.",
    clues: [
      "The external auditory canal is swollen, erythematous, and filled with granulation tissue and purulent discharge.",
      "Imaging of the skull base shows evidence of osteomyelitis.",
      "Culture of the ear discharge grows a gram-negative, oxidase-positive rod that produces a blue-green pigment and has a fruity odor.",
      "Impaired immunity and microvascular disease in diabetics allow the organism to invade beyond the ear canal into soft tissue and the skull base.",
      "P. aeruginosa produces tissue-damaging toxins and forms protective biofilms.",
      "Physician started piperacillin-tazobactam."
    ],
    summary: "Malignant (necrotizing) otitis externa due to Pseudomonas aeruginosa. This opportunistic, gram-negative, oxidase-positive rod thrives in moist environments and readily colonizes the external auditory canal. In patients with poorly controlled diabetes, impaired immunity and microvascular disease allow the organism to invade beyond the ear canal into soft tissue and the skull base, causing osteomyelitis and cranial nerve involvement (often the facial nerve). P. aeruginosa produces tissue-damaging toxins and forms protective biofilms, while its characteristic blue-green pigments and fruity odor reflect active growth. The infection progresses from severe otitis externa to destructive, necrotizing disease because the bacteria can persist in moist tissue, resist host defenses, and spread along fascial planes and bone."
  },
  {
    id: "micro-bacteria-17",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 17",
    date: "May 15, 2026",
    answer: "Streptococcus pyogenes (Pyogenic)",
    question: "A 7-year-old boy presents with multiple itchy skin lesions around his nose and mouth for 4 days that progressed from red spots to blisters and are now covered with thick golden-yellow crusts.",
    clues: [
      "The lesions began as small red spots that quickly progressed to fluid-filled blisters which ruptured easily.",
      "The area now has thick, golden-yellow crusts.",
      "Several children in his class recently had similar skin infections.",
      "He has no fever and otherwise feels well with no lymphadenopathy.",
      "Swab test is positive for antistreptolysin O (ASO).",
      "The infection remains limited to the superficial skin layers and is highly contagious in close-contact settings."
    ],
    summary: "Impetigo due to Streptococcus pyogenes. This organism spreads through direct skin contact, especially among children, and enters through minor breaks in the skin. It produces enzymes and toxins that allow superficial invasion of the epidermis, leading to small vesicles that rupture easily. The dried exudate forms the characteristic honey-colored crusts. The infection remains limited to the superficial skin layers, which is why systemic symptoms are usually absent, but it is highly contagious and can spread rapidly in close-contact settings."
  },
  {
    id: "micro-bacteria-18",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 18",
    date: "May 15, 2026",
    answer: "Nocardia asteroides",
    question: "A 52-year-old immunosuppressed kidney transplant recipient who works as a landscaper presents with 2 weeks of worsening headache, low-grade fever, progressive confusion, chronic cough with blood-streaked sputum, and nodular cavitary lung infiltrates on chest X-ray.",
    clues: [
      "He had a kidney transplant a year ago and takes tacrolimus and prednisone.",
      "He works as a landscaper and frequently handles soil and compost.",
      "He reports a chronic cough with occasional blood-streaked sputum and unintentional weight loss over the past month.",
      "Chest X-ray reveals multiple nodular infiltrates with cavitation.",
      "A biopsy of one of the lesions demonstrates branching, filamentous, weakly acid-fast, gram-positive organisms.",
      "In immunocompromised individuals, the organism can spread hematogenously to the brain, forming multiple abscesses."
    ],
    summary: "Disseminated nocardiosis due to Nocardia asteroides. This soil-dwelling, branching, weakly acid-fast bacterium is acquired by inhalation, first causing a chronic pulmonary infection with nodular or cavitary lesions. In immunocompromised individuals, such as transplant patients on immunosuppressive therapy, the organism can spread through the bloodstream from the lungs to distant organs, especially the brain, where it forms multiple abscesses. The resulting inflammation and mass effect produce neurological deficits and characteristic ring-enhancing lesions on imaging."
  },
  {
    id: "micro-bacteria-19",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 19",
    date: "May 15, 2026",
    answer: "Legionella pneumophila",
    question: "A 67-year-old man with COPD and a significant smoking history presents with 4 days of fever, dry cough, dyspnea, and confusion after returning from a hotel stay where he used the hot tub and indoor pool.",
    clues: [
      "He recently returned from a weekend stay at a large hotel where he frequently used the hot tub and indoor pool.",
      "Labs show hyponatremia and leukocytosis, and chest X-ray shows multilobar infiltrates.",
      "A urine antigen test returns positive.",
      "His past medical history includes chronic obstructive pulmonary disease and a 40-pack-year smoking history.",
      "It does not stain well on Gram stain and survives by replicating inside macrophages.",
      "Physician started Azithromycin and Fluoroquinolones."
    ],
    summary: "Atypical pneumonia due to Legionella pneumophila. This gram-negative bacterium is found in freshwater environments and spreads through inhalation of contaminated aerosolized water from sources such as hot tubs, air-conditioning systems, and hotel water supplies. It survives and replicates inside macrophages, leading to a severe atypical pneumonia characterized by high fever, dry cough, confusion, diarrhea, hyponatremia, and multilobar infiltrates on imaging. It does not stain well on Gram stain and is commonly diagnosed with a urine antigen test."
  },
  {
    id: "micro-bacteria-20",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 20",
    date: "May 15, 2026",
    answer: "Helicobacter pylori",
    question: "A 45-year-old man presents with 4 months of burning epigastric pain relieved by food and antacids, frequent bloating, nausea, dark tarry stools, and fatigue, with a duodenal ulcer found on endoscopy.",
    clues: [
      "He reports frequent bloating, nausea, and early satiety.",
      "Over the past month, he has noticed dark, tarry stools and increasing fatigue.",
      "Laboratory tests reveal iron deficiency anemia.",
      "An upper endoscopy reveals a duodenal ulcer.",
      "Gastric biopsy shows curved gram-negative rods with a positive urease test.",
      "H. pylori is also associated with gastric adenocarcinoma and MALT lymphoma."
    ],
    summary: "Peptic ulcer disease due to Helicobacter pylori. This curved, motile, gram-negative rod colonizes the gastric mucosa by producing urease, which converts urea to ammonia and buffers stomach acid, allowing survival in the acidic environment. It damages the protective mucous layer and induces chronic inflammation, leading to gastritis and duodenal ulcers. H. pylori is also associated with gastric adenocarcinoma and MALT lymphoma. It is diagnosed by urease testing, biopsy, urea breath test, or stool antigen testing and treated with combination antibiotic therapy plus acid suppression."
  },
  {
    id: "micro-bacteria-21",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 21",
    date: "May 15, 2026",
    answer: "Borrelia burgdorferi",
    question: "A 32-year-old woman presents with a week of fatigue, low-grade fever, headache, and muscle aches after a hiking trip in a wooded area of the northeastern US, where she removed a tick from her leg 10 days ago.",
    clues: [
      "She recently returned from a hiking trip in a wooded area of the northeastern United States.",
      "She recalls removing a small tick from her leg about 10 days ago.",
      "A large annular erythematous rash with central clearing is seen on her thigh.",
      "Over the past two days, she has developed joint pain in her knees and episodes of palpitations with lightheadedness.",
      "Mild swelling of the right knee is present.",
      "An ECG shows atrioventricular conduction abnormalities."
    ],
    summary: "Lyme disease due to Borrelia burgdorferi. This tick-borne spirochete is transmitted by Ixodes deer ticks and first produces an expanding erythema migrans rash at the bite site. The organism then spreads hematogenously and evades host immunity through antigenic variation of its surface proteins. As infection disseminates, it can involve multiple systems—causing migratory arthritis (especially the knees), cardiac conduction abnormalities such as AV block, and neurologic manifestations. Without treatment, the disease progresses from early localized infection to early disseminated and late-stage systemic involvement."
  },
  {
    id: "micro-bacteria-22",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 22",
    date: "May 15, 2026",
    answer: "Mycoplasma pneumoniae",
    question: "A 19-year-old college student in a dormitory presents with a 10-day history of persistent dry cough, low-grade fever, headache, and fatigue, with several dormitory neighbors having similar symptoms.",
    clues: [
      "Several students in his dormitory have had similar symptoms over the past two weeks.",
      "He denies chest pain or productive sputum.",
      "Chest X-ray shows diffuse, patchy interstitial infiltrates that appear worse than his physical examination findings would suggest.",
      "A peripheral blood smear shows red blood cell agglutination at cold temperatures.",
      "Sputum Gram stain does not reveal any organisms.",
      "The organism lacks a cell wall, making it not susceptible to beta-lactam antibiotics."
    ],
    summary: "Atypical (walking) pneumonia due to Mycoplasma pneumoniae. This organism is a small bacterium that lacks a cell wall, which explains why it does not appear on Gram stain and is not susceptible to beta-lactam antibiotics. It spreads through respiratory droplets, especially in close living environments such as dormitories. Mycoplasma pneumoniae attaches to the respiratory epithelium using specialized adhesion proteins, causing inflammation and damage to the airway lining that leads to a persistent dry cough and interstitial pneumonia. It is also associated with cold agglutinin formation, where antibodies cross-react with red blood cells, causing mild hemolytic anemia."
  },
  {
    id: "micro-bacteria-23",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 23",
    date: "May 15, 2026",
    answer: "Chlamydia trachomatis (Types D-K)",
    question: "A 23-year-old sexually active woman with multiple partners presents with a week of lower abdominal pain, abnormal vaginal discharge, dyspareunia, burning urination, and irregular menstrual spotting.",
    clues: [
      "She is sexually active with multiple partners and does not consistently use protection.",
      "A nucleic acid amplification test (NAAT) performed on a cervical swab detects an obligate intracellular organism.",
      "Burning during urination and irregular menstrual spotting are present.",
      "Can lead to PID.",
      "Physician treated this patient with Doxycycline.",
      "Other options include Chlamydia trachomatis A B C and Chlamydia trachomatis L1, L2, L3."
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
    question: "A 17-year-old boy presents with 2 weeks of low-grade fever, fatigue, and a large tender swollen lymph node in the right armpit after being scratched on the forearm by his pet kitten.",
    clues: [
      "He was scratched on the forearm by his pet kitten.",
      "A small red bump appeared at the site of the scratch, which later crusted over and healed.",
      "There is a large, tender, swollen lymph node in the right axillary region with mild leukocytosis.",
      "A biopsy of the lymph node shows granulomatous inflammation with stellate microabscesses.",
      "Silver stain reveals small pleomorphic gram-negative bacilli.",
      "The organism spreads to nearby lymph nodes through the lymphatic system after inoculation into the skin."
    ],
    summary: "Cat scratch disease due to Bartonella henselae. This small, pleomorphic, gram-negative bacillus is transmitted through scratches or bites from cats, especially kittens. After inoculation into the skin, it causes a localized papule at the scratch site and then spreads to nearby lymph nodes through the lymphatic system. The organism induces granulomatous inflammation with characteristic stellate microabscesses, leading to tender regional lymphadenopathy, low-grade fever, and fatigue."
  },
  {
    id: "micro-bacteria-25",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 25",
    date: "May 15, 2026",
    answer: "Yersinia enterocolitica",
    question: "A 24-year-old man with 2 dogs and a cat presents with pain and swelling in his right knee and left ankle one week after a febrile diarrheal illness following undercooked pork at a barbecue, along with conjunctival redness.",
    clues: [
      "Two weeks earlier, he had an episode of fever, abdominal cramps, and diarrhea after eating undercooked pork at a barbecue.",
      "Conjunctival redness is noted in both eyes.",
      "Stool culture from the earlier diarrheal illness had grown a gram-negative coccobacillus with bipolar staining.",
      "The organism can grow at low temperatures and is acquired from pet feces and contaminated food.",
      "Further complication can be pseudoappendicitis.",
      "Post-infectious reactive arthritis is seen in genetically susceptible individuals, often HLA-B27 positive."
    ],
    summary: "Reactive arthritis following enteritis due to Yersinia enterocolitica. This gram-negative coccobacillus is acquired from pet feces, contaminated food especially undercooked pork, and can grow at low temperatures. After causing a self-limited diarrheal illness, bacterial antigens persist and trigger an immune-mediated reaction in genetically susceptible individuals (often HLA-B27 positive). This post-infectious response leads to sterile joint inflammation, conjunctivitis, and urethritis—features of reactive arthritis—despite the absence of bacteria in the joints."
  },
  {
    id: "micro-bacteria-26",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 26",
    date: "May 15, 2026",
    answer: "Campylobacter jejuni",
    question: "A 26-year-old man presents with 3 days of fever, abdominal cramps, and bloody diarrhea one week after eating undercooked chicken and unpasteurized milk at a picnic, and now develops ascending leg weakness and tingling two weeks after recovery.",
    clues: [
      "One week earlier, he attended a picnic where he ate undercooked chicken and unpasteurized milk.",
      "Stool culture grows a curved, gram-negative rod that is oxidase-positive and grows best at 42°C in a microaerophilic environment.",
      "Laboratory studies show leukocytosis with stool microscopy revealing numerous WBCs and RBCs.",
      "Two weeks after recovery, he develops progressive weakness and tingling in his legs that ascends upward.",
      "Its lipooligosaccharide structures can mimic peripheral nerve gangliosides, triggering an autoimmune response.",
      "Physician treated this patient with Azithromycin."
    ],
    summary: "Enterocolitis with post-infectious Guillain-Barré risk due to Campylobacter jejuni. This curved, oxidase-positive, gram-negative rod is transmitted by ingestion of undercooked poultry or unpasteurized milk and grows best at 42°C in a microaerophilic environment. After surviving gastric acid, it invades the intestinal mucosa—especially the jejunum, ileum, and colon—causing inflammatory, often bloody diarrhea with fever and abdominal cramps. Its lipooligosaccharide structures can mimic peripheral nerve gangliosides, triggering an autoimmune response that may lead to Guillain-Barré syndrome after the diarrheal illness resolves."
  },
  {
    id: "micro-bacteria-27",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 27",
    date: "May 15, 2026",
    answer: "Mycobacterium tuberculosis",
    question: "A 54-year-old man with poorly controlled diabetes presents with 4 months of persistent cough, intermittent low-grade fever, night sweats, unintentional weight loss, and blood-streaked sputum, with crackles over bilateral upper lobes and a history of travel to Nepal 6 months ago.",
    clues: [
      "His past medical history is significant for poorly controlled type 2 diabetes mellitus.",
      "He travelled to Nepal 6 months ago.",
      "His temperature is 37.9°C with crackles over the upper lobes bilaterally.",
      "He reports occasional blood-streaked sputum and increasing fatigue.",
      "A biopsy of a lung lesion reveals caseating granulomas with multinucleated giant cells.",
      "The organism survives inside alveolar macrophages by inhibiting phagolysosome fusion."
    ],
    summary: "Pulmonary tuberculosis due to Mycobacterium tuberculosis. This bacterium is an obligate aerobic, acid-fast bacillus with mycolic acids in its cell wall, making it resistant to drying, disinfectants, and Gram staining. It spreads via airborne droplets and infects the lungs. After inhalation, it survives inside alveolar macrophages by inhibiting phagolysosome fusion, triggering a type IV hypersensitivity reaction and forming caseating granulomas with Langhans giant cells. It commonly involves the oxygen-rich upper lobes, causing cavitary lesions, chronic cough, hemoptysis, fever, night sweats, and weight loss. The infection may remain latent and reactivate when immunity declines. Diagnosis is by acid-fast stain, culture, and TB testing, and treatment requires prolonged multidrug therapy."
  },
  {
    id: "micro-bacteria-28",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 28",
    date: "May 15, 2026",
    answer: "Streptococcus agalactiae (Group B streptococci)",
    question: "A 3-day-old term newborn delivered vaginally presents with poor feeding, lethargy, fever, irritability, hypotonia, respiratory distress, and cloudy CSF with elevated protein, low glucose, and numerous neutrophils.",
    clues: [
      "The baby was born at term via vaginal delivery.",
      "On examination, the infant is febrile, hypotonic, and has respiratory distress.",
      "Lumbar puncture shows cloudy cerebrospinal fluid with elevated protein, low glucose, and numerous neutrophils.",
      "Gram stain of the CSF shows gram-positive cocci arranged in chains.",
      "Further testing reveals the organism is beta-hemolytic, catalase-negative, and produces a positive CAMP test.",
      "Its polysaccharide capsule helps it evade phagocytosis, allowing rapid spread into the bloodstream and meninges."
    ],
    summary: "Streptococcus agalactiae (Group B Streptococcus). This gram-positive, beta-hemolytic coccus in chains commonly colonizes the maternal vagina and rectum and is transmitted to the newborn during vaginal delivery, especially with prolonged rupture of membranes or absent intrapartum prophylaxis. Its polysaccharide capsule helps it evade phagocytosis, allowing rapid spread into the bloodstream and then to the meninges, causing early-onset neonatal sepsis, pneumonia, and meningitis within the first week of life. Diagnosis is by culture and characteristic lab features (beta-hemolysis, positive CAMP test). Prevention relies on maternal screening at 35–37 weeks and intrapartum IV penicillin, while treatment in affected neonates is IV ampicillin or penicillin with gentamicin."
  },
  {
    id: "micro-bacteria-29",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 29",
    date: "May 15, 2026",
    answer: "Streptococcus pyogenes (Immunologic)",
    question: "A 12-year-old boy presents with a week of fever, fatigue, migratory joint pain limiting walking, a new heart murmur, and a faint ring-shaped rash on his trunk, two weeks after an untreated sore throat.",
    clues: [
      "Two weeks ago, he had a sore throat with fever that resolved without medical treatment.",
      "Severe joint pain limits walking, and swelling shifts from one joint to another.",
      "His heart rate is elevated, and a new blowing systolic murmur is heard at the apex.",
      "A faint, pink, ring-shaped rash is noted over his trunk.",
      "Laboratory tests show elevated ESR and CRP, leukocytosis, and a high antistreptolysin O (ASO) titer.",
      "Antibodies against streptococcal M proteins cross-react with host tissues through molecular mimicry."
    ],
    summary: "Acute rheumatic fever due to Streptococcus pyogenes. Following an untreated streptococcal throat infection, the body mounts an immune response that cross-reacts with host tissues (molecular mimicry). Antibodies formed against streptococcal M proteins mistakenly attack the heart, joints, skin, and central nervous system. This leads to migratory polyarthritis, carditis with new murmurs and PR prolongation, subcutaneous nodules, erythema marginatum, and Sydenham chorea. The disease is immune-mediated rather than due to direct bacterial invasion, and evidence of prior infection is supported by elevated ASO titers. Early recognition and antibiotic treatment of strep pharyngitis can prevent this complication."
  },
  {
    id: "micro-bacteria-30",
    domain: "microbiology",
    subdomain: "bacteria",
    title: "Bacteria 30",
    date: "May 15, 2026",
    answer: "Staphylococcus epidermidis",
    question: "A 68-year-old man with diabetes and end-stage renal disease develops fever and chills during a hemodialysis session with no obvious source of infection other than mild erythema at the catheter exit site.",
    clues: [
      "He denies cough, urinary symptoms, or abdominal pain.",
      "Cardiac examination reveals no new murmurs and there is no peripheral stigmata of endocarditis.",
      "The catheter exit site shows mild erythema without purulence.",
      "The organism is catalase-positive, coagulase-negative, and resistant to multiple beta-lactam antibiotics.",
      "Further testing shows the organism can adhere strongly to plastic and prosthetic material.",
      "It produces a polysaccharide biofilm that protects bacteria from host defenses and limits antibiotic penetration."
    ],
    summary: "Catheter-related bloodstream infection due to Staphylococcus epidermidis. This skin commensal becomes pathogenic when it gains access to the bloodstream through indwelling devices such as dialysis catheters. Its key pathogenic feature is the production of a polysaccharide biofilm that firmly adheres to synthetic surfaces, protecting the bacteria from host defenses and limiting antibiotic penetration. This allows persistent bacteremia until the infected device is removed, as antimicrobial therapy alone is often insufficient to eradicate organisms embedded within the biofilm."
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
  title: "Fungi 1",
  date: "May 15, 2026",
  answer: "Candida albicans",
  question: "A woman develops vulvar itching burning and thick clumpy vaginal discharge after antibiotic use.",
  clues: [
    "Recent broad-spectrum antibiotic therapy was completed.",
    "The discharge is thick and difficult to wash away.",
    "There is burning during urination without foul odor.",
    "Vaginal pH remains normal.",
    "KOH prep shows budding yeast with pseudohyphae.",
    "The organism is part of normal vaginal flora."
  ],
  summary: "Vulvovaginitis caused by Candida albicans. This yeast overgrows after disruption of normal vaginal flora and produces itching inflammation and thick curdy discharge."
},

{
  id: "micro-fungi-2",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 2",
  date: "May 15, 2026",
  answer: "Pneumocystis jirovecii",
  question: "An immunocompromised patient develops progressive shortness of breath dry cough and diffuse interstitial infiltrates.",
  clues: [
    "The patient has significant weight loss and recurrent oral sores.",
    "CD4 count is below 200 cells per cubic millimeter.",
    "Chest imaging shows bilateral interstitial infiltrates with ground-glass opacities.",
    "BAL silver stain shows round cysts in a foamy background.",
    "The organism causes opportunistic pneumonia in AIDS patients.",
    "Routine fungal culture is usually negative."
  ],
  summary: "Pneumocystis pneumonia caused by Pneumocystis jirovecii. This opportunistic fungal infection occurs in patients with impaired cell-mediated immunity and causes progressive hypoxemia with diffuse interstitial infiltrates."
},

{
  id: "micro-fungi-3",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 3",
  date: "May 15, 2026",
  answer: "Sporothrix schenckii(Sporotrichosis)",
  question: "A landscape worker develops ascending nodular skin lesions after a puncture injury from rose bushes.",
  clues: [
    "The lesion began as a painless papule.",
    "Lesions spread along superficial lymphatic channels.",
    "Regional lymph nodes are mildly enlarged.",
    "Biopsy shows cigar-shaped budding yeast.",
    "Microscopy shows rosette clusters of conidia.",
    "The fungus is associated with sphagnum moss and rose thorns."
  ],
  summary: "Sporotrichosis caused by Sporothrix schenckii. This dimorphic fungus enters through skin trauma and spreads through lymphatics causing nodular ascending lesions."
},

{
  id: "micro-fungi-4",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 4",
  date: "May 15, 2026",
  answer: "Malassezia furfur(Pityrosporum)",
  question: "A man develops hypopigmented itchy scaly patches after staying in a humid environment.",
  clues: [
    "The lesions become more visible after tanning.",
    "Fine powdery scaling appears on scraping.",
    "The patient frequently uses oily skin products.",
    "The organism is lipophilic and part of normal skin flora.",
    "Microscopy shows spaghetti and meatballs appearance.",
    "Short curved hyphae and round yeast cells are present."
  ],
  summary: "Tinea versicolor caused by Malassezia furfur. This lipophilic yeast overgrows in humid conditions causing hypo or hyperpigmented scaly lesions."
},

{
  id: "micro-fungi-5",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 5",
  date: "May 15, 2026",
  answer: "Tinea corporis",
  question: "A woman develops circular itchy scaly plaques with central clearing on the body.",
  clues: [
    "The rash gradually enlarged over several weeks.",
    "Itching worsens after sweating and exercise.",
    "The lesions have raised scaly borders.",
    "Microscopy reveals branching septate hyphae.",
    "Fungal culture grows white cottony colonies.",
    "Dermatophytes digest keratin in the stratum corneum."
  ],
  summary: "Tinea corporis is a dermatophyte infection of glabrous skin commonly caused by Trichophyton species producing annular scaly plaques with central clearing."
},

{
  id: "micro-fungi-6",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 6",
  date: "May 15, 2026",
  answer: "Histoplasma capsulatum(Histoplasmosis)",
  question: "An HIV-positive patient develops fever weight loss hepatosplenomegaly and pulmonary infiltrates after visiting the Ohio River Valley.",
  clues: [
    "The patient has untreated HIV infection.",
    "Diffuse crackles and oral ulcers are present.",
    "CBC shows pancytopenia.",
    "The organism is associated with bird and bat droppings.",
    "BAL staining shows small oval yeast within macrophages.",
    "The fungus is dimorphic."
  ],
  summary: "Histoplasmosis caused by Histoplasma capsulatum. This dimorphic fungus survives within macrophages and disseminates in immunocompromised patients."
},

{
  id: "micro-fungi-7",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 7",
  date: "May 15, 2026",
  answer: "Aspergillus fumigatus(ABPA)",
  question: "An asthmatic patient develops recurrent wheezing eosinophilia and brown mucus plugs.",
  clues: [
    "Symptoms worsen in damp moldy environments.",
    "IgE levels are markedly elevated.",
    "Peripheral eosinophilia is present.",
    "CT chest shows central bronchiectasis.",
    "Sputum microscopy reveals septate hyphae with acute angle branching.",
    "The disease represents a hypersensitivity reaction rather than invasive infection."
  ],
  summary: "Allergic bronchopulmonary aspergillosis caused by Aspergillus fumigatus. Fungal colonization triggers hypersensitivity leading to asthma exacerbations eosinophilia and bronchiectasis."
},

{
  id: "micro-fungi-8",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 8",
  date: "May 15, 2026",
  answer: "Coccidioides immitis(Coccidioidomycosis)",
  question: "A construction worker develops pulmonary symptoms joint pain and erythema nodosum after desert dust exposure.",
  clues: [
    "The patient recently worked in a dry dusty desert region.",
    "Chest X-ray shows hilar lymphadenopathy.",
    "Tender red nodules are present on the shins.",
    "The fungus is dimorphic.",
    "Special stains show large spherules filled with endospores.",
    "Infection occurs through inhalation of arthroconidia."
  ],
  summary: "Coccidioidomycosis caused by Coccidioides immitis. This desert fungus forms spherules filled with endospores and commonly presents with pulmonary symptoms and erythema nodosum."
},

{
  id: "micro-fungi-9",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 9",
  date: "May 15, 2026",
  answer: "Cryptococcus neoformans",
  question: "An HIV-positive patient develops meningitis after exposure to bird droppings.",
  clues: [
    "The patient has headache fever vomiting and confusion.",
    "CD4 count is below 100 cells per cubic millimeter.",
    "CSF shows high opening pressure with lymphocytic predominance.",
    "The organism is an encapsulated yeast.",
    "Microscopy reveals budding yeast with a wide clear halo.",
    "Cryptococcal antigen testing is positive."
  ],
  summary: "Cryptococcal meningitis caused by Cryptococcus neoformans. This encapsulated yeast spreads to the CNS in immunocompromised patients causing meningitis with elevated intracranial pressure."
},
{
    id: "micro-fungi-1",
    domain: "microbiology",
    subdomain: "fungi",
    title: "Fungi 1",
    date: "May 15, 2026",
    answer: "Candida albicans",
    question: "A 29-year-old woman presents with intense vulvar itching, burning, and discomfort while walking after recently completing a course of broad-spectrum antibiotics.",
    clues: [
      "She completed a course of broad-spectrum antibiotics two weeks earlier for a UTI.",
      "She reports a thick vaginal discharge that she describes as clumpy and difficult to wash away.",
      "She reports no foul odor but has external burning with urination.",
      "The cervix appears normal and vaginal pH is 4.2.",
      "KOH prep shows budding yeast with pseudohyphae.",
      "She is sexually active and on oral contraceptives."
    ],
    summary: "Vulvovaginitis due to Candida albicans. This organism is part of normal vaginal flora but overgrows when bacterial competition is reduced, such as after antibiotic therapy, or when hormonal and metabolic factors favor its proliferation. It forms budding yeast and pseudohyphae that adhere to and penetrate mucosal epithelium, producing intense inflammation, itching, and thick adherent discharge. Unlike bacterial causes of vaginitis, the vaginal pH remains normal because lactobacilli are still present and producing lactic acid."
  },
  {
    id: "micro-fungi-2",
    domain: "microbiology",
    subdomain: "fungi",
    title: "Fungi 2",
    date: "May 15, 2026",
    answer: "Pneumocystis jirovecii",
    question: "A 38-year-old man presents with 2 weeks of progressive shortness of breath, dry cough, low-grade fever, and fatigue along with months of weight loss and recurrent oral sores.",
    clues: [
      "He has experienced significant weight loss and recurrent oral sores over the past several months.",
      "Laboratory testing shows lymphopenia and a CD4 count below 200 cells/mm³.",
      "Chest radiograph reveals diffuse bilateral interstitial infiltrates.",
      "High-resolution CT scan shows widespread ground-glass opacities.",
      "BAL with silver stain shows round cysts in a foamy background.",
      "The organism does not grow on routine culture media."
    ],
    summary: "Pneumocystis pneumonia caused by Pneumocystis jirovecii. This atypical fungus primarily affects individuals with impaired cell-mediated immunity, especially reduced CD4⁺ T-cell function. It resides in the alveoli where it multiplies and generates a foamy, protein-rich exudate that disrupts gas exchange, leading to progressive hypoxemia with relatively mild auscultatory findings. The organism does not grow on routine culture media, so diagnosis relies on identification of cystic forms in respiratory specimens using special stains."
  },
  {
    id: "micro-fungi-3",
    domain: "microbiology",
    subdomain: "fungi",
    title: "Fungi 3",
    date: "May 15, 2026",
    answer: "Sporothrix schenckii",
    question: "A 42-year-old landscape architect presents with a 6-week history of gradually spreading painless skin lesions on his right hand and forearm after a puncture injury while handling rose bushes.",
    clues: [
      "It started as a small painless papule on his finger after a puncture injury while handling rose bushes and sphagnum moss.",
      "He initially assumed it was an insect bite and did not seek care.",
      "Regional lymph nodes are mildly enlarged with no other lesions found.",
      "Biopsy of a nodule shows granulomatous inflammation with cigar-shaped budding yeast on special staining.",
      "Microscopy shows thin septate hyphae with rosette (daisy head) clusters of conidia at the tips of conidiophores.",
      "The lesions have spread in a linear ascending pattern along the arm."
    ],
    summary: "Sporotrichosis caused by Sporothrix schenckii. This thermally dimorphic fungus is found in soil, sphagnum moss, and rose thorns and enters the skin through minor trauma. In tissue, it converts to a cigar-shaped yeast and triggers a granulomatous reaction, forming an initial painless papule that may ulcerate. The organism then spreads along superficial lymphatic channels, producing a linear chain of subcutaneous nodules (sporotrichoid pattern) with minimal systemic symptoms."
  },
  {
    id: "micro-fungi-4",
    domain: "microbiology",
    subdomain: "fungi",
    title: "Fungi 4",
    date: "May 15, 2026",
    answer: "Malassezia furfur (Pityrosporum)",
    question: "A 24-year-old man presents with a 3-month history of gradually spreading skin discoloration with mild itching that became more visible after tanning during a humid coastal trip.",
    clues: [
      "He recently returned from a humid coastal trip and noticed the patches became more visible after tanning.",
      "The lesions are not painful but are associated with mild itching, especially after sweating.",
      "He often uses oily skin products and stays in sweaty clothes after workouts.",
      "Gentle scraping of the lesions produces a fine powdery scale (evoked scale sign).",
      "Microscopy shows round yeast cells with short curved hyphae in the classic spaghetti and meatballs pattern.",
      "The patches appear hypo- or hyperpigmented on the upper trunk."
    ],
    summary: "Tinea (pityriasis) versicolor caused by Malassezia furfur. It is a lipophilic yeast that is part of normal skin flora but overgrows in warm, humid conditions and in the presence of oily skin and sweat. It invades the superficial stratum corneum and produces azelaic acid, which interferes with melanin production, leading to hypo- or hyperpigmented scaly macules on the upper trunk. KOH microscopy shows the classic spaghetti and meatballs appearance due to round yeast cells with short curved hyphae."
  },
  {
    id: "micro-fungi-5",
    domain: "microbiology",
    subdomain: "fungi",
    title: "Fungi 5",
    date: "May 15, 2026",
    answer: "Tinea corporis",
    question: "A 29-year-old woman presents with a 4-week history of an expanding itchy rash on her right forearm and lower abdomen that began as a small red patch and worsened despite moisturizing creams.",
    clues: [
      "The lesion began as a small red patch and gradually enlarged despite over-the-counter moisturizing creams.",
      "The itching worsens with sweating and after exercise.",
      "Exam shows well-defined circular red plaques with raised scaly edges and central clearing on the forearm and abdomen.",
      "Microscopy reveals long, branching, septate hyphae.",
      "Fungal culture grows a dermatophyte forming white cottony colonies on Sabouraud agar.",
      "Skin scrapings from the active border give the highest diagnostic yield."
    ],
    summary: "Tinea corporis (dermatophyte infection of glabrous skin), most commonly caused by Trichophyton rubrum. These fungi digest keratin and remain confined to the stratum corneum. The lesion expands outward because the organism is most active at the advancing scaly edge, while the center begins to clear as inflammation subsides. Skin scrapings from the active border show septate branching hyphae on KOH and give the highest diagnostic yield."
  },
  {
    id: "micro-fungi-6",
    domain: "microbiology",
    subdomain: "fungi",
    title: "Fungi 6",
    date: "May 15, 2026",
    answer: "Histoplasma capsulatum",
    question: "A 38-year-old man with untreated HIV presents with 3 weeks of fever, fatigue, dry cough, and weight loss after returning from the Ohio River valley.",
    clues: [
      "He recently returned from the Ohio River valley.",
      "He has untreated HIV infection.",
      "Exam reveals hepatosplenomegaly, lymphadenopathy, oral ulcers, and diffuse crackles.",
      "CBC shows pancytopenia.",
      "BAL with special staining reveals small oval yeast forms within macrophages.",
      "The organism spreads through the reticuloendothelial system in immunocompromised patients."
    ],
    summary: "Histoplasmosis caused by Histoplasma capsulatum. It is a dimorphic fungus acquired by inhaling spores from soil contaminated with bird or bat droppings. In the lungs, it converts to a yeast form and survives inside macrophages, spreading through the reticuloendothelial system to cause hepatosplenomegaly, lymphadenopathy, oral ulcers, pancytopenia, and diffuse lung infiltrates, especially in immunocompromised patients."
  },
  {
    id: "micro-fungi-7",
    domain: "microbiology",
    subdomain: "fungi",
    title: "Fungi 7",
    date: "May 15, 2026",
    answer: "Aspergillus fumigatus (ABPA)",
    question: "A 19-year-old student with poorly controlled childhood asthma presents with months of recurrent wheezing, cough, and shortness of breath that worsens in damp, moldy environments.",
    clues: [
      "He has a history of poorly controlled asthma since childhood and uses his inhaler frequently.",
      "Investigations show markedly elevated IgE with peripheral eosinophilia.",
      "He coughs out brown sticky mucus plugs.",
      "Symptoms worsen in damp, moldy environments.",
      "CT scan of the chest shows central bronchiectasis.",
      "Sputum microscopy reveals 45-degree acute angle branching of septate hyphae."
    ],
    summary: "Allergic Bronchopulmonary Aspergillosis (ABPA) caused by Aspergillus fumigatus. This fungus colonizes the airways of people with asthma and triggers a strong allergic hypersensitivity reaction rather than an invasive infection. This leads to very high IgE, eosinophilia, thick brown mucus plugs, recurrent wheezing, and over time central bronchiectasis. Symptoms worsen in damp, moldy environments due to increased exposure to fungal spores."
  },
  {
    id: "micro-fungi-8",
    domain: "microbiology",
    subdomain: "fungi",
    title: "Fungi 8",
    date: "May 15, 2026",
    answer: "Coccidioides immitis (Coccidioidomycosis)",
    question: "A 34-year-old construction worker presents with 2 weeks of fever, dry cough, chest pain, joint pain, and tender red nodules on his shins after working on an excavation project in a dry desert region.",
    clues: [
      "He recently worked on a large excavation project in a dry, dusty desert region.",
      "He has tender erythematous nodules over both shins consistent with erythema nodosum.",
      "Joint pains are present in his knees and ankles.",
      "Chest X-ray shows patchy pulmonary infiltrates with hilar lymphadenopathy.",
      "Special staining reveals large, thick-walled spherical structures filled with numerous endospores.",
      "Infection occurs by inhaling airborne arthroconidia when dust is disturbed."
    ],
    summary: "Coccidioidomycosis caused by Coccidioides immitis. It is a dimorphic soil fungus endemic to dry desert regions. Infection occurs by inhaling airborne arthroconidia when dust is disturbed. In the lungs, these spores transform into large, thick-walled spherules filled with numerous endospores. This produces a flu-like respiratory illness with fever, cough, and chest pain. The immune response may also cause joint pains and erythema nodosum. Most infections are self-limited in healthy individuals, but the organism can disseminate in immunocompromised patients."
  },
  {
    id: "micro-fungi-9",
    domain: "microbiology",
    subdomain: "fungi",
    title: "Fungi 9",
    date: "May 15, 2026",
    answer: "Cryptococcus neoformans",
    question: "A 36-year-old man with poorly controlled HIV and a CD4 count below 100 presents with 10 days of headache, fever, vomiting, and confusion after cleaning an attic soiled by birds.",
    clues: [
      "He recently cleaned a storage attic heavily soiled by birds.",
      "His CD4 count is below 100 cells/mm³.",
      "Exam shows fever, drowsiness, neck stiffness, and blurred vision.",
      "Lumbar puncture shows high opening pressure, low glucose, high protein, and lymphocytes in CSF.",
      "CSF microscopy shows round budding yeast with a wide clear halo due to a thick capsule.",
      "CSF antigen testing is positive for a capsulated yeast."
    ],
    summary: "Cryptococcal meningitis caused by Cryptococcus neoformans. It is an encapsulated yeast acquired from environments contaminated with bird droppings. In immunocompromised patients, it spreads to the CNS, causing meningitis with high CSF opening pressure, low glucose, high protein, and lymphocytes. Microscopy classically shows round budding yeast with a wide clear halo due to its thick capsule, and CSF antigen testing is positive."
  },
  {
    id: "micro-fungi-10",
    domain: "microbiology",
    subdomain: "fungi",
    title: "Fungi 10",
    date: "May 15, 2026",
    answer: "Rhizopus and Mucor (Mucormycosis)",
    question: "A diabetic patient with ketoacidosis develops facial pain, orbital swelling, and black necrotic nasal tissue.",
    clues: [
      "The patient recently had diabetic ketoacidosis.",
      "CT scan shows invasive sinus disease extending toward the orbit.",
      "Black necrotic tissue is present on the nasal turbinate.",
      "Biopsy reveals broad ribbon-like nonseptate hyphae.",
      "The hyphae branch at right angles.",
      "The fungi invade blood vessels causing tissue necrosis."
    ],
    summary: "Mucormycosis caused by Rhizopus and Mucor species. These angioinvasive molds affect diabetic and immunocompromised patients causing rapidly progressive tissue necrosis. Infection occurs after inhalation of spores, and the hyphae invade blood vessels causing thrombosis and tissue death extending from the sinuses toward the orbit and brain."
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
