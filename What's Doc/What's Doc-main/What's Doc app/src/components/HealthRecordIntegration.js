import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HealthRecordIntegration = () => {
  const [healthRecords, setHealthRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Perform API request to retrieve health records
    const fetchHealthRecords = async () => {
      try {
        const response = await axios.get('/api/health-records');
        setHealthRecords(response.data.records);
        setError(null);
      } catch (error) {
        setError('Failed to fetch health records. Please try again later.');
        setHealthRecords([]);
      } finally {
        setLoading(false);
      }
    };

    // Call the API function
    fetchHealthRecords();
  }, []);

  return (
    <div>
      <h2>Health Record Integration</h2>
      {loading ? (
        <p>Loading health records...</p>
      ) : (
        <>
          {error ? (
            <p>Error: {error}</p>
          ) : healthRecords.length > 0 ? (
            <ul>
              {healthRecords.map((record) => (
                <li key={record.id}>{record.name}</li>
                // Render the relevant health record information
              ))}
            </ul>
          ) : (
            <p>No health records found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default HealthRecordIntegration;
