import React from 'react';
import useSupplement from '../../CustomHooks/supplementDetail';

export default function SupplementSideEffects() {
  const supplement = useSupplement();

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Card Header */}
          <div className="px-4 py-5 sm:px-6 bg-blue-500">
            <h1 className="text-xl leading-6 font-bold text-white">
              {`${supplement.name}: Side Effects`}
            </h1>
          </div>
          {/* Card Body */}
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-white px-4 py-5 sm:px-6">
                <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                  {supplement.toxicity}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
