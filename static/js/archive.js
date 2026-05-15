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
  question: "A 7-year-old boy is brought to the ED with 4 days of worsening sore throat fever and difficulty swallowing.",
  clues: [
    "The parents report that he is not fully vaccinated and missed several childhood immunizations due to travel.",
    "He appears ill and lethargic with fever and mild neck swelling.",
    "Oropharynx shows a thick gray-white adherent membrane over the tonsils and posterior pharyngeal wall.",
    "Removal of the membrane causes bleeding with cervical lymphadenopathy and bull neck appearance.",
    "The organism causes toxin-mediated disease.",
    "The toxin inhibits protein synthesis by ADP-ribosylation of EF-2 causing myocarditis and neuropathy."
  ],
  summary: "Diphtheria caused by Corynebacterium diphtheriae. This unvaccinated child presents with sore throat fever dysphagia and a gray pseudomembrane that bleeds on removal along with bull neck lymphadenopathy. The organism produces an exotoxin that inhibits protein synthesis by ADP-ribosylating elongation factor-2 leading to myocarditis and neuropathy."
},

{
  id: "micro-bacteria-2",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 2",
  date: "May 15, 2026",
  answer: "Clostridium tetani",
  question: "A 35-year-old man is brought to the ED unable to open his mouth and with painful muscle stiffness.",
  clues: [
    "He stepped on a rusty nail while working at a construction site.",
    "The wound was cleaned at home without medical care.",
    "Generalized muscle spasms are triggered by touch and sound.",
    "The wound appears contaminated with dirt and necrotic tissue.",
    "The patient has trismus and muscle rigidity.",
    "The toxin blocks release of GABA and glycine causing spastic paralysis."
  ],
  summary: "Tetanus caused by Clostridium tetani. This patient presents with trismus muscle rigidity and painful spasms after a contaminated wound injury. The organism produces tetanospasmin that blocks release of inhibitory neurotransmitters GABA and glycine in the CNS leading to uncontrolled muscle contraction and spastic paralysis."
},

{
  id: "micro-bacteria-3",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 3",
  date: "May 15, 2026",
  answer: "Haemophilus influenzae",
  question: "A 4-year-old boy is brought to the emergency department with sudden onset of high fever severe sore throat and difficulty breathing.",
  clues: [
    "The child rapidly developed drooling and trouble swallowing.",
    "He prefers to sit leaning forward and has a muffled voice.",
    "Oropharyngeal examination is avoided due to airway compromise risk.",
    "The organism is a small gram-negative coccobacillus.",
    "It requires factors V and X for growth.",
    "Lateral neck X-ray shows a thumb-shaped epiglottis."
  ],
  summary: "Epiglottitis due to Haemophilus influenzae type b. This encapsulated gram-negative coccobacillus requires factors X and V for growth and can rapidly cause life-threatening airway obstruction in unvaccinated children."
},

{
  id: "micro-bacteria-4",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 4",
  date: "May 15, 2026",
  answer: "Streptococcus pneumoniae",
  question: "A 58-year-old man presents with fever severe headache confusion and neck stiffness.",
  clues: [
    "The patient has nausea photophobia and worsening drowsiness.",
    "There is a history of untreated otitis media.",
    "Kernig and Brudzinski signs are positive.",
    "CSF shows high protein low glucose and neutrophils.",
    "Gram stain reveals gram-positive lancet-shaped diplococci.",
    "The organism is alpha-hemolytic and encapsulated."
  ],
  summary: "Pneumococcal meningitis due to Streptococcus pneumoniae. This encapsulated gram-positive lancet-shaped diplococcus commonly spreads from nearby infections such as otitis media and causes acute bacterial meningitis."
},

{
  id: "micro-bacteria-5",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 5",
  date: "May 15, 2026",
  answer: "Clostridium perfringens",
  question: "A 35-year-old man develops severe wound pain fever and swelling after a motorcycle accident.",
  clues: [
    "He sustained a deep contaminated laceration.",
    "The wound was initially sutured at a small clinic.",
    "The skin is discolored with bullae and crepitus.",
    "There is foul-smelling discharge from the wound.",
    "Soft tissue gas is present.",
    "The organism produces alpha toxin lecithinase causing myonecrosis and hemolysis."
  ],
  summary: "Gas gangrene due to Clostridium perfringens. This anaerobic gram-positive spore-forming rod proliferates in low oxygen wounds and produces alpha toxin causing rapid tissue destruction and myonecrosis."
},

{
  id: "micro-bacteria-6",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 6",
  date: "May 15, 2026",
  answer: "Staphylococcus aureus(Inflammatory disease)",
  options: [
    "Staphylococcus aureus(Toxin-mediated disease)"
  ],
  question: "A 32-year-old IV drug user presents with fever pleuritic chest pain and shortness of breath.",
  clues: [
    "He has blood-tinged sputum and profound fatigue.",
    "A new holosystolic murmur increases with inspiration.",
    "There is no prior history of heart disease.",
    "Painless lesions are present on palms and soles.",
    "Dark streaks are visible under fingernails.",
    "The organism is catalase-positive and coagulase-positive."
  ],
  summary: "Infective endocarditis due to Staphylococcus aureus. This highly virulent organism commonly infects normal valves in IV drug users and forms destructive vegetations causing embolic complications."
},

{
  id: "micro-bacteria-7",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 7",
  date: "May 15, 2026",
  answer: "Streptococcus pyogenes(Toxigenic)",
  question: "A 9-year-old boy presents with fever sore throat vomiting and coarse skin texture.",
  clues: [
    "The child appears toxic and irritable.",
    "Pain occurs while moving the neck.",
    "Throat culture shows beta hemolytic gram-positive cocci in chains.",
    "The organism is catalase-negative.",
    "It is bacitracin sensitive.",
    "Pyrogenic exotoxins act as superantigens causing scarlet fever."
  ],
  summary: "Scarlet fever caused by Streptococcus pyogenes. Pyrogenic exotoxins trigger widespread cytokine release causing fever rash and systemic symptoms."
},

{
  id: "micro-bacteria-8",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 8",
  date: "May 15, 2026",
  answer: "Listeria monocytogenes",
  question: "An elderly immunocompromised man presents with fever headache confusion and neck stiffness.",
  clues: [
    "The patient has diabetes and chronic corticosteroid use.",
    "Lumbar puncture shows elevated protein low glucose and neutrophils.",
    "Gram stain reveals small gram-positive rods.",
    "The organism is facultative intracellular.",
    "It spreads cell-to-cell using actin rockets.",
    "It is associated with unpasteurized dairy products."
  ],
  summary: "Meningitis due to Listeria monocytogenes. This motile facultative intracellular gram-positive rod commonly affects neonates elderly and immunocompromised individuals."
},

{
  id: "micro-bacteria-9",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 9",
  date: "May 15, 2026",
  answer: "Staphylococcus saprophyticus",
  question: "A sexually active young woman presents with dysuria frequency and urgency.",
  clues: [
    "She recently started a new sexual relationship.",
    "Urinalysis shows leukocyte esterase and bacteria.",
    "Urine culture grows gram-positive cocci in clusters.",
    "The organism is catalase-positive.",
    "It is coagulase-negative.",
    "The organism is resistant to novobiocin."
  ],
  summary: "Acute uncomplicated UTI due to Staphylococcus saprophyticus also called honeymoon cystitis in sexually active young women."
},

{
  id: "micro-bacteria-10",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 10",
  date: "May 15, 2026",
  answer: "Treponema pallidum",
  question: "A man develops rash on palms and soles after a painless genital ulcer healed.",
  clues: [
    "Patchy hair loss is present.",
    "The patient has generalized lymphadenopathy.",
    "Mucous patches are seen in the oral cavity.",
    "The patient has multiple sexual partners.",
    "VDRL testing is positive.",
    "The organism is a spirochete causing secondary syphilis."
  ],
  summary: "Secondary syphilis caused by Treponema pallidum. The organism disseminates hematogenously after the primary chancre stage causing rash lymphadenopathy and mucous patches."
},
{
  id: "micro-bacteria-11",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 11",
  date: "May 15, 2026",
  answer: "Bacillus anthracis(cutaneous anthrax)",
  question: "A 41-year-old man develops a rapidly enlarging painless skin lesion after handling animal hides.",
  clues: [
    "The lesion began as a small itchy papule.",
    "The lesion later developed a central black discoloration.",
    "There is surrounding edema and mild fever.",
    "The organism is a spore-forming gram-positive rod.",
    "It produces edema toxin and lethal toxin.",
    "Cutaneous exposure from infected animal products is suspected."
  ],
  summary: "Cutaneous anthrax caused by Bacillus anthracis. This spore-forming gram-positive rod produces edema toxin and lethal toxin leading to painless black eschar formation and tissue necrosis."
},

{
  id: "micro-bacteria-12",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 12",
  date: "May 15, 2026",
  answer: "Vibrio cholerae",
  question: "A man presents with profuse watery diarrhea vomiting and severe dehydration after consuming contaminated water.",
  clues: [
    "There is no blood or mucus in the stool.",
    "The patient has muscle cramps and intense thirst.",
    "Hypotension tachycardia and hypokalemia are present.",
    "Stool microscopy shows comma-shaped motile gram-negative rods.",
    "The organism grows well in alkaline media.",
    "The toxin activates adenylate cyclase through ADP-ribosylation of Gs proteins."
  ],
  summary: "Cholera caused by Vibrio cholerae. This comma-shaped gram-negative rod produces cholera toxin causing massive chloride and water secretion resulting in rice-water diarrhea and severe dehydration."
},

{
  id: "micro-bacteria-13",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 13",
  date: "May 15, 2026",
  answer: "Bordetella pertussis",
  question: "A 5-year-old boy presents with severe recurrent coughing spells after a cold-like illness.",
  clues: [
    "The illness began with rhinorrhea and low-grade fever.",
    "The cough became progressively worse over several weeks.",
    "The child has repeated paroxysmal coughing fits.",
    "Difficulty inhaling occurs after coughing episodes.",
    "The organism damages ciliated respiratory epithelium.",
    "The disease progresses through catarrhal paroxysmal and convalescent stages."
  ],
  summary: "Whooping cough caused by Bordetella pertussis. The organism attaches to respiratory epithelium and releases toxins impairing mucociliary clearance leading to severe paroxysmal coughing."
},

{
  id: "micro-bacteria-14",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 14",
  date: "May 15, 2026",
  answer: "Staphylococcus aureus(Toxin-mediated disease)",
  question: "A 3-year-old child develops fever diffuse skin redness and positive Nikolsky sign.",
  clues: [
    "The skin is tender and easily peeled away.",
    "Mucous membranes are spared.",
    "Biopsy shows superficial intraepidermal splitting.",
    "A swab grows gram-positive cocci in clusters.",
    "The organism is catalase-positive and coagulase-positive.",
    "Exfoliative toxins cleave desmoglein-1."
  ],
  summary: "Staphylococcal scalded skin syndrome caused by toxin-mediated Staphylococcus aureus infection. Exfoliative toxins cause superficial epidermal splitting leading to fragile desquamating skin."
},

{
  id: "micro-bacteria-15",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 15",
  date: "May 15, 2026",
  answer: "Mycobacterium avium complex",
  question: "An HIV-positive patient with very low CD4 count presents with fever weight loss diarrhea and hepatosplenomegaly.",
  clues: [
    "The patient has poor compliance with antiretroviral therapy.",
    "Blood cultures grow acid-fast bacilli.",
    "The CD4 count is below 50 cells per microliter.",
    "There is anemia and elevated alkaline phosphatase.",
    "The organism spreads hematogenously in macrophages.",
    "Disseminated opportunistic infection is suspected."
  ],
  summary: "Disseminated Mycobacterium avium complex infection occurs in advanced AIDS and causes systemic symptoms including fever diarrhea hepatosplenomegaly anemia and weight loss."
},

{
  id: "micro-bacteria-16",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 16",
  date: "May 15, 2026",
  answer: "Pseudomonas aeruginosa",
  question: "A diabetic patient develops severe ear pain purulent discharge and skull base osteomyelitis.",
  clues: [
    "Pain worsens at night.",
    "The external auditory canal is swollen with granulation tissue.",
    "Culture grows a gram-negative oxidase-positive rod.",
    "The organism produces a blue-green pigment.",
    "A fruity odor is present.",
    "The patient is treated with piperacillin-tazobactam."
  ],
  summary: "Malignant otitis externa caused by Pseudomonas aeruginosa. This opportunistic gram-negative rod invades soft tissue and bone in diabetic patients causing destructive ear infection."
},

{
  id: "micro-bacteria-17",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 17",
  date: "May 15, 2026",
  answer: "Streptococcus pyogenes(Pyogenic)",
  question: "A child presents with itchy honey-colored crusted lesions around the mouth and nose.",
  clues: [
    "The lesions began as small red vesicles.",
    "The blisters ruptured easily.",
    "Several children in school have similar lesions.",
    "There are no systemic symptoms.",
    "ASO test is positive.",
    "The organism causes superficial pyogenic skin infection."
  ],
  summary: "Impetigo due to Streptococcus pyogenes. This superficial pyogenic infection produces vesicles that rupture forming characteristic honey-colored crusts."
},

{
  id: "micro-bacteria-18",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 18",
  date: "May 15, 2026",
  answer: "Nocardia asteroides",
  question: "An immunocompromised transplant patient develops pulmonary cavitary lesions and neurologic symptoms.",
  clues: [
    "The patient works with soil and compost.",
    "There is chronic cough and weight loss.",
    "Chest imaging shows nodular cavitary infiltrates.",
    "Biopsy shows branching filamentous organisms.",
    "The organism is weakly acid-fast and gram-positive.",
    "Dissemination to the brain can cause abscesses."
  ],
  summary: "Disseminated nocardiosis caused by Nocardia asteroides. This weakly acid-fast branching bacterium spreads hematogenously in immunocompromised patients causing lung and brain involvement."
},

{
  id: "micro-bacteria-19",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 19",
  date: "May 15, 2026",
  answer: "Legionella pneumophila",
  question: "An elderly man develops fever confusion dry cough and multilobar pneumonia after hotel exposure.",
  clues: [
    "The patient recently used hotel hot tubs and pools.",
    "Hyponatremia is present.",
    "Urine antigen test is positive.",
    "The organism spreads through aerosolized water.",
    "It survives within macrophages.",
    "Macrolides and fluoroquinolones are used for treatment."
  ],
  summary: "Legionella pneumophila causes atypical pneumonia transmitted through contaminated aerosolized water and presents with fever confusion hyponatremia and multilobar infiltrates."
},

{
  id: "micro-bacteria-20",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 20",
  date: "May 15, 2026",
  answer: "Helicobacter pylori",
  question: "A man presents with epigastric pain relieved by food along with iron deficiency anemia.",
  clues: [
    "The patient has dark tarry stools.",
    "Upper endoscopy reveals a duodenal ulcer.",
    "Biopsy shows curved gram-negative rods.",
    "The organism is urease-positive.",
    "It survives in acidic stomach conditions.",
    "The infection is associated with gastric cancer and MALT lymphoma."
  ],
  summary: "Peptic ulcer disease caused by Helicobacter pylori. This urease-producing curved gram-negative rod colonizes gastric mucosa causing chronic gastritis and duodenal ulcers."
},
{
  id: "micro-bacteria-21",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 21",
  date: "May 15, 2026",
  answer: "Borrelia burgdorferi",
  question: "A woman develops rash joint pain and cardiac conduction abnormalities after a tick bite.",
  clues: [
    "She recently returned from hiking in a wooded area.",
    "An expanding annular rash with central clearing is present.",
    "The patient has migratory arthritis involving the knees.",
    "ECG shows atrioventricular conduction abnormalities.",
    "The organism is transmitted by Ixodes deer ticks.",
    "The spirochete undergoes antigenic variation."
  ],
  summary: "Lyme disease caused by Borrelia burgdorferi. This tick-borne spirochete causes erythema migrans arthritis cardiac conduction defects and neurologic manifestations."
},

{
  id: "micro-bacteria-22",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 22",
  date: "May 15, 2026",
  answer: "Mycoplasma pneumoniae",
  question: "A college student develops persistent dry cough and atypical pneumonia symptoms.",
  clues: [
    "Several students in the dormitory are ill.",
    "Chest X-ray findings are worse than physical examination findings.",
    "Sputum Gram stain shows no organisms.",
    "Cold agglutinins are present on peripheral smear.",
    "The organism lacks a cell wall.",
    "The infection spreads through respiratory droplets."
  ],
  summary: "Atypical walking pneumonia caused by Mycoplasma pneumoniae. This bacterium lacks a cell wall and commonly causes dry cough and interstitial pneumonia in young adults."
},

{
  id: "micro-bacteria-23",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 23",
  date: "May 15, 2026",
  answer: "Chlamydia trachomatis(Types D-K)",
  options: [
    "Chlamydia trachomatis A B C",
    "Chlamydia trachomatis L1 L2 L3"
  ],
  question: "A sexually active woman presents with pelvic pain abnormal discharge and dyspareunia.",
  clues: [
    "Burning during urination and irregular spotting are present.",
    "The patient has multiple sexual partners.",
    "NAAT detects an obligate intracellular organism.",
    "The infection can progress to PID.",
    "Doxycycline is used for treatment.",
    "The organism lacks muramic acid in its cell wall."
  ],
  summary: "Genitourinary infection caused by Chlamydia trachomatis serotypes D-K. This obligate intracellular organism commonly causes cervicitis urethritis PID and infertility."
},

{
  id: "micro-bacteria-24",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 24",
  date: "May 15, 2026",
  answer: "Bartonella henselae",
  question: "A teenager develops axillary lymphadenopathy after a kitten scratch.",
  clues: [
    "A small papule formed at the scratch site.",
    "The lymph node is tender and enlarged.",
    "Biopsy shows granulomatous inflammation with stellate microabscesses.",
    "Silver stain reveals pleomorphic gram-negative bacilli.",
    "The organism is transmitted through cats especially kittens.",
    "Low-grade fever and fatigue are present."
  ],
  summary: "Cat scratch disease caused by Bartonella henselae. This pleomorphic gram-negative bacillus spreads from cat scratches and causes granulomatous lymphadenitis."
},

{
  id: "micro-bacteria-25",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 25",
  date: "May 15, 2026",
  answer: "Yersinia enterocolitica",
  question: "A man develops arthritis and conjunctivitis after bloody diarrhea from undercooked pork.",
  clues: [
    "The patient recently ate undercooked pork at a barbecue.",
    "Conjunctival redness is present.",
    "The organism is a gram-negative coccobacillus.",
    "Bipolar staining is seen on stool culture.",
    "Pseudoappendicitis can occur as a complication.",
    "Reactive arthritis develops after enteritis."
  ],
  summary: "Reactive arthritis following Yersinia enterocolitica enteritis. This gram-negative coccobacillus can trigger immune-mediated arthritis after gastrointestinal infection."
},

{
  id: "micro-bacteria-26",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 26",
  date: "May 15, 2026",
  answer: "Campylobacter jejuni",
  question: "A man develops bloody diarrhea followed by ascending weakness after eating undercooked chicken.",
  clues: [
    "The patient consumed unpasteurized milk and poultry.",
    "Stool microscopy shows white and red blood cells.",
    "Culture grows a curved oxidase-positive gram-negative rod.",
    "The organism grows best at 42 degrees Celsius.",
    "It grows in a microaerophilic environment.",
    "Post-infectious Guillain-Barre syndrome can occur."
  ],
  summary: "Campylobacter jejuni causes inflammatory enterocolitis and may trigger Guillain-Barre syndrome due to molecular mimicry."
},

{
  id: "micro-bacteria-27",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 27",
  date: "May 15, 2026",
  answer: "Mycobacterium tuberculosis",
  question: "A man develops chronic cough hemoptysis fever night sweats and weight loss.",
  clues: [
    "The patient has poorly controlled diabetes mellitus.",
    "Upper lobe crackles are present on lung examination.",
    "Biopsy reveals caseating granulomas with giant cells.",
    "The organism is acid-fast with mycolic acids.",
    "It survives within macrophages by inhibiting phagolysosome fusion.",
    "Airborne transmission is responsible for infection."
  ],
  summary: "Pulmonary tuberculosis caused by Mycobacterium tuberculosis. This acid-fast bacillus causes chronic granulomatous lung disease with cavitary lesions and systemic symptoms."
},

{
  id: "micro-bacteria-28",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 28",
  date: "May 15, 2026",
  answer: "Streptococcus agalactiae(Group B streptococci)",
  question: "A newborn develops sepsis meningitis and respiratory distress shortly after birth.",
  clues: [
    "The infant was delivered vaginally.",
    "CSF shows high protein low glucose and neutrophils.",
    "Gram stain reveals gram-positive cocci in chains.",
    "The organism is beta-hemolytic.",
    "CAMP test is positive.",
    "Maternal vaginal colonization is the source of infection."
  ],
  summary: "Neonatal meningitis and sepsis caused by Streptococcus agalactiae Group B Streptococcus transmitted during vaginal delivery."
},

{
  id: "micro-bacteria-29",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 29",
  date: "May 15, 2026",
  answer: "Streptococcus pyogenes(Immunologic)",
  options: [
    "Streptococcus pyogenes(Pyogenic)",
    "Streptococcus pyogenes(Toxigenic)"
  ],
  question: "A child develops migratory arthritis carditis and rash after untreated sore throat.",
  clues: [
    "Joint swelling shifts from one joint to another.",
    "A new systolic murmur is heard at the apex.",
    "A pink ring-shaped rash is present on the trunk.",
    "ASO titers are elevated.",
    "The disease is caused by molecular mimicry.",
    "The organism previously caused streptococcal pharyngitis."
  ],
  summary: "Acute rheumatic fever caused by immune-mediated cross-reactivity after Streptococcus pyogenes pharyngitis."
},

{
  id: "micro-bacteria-30",
  domain: "microbiology",
  subdomain: "bacteria",
  title: "Bacteria 30",
  date: "May 15, 2026",
  answer: "Staphylococcus epidermidis",
  question: "A dialysis patient develops fever and bacteremia related to an indwelling catheter.",
  clues: [
    "The catheter exit site has mild erythema.",
    "The organism is catalase-positive.",
    "It is coagulase-negative.",
    "The bacteria are resistant to multiple beta-lactam antibiotics.",
    "The organism strongly adheres to plastic surfaces.",
    "Biofilm formation allows persistent infection."
  ],
  summary: "Catheter-related bloodstream infection caused by Staphylococcus epidermidis. Biofilm formation on prosthetic material protects the organism from host defenses and antibiotics."
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
  id: "micro-fungi-10",
  domain: "microbiology",
  subdomain: "fungi",
  title: "Fungi 10",
  date: "May 15, 2026",
  answer: "Rhizopus and Mucor(Mucormycosis)",
  question: "A diabetic patient with ketoacidosis develops facial pain orbital swelling and black necrotic nasal tissue.",
  clues: [
    "The patient recently had diabetic ketoacidosis.",
    "CT scan shows invasive sinus disease extending toward the orbit.",
    "Black necrotic tissue is present on the nasal turbinate.",
    "Biopsy reveals broad ribbon-like nonseptate hyphae.",
    "The hyphae branch at right angles.",
    "The fungi invade blood vessels causing tissue necrosis."
  ],
  summary: "Mucormycosis caused by Rhizopus and Mucor species. These angioinvasive molds affect diabetic and immunocompromised patients causing rapidly progressive tissue necrosis."
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
