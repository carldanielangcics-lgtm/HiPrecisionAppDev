export const patientsDB = [
  {id:'P-00280',lastName:'Ocampo',firstName:'Jose R.',age:67,sex:'M',contact:'0917-234-5678',service:'CT-Scan',serviceCategory:'Imaging',doctor:'Dr. Lim',status:'Done',time:'8:00 AM',dob:'1959-03-12',address:'123 Rizal St., Sampaloc',hmo:'None'},
  {id:'P-00281',lastName:'Santos',firstName:'Ana M.',age:42,sex:'F',contact:'0918-345-6789',service:'CBC + Urinalysis',serviceCategory:'Laboratory',doctor:'Dr. Cruz',status:'In Progress',time:'9:14 AM',dob:'1984-03-03',address:'456 Quezon Ave., Manila',hmo:'PhilHealth'},
  {id:'P-00282',lastName:'Dela Cruz',firstName:'Mario T.',age:55,sex:'M',contact:'0919-456-7890',service:'ECG + Echo',serviceCategory:'Cardiology',doctor:'Dr. Ramos',status:'Waiting',time:'9:30 AM',dob:'1971-07-22',address:'789 España Blvd., Manila',hmo:'Maxicare'},
  {id:'P-00283',lastName:'Gonzales',firstName:'Linda P.',age:48,sex:'F',contact:'0920-567-8901',service:'Mammography',serviceCategory:'Imaging',doctor:'Dr. Reyes',status:'Urgent',time:'9:45 AM',dob:'1978-01-15',address:'321 Legarda St., Manila',hmo:'None'},
  {id:'P-00284',lastName:'Reyes',firstName:'Carla S.',age:29,sex:'F',contact:'0921-678-9012',service:'Ultrasound OB',serviceCategory:'OB-Gyne',doctor:'Dr. Santos',status:'Waiting',time:'10:00 AM',dob:'1997-09-08',address:'654 Morayta St., Manila',hmo:'MediCard'},
  {id:'P-00285',lastName:'Torres',firstName:'Pedro G.',age:38,sex:'M',contact:'0922-789-0123',service:'Chest X-Ray',serviceCategory:'Imaging',doctor:'Dr. Lim',status:'Waiting',time:'10:30 AM',dob:'1988-05-30',address:'987 Recto Ave., Manila',hmo:'None'},
  {id:'P-00286',lastName:'Bautista',firstName:'Ruth C.',age:62,sex:'F',contact:'0923-890-1234',service:'Consultation',serviceCategory:'Consultation',doctor:'Dr. Cruz',status:'Done',time:'8:30 AM',dob:'1964-11-20',address:'147 Lacson St., Manila',hmo:'None'},
  {id:'P-00287',lastName:'Villanueva',firstName:'Mark A.',age:45,sex:'M',contact:'0924-901-2345',service:'Pre-op Clearance',serviceCategory:'Consultation',doctor:'Dr. Cruz',status:'Waiting',time:'10:30 AM',dob:'1981-04-05',address:'258 Tayuman St., Manila',hmo:'Intellicare'},
];
export const queueDB = [
  {id:'Q1',patientId:'P-00281',name:'Santos, Ana M.',service:'CBC + Urinalysis',doctor:'Dr. Cruz',status:'In Progress',waitMin:0,queueNum:1,urgent:false,startTime:'9:14 AM'},
  {id:'Q2',patientId:'P-00283',name:'Gonzales, Linda',service:'Mammography',doctor:'Dr. Reyes',status:'Waiting',waitMin:35,queueNum:2,urgent:true},
  {id:'Q3',patientId:'P-00282',name:'Dela Cruz, Mario',service:'ECG + Echo',doctor:'Dr. Ramos',status:'Waiting',waitMin:22,queueNum:3,urgent:false},
  {id:'Q4',patientId:'P-00284',name:'Reyes, Carla',service:'Ultrasound OB',doctor:'Dr. Santos',status:'Waiting',waitMin:35,queueNum:4,urgent:false},
  {id:'Q5',patientId:'P-00285',name:'Torres, Pedro',service:'Chest X-Ray',doctor:'Dr. Lim',status:'Waiting',waitMin:48,queueNum:5,urgent:false},
  {id:'Q6',patientId:'P-00287',name:'Villanueva, Mark',service:'Pre-op Clearance',doctor:'Dr. Cruz',status:'Waiting',waitMin:12,queueNum:6,urgent:false},
  {id:'QD1',patientId:'P-00280',name:'Ocampo, Jose',service:'CT-Scan',doctor:'Dr. Lim',status:'Done',waitMin:0,queueNum:null,urgent:false,startTime:'8:00 AM',endTime:'8:48 AM'},
  {id:'QD2',patientId:'P-00286',name:'Bautista, Ruth',service:'Consultation',doctor:'Dr. Cruz',status:'Done',waitMin:0,queueNum:null,urgent:false,startTime:'8:30 AM',endTime:'9:05 AM'},
];
export const appointmentsDB = [
  {id:'APT1',patientId:'P-00280',patientName:'Ocampo, Jose',service:'CT-Scan',doctor:'Dr. Lim',date:'2026-05-18',time:'8:00 AM',status:'Done',complaint:'Chronic headaches'},
  {id:'APT2',patientId:'P-00286',patientName:'Bautista, Ruth',service:'Consultation',doctor:'Dr. Cruz',date:'2026-05-18',time:'8:30 AM',status:'Done',complaint:'Routine checkup'},
  {id:'APT3',patientId:'P-00281',patientName:'Santos, Ana M.',service:'CBC + Urinalysis',doctor:'Dr. Cruz',date:'2026-05-18',time:'9:14 AM',status:'In Progress',complaint:'Fatigue, frequent urination'},
  {id:'APT4',patientId:'P-00282',patientName:'Dela Cruz, Mario',service:'ECG + Echo',doctor:'Dr. Ramos',date:'2026-05-18',time:'9:30 AM',status:'Waiting',complaint:'Chest pain on exertion'},
  {id:'APT5',patientId:'P-00283',patientName:'Gonzales, Linda',service:'Mammography',doctor:'Dr. Reyes',date:'2026-05-18',time:'9:45 AM',status:'Urgent',complaint:'Breast lump noted'},
  {id:'APT6',patientId:'P-00284',patientName:'Reyes, Carla',service:'Ultrasound OB',doctor:'Dr. Santos',date:'2026-05-18',time:'10:00 AM',status:'Waiting',complaint:'2nd trimester checkup'},
  {id:'APT7',patientId:'P-00287',patientName:'Villanueva, Mark',service:'Pre-op Clearance',doctor:'Dr. Cruz',date:'2026-05-18',time:'10:30 AM',status:'Waiting',complaint:'Pre-surgery workup'},
  {id:'APT8',patientId:'P-00285',patientName:'Torres, Pedro',service:'Chest X-Ray',doctor:'Dr. Lim',date:'2026-05-18',time:'11:00 AM',status:'Waiting',complaint:'Persistent cough'},
  {id:'APT9',patientId:'P-00284',patientName:'Aquino, Paz',service:'Geriatric Consult',doctor:'Dr. Cruz',date:'2026-05-19',time:'9:00 AM',status:'Confirmed',complaint:'Annual geriatric evaluation'},
  {id:'APT10',patientId:'P-00285',patientName:'Mendoza, Celia',service:'Holter Monitoring',doctor:'Dr. Ramos',date:'2026-05-20',time:'8:30 AM',status:'Confirmed',complaint:'Palpitations'},
  {id:'APT11',patientId:'P-00286',patientName:'Garcia, Lito',service:'Treadmill Stress Test',doctor:'Dr. Ramos',date:'2026-05-22',time:'10:00 AM',status:'Pending',complaint:'Exertional dyspnea'},
];
export const invoicesDB = [
  {id:'INV-0180',patientId:'P-00280',patientName:'Ocampo, Jose',service:'CT-Scan (Head)',amount:3500,method:'Cash',status:'Paid',date:'May 18'},
  {id:'INV-0181',patientId:'P-00281',patientName:'Santos, Ana M.',service:'CBC + Urinalysis',amount:950,method:'GCash',status:'Pending',date:'May 18'},
  {id:'INV-0182',patientId:'P-00286',patientName:'Bautista, Ruth',service:'Consultation',amount:800,method:'PhilHealth',status:'Paid',date:'May 18'},
  {id:'INV-0183',patientId:'P-00282',patientName:'Dela Cruz, Mario',service:'ECG + Echo',amount:2800,method:'Maxicare',status:'HMO',date:'May 18'},
  {id:'INV-0184',patientId:'P-00283',patientName:'Gonzales, Linda',service:'Mammography',amount:2200,method:'Cash',status:'Pending',date:'May 18'},
  {id:'INV-0179',patientId:'P-00284',patientName:'Aquino, Paz',service:'Geriatric Consult',amount:1200,method:'Cash',status:'Paid',date:'May 18'},
  {id:'INV-0175',patientId:'P-00285',patientName:'Garcia, Lito',service:'Treadmill Stress',amount:3800,method:'MediCard',status:'Overdue',date:'May 17'},
];
export const labResultsDB = [
  {id:'LAB1',patientId:'P-00286',patientName:'Bautista, Ruth',test:'CBC',result:'WBC 11.2, RBC 4.8, Hgb 13.5',reference:'WBC 4.5-11.0',status:'Abnormal',doctor:'Dr. Cruz',date:'May 18, 8:45 AM',reviewed:false},
  {id:'LAB2',patientId:'P-00285',patientName:'Garcia, Lito',test:'HbA1c',result:'7.8%',reference:'<6.5%',status:'Abnormal',doctor:'Dr. Cruz',date:'May 17, 4:20 PM',reviewed:false},
  {id:'LAB3',patientId:'P-00280',patientName:'Ocampo, Jose',test:'CT Scan Report',result:'No acute intracranial abnormality',reference:'Normal',status:'Normal',doctor:'Dr. Lim',date:'May 18, 8:48 AM',reviewed:true},
];
export const vitalSignsDB = [
  {id:'V1',patientId:'P-00281',patientName:'Santos, Ana M.',systolic:130,diastolic:85,hr:88,temp:36.8,spo2:98,weight:62,date:'May 18, 9:10 AM',nurse:'Jane Domingo'},
  {id:'V2',patientId:'P-00286',patientName:'Bautista, Ruth',systolic:140,diastolic:90,hr:76,temp:36.5,spo2:97,weight:58,date:'May 18, 8:25 AM',nurse:'Jane Domingo'},
];
export const prescriptionsDB = [
  {id:'RX1',patientId:'P-00281',patientName:'Santos, Ana M.',med:'Metformin 500mg',dose:'1 tablet',freq:'Twice daily',duration:'30 days',notes:'Take with meals',doctor:'Dr. Cruz',date:'May 18'},
  {id:'RX2',patientId:'P-00285',patientName:'Garcia, Lito',med:'Amlodipine 5mg',dose:'1 tablet',freq:'Once daily',duration:'30 days',notes:'Take in the morning',doctor:'Dr. Cruz',date:'May 17'},
];
export const certificatesDB = [
  {id:'CERT1',patientId:'P-00286',patientName:'Bautista, Ruth',type:'Complete Blood Count (CBC)',date:'May 18, 2026',notes:'Routine checkup - All values within normal range',files:['lab_cbc_bautista_20260518.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT2',patientId:'P-00281',patientName:'Santos, Ana M.',type:'Blood Chemistry',date:'May 17, 2026',notes:'Diabetes monitoring - Fasting blood sugar elevated',files:['lab_chem_santos_20260517.pdf','lab_chem_santos_graph.jpg'],doctor:'Dr. Cruz'},
  {id:'CERT3',patientId:'P-00285',patientName:'Garcia, Lito',type:'Urinalysis',date:'May 16, 2026',notes:'Routine examination - No abnormalities detected',files:['lab_urine_garcia_20260516.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT4',patientId:'P-00283',patientName:'Reyes, Maria Clara',type:'X-Ray',date:'May 15, 2026',notes:'Chest X-ray - No abnormalities detected',files:['xray_chest_reyes_20260515.dcm','xray_chest_reyes_report.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT5',patientId:'P-00281',patientName:'Santos, Ana M.',type:'ECG',date:'May 14, 2026',notes:'12-lead ECG - Normal sinus rhythm',files:['ecg_santos_20260514.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT6',patientId:'P-00286',patientName:'Bautista, Ruth',type:'Ultrasound',date:'May 13, 2026',notes:'Abdominal ultrasound - Liver appears normal',files:['ultrasound_abdomen_bautista_20260513.pdf','ultrasound_images_001.jpg','ultrasound_images_002.jpg'],doctor:'Dr. Cruz'},
  {id:'CERT7',patientId:'P-00285',patientName:'Garcia, Lito',type:'Complete Blood Count (CBC)',date:'May 12, 2026',notes:'Pre-operative screening - All parameters normal',files:['lab_cbc_garcia_20260512.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT8',patientId:'P-00283',patientName:'Reyes, Maria Clara',type:'Blood Chemistry',date:'May 11, 2026',notes:'Lipid panel - Cholesterol slightly elevated',files:['lab_lipid_reyes_20260511.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT9',patientId:'P-00282',patientName:'Dela Cruz, Juan',type:'CT Scan',date:'May 10, 2026',notes:'Head CT without contrast - No acute findings',files:['ct_head_delacruz_20260510.dcm','ct_head_report.pdf','ct_images_series1.jpg'],doctor:'Dr. Cruz'},
  {id:'CERT10',patientId:'P-00284',patientName:'Torres, Elena',type:'MRI',date:'May 9, 2026',notes:'Lumbar spine MRI - Mild disc herniation L4-L5',files:['mri_spine_torres_20260509.dcm','mri_report.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT11',patientId:'P-00281',patientName:'Santos, Ana M.',type:'Complete Blood Count (CBC)',date:'May 8, 2026',notes:'Follow-up CBC - Hemoglobin improved',files:['lab_cbc_santos_20260508.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT12',patientId:'P-00286',patientName:'Bautista, Ruth',type:'Urinalysis',date:'May 7, 2026',notes:'Follow-up urinalysis - Within normal limits',files:['lab_urine_bautista_20260507.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT13',patientId:'P-00284',patientName:'Torres, Elena',type:'X-Ray',date:'May 6, 2026',notes:'Knee X-ray bilateral - Mild osteoarthritis changes',files:['xray_knee_torres_20260506.dcm','xray_knee_report.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT14',patientId:'P-00282',patientName:'Dela Cruz, Juan',type:'Blood Chemistry',date:'May 5, 2026',notes:'Liver function test - All values normal',files:['lab_lft_delacruz_20260505.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT15',patientId:'P-00285',patientName:'Garcia, Lito',type:'ECG',date:'May 4, 2026',notes:'12-lead ECG - Sinus bradycardia noted',files:['ecg_garcia_20260504.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT16',patientId:'P-00283',patientName:'Reyes, Maria Clara',type:'Ultrasound',date:'May 3, 2026',notes:'Thyroid ultrasound - Small nodule detected, benign appearance',files:['ultrasound_thyroid_reyes_20260503.pdf','thyroid_images_001.jpg'],doctor:'Dr. Cruz'},
  {id:'CERT17',patientId:'P-00286',patientName:'Bautista, Ruth',type:'Blood Chemistry',date:'May 2, 2026',notes:'Renal function panel - Creatinine within normal range',files:['lab_renal_bautista_20260502.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT18',patientId:'P-00281',patientName:'Santos, Ana M.',type:'X-Ray',date:'May 1, 2026',notes:'Chest X-ray PA view - Clear lung fields',files:['xray_chest_santos_20260501.dcm','xray_chest_santos_report.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT19',patientId:'P-00284',patientName:'Torres, Elena',type:'Complete Blood Count (CBC)',date:'Apr 30, 2026',notes:'Routine CBC - Mild anemia detected',files:['lab_cbc_torres_20260430.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT20',patientId:'P-00282',patientName:'Dela Cruz, Juan',type:'Urinalysis',date:'Apr 29, 2026',notes:'Routine urinalysis - Trace protein detected',files:['lab_urine_delacruz_20260429.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT21',patientId:'P-00285',patientName:'Garcia, Lito',type:'Blood Chemistry',date:'Apr 28, 2026',notes:'Thyroid function test - TSH slightly elevated',files:['lab_thyroid_garcia_20260428.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT22',patientId:'P-00283',patientName:'Reyes, Maria Clara',type:'CT Scan',date:'Apr 27, 2026',notes:'Abdominal CT with contrast - No abnormal masses',files:['ct_abdomen_reyes_20260427.dcm','ct_abdomen_report.pdf','ct_images_001.jpg','ct_images_002.jpg'],doctor:'Dr. Cruz'},
  {id:'CERT23',patientId:'P-00286',patientName:'Bautista, Ruth',type:'ECG',date:'Apr 26, 2026',notes:'12-lead ECG - Normal sinus rhythm, no ST changes',files:['ecg_bautista_20260426.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT24',patientId:'P-00281',patientName:'Santos, Ana M.',type:'Ultrasound',date:'Apr 25, 2026',notes:'Carotid doppler ultrasound - Normal blood flow',files:['ultrasound_carotid_santos_20260425.pdf','carotid_images_001.jpg'],doctor:'Dr. Cruz'},
  {id:'CERT25',patientId:'P-00284',patientName:'Torres, Elena',type:'Blood Chemistry',date:'Apr 24, 2026',notes:'Electrolyte panel - Potassium slightly low',files:['lab_electrolytes_torres_20260424.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT26',patientId:'P-00282',patientName:'Dela Cruz, Juan',type:'X-Ray',date:'Apr 23, 2026',notes:'Lumbar spine X-ray - Degenerative changes L4-L5',files:['xray_spine_delacruz_20260423.dcm','xray_spine_report.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT27',patientId:'P-00285',patientName:'Garcia, Lito',type:'MRI',date:'Apr 22, 2026',notes:'Brain MRI with contrast - No acute pathology',files:['mri_brain_garcia_20260422.dcm','mri_brain_report.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT28',patientId:'P-00283',patientName:'Reyes, Maria Clara',type:'Complete Blood Count (CBC)',date:'Apr 21, 2026',notes:'Post-treatment CBC - WBC count normalized',files:['lab_cbc_reyes_20260421.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT29',patientId:'P-00286',patientName:'Bautista, Ruth',type:'X-Ray',date:'Apr 20, 2026',notes:'Hand X-ray bilateral - No fracture detected',files:['xray_hand_bautista_20260420.dcm','xray_hand_report.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT30',patientId:'P-00281',patientName:'Santos, Ana M.',type:'Blood Chemistry',date:'Apr 19, 2026',notes:'HbA1c test - 7.2%, diabetes control improving',files:['lab_hba1c_santos_20260419.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT31',patientId:'P-00284',patientName:'Torres, Elena',type:'Urinalysis',date:'Apr 18, 2026',notes:'Urinalysis - Normal findings',files:['lab_urine_torres_20260418.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT32',patientId:'P-00282',patientName:'Dela Cruz, Juan',type:'Ultrasound',date:'Apr 17, 2026',notes:'Prostate ultrasound - Mild enlargement, benign',files:['ultrasound_prostate_delacruz_20260417.pdf','prostate_images_001.jpg'],doctor:'Dr. Cruz'},
  {id:'CERT33',patientId:'P-00285',patientName:'Garcia, Lito',type:'Complete Blood Count (CBC)',date:'Apr 16, 2026',notes:'Routine CBC - All parameters within normal range',files:['lab_cbc_garcia_20260416.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT34',patientId:'P-00283',patientName:'Reyes, Maria Clara',type:'ECG',date:'Apr 15, 2026',notes:'12-lead ECG - Occasional PVCs noted',files:['ecg_reyes_20260415.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT35',patientId:'P-00286',patientName:'Bautista, Ruth',type:'CT Scan',date:'Apr 14, 2026',notes:'Chest CT with contrast - No pulmonary embolism',files:['ct_chest_bautista_20260414.dcm','ct_chest_report.pdf','ct_images_series.jpg'],doctor:'Dr. Cruz'},
  {id:'CERT36',patientId:'P-00281',patientName:'Santos, Ana M.',type:'Urinalysis',date:'Apr 13, 2026',notes:'24-hour urine collection - Protein levels elevated',files:['lab_urine_24h_santos_20260413.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT37',patientId:'P-00284',patientName:'Torres, Elena',type:'X-Ray',date:'Apr 12, 2026',notes:'Shoulder X-ray - Rotator cuff calcification',files:['xray_shoulder_torres_20260412.dcm','xray_shoulder_report.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT38',patientId:'P-00282',patientName:'Dela Cruz, Juan',type:'Blood Chemistry',date:'Apr 11, 2026',notes:'Cardiac enzyme panel - Troponin negative',files:['lab_cardiac_delacruz_20260411.pdf'],doctor:'Dr. Cruz'},
  {id:'CERT39',patientId:'P-00285',patientName:'Garcia, Lito',type:'Ultrasound',date:'Apr 10, 2026',notes:'Abdominal ultrasound - Gallbladder polyp 5mm',files:['ultrasound_abdomen_garcia_20260410.pdf','gallbladder_images_001.jpg','gallbladder_images_002.jpg'],doctor:'Dr. Cruz'},
  {id:'CERT40',patientId:'P-00283',patientName:'Reyes, Maria Clara',type:'Blood Chemistry',date:'Apr 9, 2026',notes:'Vitamin D level - Deficiency detected',files:['lab_vitd_reyes_20260409.pdf'],doctor:'Dr. Cruz'},
];
export const treatmentLogsDB = [
  {id:'TL1',patientId:'P-00281',patientName:'Santos, Ana M.',diagnosis:'Type 2 Diabetes',plan:'Start Metformin, dietary counseling, monthly monitoring',followup:'2026-06-18',doctor:'Dr. Cruz',date:'May 18',note:'Patient counseled on diet and exercise'},
];
// New consultation notes DB
export const consultNotesDB = [
  {id:'CN1',patientId:'P-00281',patientName:'Santos, Ana M.',complaint:'Fatigue, frequent urination',assessment:'Consistent with Type 2 DM. HbA1c elevated at 7.8%. No acute complications noted.',plan:'Start Metformin 500mg BID. Dietary counseling. RTC in 1 month for repeat FBS.',diagnosis:'Type 2 Diabetes Mellitus',followup:'2026-06-18',doctor:'Dr. Andres Cruz',date:'May 18, 2026, 9:30 AM'},
];