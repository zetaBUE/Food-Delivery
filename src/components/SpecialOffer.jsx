// SpecialOffer.js
import React from 'react';

const SpecialOffer = ({ offer }) => {
  return offer ? (
    <div className="bg-[#FFED95] p-4 rounded-lg mt-6">
      <h3 className="text-xl font-bold text-[#7A1523]">{offer}</h3>
    </div>
  ) : null;
};

export default SpecialOffer;
