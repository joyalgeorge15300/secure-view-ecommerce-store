
import { CheckCircle2 } from "lucide-react";

const HowItWorksPage = () => {
  const steps = [
    {
      title: "Choose Your System",
      description: "Select from our range of high-quality cameras and systems based on your needs.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tips: [
        "Consider the size of your property",
        "Decide between wired or wireless systems",
        "Determine how many cameras you need",
        "Choose between indoor and outdoor options"
      ]
    },
    {
      title: "Professional Installation",
      description: "Our expert technicians will install your system at a time convenient for you.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tips: [
        "Schedule an installation appointment",
        "Prepare your space by clearing installation areas",
        "Our technicians bring all necessary tools",
        "Average installation takes 2-4 hours"
      ]
    },
    {
      title: "System Configuration",
      description: "We'll set up your cameras, connect them to your network, and ensure everything is working properly.",
      image: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tips: [
        "Have your Wi-Fi credentials ready",
        "Download our mobile app during setup",
        "Create your secure account login",
        "Learn about remote viewing features"
      ]
    },
    {
      title: "Monitor & Control",
      description: "Access live feeds, recorded footage, and control your system from our easy-to-use app.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tips: [
        "Set up motion detection alerts",
        "Configure recording schedules",
        "Share access with family members",
        "Regular updates improve performance"
      ]
    }
  ];

  const faqs = [
    {
      question: "Do I need internet for my security cameras to work?",
      answer: "While local recording can work without internet, you'll need internet connectivity for remote viewing, cloud storage, and receiving alerts on your mobile device."
    },
    {
      question: "How long does installation take?",
      answer: "A standard installation typically takes 2-4 hours, depending on system complexity and property size. Our technicians work efficiently to minimize disruption."
    },
    {
      question: "Can I install the system myself?",
      answer: "Yes, most of our wireless systems are designed for DIY installation with step-by-step instructions. However, we recommend professional installation for wired systems and complex setups."
    },
    {
      question: "How long is footage stored?",
      answer: "Storage duration depends on your selected plan. Local storage depends on your NVR/DVR capacity, while cloud storage plans range from 7 days to 30 days of continuous recording."
    },
    {
      question: "Do your cameras work at night?",
      answer: "Yes, all our cameras feature night vision technology with infrared LEDs that provide clear visibility in complete darkness, typically up to 30-50 feet depending on the model."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-[#1a2b4d] mb-4">How It Works</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our simple four-step process gets you from selection to security in no time. Here's how we make securing your property hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20 mb-20">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-[#00a8a8] opacity-20 rounded-lg blur"></div>
                  <div className="relative">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="rounded-lg shadow-md w-full h-64 md:h-80 object-cover" 
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1a2b4d] text-white font-bold mr-4">
                    {index + 1}
                  </div>
                  <h2 className="text-2xl font-bold text-[#1a2b4d]">{step.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="font-medium text-[#1a2b4d] mb-2">Tips & Information:</h3>
                  <ul className="space-y-2">
                    {step.tips.map((tip, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#00a8a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#1a2b4d] mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <h3 className="text-lg font-medium text-[#1a2b4d] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-[#1a2b4d] mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Browse our selection of security cameras and systems, or contact our team for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="px-6 py-3 bg-[#1a2b4d] text-white rounded-md font-medium hover:bg-[#00a8a8] transition-colors"
            >
              View Products
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-white border border-[#1a2b4d] text-[#1a2b4d] rounded-md font-medium hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
