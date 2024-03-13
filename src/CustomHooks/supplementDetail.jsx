import React from 'react'
import {  useParams  } from 'react-router-dom';
import supplements from '../data';


export default function useSupplement() {
    const { id } = useParams();
    const [supplement, setSupplement] = React.useState('');
  
    React.useEffect(() => {
      const foundSupplement = supplements.find(supplement => supplement.id.toString() === id);
      setSupplement(foundSupplement);
    }, [id]); 
return supplement
}