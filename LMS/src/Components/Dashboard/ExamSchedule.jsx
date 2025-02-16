 
import React from 'react';
import { ExamData } from './ExamData';   

const ExamSchedule = () => {
  return (
    <div style={{ marginTop: '50px', padding: '20px', marginRight: '150px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ textAlign: 'center', flex: 1 }}>EXAM SCHEDULE</h1>
      </div>

  
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {ExamData.map((item, index) => (
          <div
            key={index}
            style={{
              width: '300px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#f9f9f9',
              textAlign: 'center',
            }}
          >
            <h3 style={{ marginBottom: '15px', fontSize: '20px', fontWeight: 'bold' }}>
              Class {item.class}
            </h3>
            <div>
              <div style={{ marginBottom: '10px' }}>
                <strong>Subject:</strong> {item.subject}
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong>Date:</strong> {item.Date}
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong>Time:</strong> {item.start} - {item.end}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamSchedule;
