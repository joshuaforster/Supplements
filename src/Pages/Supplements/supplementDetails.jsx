import React from 'react';
import useSupplement from '../../CustomHooks/supplementDetail';
import { useLocation } from 'react-router-dom';

export default function SupplementDetails() {
  const supplement = useSupplement();
  const location = useLocation();
  const search = location.state?.search || "";

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Overview: <span className="font-normal">{supplement.name}</span>
      </h1>
      <p className="text-gray-700 text-base">{supplement.overview}</p>
    </div>
  );
}
