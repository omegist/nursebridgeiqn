import type { Question } from '@/lib/types';

export const questions: Question[] = [
      {
        id: '1',
        text: 'A patient with chronic obstructive pulmonary disease (COPD) is receiving oxygen therapy. Which oxygen delivery method is preferred to reduce the risk of CO2 retention?',
        options: ['Simple face mask', 'Nasal cannula', 'Non-rebreather mask', 'Venturi mask'],
        correctIndex: 3,
        explanation: 'Delivers precise, low concentrations of oxygen (24-28%), minimising CO2 retention risk in COPD.',
      },
      {
        id: '3',
        text: 'During discharge planning for a patient newly diagnosed with Type 1 Diabetes Mellitus, the most important intervention is to:',
        options: [
          'Encourage avoidance of all sugars',
          'Teach self-monitoring of blood glucose',
          'Advise on avoiding exercise',
          'Arrange for weekly clinic visits for insulin injections',
        ],
        correctIndex: 1,
        explanation: 'Empowers patients to manage glucose levels and adjust insulin appropriately.',
      },
      {
        id: '17',
        text: 'A patient receiving a blood transfusion develops chills and fever. This most likely indicates a:',
        options: ['Anaphylactic reaction', 'Febrile non-hemolytic reaction', 'Acute hemolytic reaction', 'Circulatory overload'],
        correctIndex: 1,
        explanation: 'Characterised by fever and chills without hemolysis; most common transfusion reaction.',
      },
      {
        id: '21',
        text: 'Signs of diabetic ketoacidosis (DKA) include:',
        options: [
          'Weight gain and hypertension',
          'Kussmaul respirations and fruity breath odor',
          'Bradycardia and cool skin',
          'Oliguria and fluid overload',
        ],
        correctIndex: 1,
        explanation: 'Classic signs of ketoacidosis from metabolic acidosis and ketone buildup.',
      },
      {
        id: '26',
        text: 'Which electrolyte imbalance is most associated with cardiac arrhythmias?',
        options: ['Hypokalemia', 'Hypernatremia', 'Hypocalcemia', 'Hypermagnesemia'],
        correctIndex: 0,
        explanation: 'Low potassium increases risk for dangerous cardiac arrhythmias.',
      },
      {
        id: '27',
        text: 'The Glasgow Coma Scale assesses:',
        options: ['Respiratory effort', 'Level of consciousness', 'Pain severity', 'Peripheral circulation'],
        correctIndex: 1,
        explanation: 'GCS assesses eye opening, verbal response, and motor response.',
      },
      {
        id: '44',
        text: 'Which assessment finding is most concerning after head trauma?',
        options: ['Sleepiness', 'Vomiting', 'Unequal pupils', 'Mild headache'],
        correctIndex: 2,
        explanation: 'Indicates possible brain herniation or intracranial pressure.',
      },
      {
        id: '46',
        text: 'After a total hip replacement, the nurse should position the patient\'s leg:',
        options: [
          'Adducted (towel midline)',
          'Flexed beyond 90 degrees',
          'Slightly abducted (away from midline)',
          'Internally rotated',
        ],
        correctIndex: 2,
        explanation: 'Prevents hip dislocation.',
      },
      {
        id: '48',
        text: 'In prioritization of care, which patient needs to be seen first?',
        options: [
          'A patient with a headache rated 5/10',
          'A patient with asthma showing wheezing and labored breathing',
          'A post-op patient requesting a glass of water',
          'A patient requesting information about discharge',
        ],
        correctIndex: 1,
        explanation: 'Respiratory distress requires immediate intervention.',
      },
      {
        id: '51',
        text: 'Which condition is most associated with a "butterfly rash" across the face?',
        options: ['Psoriasis', 'Systemic lupus erythematosus', 'Rosacea', 'Eczema'],
        correctIndex: 1,
        explanation: 'Butterfly rash is characteristic of systemic lupus erythematosus.',
      },
      {
        id: '54',
        text: 'Which organ is most affected by hepatitis?',
        options: ['Kidney', 'Heart', 'Liver', 'Lung'],
        correctIndex: 2,
        explanation: 'Hepatitis affects the liver.',
      },
      {
        id: '75',
        text: 'A patient develops shortness of breath and chest pain after surgery. The nurse suspects',
        options: ['Stroke', 'Pulmonary embolism', 'Myocardial Infarction', 'Asthma'],
        correctIndex: 1,
        explanation: 'Pulmonary embolism is the priority.',
      },
      {
        id: '82',
        text: 'A patient has a severe anaphylactic reaction. The priority drug is:',
        options: ['Salbutamol', 'Adrenaline (epinephrine)', 'Morphine', 'Paracetamol'],
        correctIndex: 1,
        explanation: 'Adrenaline (epinephrine) is the first-line for anaphylaxis.',
      },
      {
        id: '83',
        text: 'Which sign is most indicative of hypovolemic shock?',
        options: ['Hypertension', 'Bradycardia', 'Weak, rapid pulse', 'Warm skin'],
        correctIndex: 2,
        explanation: 'Weak, rapid pulse is classic hypovolemic shock sign.',
      },
      {
        id: '84',
        text: 'After a burn injury, the primary fluid given initially is:',
        options: ['Dextrose 5%', 'Normal saline', 'Lactated Ringer\'s solution', 'Albumin'],
        correctIndex: 2,
        explanation: 'Lactated Ringer\'s is preferred for fluid resuscitation in burns.',
      },
      {
        id: '85',
        text: 'A patient in ventricular fibrillation should immediately receive:',
        options: ['Oxygen', 'Defibrillation', 'CPR only', 'IV fluids'],
        correctIndex: 1,
        explanation: 'Ventricular fibrillation requires immediate defibrillation.',
      },
      {
        id: '91',
        text: 'After inserting a central venous catheter, the first nursing action is to:',
        options: [
          'Start fluids immediately',
          'Send the patient for a chest X-ray',
          'Flush the line vigorously',
          'Remove the dressing',
        ],
        correctIndex: 1,
        explanation: 'Chest X-ray confirms proper placement of central lines.',
      },
      {
        id: '92',
        text: 'A common complication of total parenteral nutrition (TPN) is:',
        options: ['Hypertension', 'Infection', 'Hypoglycemia', 'Constipation'],
        correctIndex: 1,
        explanation: 'Infection is a common TPN complication.',
      },
      {
        id: '93',
        text: 'A tracheostomy tube becomes dislodged. The nurse\'s first action is to:',
        options: [
          'Call a code blue',
          'Insert a new tracheostomy tube immediately',
          'Cover the stoma with a sterile dressing',
          'Call respiratory therapist',
        ],
        correctIndex: 0,
        explanation: 'Emergencies like dislodged tracheostomy require a code call.',
      },
      {
        id: '95',
        text: 'A patient on mechanical ventilation develops sudden hypotension. This may indicate:',
        options: ['Pneumothorax', 'Asthma', 'Myocardial Infarction', 'Stroke'],
        correctIndex: 0,
        explanation: 'Sudden hypotension in ventilated patients suggests pneumothorax.',
      },
      {
        id: '122',
        text: 'A patient complains of abdominal pain post-surgery and the abdomen is rigid. The nurse suspects:',
        options: ['Constipation', 'Gastroenteritis', 'Peritonitis', 'GERD'],
        correctIndex: 2,
        explanation: 'Rigid abdomen indicates possible peritonitis.',
      },
      {
        id: '125',
        text: 'A patient with hyperkalemia would most likely show which ECG change?',
        options: ['Flattened T waves', 'Tall, peaked T waves', 'Prolonged PR interval', 'Shortened QRS complex'],
        correctIndex: 1,
        explanation: 'Tall, peaked T waves done with hyperkalemia.',
      },
      {
        id: '131',
        text: 'The Glasgow Coma Scale assesses:',
        options: ['Lung function', 'Mental health stability', 'Eye, verbal, and motor responses', 'Blood pressure'],
        correctIndex: 2,
        explanation: 'Glasgow Coma Scale assesses eye, verbal, and motor responses.',
      },
      {
        id: '132',
        text: 'A patient bleeding heavily from a wound should have:',
        options: ['Cold packs applied', 'A tourniquet immediately', 'Direct pressure applied', 'Elevate head of bed'],
        correctIndex: 2,
        explanation: 'Apply direct pressure to stop bleeding first.',
      },
      {
        id: '133',
        text: 'Symptoms of a tension pneumothorax include:',
        options: ['Decreased breath sounds and tracheal deviation', 'Wheezing and cough', 'Chest congestion', 'Low-grade fever'],
        correctIndex: 0,
        explanation: 'Tension pneumothorax = decreased breath sounds, tracheal shift.',
      },
      {
        id: '134',
        text: 'After a fall, an elderly patient complains of hip pain. What is the first nursing action?',
        options: [
          'Move the patient to a chair',
          'Check for deformity and neurovascular status',
          'Encourage ambulation',
          'Apply warm compresses',
        ],
        correctIndex: 1,
        explanation: 'Neurovascular check ensures circulation post-injury.',
      },
      {
        id: '135',
        text: 'A patient receiving blood transfusion develops chills and fever. The nurse should:',
        options: ['Increase the infusion rate', 'Stop the infusion immediately', 'Call the blood bank', 'Warm the patient'],
        correctIndex: 1,
        explanation: 'Stop transfusion immediately at signs of reaction.',
      },
      {
        id: '141',
        text: 'In suspected sepsis, the priority initial nursing action is:',
        options: [
          'Administer antibiotics immediately',
          'Obtain blood cultures before antibiotics',
          'Prepare for surgery',
          'Take an X-ray',
        ],
        correctIndex: 1,
        explanation: 'Blood cultures must be drawn before antibiotics to guide treatment.',
      },
      {
        id: '142',
        text: 'An early sign of increased intracranial pressure is:',
        options: ['Seizures', 'Decreased level of consciousness', 'Hyperactivity', 'Vomiting'],
        correctIndex: 1,
        explanation: 'LOC changes are early signs of brain pressure.',
      },
      {
        id: '143',
        text: 'Ventilator-associated pneumonia (VAP) prevention includes:',
        options: [
          'Frequent suctioning only',
          'Elevating head of bed 30-45 degrees',
          'Keeping patient flat',
          'Prophylactic antibiotics always',
        ],
        correctIndex: 1,
        explanation: 'Elevating head reduces risk of VAP.',
      },
      {
        id: '144',
        text: 'A patient has a potassium level of 2.8 mmol/L. The nurse expects:',
        options: ['Hyperactive reflexes', 'Muscle weakness', 'Constipation', 'Hypertension'],
        correctIndex: 1,
        explanation: 'Low potassium (hypokalemia) causes muscle weakness.',
      },
      {
        id: '145',
        text: 'In cardiac monitoring, ST segment elevation usually indicates:',
        options: ['Heart failure', 'Acute myocardial infarction', 'Hyperkalemia', 'Hypothermia'],
        correctIndex: 1,
        explanation: 'ST elevation indicates myocardial infarction (heart attack).',
      },
      {
        id: '305',
        text: 'Which electrolyte imbalance is most associated with digoxin toxicity?',
        options: [ 'Hyperkalemia', 'Hypokalemia', 'Hypernatremia', 'Hyponatremia' ],
        correctIndex: 1,
        explanation: 'Low potassium increases sensitivity to digoxin and risk of toxicity.'
      },
      {
        id: '306',
        text: 'A nurse is caring for a patient with chronic kidney disease. Which lab value is expected?',
        options: [ 'Elevated creatinine', 'Low potassium', 'Decreased urea', 'Low phosphate' ],
        correctIndex: 0,
        explanation: 'Kidney dysfunction leads to reduced clearance of creatinine.'
      },
      {
        id: '307',
        text: 'What is the first priority when you suspect sepsis in a patient?',
        options: [ 'Administer analgesia', 'Draw blood cultures', 'Start IV fluids', 'Give antipyretics' ],
        correctIndex: 1,
        explanation: 'Cultures must be taken before antibiotics to identify pathogens.'
      },
      {
        id: '308',
        text: 'A patient with type 1 diabetes reports shakiness and dizziness. What is the nurse\'s first action?',
        options: [ 'Call the doctor', 'Give insulin', 'Check blood glucose', 'Administer glucagon' ],
        correctIndex: 2,
        explanation: 'Assessment is priority; glucose must be confirmed before action.'
      },
      {
        id: '309',
        text: 'A post-operative patient is experiencing tachycardia, hypotension, and low urine output. What condition is most likely developing?',
        options: [ 'Hypovolemia', 'Hypervolemia', 'Hypokalemia', 'Infection' ],
        correctIndex: 0,
        explanation: 'These are classic signs of fluid volume loss (shock).'
      },
      {
        id: '310',
        text: 'What is the most appropriate nursing intervention related to COPD?',
        options: [ 'Monitor vitals', 'Notify the physician', 'Administer analgesia', 'Reduce oxygen flow' ],
        correctIndex: 3,
        explanation: 'COPD patients rely on hypoxic drive; excess oxygen can suppress breathing.'
      },
      {
        id: '311',
        text: 'What is the most appropriate nursing intervention related to Hypoglycemia?',
        options: [ 'Monitor vitals', 'Notify the physician', 'Administer analgesia', 'Cool, clammy skin' ],
        correctIndex: 3,
        explanation: 'Hypoglycemia triggers sympathetic responses including sweating.'
      },
      {
        id: '312',
        text: 'What is the most appropriate nursing intervention related to Heart failure?',
        options: [ 'Monitor vitals', 'Notify the physician', 'Administer analgesia', 'Fluid retention' ],
        correctIndex: 3,
        explanation: 'Pitting edema indicates fluid overload.'
      },
      {
        id: '313',
        text: 'What is the most appropriate nursing intervention related to Asthma attack?',
        options: [ 'Monitor vitals', 'Notify the physician', 'Administer analgesia', 'Administer bronchodilator' ],
        correctIndex: 3,
        explanation: 'Bronchodilators relieve airway constriction quickly.'
      },
      {
        id: '314',
        text: 'What is the most appropriate nursing intervention related to Blood transfusion reaction?',
        options: [ 'Monitor vitals', 'Notify the physician', 'Administer analgesia', 'Stop the transfusion' ],
        correctIndex: 3,
        explanation: 'The first action during a reaction is to stop the infusion.'
      },
      {
        id: '315',
        text: 'What is the most appropriate nursing intervention related to Anaphylaxis?',
        options: [ 'Monitor vitals', 'Notify the physician', 'Administer analgesia', 'Administer epinephrine' ],
        correctIndex: 3,
        explanation: 'Epinephrine is the first-line treatment for anaphylaxis.'
      },
      {
        id: '316',
        text: 'What is the first-line treatment for hypoglycemia if the patient is conscious and able to swallow?',
        options: [ 'Glucagon injection', '20 ml of IV glucose', '15 grams of fast-acting carbohydrate orally', '500 ml of IV saline' ],
        correctIndex: 2,
        explanation: 'If alert and oriented, give oral glucose like juice or glucose tablets. IV or IM options are used if the patient is unconscious.'
      },
      {
        id: '317',
        text: 'Which medication is commonly used to increase heart contractility in cardiogenic shock?',
        options: [ 'Morphine', 'Dobutamine', 'Furosemide', 'Salbutamol' ],
        correctIndex: 1,
        explanation: 'Dobutamine is a positive inotrope used to increase myocardial contractility.'
      },
      {
        id: '318',
        text: 'Which of the following patients is at the highest risk for septic shock?',
        options: [ 'A 5-year-old with chickenpox', 'A healthy adult with a cold', 'A post-operative elderly patient with a urinary catheter', 'A teenager with asthma' ],
        correctIndex: 2,
        explanation: 'Indwelling catheters and advanced age increase the risk of sepsis.'
      },
      {
        id: '319',
        text: 'Which type of shock is most associated with severe allergic reactions?',
        options: [ 'Cardiogenic', 'Neurogenic', 'Anaphylactic', 'Septic' ],
        correctIndex: 2,
        explanation: 'Anaphylactic shock is due to hypersensitivity reactions, causing vasodilation and airway compromise.'
      },
      {
        id: '320',
        text: 'What does a high lactate level indicate in a patient with suspected shock?',
        options: [ 'Normal metabolism', 'Liver failure', 'Anaerobic metabolism and tissue hypoxia', 'Adequate perfusion' ],
        correctIndex: 2,
        explanation: 'Lactate rises when cells aren\'t getting enough oxygen.'
      },
      {
        id: '321',
        text: 'What is a sign of fluid overload during shock resuscitation?',
        options: [ 'Increased capillary refill', 'Jugular vein distension', 'Hypotension', 'Warm extremities' ],
        correctIndex: 1,
        explanation: 'Over-resuscitation can lead to pulmonary edema and JVD.'
      },
      {
        id: '322',
        text: 'What is a late sign of shock?',
        options: [ 'Hypotension', 'Tachycardia', 'Pallor', 'Anxiety' ],
        correctIndex: 0,
        explanation: 'Hypotension is a late sign, once compensatory mechanisms fail.'
      },
      {
        id: '323',
        text: 'Which IV fluid is most commonly used for initial resuscitation in septic shock?',
        options: [ 'Dextrose 10%', 'Normal saline (0.9%)', 'Potassium chloride', 'Ringer\'s lactate' ],
        correctIndex: 1,
        explanation: 'Isotonic crystalloids like normal saline are initial fluids for hypovolemic and septic shock.'
      },
      {
        id: '324',
        text: 'What happens to urine output during cardiogenic shock?',
        options: [ 'Increases', 'Decreases', 'Remains stable', 'Becomes concentrated' ],
        correctIndex: 1,
        explanation: 'Decreased perfusion to the kidneys reduces urine output in shock states.'
      },
      {
        id: '325',
        text: 'Which type of shock is due to pump failure, typically after a myocardial infarction (MI)?',
        options: [ 'Cardiogenic', 'Hypovolemic', 'Neurogenic', 'Septic' ],
        correctIndex: 0,
        explanation: 'Cardiogenic shock is due to pump failure usually after MI or heart failure.'
      },
      {
        id: '326',
        text: 'What is a classic sign of neurogenic shock?',
        options: [ 'Warm skin and bradycardia', 'Cold clammy skin and tachycardia', 'Cyanosis and hypotension', 'Increased urine output' ],
        correctIndex: 0,
        explanation: 'Loss of sympathetic tone leads to vasodilation and slower heart rate.'
      },
      {
        id: '327',
        text: 'Which electrolyte imbalance is common after massive fluid loss (hypovolemia)?',
        options: [ 'Hypernatremia', 'Hyponatremia', 'Hyperkalemia', 'Hypokalemia' ],
        correctIndex: 1,
        explanation: 'Loss of both fluid and electrolytes can lead to dilutional hyponatremia.'
      },
      {
        id: '328',
        text: 'A 55-year-old patient with a history of type 2 diabetes mellitus is admitted with confusion, dry mucous membranes, and a blood glucose level of 32 mmol/L. Which is the priority nursing intervention?',
        options: [ 'Administer insulin stat', 'Start oral rehydration therapy', 'Establish IV access and begin rehydration with isotonic fluids', 'Place the patient in a high Fowler\'s position' ],
        correctIndex: 2,
        explanation: 'Hyperosmolar hyperglycaemic state (HHS) presents with extreme hyperglycaemia and dehydration. IV fluid replacement is the first-line intervention to restore perfusion before insulin is administered.'
      },
      {
        id: '329',
        text: 'A patient undergoing chemotherapy reports mouth ulcers. What nursing advice is most appropriate?',
        options: [ 'Use alcohol-based mouthwash', 'Eat citrus fruits for Vitamin C', 'Rinse mouth with salt water and avoid spicy food', 'Brush vigorously to clean ulcers' ],
        correctIndex: 2,
        explanation: 'Chemotherapy can cause mucositis. Gentle care with saline rinses and avoiding irritants prevents worsening.'
      }
];
