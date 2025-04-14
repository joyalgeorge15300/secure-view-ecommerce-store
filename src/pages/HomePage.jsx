
import { Link } from "react-router-dom";
import { ShieldCheck, Eye, Lock, Clock } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#1a2b4d] text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1622382719615-f3a5e545e8a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            opacity: 0.4
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Security Solutions for Your Peace of Mind
            </h1>
            <p className="text-xl mb-8">
              Protect what matters most with state-of-the-art CCTV and surveillance systems designed for homes and businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/products" 
                className="px-6 py-3 bg-[#00a8a8] text-white rounded-md font-medium hover:bg-[#008080] transition-colors"
              >
                View Products
              </Link>
              <Link 
                to="/about-us" 
                className="px-6 py-3 bg-white text-[#1a2b4d] rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a2b4d] mb-4">
              Welcome to SecureView
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              At SecureView, we've been at the forefront of security technology for over 15 years, providing cutting-edge surveillance solutions that protect homes and businesses across the nation. Our reputation is built on quality, reliability, and exceptional customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<ShieldCheck className="h-12 w-12 text-[#00a8a8]" />}
              title="Guaranteed Protection"
              description="Our systems are designed to provide comprehensive security coverage with no blind spots."
            />
            <FeatureCard 
              icon={<Eye className="h-12 w-12 text-[#00a8a8]" />}
              title="24/7 Monitoring"
              description="Advanced night vision and continuous recording ensures round-the-clock surveillance."
            />
            <FeatureCard 
              icon={<Lock className="h-12 w-12 text-[#00a8a8]" />}
              title="Secure Encryption"
              description="All footage is encrypted end-to-end for maximum data security and privacy."
            />
            <FeatureCard 
              icon={<Clock className="h-12 w-12 text-[#00a8a8]" />}
              title="Quick Installation"
              description="Professional setup or easy DIY installation options available for all systems."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a2b4d] rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">Ready to secure your property?</h3>
                <p className="mt-2 text-lg text-gray-300">
                  Browse our selection of professional-grade security cameras and systems.
                </p>
              </div>
              <div className="mt-8 md:mt-0 flex justify-center md:ml-4">
                <Link
                  to="/products"
                  className="px-6 py-3 bg-[#00a8a8] text-white rounded-md font-medium hover:bg-[#008080] transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#1a2b4d] mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default HomePage;
