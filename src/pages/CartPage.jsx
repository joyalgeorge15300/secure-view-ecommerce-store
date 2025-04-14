
import { Link, useNavigate } from "react-router-dom";
import { Trash2, ArrowLeft, ShoppingCart, CreditCard } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "../components/ui/sonner";
import { useAuth } from "../context/AuthContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast.error("Please login to checkout");
      navigate("/login");
      return;
    }
    
    // Simulate checkout process
    toast.success("Order placed successfully!");
    clearCart();
    navigate("/");
  };
  
  const total = getCartTotal();
  const hasItems = cart.length > 0;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#1a2b4d] mb-4">Your Cart</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Review your items below before proceeding to checkout.
          </p>
        </div>

        {hasItems ? (
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8 lg:mb-0">
                <div className="p-6">
                  <div className="flow-root">
                    <ul className="divide-y divide-gray-200">
                      {cart.map((item) => (
                        <li key={item.id} className="py-6 flex">
                          <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-[#1a2b4d]">
                                <h3>
                                  <Link to={`/products/${item.id}`}>{item.name}</Link>
                                </h3>
                                <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                ${item.price.toFixed(2)} each
                              </p>
                            </div>
                            
                            <div className="flex-1 flex items-end justify-between text-sm">
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                  type="button"
                                  className="p-1 text-gray-500 hover:text-[#1a2b4d]"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  min="1"
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                  className="w-12 text-center border-0 focus:ring-0"
                                />
                                <button
                                  type="button"
                                  className="p-1 text-gray-500 hover:text-[#1a2b4d]"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  +
                                </button>
                              </div>

                              <div className="flex">
                                <button
                                  type="button"
                                  className="font-medium text-red-600 hover:text-red-500 inline-flex items-center"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <Trash2 className="h-4 w-4 mr-1" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 py-4 px-6 flex justify-between">
                  <Link
                    to="/products"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Continue Shopping
                  </Link>
                  
                  <button
                    type="button"
                    onClick={clearCart}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-[#1a2b4d] hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h2 className="text-lg font-medium text-[#1a2b4d] mb-4">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <div>Subtotal</div>
                      <div>${total.toFixed(2)}</div>
                    </div>
                    
                    <div className="flex justify-between">
                      <div>Shipping</div>
                      <div>{total > 100 ? "Free" : "$10.00"}</div>
                    </div>
                    
                    <div className="flex justify-between">
                      <div>Tax</div>
                      <div>${(total * 0.07).toFixed(2)}</div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 flex justify-between font-medium">
                      <div>Total</div>
                      <div className="text-xl text-[#00a8a8]">
                        ${(total + (total > 100 ? 0 : 10) + (total * 0.07)).toFixed(2)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={handleCheckout}
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#1a2b4d] hover:bg-[#00a8a8] focus:outline-none transition-colors"
                    >
                      <CreditCard className="h-5 w-5 mr-2" />
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-medium text-[#1a2b4d] mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#1a2b4d] hover:bg-[#00a8a8] focus:outline-none transition-colors"
            >
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
