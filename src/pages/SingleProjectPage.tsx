import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bed, Bath, Maximize, ChevronLeft, ChevronRight, ZoomIn, Car, Shield, Waves, Lock, Camera, Dumbbell, Users, Coffee, Baby } from 'lucide-react';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { toast } from 'sonner@2.0.3';
import imgProject1 from "figma:asset/011cd46c34a935d7d75ad6a35e2f8fcd31288c0b.png";
import imgProject2 from "figma:asset/88a41f477835bd2c01781ffb20f8eae9ffa59c12.png";
import imgProject3 from "figma:asset/7cf5b95b2ae56ea7ab48f1d9479f1b1314ab5e60.png";
import imgProject4 from "figma:asset/f8ffa97dd8e72154837df9924804051df381b500.png";
import imgProject5 from "figma:asset/975fa51a022ab895f42437162e09c85758550741.png";
import imgProject6 from "figma:asset/c5f7b294f593f65fc2638ef20f72d69a5faf60b0.png";
import imgFloorPlan1 from "figma:asset/3144f500a4c717016eec8b75179533ea68154a2d.png";
import imgFloorPlan2 from "figma:asset/0015803f1ca5fbe8a48447d5aadb139da692494e.png";
import imgFloorPlan3 from "figma:asset/7c3ad62e7364a726f4b40ee5ea59380eb0df1975.png";
import imgMeeting from "figma:asset/d791c4c04d6a2793b4ada98152d73053e1f37787.png";

const projectData: { [key: string]: any } = {
  '1': {
    id: 1,
    name: 'G3G- Bayel al watan, New Cairo',
    location: 'New Cairo, Egypt',
    priceRange: '12,000 EGP - 18,000 EGP',
    paymentDuration: 'Up to 3 Years',
    delivery: 'Oct 2026',
    unitsLeft: 28,
    city: 'New Cairo',
    floors: 5,
    description: 'A modern eco-friendly residential compound featuring sustainable architecture and green spaces.',
    images: [imgProject1, imgProject2, imgProject3, imgProject4, imgProject5, imgProject6],
    buildingFeatures: [
      { icon: Car, name: 'Garage' },
      { icon: Shield, name: 'Elevator' },
      { icon: Lock, name: 'Lift' },
      { icon: Shield, name: 'Bulletproof wall' },
      { icon: Camera, name: 'CCTV' },
      { icon: Lock, name: 'Security' },
    ],
    areaFeatures: [
      { icon: Users, name: 'Mosque' },
      { icon: Shield, name: 'University' },
      { icon: Dumbbell, name: 'Hospital' },
      { icon: Shield, name: 'Bank' },
      { icon: Coffee, name: 'Café' },
    ],
    timeline: [
      { phase: 'Pouring ground columns', progress: 100, color: '#416D50' },
      { phase: 'Pouring the first ceiling', progress: 100, color: '#B08C44' },
      { phase: 'Pouring the first floor columns', progress: 70, color: '#F9B233' },
      { phase: 'Pouring the second ceiling', progress: 40, color: '#DC6544' },
    ],
    unitTypes: [
      {
        id: 1,
        name: '180 m2 unit + 143 m2 garden',
        area: 180,
        garden: 143,
        beds: 3,
        baths: 2,
        image: imgProject1,
        images: [imgFloorPlan1, imgFloorPlan2, imgFloorPlan3],
      },
      {
        id: 2,
        name: '160 m2 unit + 143 m2 garden',
        area: 160,
        garden: 143,
        beds: 2,
        baths: 2,
        image: imgProject2,
        images: [imgFloorPlan1, imgFloorPlan2, imgFloorPlan3],
      },
      {
        id: 3,
        name: '180 m2 unit + bathrooms',
        area: 180,
        garden: 0,
        beds: 3,
        baths: 2,
        image: imgProject3,
        images: [imgFloorPlan1, imgFloorPlan2, imgFloorPlan3],
      },
    ],
  },
};

export function SingleProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projectData[id || '1'] || projectData['1'];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedUnit, setSelectedUnit] = useState(0);
  const [currentFloorPlan, setCurrentFloorPlan] = useState(0);
  const [selectedUnitSize, setSelectedUnitSize] = useState('180 m2');

  const [bookingData, setBookingData] = useState({ 
    email: '', 
    phone: '', 
    meetingType: 'online-visit',
    date: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [callData, setCallData] = useState({ phone: '', countryCode: '+20' });

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const nextFloorPlan = () => {
    if (project.unitTypes[selectedUnit]) {
      setCurrentFloorPlan((prev) => (prev + 1) % project.unitTypes[selectedUnit].images.length);
    }
  };

  const prevFloorPlan = () => {
    if (project.unitTypes[selectedUnit]) {
      setCurrentFloorPlan((prev) => (prev - 1 + project.unitTypes[selectedUnit].images.length) % project.unitTypes[selectedUnit].images.length);
    }
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!bookingData.phone) {
      toast.error('Phone number is required');
      return;
    }
    
    if (!bookingData.date) {
      toast.error('Please select a meeting date');
      return;
    }
    
    setIsSubmitting(true);

    const payload = {
      email: bookingData.email || '',
      phone: bookingData.phone,
      meetingType: bookingData.meetingType,
      date: bookingData.date,
      projectName: project.name,
    };

    console.log('Sending booking request:', payload);

    try {
      const response = await fetch('https://monte.runasp.net/api/Email/meeting-book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        const responseData = await response.json().catch(() => null);
        console.log('Response data:', responseData);
        toast.success('Meeting request sent! We\'ll contact you soon.');
        setBookingData({ email: '', phone: '', meetingType: 'online-visit', date: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error response:', errorData);
        toast.error(errorData.message || `Server error: ${response.status}. Please try again.`);
      }
    } catch (error) {
      console.error('Error booking meeting:', error);
      
      // Show detailed error information
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        toast.error(
          'Cannot connect to server. This may be a CORS issue. Your request details have been logged - please contact us at: +201000000000',
          { duration: 8000 }
        );
        
        // Log the data that would have been sent for user reference
        console.log('=== BOOKING DATA (for manual submission) ===');
        console.log('Project:', project.name);
        console.log('Email:', bookingData.email || 'Not provided');
        console.log('Phone:', bookingData.phone);
        console.log('Meeting Type:', bookingData.meetingType);
        console.log('Date:', bookingData.date);
        console.log('==========================================');
      } else {
        toast.error('Unable to send request. Please call us at: +201000000000');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Call request received! We\'ll call you shortly.');
    setCallData({ phone: '', countryCode: '+20' });
  };

  return (
    <div className="pt-16 min-h-screen bg-[#E9E4D8]">
      {/* Hero Section */}
      <section className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center text-[#416D50] hover:underline mb-4">
            <ChevronLeft size={18} />
            Back to Projects
          </Link>

          <h1 style={{ fontSize: '24px', color: '#416D50', marginBottom: '16px' }}>
            {project.name}
          </h1>

          {/* Main Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-5">
            <div className="bg-[#E9E4D8] rounded-lg p-4">
              <p style={{ fontSize: '11px', color: '#666' }}>Project's Meter price range</p>
              <p style={{ fontSize: '14px', color: '#416D50', marginTop: '4px' }}>{project.priceRange}</p>
            </div>
            <div className="bg-[#E9E4D8] rounded-lg p-4">
              <p style={{ fontSize: '11px', color: '#666' }}>Project's Payment duration</p>
              <p style={{ fontSize: '14px', color: '#416D50', marginTop: '4px' }}>{project.paymentDuration}</p>
            </div>
            <div className="bg-[#E9E4D8] rounded-lg p-4">
              <p style={{ fontSize: '11px', color: '#666' }}>Delivery</p>
              <p style={{ fontSize: '14px', color: '#416D50', marginTop: '4px' }}>{project.delivery}</p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            <div className="col-span-2 row-span-2 relative h-72 rounded-lg overflow-hidden">
              <img
                src={project.images[currentImageIndex]}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            {project.images.slice(1, 5).map((img: string, index: number) => (
              <div key={index} className="h-44 rounded-xl overflow-hidden cursor-pointer" onClick={() => setCurrentImageIndex(index + 1)}>
                <img src={img} alt={`View ${index + 2}`} className="w-full h-full object-cover hover:scale-110 transition-transform" />
              </div>
            ))}
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div>
              <p style={{ fontSize: '13px', color: '#666' }}>City</p>
              <p style={{ fontSize: '16px', color: '#416D50' }}>{project.city}</p>
            </div>
            <div>
              <p style={{ fontSize: '13px', color: '#666' }}>Region/ Section</p>
              <p style={{ fontSize: '16px', color: '#416D50' }}>New Cairo</p>
            </div>
            <div>
              <p style={{ fontSize: '13px', color: '#666' }}>Land Sq. City</p>
              <p style={{ fontSize: '16px', color: '#416D50' }}>6</p>
            </div>
            <div>
              <p style={{ fontSize: '13px', color: '#666' }}>Floors</p>
              <p style={{ fontSize: '16px', color: '#416D50' }}>{project.floors}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Building Features */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 style={{ color: '#416D50', marginBottom: '16px' }}>Building Features</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {project.buildingFeatures.map((feature: any, index: number) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-[#416D50] rounded-full flex items-center justify-center mb-2">
                  <feature.icon size={18} color="#fff" />
                </div>
                <p style={{ fontSize: '11px', color: '#666' }}>{feature.name}</p>
              </div>
            ))}
          </div>

          <h3 style={{ color: '#416D50', marginTop: '32px', marginBottom: '16px' }}>Area Features</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {project.areaFeatures.map((feature: any, index: number) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-[#B08C44] rounded-full flex items-center justify-center mb-2">
                  <feature.icon size={18} color="#fff" />
                </div>
                <p style={{ fontSize: '11px', color: '#666' }}>{feature.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-8 bg-[#E9E4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 style={{ color: '#416D50', marginBottom: '16px' }}>Project timeline</h3>
              <div className="space-y-3">
                {project.timeline.map((item: any, index: number) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <p style={{ fontSize: '14px', color: '#666' }}>{item.phase}</p>
                      <p style={{ fontSize: '14px', color: item.color }}>{item.progress}%</p>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-500"
                        style={{ width: `${item.progress}%`, backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src={imgMeeting}
                alt="Construction progress"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unit Types */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 style={{ color: '#416D50', marginBottom: '16px' }}>Units type</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {project.unitTypes.map((unit: any, index: number) => (
              <div
                key={index}
                onClick={() => { setSelectedUnit(index); setCurrentFloorPlan(0); }}
                className={`bg-[#E9E4D8] rounded-lg overflow-hidden cursor-pointer transition-all ${
                  selectedUnit === index ? 'ring-2 ring-[#416D50]' : ''
                }`}
              >
                <div className="relative h-40">
                  <img src={unit.image} alt={unit.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h5 style={{ color: '#416D50', marginBottom: '8px', fontSize: '16px' }}>{unit.name}</h5>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Bed size={16} color="#666" />
                      <span style={{ fontSize: '14px', color: '#666' }}>{unit.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={16} color="#666" />
                      <span style={{ fontSize: '14px', color: '#666' }}>{unit.baths}</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 bg-[#416D50] text-white py-2 rounded-lg hover:bg-[#365840] transition-colors text-sm">
                    See full details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Floor Plans */}
          <div className="bg-[#E9E4D8] rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <h4 style={{ color: '#416D50', fontSize: '18px' }}>
                {project.unitTypes[selectedUnit]?.area} m2 unit {project.unitTypes[selectedUnit]?.beds} bed rooms - {project.unitTypes[selectedUnit]?.baths} Bathrooms
              </h4>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-[#416D50] text-white rounded-lg text-xs">
                  1 Floor
                </button>
                <button className="px-3 py-1.5 bg-white text-[#416D50] rounded-lg text-xs">
                  Ground Floor
                </button>
                <button className="px-3 py-1.5 bg-white text-[#416D50] rounded-lg text-xs">
                  1st Floor
                </button>
              </div>
            </div>

            <div className="relative h-80 bg-white rounded-lg p-3">
              {project.unitTypes[selectedUnit] && (
                <img
                  src={project.unitTypes[selectedUnit].images[currentFloorPlan]}
                  alt="Floor plan"
                  className="w-full h-full object-contain"
                />
              )}
              <button
                onClick={prevFloorPlan}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextFloorPlan}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="mt-4">
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Unit Size</p>
              <div className="flex gap-3">
                {['180 m2', '170 m2', '160 m2'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedUnitSize(size)}
                    className={`px-4 py-2 rounded-lg transition-colors text-sm ${
                      selectedUnitSize === size
                        ? 'bg-[#416D50] text-white'
                        : 'bg-white text-[#416D50] border border-[#416D50]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-8 bg-[#E9E4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Book a Meeting */}
            <div className="bg-white rounded-lg p-6">
              <h4 style={{ color: '#416D50', marginBottom: '16px', fontSize: '18px' }}>Book a meeting</h4>
              <form onSubmit={handleBooking} className="space-y-3">
                <input
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                  placeholder="Your e-mail *Optional"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] text-sm"
                />
                <input
                  type="tel"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                  placeholder="Your number"
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] text-sm"
                />
                <div className="flex gap-3">
                  <button
                    type="button"
                    className={`flex-1 px-3 py-2 border border-[#416D50] text-[#416D50] rounded-lg hover:bg-[#416D50] hover:text-white transition-colors text-sm ${
                      bookingData.meetingType === 'online-visit' ? 'bg-[#416D50] text-white' : ''
                    }`}
                    onClick={() => setBookingData({ ...bookingData, meetingType: 'online-visit' })}
                  >
                    Online visit
                  </button>
                  <button
                    type="button"
                    className={`flex-1 px-3 py-2 border border-[#416D50] text-[#416D50] rounded-lg hover:bg-[#416D50] hover:text-white transition-colors text-sm ${
                      bookingData.meetingType === 'online-meeting' ? 'bg-[#416D50] text-white' : ''
                    }`}
                    onClick={() => setBookingData({ ...bookingData, meetingType: 'online-meeting' })}
                  >
                    Online meeting
                  </button>
                </div>
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-[#416D50] text-white py-3 rounded-lg hover:bg-[#365840] transition-colors text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit!'}
                </button>
              </form>
            </div>

            {/* Request a Call */}
            <div className="bg-white rounded-lg p-6">
              <h4 style={{ color: '#416D50', marginBottom: '16px', fontSize: '18px' }}>Let us to give you a call</h4>
              <div className="mb-4 text-center">
                <p style={{ fontSize: '36px', color: '#416D50' }}>OR</p>
              </div>
              <form onSubmit={handleCallRequest} className="space-y-3">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pr-3 border-r border-gray-300">
                    <div className="flex items-center gap-0.5">
                      <div className="w-5 h-3 bg-red-600" />
                      <div className="w-5 h-3 bg-white border border-gray-300" />
                      <div className="w-5 h-3 bg-black" />
                    </div>
                    <span style={{ fontSize: '14px' }}>+20</span>
                  </div>
                  <input
                    type="tel"
                    value={callData.phone}
                    onChange={(e) => setCallData({ ...callData, phone: e.target.value })}
                    placeholder="Your number"
                    required
                    className="w-full pl-32 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#416D50] text-white py-3 rounded-lg hover:bg-[#365840] transition-colors text-base"
                >
                  Submit!
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}