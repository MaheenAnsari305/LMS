import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const FeeVoucher = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
   
 
  useEffect(() => {
    getDataFromDatabase();
  }, []);

  const getDataFromDatabase = async () => {
    try {
      let arr = [];
      const getData = await getDocs(collection(db, "submission"));
      getData.forEach((doc) => {
        console.log(doc.data());
        arr.push({
          ...doc.data(),
          id: doc.id,
        
        });
 
      });

      setUserData([...arr]);
    } catch (error) {
      console.log(error);
    }
   
  };
 
  console.log(userData);
  const handlePayClick = () => {
    navigate('/dashboard/feesubmission'); // Navigate to the feesubmission path
   };
 
   return (
     <div style={{ marginTop: '50px', padding: '20px' ,marginRight:'150px' }}>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <h1 style={{ textAlign: 'center', flex: 1 }}>Fee Structure</h1>
         <button 
           onClick={handlePayClick} 
           style={{
             backgroundColor: '#007BFF',
             color: '#fff',
             border: 'none',
             padding: '10px 20px',
             borderRadius: '5px',
             cursor: 'pointer'
           }}
         >
           Pay
         </button>
       </div>
 
       {/* Display the fee data in cards */}
       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
         {userData.map((item, index) => (
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
               StudentName: {item.studentname}
             </h3>
             <div>
               <div style={{ marginBottom: '10px' }}>
                 <strong>Class:</strong> {item.classname}
               </div>
               <div style={{ marginBottom: '10px' }}>
                 <strong>Fees:</strong> {item.choice}
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
}

export default FeeVoucher