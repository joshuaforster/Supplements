import React from 'react'
import useSupplement from '../../CustomHooks/supplementDetail';

export default function SupplementSideEffects() {
  const supplement = useSupplement()
    return (
     <h1>{supplement.toxicity}</h1>
    );
  }