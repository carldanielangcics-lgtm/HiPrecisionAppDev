export default function RegistrationPage({
  wizardStep,
  showSummary,
  summary,
  onNavigate,
  onNext,
  onPrev,
  onSubmit,
  regForm,
  onRegChange,
  consentChecked,
  onConsentChange,
}) {
  const set = (field) => (e) => onRegChange(field, e.target.type === 'checkbox' ? e.target.checked : e.target.value);

  return (
    <div className="page active" id="page-registration">
      <div className="content-header">
        <div>
          <div className="content-title">Patient Registration</div>
          <div className="content-sub">Register a new patient or walk-in</div>
        </div>
        <button type="button" className="btn-secondary" onClick={() => onNavigate('patients')}>
          <i className="ti ti-arrow-left" /> Back to Patients
        </button>
      </div>
      <div className="wizard-progress">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`wizard-step${wizardStep === i ? ' active' : ''}${wizardStep > i ? ' done' : ''}`} id={`step-indicator-${i}`}>
            <div className="wizard-step-num">{i}</div>
            <div className="wizard-step-label">
              {i === 1 ? 'Personal Info' : i === 2 ? 'Contact & Insurance' : 'Visit & Consent'}
            </div>
          </div>
        ))}
      </div>
      <div className="panel">
        {wizardStep === 1 && (
          <div id="wizard-step-1">
            <div className="panel-header">
              <div className="panel-title">
                <i className="ti ti-user" /> Step 1: Personal Information
              </div>
            </div>
            <div style={{ padding: 20 }}>
              <div className="form-section">Basic Information</div>
              <div className="form-grid">
                <div className="form-group required">
                  <label className="form-label" htmlFor="reg-lastname">
                    Last Name <span>*</span>
                  </label>
                  <input type="text" className="form-input" id="reg-lastname" placeholder="e.g. Santos" value={regForm.lastName} onChange={set('lastName')} />
                </div>
                <div className="form-group required">
                  <label className="form-label" htmlFor="reg-firstname">
                    First Name <span>*</span>
                  </label>
                  <input type="text" className="form-input" id="reg-firstname" placeholder="e.g. Ana Marie" value={regForm.firstName} onChange={set('firstName')} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="reg-middlename">Middle Name</label>
                  <input type="text" className="form-input" id="reg-middlename" placeholder="Optional" value={regForm.middleName} onChange={set('middleName')} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="reg-suffix">Suffix</label>
                  <select className="form-select" id="reg-suffix" value={regForm.suffix} onChange={set('suffix')}>
                    <option>None</option>
                    <option>Jr.</option>
                    <option>Sr.</option>
                    <option>III</option>
                  </select>
                </div>
                <div className="form-group required">
                  <label className="form-label" htmlFor="reg-dob">
                    Date of Birth <span>*</span>
                  </label>
                  <input type="date" className="form-input" id="reg-dob" value={regForm.dob} onChange={set('dob')} />
                </div>
                <div className="form-group required">
                  <label className="form-label" htmlFor="reg-sex">
                    Sex <span>*</span>
                  </label>
                  <select className="form-select" id="reg-sex" value={regForm.sex} onChange={set('sex')}>
                    <option value="">-- Select --</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="reg-civil">Civil Status</label>
                  <select className="form-select" id="reg-civil" value={regForm.civil} onChange={set('civil')}>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Widowed</option>
                    <option>Separated</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="reg-nationality">Nationality</label>
                  <input type="text" className="form-input" id="reg-nationality" value={regForm.nationality} onChange={set('nationality')} />
                </div>
              </div>
              <div className="wizard-actions">
                <button type="button" className="btn-primary" onClick={() => onNext(1)}>
                  Next <i className="ti ti-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        )}
        {wizardStep === 2 && (
          <div id="wizard-step-2">
            <div className="panel-header">
              <div className="panel-title">
                <i className="ti ti-phone" /> Step 2: Contact & Insurance
              </div>
            </div>
            <div style={{ padding: 20 }}>
              <div className="form-section">Contact Information</div>
              <div className="form-grid">
                <div className="form-group required">
                  <label className="form-label" htmlFor="reg-mobile">
                    Mobile Number <span>*</span>
                  </label>
                  <input type="tel" className="form-input" id="reg-mobile" placeholder="09XX-XXX-XXXX" value={regForm.mobile} onChange={set('mobile')} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="reg-email">Email Address</label>
                  <input type="email" className="form-input" id="reg-email" placeholder="patient@email.com" value={regForm.email} onChange={set('email')} />
                </div>
                <div className="form-group full required">
                  <label className="form-label" htmlFor="reg-address">
                    Home Address <span>*</span>
                  </label>
                  <input type="text" className="form-input" id="reg-address" placeholder="Street, Barangay, City, Province" value={regForm.address} onChange={set('address')} />
                </div>
              </div>
              <div className="form-section">Emergency Contact</div>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="reg-emergency-name">Contact Person</label>
                  <input type="text" className="form-input" id="reg-emergency-name" value={regForm.emergencyName} onChange={set('emergencyName')} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="reg-emergency-rel">Relationship</label>
                  <input type="text" className="form-input" id="reg-emergency-rel" value={regForm.emergencyRel} onChange={set('emergencyRel')} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="reg-emergency-phone">Contact Number</label>
                  <input type="tel" className="form-input" id="reg-emergency-phone" value={regForm.emergencyPhone} onChange={set('emergencyPhone')} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="reg-discount">Senior / PWD</label>
                  <select className="form-select" id="reg-discount" value={regForm.discount} onChange={set('discount')}>
                    <option>No</option>
                    <option>Senior Citizen</option>
                    <option>PWD</option>
                  </select>
                </div>
              </div>
              <div className="form-section">Insurance / HMO</div>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="reg-hmo">HMO Provider</label>
                  <select className="form-select" id="reg-hmo" value={regForm.hmo} onChange={set('hmo')}>
                    <option>None / Walk-in</option>
                    <option>PhilHealth</option>
                    <option>Maxicare</option>
                    <option>MediCard</option>
                    <option>Intellicare</option>
                    <option>EastWest</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="reg-hmo-card">HMO Card Number</label>
                  <input type="text" className="form-input" id="reg-hmo-card" value={regForm.hmoCard} onChange={set('hmoCard')} />
                </div>
              </div>
              <div className="wizard-actions">
                <button type="button" className="btn-secondary" onClick={() => onPrev(2)}>
                  <i className="ti ti-arrow-left" /> Back
                </button>
                <button type="button" className="btn-primary" onClick={() => onNext(2)}>
                  Next <i className="ti ti-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        )}
        {wizardStep === 3 && (
          <div id="wizard-step-3">
            <div className="panel-header">
              <div className="panel-title">
                <i className="ti ti-stethoscope" /> Step 3: Visit Details & Consent
              </div>
            </div>
            <div style={{ padding: 20 }}>
              <div className="form-section">Service Request</div>
              <div className="form-group required" style={{ marginBottom: 12 }}>
                <label className="form-label" htmlFor="reg-service">
                  Service Type <span>*</span>
                </label>
                <select className="form-select" id="reg-service" value={regForm.service} onChange={set('service')}>
                  <option value="">-- Select Service --</option>
                  <optgroup label="Laboratory">
                    <option>CBC (Complete Blood Count)</option>
                    <option>Urinalysis</option>
                    <option>Blood Chemistry Panel</option>
                    <option>Blood Typing</option>
                  </optgroup>
                  <optgroup label="Imaging">
                    <option>Chest X-Ray</option>
                    <option>CT-Scan</option>
                    <option>Digital Mammography</option>
                    <option>Ultrasound</option>
                  </optgroup>
                  <optgroup label="Cardiology">
                    <option>ECG</option>
                    <option>Echocardiography</option>
                    <option>Treadmill Stress Test</option>
                    <option>Holter Monitoring</option>
                  </optgroup>
                  <optgroup label="Consultation">
                    <option>Multi-Specialty Consultation</option>
                    <option>Pre-employment Medical</option>
                    <option>Pre-operative Clearance</option>
                  </optgroup>
                </select>
              </div>
              <div className="form-group" style={{ marginBottom: 12 }}>
                <label className="form-label" htmlFor="reg-doctor">Requesting Doctor</label>
                <select className="form-select" id="reg-doctor" value={regForm.doctor} onChange={set('doctor')}>
                  <option>-- Walk-in (no referral) --</option>
                  <option>Dr. Cruz</option>
                  <option>Dr. Ramos</option>
                  <option>Dr. Reyes</option>
                  <option>Dr. Lim</option>
                  <option>Dr. Santos</option>
                </select>
              </div>
              <div className="form-grid">
                <div className="form-group required">
                  <label className="form-label" htmlFor="reg-appt-date">
                    Appointment Date <span>*</span>
                  </label>
                  <input type="date" className="form-input" id="reg-appt-date" value={regForm.apptDate} onChange={set('apptDate')} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="reg-appt-time">Preferred Time</label>
                  <select className="form-select" id="reg-appt-time" value={regForm.apptTime} onChange={set('apptTime')}>
                    <option>Walk-in / ASAP</option>
                    <option>8:00 AM</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: 12, marginTop: 12 }}>
                <label className="form-label" htmlFor="reg-complaint">Chief Complaint / Remarks</label>
                <textarea className="form-textarea" id="reg-complaint" placeholder="Briefly describe symptoms or reason for visit…" value={regForm.complaint} onChange={set('complaint')} />
              </div>
              <div className="form-section">Payment</div>
              <div className="form-group" style={{ marginBottom: 16 }}>
                <label className="form-label" htmlFor="reg-payment">Payment Method</label>
                <select className="form-select" id="reg-payment" value={regForm.payment} onChange={set('payment')}>
                  <option>Cash</option>
                  <option>GCash / Maya</option>
                  <option>Credit Card</option>
                  <option>HMO / Insurance</option>
                  <option>PhilHealth Only</option>
                </select>
              </div>
              {showSummary && (
                <div className="summary-card" id="reg-summary-card">
                  <div className="summary-title">Registration Summary</div>
                  <div className="summary-row">
                    <div className="summary-label">Patient Name</div>
                    <div className="summary-value">{summary.name}</div>
                  </div>
                  <div className="summary-row">
                    <div className="summary-label">Date of Birth</div>
                    <div className="summary-value">{summary.dob}</div>
                  </div>
                  <div className="summary-row">
                    <div className="summary-label">Contact</div>
                    <div className="summary-value">{summary.contact}</div>
                  </div>
                  <div className="summary-row">
                    <div className="summary-label">Service</div>
                    <div className="summary-value">{summary.service}</div>
                  </div>
                  <div className="summary-row">
                    <div className="summary-label">Appointment</div>
                    <div className="summary-value">{summary.appt}</div>
                  </div>
                </div>
              )}
              <div className="consent-box">
                <div className="consent-box-content">
                  By registering, the patient consents to Hi-Precision Diagnostics collecting, storing, and processing their personal and medical information in accordance with the <strong>Data Privacy Act of 2012 (RA 10173)</strong>. Information will be used solely for medical, billing, and administrative purposes.
                </div>
                <div className="consent-checkbox">
                  <input type="checkbox" id="consent-check" checked={consentChecked} onChange={onConsentChange} />
                  <label htmlFor="consent-check">
                    Patient (or guardian) has verbally confirmed consent and understands the data privacy notice above.
                  </label>
                </div>
              </div>
              <div className="wizard-actions">
                <button type="button" className="btn-secondary" onClick={() => onPrev(3)}>
                  <i className="ti ti-arrow-left" /> Back
                </button>
                <button type="button" className="btn-primary" onClick={onSubmit}>
                  <i className="ti ti-check" /> Register &amp; Add to Queue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
