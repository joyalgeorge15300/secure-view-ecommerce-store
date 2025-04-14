
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { ArrowLeft, Check, ShoppingCart, Info, Shield } from "lucide-react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulate loading from API
    setIsLoading(true);
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      const foundProduct = products.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
      
      if (foundProduct) {
        // Find related products in the same category
        const related = products
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 3);
          
        setRelatedProducts(related);
      }
      
      setIsLoading(false);
    }, 300);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#1a2b4d]">Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-[#1a2b4d] mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="inline-flex items-center px-4 py-2 bg-[#1a2b4d] text-white rounded-md hover:bg-[#00a8a8]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link to="/" className="text-gray-500 hover:text-[#1a2b4d]">Home</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-1 text-gray-400">/</span>
                <Link to="/products" className="text-gray-500 hover:text-[#1a2b4d]">Products</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-1 text-gray-400">/</span>
                <span className="text-[#1a2b4d] font-medium" aria-current="page">
                  {product.name}
                </span>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Product Display */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2">
              <div className="h-72 md:h-96 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2 p-6 md:p-8">
              <h1 className="text-2xl font-bold text-[#1a2b4d]">{product.name}</h1>
              <p className="mt-2 text-2xl font-bold text-[#00a8a8]">
                ${product.price.toFixed(2)}
              </p>
              
              <div className="mt-4">
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              {/* Category Badge */}
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
                {product.inStock ? (
                  <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <Check className="h-4 w-4 mr-1" />
                    In Stock
                  </span>
                ) : (
                  <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    Out of Stock
                  </span>
                )}
              </div>
              
              {/* Add to Cart */}
              <div className="mt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      type="button"
                      className="p-2 text-gray-500 hover:text-[#1a2b4d]"
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 text-center border-0 focus:ring-0"
                    />
                    <button
                      type="button"
                      className="p-2 text-gray-500 hover:text-[#1a2b4d]"
                      onClick={() => setQuantity(prev => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className={`flex-1 flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                      product.inStock 
                        ? 'bg-[#1a2b4d] hover:bg-[#00a8a8]' 
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
              
              {/* Shipping Info */}
              <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Info className="h-4 w-4 mr-2 text-[#00a8a8]" />
                  Free shipping on orders over $100
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Shield className="h-4 w-4 mr-2 text-[#00a8a8]" />
                  2-year warranty included
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="border-t border-gray-200">
            <div className="px-6 py-8 md:px-8">
              <h2 className="text-xl font-bold text-[#1a2b4d] mb-4">Product Specifications</h2>
              
              {/* Specs Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50 w-1/3">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-500">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Features List */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-[#1a2b4d] mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-[#1a2b4d] mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  to={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-[#1a2b4d]">{relatedProduct.name}</h3>
                    <p className="text-[#00a8a8] font-bold mt-1">${relatedProduct.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
