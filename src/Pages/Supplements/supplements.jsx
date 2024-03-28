import React from 'react';
import supplements from '../../data';
import { Link, useSearchParams } from 'react-router-dom';
import '../../App.css';

export default function Supplements() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState('');

  const typeFilter = searchParams.get('type');

  let filteredSupplements = typeFilter
    ? supplements.filter(supplement => supplement.name[0].toUpperCase() === typeFilter.toUpperCase())
    : supplements;

  if (search) {
    filteredSupplements = filteredSupplements.filter(supplement =>
      supplement.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sorting the supplements alphabetically by name
  const sortedSupplements = filteredSupplements.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen py-10" style={{ backgroundColor: '#E6F4F1' }}> {/* Lighter shade of green for the background */}
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-6">
          <h1 className="text-5xl font-semibold" style={{ color: '#289DA1' }}>Supplements</h1> {/* Green shade for the title */}
          <p className="text-md mt-2" style={{ color: '#2BA6A1' }}>Your trusted source of information for Vitamins and Supplements</p> {/* A slightly different green for subtitle */}
        </header>

        <div className="mb-6 text-center">
          <form className="flex justify-center items-center border rounded-md overflow-hidden shadow-md w-full max-w-lg mx-auto" style={{ borderColor: '#B2D3CD' }}> {/* Border color in green shade */}
            <span className="pl-3 pr-1" style={{ color: '#289DA1' }}>
              <i className="fas fa-search"></i> {/* FontAwesome icon */}
            </span>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="py-2 pl-1 pr-3 block w-full focus:outline-none"
              style={{ borderColor: '#289DA1', borderWidth: '0 0 2px 0' }} /* Bottom border in green */
            />
          </form>
        </div>

        <div className="flex flex-wrap justify-center mb-6">
          {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((letter) => (
            <Link key={letter} to={`?type=${letter}`} className="m-1 text-sm font-medium px-3 py-2 rounded-full hover:opacity-90 transition duration-150 ease-in-out" style={{ backgroundColor: '#289DA1', color: 'white' }}>
              {letter}
            </Link>
          ))}
          {typeFilter && (
            <Link to="." className="m-1 text-sm font-medium px-3 py-2 rounded-full hover:opacity-90 transition duration-150 ease-in-out" style={{ backgroundColor: '#2BA6A1', color: 'white' }}>
                Clear Filter
            </Link>
          )}
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedSupplements.map(supplement => (
            <li key={supplement.id} className="shadow rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out" style={{ backgroundColor: 'white' }}>
              <Link to={`/supplements/${supplement.id}`} state={{ search: searchParams.toString() }} className="block p-6 text-center hover:bg-light-green-100">
                <span className="font-medium" style={{ color: '#289DA1', hover: { color: '#2BA6A1' } }}>
                  {supplement.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
