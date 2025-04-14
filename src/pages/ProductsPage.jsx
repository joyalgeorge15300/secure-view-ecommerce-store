
import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { Filter, Search } from "lucide-react";

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [...new Set(products.map(product => product.category))];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      // Apply search filter
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Apply category filter
      if (categoryFilter && product.category !== categoryFilter) {
        return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      // Apply price sorting
      if (priceSort === "low-to-high") {
        return a.price - b.price;
      } else if (priceSort === "high-to-low") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl font-bold text-[#1a2b4d] mb-4">Security Cameras & Systems</h1>
          <p className="max-w-2xl text-gray-600">
            Browse our selection of high-quality security cameras and surveillance systems designed for homes and businesses.
          </p>
        </div>
        
        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-[#00a8a8] focus:ring-[#00a8a8] sm:text-sm"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button
              className="inline-flex md:hidden items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
            
            <div className={`flex flex-col md:flex-row gap-4 mt-4 md:mt-0 ${showFilters ? 'block' : 'hidden md:flex'}`}>
              <select
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-[#00a8a8] focus:ring-[#00a8a8] sm:text-sm"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              
              <select
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-[#00a8a8] focus:ring-[#00a8a8] sm:text-sm"
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value)}
              >
                <option value="">Sort by Price</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No products found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-[#1a2b4d]">{product.name}</h3>
        <p className="text-[#00a8a8] font-bold mt-1">${product.price.toFixed(2)}</p>
        <div className="mt-4">
          <Link
            to={`/products/${product.id}`}
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm bg-[#1a2b4d] text-white hover:bg-[#00a8a8] focus:outline-none transition-colors"
          >
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
