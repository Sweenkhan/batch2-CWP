import { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';

const MeeshoHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Women Ethnic',
    'Women Western',
    'Men',
    'Kids',
    'Home & Kitchen',
    'Beauty & Health',
    'Jewellery & Accessories',
    'Bags & Footwear',
    'Electronics'
  ];

  return (
    <header className="bg-pink-600 text-white sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <div className="text-2xl font-bold">meesho</div>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex flex-1 mx-6 max-w-2xl">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Try Saree, Kurti or Search by Product Code"
              className="w-full py-2 px-4 pr-10 rounded text-gray-800 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-0 top-0 h-full px-3 flex items-center justify-center bg-pink-700 rounded-r">
              <FiSearch className="text-white" />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        {/* <nav className="hidden md:flex items-center space-x-6"> */}
          <a href="#" className="hover:underline">Become a Supplier</a>
          <div className="relative group">
            <button className="flex items-center hover:underline">
              <span>Profile</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg rounded mt-1 w-48 right-0">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">My Profile</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Orders</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
            </div>
          </div>
          <a href="#" className="flex items-center hover:underline">
            <FiShoppingCart className="mr-1" />
            <span>Cart</span>
          </a>
        </div>

        {/* Mobile Search and Cart - Visible only on mobile */}
        <div className="flex md:hidden items-center space-x-4">
          <button className="p-1">
            <FiSearch size={20} />
          </button>
          <button className="p-1">
            <FiShoppingCart size={20} />
          </button>
        </div>
      {/* </div> */}

      {/* Category Navigation - Hidden on mobile when menu is closed */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block bg-pink-700`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-6 overflow-x-auto py-2">
            {categories.map((category, index) => (
              <a 
                key={index} 
                href="#" 
                className="py-2 px-1 whitespace-nowrap hover:bg-pink-600 rounded md:px-2"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Search - Appears when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden bg-pink-600 p-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Try Saree, Kurti or Search by Product Code"
              className="w-full py-2 px-4 pr-10 rounded text-gray-800 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-0 top-0 h-full px-3 flex items-center justify-center bg-pink-700 rounded-r">
              <FiSearch className="text-white" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default MeeshoHeader;