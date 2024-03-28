import React from 'react';
import useSupplement from '../../CustomHooks/supplementDetail';
import { useLocation } from 'react-router-dom';

export default function SupplementDetails() {
  const supplement = useSupplement();
  const location = useLocation();
  const search = location.state?.search || "";

  return (
    <section className="py-10">
      <div className="container px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Card Header */}
          <div className="px-4 py-5 sm:px-6 bg-blue-500">
            <h1 className="text-xl leading-6 font-bold text-white">
              {`${supplement.name}: Overview`}
            </h1>
          </div>
          {/* Card Body */}
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-white px-4 py-5 sm:px-6">
                <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                  {supplement.overview}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Search term reminder (optional) */}
        {search && (
          <div className="mt-4 p-2 bg-blue-100 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-700">
              You searched for: <span className="font-medium">"{search}"</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
