export const initialPatients = [
  { id: 'P-00280', lastName: 'Ocampo', firstName: 'Jose R.', age: 67, sex: 'M', contact: '0917-234-5678', service: 'CT-Scan', serviceCategory: 'Imaging', doctor: 'Dr. Lim', status: 'Done', time: '8:00 AM', dob: '1959-03-12', address: '123 Rizal St., Sampaloc', hmo: 'None' },
  { id: 'P-00281', lastName: 'Santos', firstName: 'Ana M.', age: 42, sex: 'F', contact: '0918-345-6789', service: 'CBC + Urinalysis', serviceCategory: 'Laboratory', doctor: 'Dr. Cruz', status: 'In Progress', time: '9:14 AM', dob: '1984-03-03', address: '456 Quezon Ave., Manila', hmo: 'PhilHealth' },
  { id: 'P-00282', lastName: 'Dela Cruz', firstName: 'Mario T.', age: 55, sex: 'M', contact: '0919-456-7890', service: 'ECG + Echo', serviceCategory: 'Cardiology', doctor: 'Dr. Ramos', status: 'Waiting', time: '9:30 AM', dob: '1971-07-22', address: '789 España Blvd., Manila', hmo: 'Maxicare' },
  { id: 'P-00283', lastName: 'Gonzales', firstName: 'Linda P.', age: 48, sex: 'F', contact: '0920-567-8901', service: 'Mammography', serviceCategory: 'Imaging', doctor: 'Dr. Reyes', status: 'Urgent', time: '9:45 AM', dob: '1978-01-15', address: '321 Legarda St., Manila', hmo: 'None' },
  { id: 'P-00284', lastName: 'Reyes', firstName: 'Carla S.', age: 29, sex: 'F', contact: '0921-678-9012', service: 'Ultrasound OB', serviceCategory: 'OB-Gyne', doctor: 'Dr. Santos', status: 'Waiting', time: '10:00 AM', dob: '1997-09-08', address: '654 Morayta St., Manila', hmo: 'MediCard' },
  { id: 'P-00285', lastName: 'Torres', firstName: 'Pedro G.', age: 38, sex: 'M', contact: '0922-789-0123', service: 'Chest X-Ray', serviceCategory: 'Imaging', doctor: 'Dr. Lim', status: 'Waiting', time: '10:30 AM', dob: '1988-05-30', address: '987 Recto Ave., Manila', hmo: 'None' },
  { id: 'P-00286', lastName: 'Bautista', firstName: 'Ruth C.', age: 62, sex: 'F', contact: '0923-890-1234', service: 'Consultation', serviceCategory: 'Consultation', doctor: 'Dr. Cruz', status: 'Done', time: '8:30 AM', dob: '1964-11-20', address: '147 Lacson St., Manila', hmo: 'None' },
  { id: 'P-00287', lastName: 'Villanueva', firstName: 'Mark A.', age: 45, sex: 'M', contact: '0924-901-2345', service: 'Pre-op Clearance', serviceCategory: 'Consultation', doctor: 'Dr. Cruz', status: 'Waiting', time: '10:30 AM', dob: '1981-04-05', address: '258 Tayuman St., Manila', hmo: 'Intellicare' },
];

export const initialQueue = [
  { id: 'Q1', patientId: 'P-00281', name: 'Santos, Ana M.', service: 'CBC + Urinalysis', doctor: 'Dr. Cruz', status: 'In Progress', waitMin: 0, queueNum: 1, urgent: false, startTime: '9:14 AM' },
  { id: 'Q2', patientId: 'P-00283', name: 'Gonzales, Linda', service: 'Mammography', doctor: 'Dr. Reyes', status: 'Waiting', waitMin: 35, queueNum: 2, urgent: true },
  { id: 'Q3', patientId: 'P-00282', name: 'Dela Cruz, Mario', service: 'ECG + Echo', doctor: 'Dr. Ramos', status: 'Waiting', waitMin: 22, queueNum: 3, urgent: false },
  { id: 'Q4', patientId: 'P-00284', name: 'Reyes, Carla', service: 'Ultrasound OB', doctor: 'Dr. Santos', status: 'Waiting', waitMin: 35, queueNum: 4, urgent: false },
  { id: 'Q5', patientId: 'P-00285', name: 'Torres, Pedro', service: 'Chest X-Ray', doctor: 'Dr. Lim', status: 'Waiting', waitMin: 48, queueNum: 5, urgent: false },
  { id: 'Q6', patientId: 'P-00287', name: 'Villanueva, Mark', service: 'Pre-op Clearance', doctor: 'Dr. Cruz', status: 'Waiting', waitMin: 12, queueNum: 6, urgent: false },
  { id: 'QD1', patientId: 'P-00280', name: 'Ocampo, Jose', service: 'CT-Scan', doctor: 'Dr. Lim', status: 'Done', waitMin: 0, queueNum: null, urgent: false, startTime: '8:00 AM', endTime: '8:48 AM' },
  { id: 'QD2', patientId: 'P-00286', name: 'Bautista, Ruth', service: 'Consultation', doctor: 'Dr. Cruz', status: 'Done', waitMin: 0, queueNum: null, urgent: false, startTime: '8:30 AM', endTime: '9:05 AM' },
];

export const initialAppointments = [
  { id: 'APT1', patientId: 'P-00280', patientName: 'Ocampo, Jose', service: 'CT-Scan', doctor: 'Dr. Lim', date: '2026-05-18', time: '8:00 AM', status: 'Done', complaint: 'Chronic headaches' },
  { id: 'APT2', patientId: 'P-00286', patientName: 'Bautista, Ruth', service: 'Consultation', doctor: 'Dr. Cruz', date: '2026-05-18', time: '8:30 AM', status: 'Done', complaint: 'Routine checkup' },
  { id: 'APT3', patientId: 'P-00281', patientName: 'Santos, Ana M.', service: 'CBC + Urinalysis', doctor: 'Dr. Cruz', date: '2026-05-18', time: '9:14 AM', status: 'In Progress', complaint: 'Fatigue, frequent urination' },
  { id: 'APT4', patientId: 'P-00282', patientName: 'Dela Cruz, Mario', service: 'ECG + Echo', doctor: 'Dr. Ramos', date: '2026-05-18', time: '9:30 AM', status: 'Waiting', complaint: 'Chest pain on exertion' },
  { id: 'APT5', patientId: 'P-00283', patientName: 'Gonzales, Linda', service: 'Mammography', doctor: 'Dr. Reyes', date: '2026-05-18', time: '9:45 AM', status: 'Urgent', complaint: 'Breast lump noted' },
  { id: 'APT6', patientId: 'P-00284', patientName: 'Reyes, Carla', service: 'Ultrasound OB', doctor: 'Dr. Santos', date: '2026-05-18', time: '10:00 AM', status: 'Waiting', complaint: '2nd trimester checkup' },
  { id: 'APT7', patientId: 'P-00287', patientName: 'Villanueva, Mark', service: 'Pre-op Clearance', doctor: 'Dr. Cruz', date: '2026-05-18', time: '10:30 AM', status: 'Waiting', complaint: 'Pre-surgery workup' },
  { id: 'APT8', patientId: 'P-00285', patientName: 'Torres, Pedro', service: 'Chest X-Ray', doctor: 'Dr. Lim', date: '2026-05-18', time: '11:00 AM', status: 'Waiting', complaint: 'Persistent cough' },
  { id: 'APT9', patientId: 'P-00284', patientName: 'Aquino, Paz', service: 'Geriatric Consult', doctor: 'Dr. Cruz', date: '2026-05-19', time: '9:00 AM', status: 'Confirmed', complaint: 'Annual geriatric evaluation' },
  { id: 'APT10', patientId: 'P-00285', patientName: 'Mendoza, Celia', service: 'Holter Monitoring', doctor: 'Dr. Ramos', date: '2026-05-20', time: '8:30 AM', status: 'Confirmed', complaint: 'Palpitations' },
];

export const initialInvoices = [
  { id: 'INV-0180', patientId: 'P-00280', patientName: 'Ocampo, Jose', service: 'CT-Scan (Head)', amount: 3500, method: 'Cash', status: 'Paid', date: 'May 18' },
  { id: 'INV-0181', patientId: 'P-00281', patientName: 'Santos, Ana M.', service: 'CBC + Urinalysis', amount: 950, method: 'GCash', status: 'Pending', date: 'May 18' },
  { id: 'INV-0182', patientId: 'P-00286', patientName: 'Bautista, Ruth', service: 'Consultation', amount: 800, method: 'PhilHealth', status: 'Paid', date: 'May 18' },
  { id: 'INV-0183', patientId: 'P-00282', patientName: 'Dela Cruz, Mario', service: 'ECG + Echo', amount: 2800, method: 'Maxicare', status: 'HMO', date: 'May 18' },
  { id: 'INV-0184', patientId: 'P-00283', patientName: 'Gonzales, Linda', service: 'Mammography', amount: 2200, method: 'Cash', status: 'Pending', date: 'May 18' },
  { id: 'INV-0175', patientId: 'P-00285', patientName: 'Garcia, Lito', service: 'Treadmill Stress', amount: 3800, method: 'MediCard', status: 'Overdue', date: 'May 17' },
];

export const initialVitalSigns = [
  { id: 'V1', patientId: 'P-00281', patientName: 'Santos, Ana M.', systolic: 130, diastolic: 85, hr: 88, temp: 36.8, spo2: 98, weight: 62, date: 'May 18, 9:10 AM', nurse: 'Jane Domingo' },
  { id: 'V2', patientId: 'P-00286', patientName: 'Bautista, Ruth', systolic: 140, diastolic: 90, hr: 76, temp: 36.5, spo2: 97, weight: 58, date: 'May 18, 8:25 AM', nurse: 'Jane Domingo' },
];

export const initialLabResults = [
  { id: 'LAB1', patientId: 'P-00286', patientName: 'Bautista, Ruth', test: 'CBC', result: 'WBC 11.2, RBC 4.8, Hgb 13.5', reference: 'WBC 4.5-11.0', status: 'Abnormal', doctor: 'Dr. Cruz', date: 'May 18, 8:45 AM', reviewed: false },
  { id: 'LAB3', patientId: 'P-00280', patientName: 'Ocampo, Jose', test: 'CT Scan Report', result: 'No acute intracranial abnormality', reference: 'Normal', status: 'Normal', doctor: 'Dr. Lim', date: 'May 18, 8:48 AM', reviewed: true },
];

export const initialCertificates = [
  { id: 'CERT1', patientId: 'P-00286', patientName: 'Bautista, Ruth', type: 'Complete Blood Count (CBC)', date: 'May 18, 2026', notes: 'Routine checkup', files: ['lab_cbc_bautista_20260518.pdf'], doctor: 'Dr. Cruz' },
  { id: 'CERT2', patientId: 'P-00281', patientName: 'Santos, Ana M.', type: 'Blood Chemistry', date: 'May 17, 2026', notes: 'Diabetes monitoring', files: ['lab_chem_santos_20260517.pdf'], doctor: 'Dr. Cruz' },
];

export const NAV_ITEMS = [
  { section: 'Main' },
  { icon: 'ti-layout-dashboard', label: 'Dashboard', page: 'dashboard' },
  { icon: 'ti-users', label: 'Patients', page: 'patients', badge: 'patients' },
  { icon: 'ti-calendar', label: 'Appointments', page: 'appointments' },
  { icon: 'ti-layout-list', label: 'Queue', page: 'queue', badge: 'queue' },
  { section: 'Services' },
  { icon: 'ti-user-plus', label: 'Registration', page: 'registration' },
  { icon: 'ti-receipt', label: 'Billing', page: 'billing' },
  { icon: 'ti-file-text', label: 'Reports', page: 'reports' },
  { section: 'Account' },
];

export const REVENUE_CHART_DATA = [
  { day: '1', v: 62 }, { day: '2', v: 75 }, { day: '3', v: 55 }, { day: '5', v: 88 },
  { day: '6', v: 91 }, { day: '8', v: 70 }, { day: '9', v: 82 }, { day: '10', v: 67 },
  { day: '12', v: 95 }, { day: '13', v: 88 }, { day: '14', v: 72 }, { day: '15', v: 100 },
  { day: '16', v: 84 }, { day: '18', v: 74 },
];
