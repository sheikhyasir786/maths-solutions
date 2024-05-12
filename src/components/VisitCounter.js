import React, { useState, useEffect } from 'react';

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const storedCount = localStorage.getItem('visitCount');
      if (storedCount) {
        setVisitCount(parseInt(storedCount));
      } else {
        localStorage.setItem('visitCount', '1');
        setVisitCount(1);
      }
    } catch (err) {
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('visitCount', visitCount.toString());
    } catch (err) {
      setError(err.message);
    }
  }, [visitCount]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p>Total Visits: {visitCount}</p>
    </div>
  );
};

export default VisitCounter;
