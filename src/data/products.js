
export const products = [
  {
    id: 1,
    name: "HD Dome Camera",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1581319415453-aabd9a5187a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "High-definition dome camera with night vision and 1080p resolution. Perfect for indoor surveillance with a 120° viewing angle and motion detection capabilities. This model connects seamlessly with our SecureView app and supports cloud storage for footage.",
    features: [
      "1080p HD resolution",
      "Night vision up to 30ft",
      "Wide 120° viewing angle",
      "Motion detection alerts",
      "Cloud storage compatible",
      "Weather-resistant housing"
    ],
    category: "indoor",
    inStock: true,
    specifications: {
      resolution: "1920 x 1080",
      storage: "MicroSD up to 128GB",
      connection: "Wi-Fi / Ethernet",
      powerSource: "DC 12V 1A",
      dimensions: "4.5 x 4.5 x 3.0 inches",
      weight: "0.6 lbs"
    }
  },
  {
    id: 2,
    name: "4K Bullet Camera",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1610641894769-7d037638c104?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Weatherproof bullet camera with 4K ultra HD resolution and 50m infrared night vision. This professional-grade camera is designed for outdoor use with IP67 waterproof rating and vandal-resistant housing. Features include intelligent motion detection and zone monitoring.",
    features: [
      "4K Ultra HD resolution",
      "50m IR night vision",
      "IP67 weatherproof",
      "Smart motion detection",
      "Wide dynamic range",
      "PoE (Power over Ethernet)"
    ],
    category: "outdoor",
    inStock: true,
    specifications: {
      resolution: "3840 x 2160",
      storage: "MicroSD up to 256GB / NVR",
      connection: "Ethernet / PoE",
      powerSource: "DC 12V 2A / PoE",
      dimensions: "10.2 x 3.3 x 3.3 inches",
      weight: "1.2 lbs"
    }
  },
  {
    id: 3,
    name: "Pan-Tilt-Zoom Camera",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Advanced PTZ camera with 25x optical zoom and 360° rotation. Control remotely via our SecureView app and set automated patrol routes. Features include auto-tracking of moving objects and two-way audio communication.",
    features: [
      "25x optical zoom",
      "360° rotation, 90° tilt",
      "Auto-tracking technology",
      "Two-way audio",
      "Preset patrol routes",
      "Smart motion alerts"
    ],
    category: "specialty",
    inStock: true,
    specifications: {
      resolution: "2560 x 1440",
      storage: "Cloud / NVR compatible",
      connection: "Wi-Fi / Ethernet",
      powerSource: "DC 12V 2A",
      dimensions: "6.7 x 6.7 x 7.9 inches",
      weight: "2.1 lbs"
    }
  },
  {
    id: 4,
    name: "8-Channel NVR System",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Complete 8-channel Network Video Recorder with 2TB storage and AI-powered detection. This system supports up to 8 IP cameras with person/vehicle detection and includes remote viewing capabilities through our SecureView app.",
    features: [
      "8-channel recording",
      "2TB surveillance-grade HDD",
      "AI human/vehicle detection",
      "Remote mobile viewing",
      "HDMI/VGA output",
      "Motion zone configuration"
    ],
    category: "systems",
    inStock: true,
    specifications: {
      capacity: "8 IP cameras",
      storage: "2TB HDD (expandable to 8TB)",
      connection: "Ethernet / HDMI / VGA",
      powerSource: "AC 100-240V",
      dimensions: "12.4 x 9.6 x 2.1 inches",
      weight: "4.3 lbs"
    }
  },
  {
    id: 5,
    name: "Wireless Home Security Kit",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1555878426-effa45443ef7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Complete wireless home security kit including 4 HD cameras, wireless hub, and door/window sensors. This all-in-one solution offers easy DIY installation and battery backup for continuous protection even during power outages.",
    features: [
      "4 wireless HD cameras",
      "Central monitoring hub",
      "6 door/window sensors",
      "Motion detectors",
      "Battery backup",
      "Mobile app control"
    ],
    category: "systems",
    inStock: true,
    specifications: {
      cameras: "1080p wireless",
      hubStorage: "128GB local / Cloud options",
      connection: "Wi-Fi / Cellular backup",
      powerSource: "AC with 24-hour battery backup",
      coverage: "Up to 2,500 sq ft",
      warranty: "3 years"
    }
  },
  {
    id: 6,
    name: "Hidden Camera Detector",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1533234427049-9e9bb093186d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Professional grade hidden camera detector to protect your privacy. Detects wireless cameras, bugs, and GPS trackers with RF signal detection and lens finder capabilities.",
    features: [
      "RF signal detection",
      "Camera lens finder",
      "GPS tracker detection",
      "Vibration alert mode",
      "Portable design",
      "Rechargeable battery"
    ],
    category: "accessories",
    inStock: true,
    specifications: {
      detection: "RF 1MHz-6.5GHz",
      battery: "1800mAh rechargeable",
      sensitivity: "Adjustable",
      dimensions: "4.7 x 2.8 x 0.9 inches",
      weight: "0.3 lbs",
      includes: "Carrying case, USB charger"
    }
  },
  {
    id: 7,
    name: "Video Doorbell",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Smart video doorbell with HD camera, two-way audio, and motion detection. Get instant alerts when visitors arrive and speak with them from anywhere using our SecureView app.",
    features: [
      "1080p HD video",
      "Two-way audio",
      "Motion detection zones",
      "Night vision",
      "Weather resistant",
      "Cloud recording"
    ],
    category: "specialty",
    inStock: true,
    specifications: {
      resolution: "1920 x 1080",
      fieldOfView: "160° diagonal",
      connection: "Wi-Fi 2.4GHz",
      powerSource: "Wired or battery (included)",
      dimensions: "4.9 x 2.5 x 1.1 inches",
      operatingTemp: "-4°F to 122°F"
    }
  },
  {
    id: 8,
    name: "Solar Security Camera",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1585916900058-6ff4226b0ab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Eco-friendly solar-powered security camera with wireless connectivity and local storage. This maintenance-free solution provides continuous surveillance without the need for power cables or frequent battery changes.",
    features: [
      "Solar powered",
      "Wireless installation",
      "1080p HD video",
      "IP66 weatherproof",
      "Motion activation",
      "No monthly fees"
    ],
    category: "outdoor",
    inStock: true,
    specifications: {
      resolution: "1920 x 1080",
      solarPanel: "5W monocrystalline",
      battery: "10000mAh rechargeable",
      storage: "32GB local (expandable)",
      dimensions: "7.1 x 4.3 x 3.5 inches",
      connectivity: "Wi-Fi 2.4GHz"
    }
  }
];
