
import { Shield, Award, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  const stats = [
    { label: "Years in Business", value: "15+" },
    { label: "Customers", value: "10,000+" },
    { label: "Products", value: "100+" },
    { label: "Cities Served", value: "500+" }
  ];

  const team = [
    {
      name: "Robert Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "With 20+ years in security systems, Robert founded SecureView with a mission to make high-quality surveillance accessible to everyone."
    },
    {
      name: "Sarah Johnson",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Leading our R&D team, Sarah brings 15 years of experience in electronics engineering and smart home technology integration."
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Customer Support",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Michael ensures every customer receives exceptional support from initial consultation through installation and beyond."
    },
    {
      name: "Lisa Wu",
      role: "Product Development Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Lisa oversees our product line, continuously innovating to keep our security solutions at the cutting edge of technology."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#1a2b4d] text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            opacity: 0.4
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About SecureView
            </h1>
            <p className="text-xl mb-4">
              We've been protecting homes and businesses with cutting-edge security technology since 2008.
            </p>
            <p className="text-gray-300">
              Our mission is to provide affordable, reliable, and user-friendly security solutions that give our customers peace of mind.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#1a2b4d] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  SecureView was founded in 2008 by Robert Chen, a security industry veteran who recognized the need for more accessible, high-quality surveillance systems for homes and small businesses.
                </p>
                <p>
                  What began as a small operation in a garage has grown into a nationwide provider of security technology, serving over 10,000 customers across the country. Throughout our growth, we've maintained our commitment to personalized service and technical excellence.
                </p>
                <p>
                  Today, SecureView is at the forefront of security innovation, integrating the latest advances in AI, cloud technology, and mobile connectivity into our systems while keeping them user-friendly and affordable.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80" 
                alt="The SecureView team at work" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#00a8a8]">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a2b4d] mb-4">Our Values</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              These core principles guide everything we do at SecureView, from product development to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Shield className="h-10 w-10 text-[#00a8a8]" />}
              title="Security First"
              description="We prioritize the safety and security of our customers in every decision we make."
            />
            <ValueCard 
              icon={<Award className="h-10 w-10 text-[#00a8a8]" />}
              title="Quality Excellence"
              description="We never compromise on the quality of our products or services."
            />
            <ValueCard 
              icon={<Users className="h-10 w-10 text-[#00a8a8]" />}
              title="Customer Focus"
              description="We build lasting relationships through exceptional service and support."
            />
            <ValueCard 
              icon={<Heart className="h-10 w-10 text-[#00a8a8]" />}
              title="Community Impact"
              description="We're committed to making our communities safer and more secure."
            />
          </div>
        </div>
      </div>
      
      {/* Our Team */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a2b4d] mb-4">Meet Our Team</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              The dedicated professionals behind SecureView's success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-[#1a2b4d]">{member.name}</h3>
                  <p className="text-[#00a8a8] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Certifications */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a2b4d] mb-4">Our Certifications</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We maintain the highest industry standards through professional certifications and associations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-[#1a2b4d] font-bold text-xl">ESA</span>
              </div>
              <h3 className="text-lg font-medium text-[#1a2b4d] mb-2">Electronic Security Association</h3>
              <p className="text-gray-600 text-sm">
                Active member maintaining the highest industry standards for electronic security and life safety.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-[#1a2b4d] font-bold text-xl">NSCA</span>
              </div>
              <h3 className="text-lg font-medium text-[#1a2b4d] mb-2">National Systems Contractors Association</h3>
              <p className="text-gray-600 text-sm">
                Certified in commercial electronic systems installation and integration best practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-[#1a2b4d] font-bold text-xl">SIA</span>
              </div>
              <h3 className="text-lg font-medium text-[#1a2b4d] mb-2">Security Industry Association</h3>
              <p className="text-gray-600 text-sm">
                Member of the leading trade association for global security solution providers.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-[#1a2b4d] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Property?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Browse our selection of professional-grade security cameras and systems, or contact our team for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/products" 
              className="px-6 py-3 bg-[#00a8a8] text-white rounded-md font-medium hover:bg-[#008080] transition-colors"
            >
              View Products
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-white text-[#1a2b4d] rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-[#1a2b4d] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutUsPage;
