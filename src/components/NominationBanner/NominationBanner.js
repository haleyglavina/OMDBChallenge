import React from 'react';
import './NominationBanner.scss';

function NominationBanner() {
  return (
    <div className="banner">
      <h2 className="banner__title">Thank you.</h2>
      <p className="banner__description">You've reached a maximum of 5 nominations.</p>
    </div>
  );
}

export default NominationBanner;