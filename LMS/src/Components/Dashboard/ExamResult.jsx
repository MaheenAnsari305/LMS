 
import React from "react";
import { ExamResultData } from "./ExamResultData"; 

const ExamResult = () => {
  return (
    <div style={{ padding: '20px', marginTop: '50px',marginRight:"70px" }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Exam Results</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {ExamResultData.map((item, index) => (
          <div
            key={index}
            style={{
              width: '300px',   
              height: '250px',  
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#f9f9f9',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <h3 style={{ marginBottom: '15px', fontSize: '20px', fontWeight: 'bold' }}>
              {item.name}
            </h3>
            <div style={{ marginBottom: '10px' }}>
              <strong>Roll Number:</strong> {item.rollNumber}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Class:</strong> {item.class}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Grade:</strong> {item.grade}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamResult;
