import React, { useEffect } from 'react';
import useSupplement from '../CustomHooks/supplementDetail';

export default function SupplementDetailHeader() {
  const supplement = useSupplement();

  useEffect(() => {
    // Save the current body background style
    const originalStyle = document.body.style.background;

    // Set new background style
    document.body.style.backgroundImage = `url(${supplement.bgImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

    // Revert to the original style on component unmount
    return () => {
      document.body.style.background = originalStyle;
    };
  }, [supplement.bgImage]); // This effect depends on supplement.bgImage

  return (
    <div className="bg-blue-500 py-5 shadow-md">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
          {supplement.name}
        </h1>
      </div>
    </div>
  );
}
