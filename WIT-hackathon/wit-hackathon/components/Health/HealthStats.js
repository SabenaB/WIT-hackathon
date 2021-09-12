import React from 'react';
import Stats from './Stats';

const HealthStats = ({ healthStats }) => {
  return (
    <>
      {healthStats.map((stats, index) => (
        <Stats key={index} stats={stats} />
      ))}
    </>
  );
};

export default HealthStats;
