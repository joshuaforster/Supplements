import React from 'react'
import useSupplement from '../../CustomHooks/supplementDetail';

export default function SupplementUses() {
  const supplement = useSupplement()
    return (
     <h1>{supplement.neededFor}</h1>
    );
  }