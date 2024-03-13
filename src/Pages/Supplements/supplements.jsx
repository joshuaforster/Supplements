import React from 'react';
import supplements from '../../data';
import { Form, Link, useSearchParams } from 'react-router-dom';
import '../../App.css';

export default function Supplements() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState('');

  const typeFilter = searchParams.get('type');

  let filteredSupplements = typeFilter
    ? supplements.filter(supplement => supplement.name[0].toUpperCase() === typeFilter.toUpperCase())
    : supplements;

  if (search) {
    filteredSupplements = filteredSupplements.filter(supplement => {
      return supplement.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  const list = filteredSupplements.map(supplement => (
    <li key={supplement.id} className="border-b border-gray-200 py-2">
      <Link to={`/supplements/${supplement.id}`} state={{ search: searchParams.toString() }} className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out">
        {supplement.name}
      </Link>
    </li>
  ));

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -m-1">
        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((letter) => (
          <Link key={letter} to={`?type=${letter}`} className="m-1 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150 ease-in-out">
            {letter}
          </Link>
        ))}
        {typeFilter && (
          <Link to="." className="m-1 px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-150 ease-in-out">
            Clear Filter
          </Link>
        )}
      </div>
      <form className="my-4">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </form>
      <ul className="list-disc pl-5">{list}</ul>
    </div>
  );
}
