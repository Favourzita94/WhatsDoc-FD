import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styles from './prescription.module.css';

const Prescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [patientName, setPatientName] = useState('');
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const response = await axios.get('/api/prescriptions');
        setPrescriptions(response.data.prescriptions);
      } catch (error) {
        console.error('Failed to fetch prescriptions:', error);
      }
    };
    fetchPrescriptions();
  }, []);
  const handleHome = () => {
    navigate('/');
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!patientName || !medication || !dosage || !startDate || !endDate || !notes) {
      setErrorMessage('Please fill in all the required fields.');
      return;
    }

    // Create the prescription object
    const newPrescription = {
      patientName,
      medication,
      dosage,
      startDate,
      endDate,
      notes,
    };

    try {
      // Send the prescription data to the backend API for storage
      const response = await axios.post('/api/prescriptions', newPrescription);
      // Update the prescriptions state with the newly created prescription
      setPrescriptions([...prescriptions, response.data.prescription]);
      // Reset form fields and messages
      setPatientName('');
      setMedication('');
      setDosage('');
      setStartDate('');
      setEndDate('');
      setNotes('');
      setErrorMessage('');
      setSuccessMessage('Prescription created successfully.');
    } catch (error) {
      console.error('Failed to create prescription:', error);
      setErrorMessage('Failed to create prescription. Please try again.');
    }
  };

  // Sort prescriptions by creation date, with the latest prescription first
  const sortedPrescriptions = prescriptions.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <div className={styles.prescriptionContainer}>
      <h2 className={styles.prescriptionTitle}>Prescription Management</h2>
      <div className={styles.createPrescription}>
        <h3>Create Prescription</h3>
        <form onSubmit={handleFormSubmit}>
          <label>
            Patient Name:
            <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
          </label>
          <label>
            Medication:
            <input type="text" value={medication} onChange={(e) => setMedication(e.target.value)} />
          </label>
          <label>
            Dosage:
            <input type="text" value={dosage} onChange={(e) => setDosage(e.target.value)} />
          </label>
          <label>
            Start Date:
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </label>
          <label>
            End Date:
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </label>
          <label>
            Notes:
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
          </label>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
          <button type="submit" className={styles.createButton}>Create Prescription</button>
        </form>
      </div>
      <div className={styles.prescriptionListing}>
        <h3>Prescription Listing</h3>
        <ul className={styles.prescriptionList}>
          {sortedPrescriptions.map((prescription) => (
            <li key={prescription.id} className={styles.prescriptionItem}>
              <h4>Patient: {prescription.patientName}</h4>
              <p>Medication: {prescription.medication}</p>
              <p>Dosage: {prescription.dosage}</p>
              <p>Start Date: {new Date(prescription.startDate).toLocaleDateString()}</p>
              <p>End Date: {new Date(prescription.endDate).toLocaleDateString()}</p>
              <p>Notes: {prescription.notes}</p>
            </li>
          ))}
        </ul>
        <button className="homeButton" onClick={handleHome}>
          Log Out
     </button>
      </div>
    </div>
  );
};

export default Prescription;
