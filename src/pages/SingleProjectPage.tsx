import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bed, Bath, Maximize, ChevronLeft, ChevronRight, ZoomIn, Car, Shield, Waves, Lock, Camera, Dumbbell, Users, Coffee, Baby, Building2, GraduationCap, Heart, Landmark, MapPin, Cross, Phone, MessageCircle, X, ZoomOut } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { toast } from 'sonner@2.0.3';
import { MosqueIcon } from '../components/icons/MosqueIcon';
import { ElevatorIcon } from '../components/icons/ElevatorIcon';
import { Lightbox } from '../components/Lightbox';
import { Breadcrumbs } from '../components/Breadcrumbs';
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

const imgUnitPhoto = "https://www.dropbox.com/scl/fi/w3r6wo5qalsardwe7s8rl/WhatsApp-Image-2026-01-12-at-12.50.24-AM.jpeg?rlkey=01g3z8l0wnoyk7mcvsvno2wnr&st=dxohq7pq&raw=1";

const projectData: { [key: string]: any } = {
  '1': {
    id: 1,
    name: 'J83, bayet al watan, New cairo',
    location: 'Bayet al watan, New Cairo',
    priceRange: '22,000 EGP - 24,500 EGP',
    paymentDuration: 'Up to 4 Years',
    delivery: 'June 2027',
    unitsLeft: 6,
    city: 'New Cairo',
    totalFloors: 5,
    description: 'A modern eco-friendly residential compound featuring sustainable architecture and green spaces.',
    paymentPlan: {
      downPayment: 25,
      installmentYears: 4,
      installmentCount: 16,
      annualPayments: 0,
    },
    images: ['https://www.dropbox.com/scl/fi/w3r6wo5qalsardwe7s8rl/WhatsApp-Image-2026-01-12-at-12.50.24-AM.jpeg?rlkey=01g3z8l0wnoyk7mcvsvno2wnr&st=dxohq7pq&raw=1'],
    buildingFeatures: [
      { icon: Car, name: 'Garage' },
      { icon: ElevatorIcon, name: 'Elevator' },
      { icon: Shield, name: 'Bulletproof wall' },
      { icon: Camera, name: 'CCTV' },
      { icon: Lock, name: 'Security' },
    ],
    areaFeatures: [
      { icon: MosqueIcon, name: 'Mosque' },
      { icon: GraduationCap, name: 'University' },
      { icon: Cross, name: 'Hospital' },
      { icon: Landmark, name: 'Bank' },
    ],
    timeline: [
      { phase: 'Pouring ground columns', progress: 100, color: '#416D50' },
      { phase: 'Pouring the first ceiling', progress: 100, color: '#B08C44' },
      { phase: 'Pouring the first floor columns', progress: 70, color: '#F9B233' },
      { phase: 'Pouring the second ceiling', progress: 40, color: '#DC6544' },
    ],
    floors: [
      {
        name: 'Ground Floor',
        units: [
          {
            id: 1,
            name: 'Unit 1',
            area: 248,
            garden: 0,
            beds: 3,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/35c2onidnilxsm39ei4np/1.jpeg?rlkey=hfngwqy2ogqz8mg2emfekwniu&st=9i38lat3&raw=1',
          },
          {
            id: 2,
            name: 'Unit 2',
            area: 220,
            garden: 0,
            beds: 3,
            baths: 1,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/tl8zcm0piucjv5b7jvg4v/2.jpeg?rlkey=joq93yf9v4dul872x16elef69&st=nxx7nrsz&raw=1',
          },
        ],
      },
      {
        name: '1st Floor',
        units: [
          {
            id: 3,
            name: 'Unit 3',
            area: 176,
            garden: 0,
            beds: 3,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/anv7tt4l870fsue25oyfb/3-6-9.jpeg?rlkey=t5cmh6nhtq8uwkn44gnl4xva7&st=enwgq7at&raw=1',
          },
          {
            id: 4,
            name: 'Unit 4',
            area: 204,
            garden: 0,
            beds: 4,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/07nvmkua9pkucvxh5xdgl/4-7-10.jpeg?rlkey=g72ussfj0wp8sqo42n01t7u8q&st=jhphcrby&raw=1',
          },
          {
            id: 5,
            name: 'Unit 5',
            area: 230,
            garden: 0,
            beds: 4,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/xq3mcb91gx9wrjjetqmge/5-8-11.jpeg?rlkey=aok8f6v3e5ttgftfsz5nvay0a&st=dc2plimf&raw=1',
          },
        ],
      },
      {
        name: '2nd Floor',
        units: [
          {
            id: 6,
            name: 'Unit 6',
            area: 176,
            garden: 0,
            beds: 3,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/anv7tt4l870fsue25oyfb/3-6-9.jpeg?rlkey=t5cmh6nhtq8uwkn44gnl4xva7&st=enwgq7at&raw=1',
          },
          {
            id: 7,
            name: 'Unit 7',
            area: 204,
            garden: 0,
            beds: 4,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/07nvmkua9pkucvxh5xdgl/4-7-10.jpeg?rlkey=g72ussfj0wp8sqo42n01t7u8q&st=jhphcrby&raw=1',
          },
          {
            id: 8,
            name: 'Unit 8',
            area: 230,
            garden: 0,
            beds: 4,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/xq3mcb91gx9wrjjetqmge/5-8-11.jpeg?rlkey=aok8f6v3e5ttgftfsz5nvay0a&st=dc2plimf&raw=1',
          },
        ],
      },
      {
        name: '3rd Floor',
        units: [
          {
            id: 9,
            name: 'Unit 9',
            area: 176,
            garden: 0,
            beds: 3,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/anv7tt4l870fsue25oyfb/3-6-9.jpeg?rlkey=t5cmh6nhtq8uwkn44gnl4xva7&st=enwgq7at&raw=1',
          },
          {
            id: 10,
            name: 'Unit 10',
            area: 204,
            garden: 0,
            beds: 4,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/07nvmkua9pkucvxh5xdgl/4-7-10.jpeg?rlkey=g72ussfj0wp8sqo42n01t7u8q&st=jhphcrby&raw=1',
          },
          {
            id: 11,
            name: 'Unit 11',
            area: 230,
            garden: 0,
            beds: 4,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/xq3mcb91gx9wrjjetqmge/5-8-11.jpeg?rlkey=aok8f6v3e5ttgftfsz5nvay0a&st=dc2plimf&raw=1',
          },
        ],
      },
    ],
  },
  '2': {
    id: 2,
    name: 'K108, bayet al watan, New cairo',
    location: 'Bayet al watan, New Cairo',
    priceRange: '25,000 EGP - 27,500 EGP',
    paymentDuration: 'Up to 5 Years',
    delivery: 'October 2029',
    unitsLeft: 12,
    city: 'New Cairo',
    totalFloors: 4,
    description: 'A premium eco-friendly residential project with modern amenities and sustainable design.',
    paymentPlan: {
      downPayment: 25,
      installmentYears: 5,
      installmentCount: 20,
      annualPayments: 2,
    },
    images: ['https://www.dropbox.com/scl/fi/3gvyuzyai9zeg61wtkue6/Logo-Gold.png?rlkey=nsu2yinbsy62ee0md23gr9oby&st=yh7gqjgw&raw=1'],
    buildingFeatures: [
      { icon: Car, name: 'Garage' },
      { icon: ElevatorIcon, name: 'Elevator' },
      { icon: Shield, name: 'Security System' },
      { icon: Camera, name: 'CCTV' },
      { icon: Lock, name: '24/7 Security' },
    ],
    areaFeatures: [
      { icon: MosqueIcon, name: 'Mosque' },
      { icon: GraduationCap, name: 'Schools' },
      { icon: Cross, name: 'Hospital' },
      { icon: Landmark, name: 'Shopping Mall' },
    ],
    timeline: [
      { phase: 'Foundation Complete', progress: 100, color: '#416D50' },
      { phase: 'Ground Floor Complete', progress: 100, color: '#B08C44' },
      { phase: 'First Floor in Progress', progress: 60, color: '#F9B233' },
      { phase: 'Second Floor Started', progress: 30, color: '#DC6544' },
    ],
    floors: [
      {
        name: 'Ground Floor',
        units: [
          {
            id: 1,
            name: 'Unit 1',
            area: 193,
            garden: 39,
            beds: 3,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/frfp1ajd5vn1nvbdc42ej/1.jpeg?rlkey=c0lzxlrr2aqzr8jhdp0flzj3j&st=nwba5vn5&raw=1',
          },
          {
            id: 2,
            name: 'Unit 2',
            area: 146,
            garden: 99,
            beds: 2,
            baths: 2,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/bx95dxfqljscfbssti7go/2.jpeg?rlkey=elwif8th60gohfidrk6d78ehb&st=8jc9d0kd&raw=1',
          },
          {
            id: 3,
            name: 'Unit 3',
            area: 181,
            garden: 116,
            beds: 3,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/vah7lf7w5hs8u19nbynmu/3.jpeg?rlkey=byuok4f6w04z4ihnl1aykdduk&st=1flpi7bm&raw=1',
          },
        ],
      },
      {
        name: '1st Floor',
        units: [
          {
            id: 4,
            name: 'Unit 4',
            area: 231,
            garden: 0,
            beds: 3,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/hijpakuh8r9pcz9qk3ak9/4-7-10.jpeg?rlkey=zbnjkmvhf38ne493xag6kxdm4&st=hf4q9ujc&raw=1',
          },
          {
            id: 5,
            name: 'Unit 5',
            area: 193,
            garden: 0,
            beds: 3,
            baths: 2,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/29s3s26lwavup8ufep6rf/5-8-11.jpeg?rlkey=h57lm31i2gytewakoudvcppuj&st=6ljshxs8&raw=1',
          },
          {
            id: 6,
            name: 'Unit 6',
            area: 225,
            garden: 0,
            beds: 3,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/5kmbncdrlmlkthfk27u92/6-9-12.jpeg?rlkey=7f8y41gbx98v8ysss3toz22bz&st=vttfibxs&raw=1',
          },
        ],
      },
      {
        name: '2nd Floor',
        units: [
          {
            id: 7,
            name: 'Unit 7',
            area: 231,
            garden: 0,
            beds: 3,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/hijpakuh8r9pcz9qk3ak9/4-7-10.jpeg?rlkey=zbnjkmvhf38ne493xag6kxdm4&st=hf4q9ujc&raw=1',
          },
          {
            id: 8,
            name: 'Unit 8',
            area: 193,
            garden: 0,
            beds: 3,
            baths: 2,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/29s3s26lwavup8ufep6rf/5-8-11.jpeg?rlkey=h57lm31i2gytewakoudvcppuj&st=6ljshxs8&raw=1',
          },
          {
            id: 9,
            name: 'Unit 9',
            area: 225,
            garden: 0,
            beds: 3,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/5kmbncdrlmlkthfk27u92/6-9-12.jpeg?rlkey=7f8y41gbx98v8ysss3toz22bz&st=vttfibxs&raw=1',
          },
        ],
      },
      {
        name: '3rd Floor',
        units: [
          {
            id: 10,
            name: 'Unit 10',
            area: 231,
            garden: 0,
            beds: 3,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/hijpakuh8r9pcz9qk3ak9/4-7-10.jpeg?rlkey=zbnjkmvhf38ne493xag6kxdm4&st=hf4q9ujc&raw=1',
          },
          {
            id: 11,
            name: 'Unit 11',
            area: 193,
            garden: 0,
            beds: 3,
            baths: 2,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/29s3s26lwavup8ufep6rf/5-8-11.jpeg?rlkey=h57lm31i2gytewakoudvcppuj&st=6ljshxs8&raw=1',
          },
          {
            id: 12,
            name: 'Unit 12',
            area: 225,
            garden: 0,
            beds: 3,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/5kmbncdrlmlkthfk27u92/6-9-12.jpeg?rlkey=7f8y41gbx98v8ysss3toz22bz&st=vttfibxs&raw=1',
          },
        ],
      },
    ],
  },
  '3': {
    id: 3,
    name: 'G85, bayet al watan, New cairo',
    location: '5th Settlement, New Cairo',
    priceRange: '20,000 EGP - 22,000 EGP',
    paymentDuration: 'Up to 3 Years',
    delivery: 'December 2026',
    unitsLeft: 2,
    city: 'New Cairo',
    totalFloors: 6,
    description: 'Luxurious eco-friendly residential tower with panoramic views and premium finishes.',
    paymentPlan: {
      downPayment: 50,
      installmentYears: 3,
      installmentCount: 12,
      annualPayments: 0,
    },
    images: ['https://www.dropbox.com/scl/fi/gwx0euxy3qbjpdo63g50w/WhatsApp-Image-2026-01-12-at-4.57.27-PM.jpeg?rlkey=yg573w36fr4ubv23slx8k546y&st=bf1v5uvi&raw=1'],
    buildingFeatures: [
      { icon: Car, name: 'Underground Parking' },
      { icon: ElevatorIcon, name: 'High-Speed Elevator' },
      { icon: Shield, name: 'Advanced Security' },
      { icon: Camera, name: 'Smart CCTV' },
      { icon: Lock, name: 'Access Control' },
    ],
    areaFeatures: [
      { icon: MosqueIcon, name: 'Mosque' },
      { icon: GraduationCap, name: 'International Schools' },
      { icon: Cross, name: 'Medical Center' },
      { icon: Landmark, name: 'City Center' },
    ],
    timeline: [
      { phase: 'Excavation Complete', progress: 100, color: '#416D50' },
      { phase: 'Foundation & Basement', progress: 100, color: '#B08C44' },
      { phase: 'Ground to 3rd Floor', progress: 80, color: '#F9B233' },
      { phase: 'Upper Floors', progress: 50, color: '#DC6544' },
    ],
    floors: [
      {
        name: 'Ground Floor',
        units: [
          {
            id: 1,
            name: 'Unit 1',
            area: 286,
            garden: 140,
            beds: 3,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: null,
          },
          {
            id: 2,
            name: 'Unit 2',
            area: 220,
            garden: 180,
            beds: 2,
            baths: 2,
            thumbnail: imgUnitPhoto,
            floorPlan: null,
          },
        ],
      },
      {
        name: '1st Floor',
        units: [
          {
            id: 3,
            name: 'Unit 3',
            area: 254,
            garden: 0,
            beds: 4,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/njccbg4kn7z2447wtqryw/3-6-9.jpeg?rlkey=6popkerx97q0vl670f0cl5yfx&st=bgomh4w3&raw=1',
          },
          {
            id: 4,
            name: 'Unit 4',
            area: 177,
            garden: 0,
            beds: 3,
            baths: 2,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/w81voh4lqmy6p9puoj7nm/4-7-10.jpeg?rlkey=gav0z385lervychkabjmse5m2&st=9bsl5e5g&raw=1',
          },
          {
            id: 5,
            name: 'Unit 5',
            area: 242,
            garden: 0,
            beds: 4,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/gi5wuowz72kxzeiw4fgsj/5-8-11.jpeg?rlkey=ju1jnyxwqfevn5kxlm0mpdnl8&st=j8x5knec&raw=1',
          },
        ],
      },
      {
        name: '2nd Floor',
        units: [
          {
            id: 6,
            name: 'Unit 6',
            area: 254,
            garden: 0,
            beds: 4,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/njccbg4kn7z2447wtqryw/3-6-9.jpeg?rlkey=6popkerx97q0vl670f0cl5yfx&st=bgomh4w3&raw=1',
          },
          {
            id: 7,
            name: 'Unit 7',
            area: 177,
            garden: 0,
            beds: 3,
            baths: 2,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/w81voh4lqmy6p9puoj7nm/4-7-10.jpeg?rlkey=gav0z385lervychkabjmse5m2&st=9bsl5e5g&raw=1',
          },
          {
            id: 8,
            name: 'Unit 8',
            area: 242,
            garden: 0,
            beds: 4,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/gi5wuowz72kxzeiw4fgsj/5-8-11.jpeg?rlkey=ju1jnyxwqfevn5kxlm0mpdnl8&st=j8x5knec&raw=1',
          },
        ],
      },
      {
        name: '3rd Floor',
        units: [
          {
            id: 9,
            name: 'Unit 9',
            area: 254,
            garden: 0,
            beds: 4,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/njccbg4kn7z2447wtqryw/3-6-9.jpeg?rlkey=6popkerx97q0vl670f0cl5yfx&st=bgomh4w3&raw=1',
          },
          {
            id: 10,
            name: 'Unit 10',
            area: 177,
            garden: 0,
            beds: 3,
            baths: 2,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/w81voh4lqmy6p9puoj7nm/4-7-10.jpeg?rlkey=gav0z385lervychkabjmse5m2&st=9bsl5e5g&raw=1',
          },
          {
            id: 11,
            name: 'Unit 11',
            area: 242,
            garden: 0,
            beds: 4,
            baths: 3,
            thumbnail: imgUnitPhoto,
            floorPlan: 'https://www.dropbox.com/scl/fi/gi5wuowz72kxzeiw4fgsj/5-8-11.jpeg?rlkey=ju1jnyxwqfevn5kxlm0mpdnl8&st=j8x5knec&raw=1',
          },
        ],
      },
    ],
  },
};

export function SingleProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projectData[id || '1'] || projectData['1'];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFloor, setSelectedFloor] = useState('Ground Floor');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);

  const [bookingData, setBookingData] = useState({ 
    email: '', 
    phone: '', 
    meetingType: 'online-visit',
    date: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [callData, setCallData] = useState({ phone: '', countryCode: '+20' });

  // Scroll tracking for sticky header
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 200], [0, 1]);
  const headerY = useTransform(scrollY, [0, 200], [-100, 0]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
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
      {/* Sticky Project Title Header */}
      <motion.div 
        style={{ 
          opacity: headerOpacity,
          y: headerY,
        }}
        className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-white shadow-md pointer-events-none"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-[#B08C44]" />
            <h2 style={{ fontSize: '16px', color: '#416D50', margin: 0 }}>
              {project.name}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ fontSize: '12px', color: '#666' }}>Price Range:</span>
            <span style={{ fontSize: '14px', color: '#B08C44', fontWeight: '600' }}>
              {project.priceRange}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Image Lightbox Modal */}
      <Lightbox 
        images={lightboxImages}
        initialIndex={lightboxInitialIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
      
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
          <div className="mb-6">
            <div 
              className="relative h-72 sm:h-96 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => {
                setLightboxImages(project.images);
                setLightboxInitialIndex(0);
                setIsLightboxOpen(true);
              }}
            >
              <img
                src={project.images[0]}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                  <ZoomIn size={24} className="text-[#416D50]" />
                </div>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div>
              <p style={{ fontSize: '13px', color: '#666' }}>City</p>
              <p style={{ fontSize: '16px', color: '#416D50' }}>{project.city}</p>
            </div>
            <div>
              <p style={{ fontSize: '13px', color: '#666' }}>Region/ Section</p>
              <p style={{ fontSize: '16px', color: '#416D50' }}>New Cairo</p>
            </div>
            <div>
              <p style={{ fontSize: '13px', color: '#666' }}>Floors</p>
              <p style={{ fontSize: '16px', color: '#416D50' }}>{project.totalFloors}</p>
            </div>
            <a
              href="https://wa.me/01040503547"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-lg hover:bg-[#20BA5A] transition-colors"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z" fill="white"/>
              </svg>
              <span className="text-sm font-semibold">WhatsApp</span>
            </a>
            <a
              href="tel:01040503547"
              className="flex items-center justify-center gap-2 bg-[#416D50] text-white py-3 px-4 rounded-lg hover:bg-[#365840] transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm font-semibold">Call Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Building Features */}
      <section className="py-1 pb-8 bg-white">
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

      {/* Payment Plan */}
      <section className="py-12 bg-[#E9E4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ color: '#416D50', marginBottom: '24px', fontSize: '28px' }}>
              Flexible Payment Plan
            </h3>
            <p style={{ color: '#666', marginBottom: '48px', fontSize: '16px' }}>
              We offer convenient payment options to make your dream home affordable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Down Payment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#416D50] to-[#2d4d38] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <motion.h4 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  style={{ color: '#416D50', fontSize: '42px', marginBottom: '8px' }}
                >
                  {project.paymentPlan.downPayment}%
                </motion.h4>
                <p style={{ color: '#666', fontSize: '16px', fontWeight: '600' }}>Down Payment</p>
                <p style={{ color: '#999', fontSize: '13px', marginTop: '8px' }}>Initial payment to secure your unit</p>
              </div>
            </motion.div>

            {/* Installment Years */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B08C44] to-[#8a6d35] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <motion.h4 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  style={{ color: '#B08C44', fontSize: '42px', marginBottom: '8px' }}
                >
                  {project.paymentPlan.installmentYears}
                </motion.h4>
                <p style={{ color: '#666', fontSize: '16px', fontWeight: '600' }}>Years</p>
                <p style={{ color: '#999', fontSize: '13px', marginTop: '8px' }}>Extended payment period</p>
              </div>
            </motion.div>

            {/* Total Installments */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F9B233] to-[#d9952b] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <motion.h4 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  style={{ color: '#F9B233', fontSize: '42px', marginBottom: '8px' }}
                >
                  {project.paymentPlan.installmentCount}
                </motion.h4>
                <p style={{ color: '#666', fontSize: '16px', fontWeight: '600' }}>Installments</p>
                <p style={{ color: '#999', fontSize: '13px', marginTop: '8px' }}>Quarterly payments</p>
              </div>
            </motion.div>

            {/* Annual Payments */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#DC6544] to-[#b85438] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <motion.h4 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  style={{ color: '#DC6544', fontSize: '42px', marginBottom: '8px' }}
                >
                  {project.paymentPlan.annualPayments}
                </motion.h4>
                <p style={{ color: '#666', fontSize: '16px', fontWeight: '600' }}>Annual Payments</p>
                <p style={{ color: '#999', fontSize: '13px', marginTop: '8px' }}>Yearly large payments</p>
              </div>
            </motion.div>
          </div>

          {/* Payment Plan Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 bg-gradient-to-r from-[#416D50] to-[#2d4d38] rounded-xl p-8 text-white"
          >
            <h4 style={{ fontSize: '22px', marginBottom: '16px', textAlign: 'center' }}>Payment Structure</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '4px' }}>Initial</p>
                <p style={{ fontSize: '20px', fontWeight: '600' }}>{project.paymentPlan.downPayment}% Down Payment</p>
              </div>
              <div>
                <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '4px' }}>Quarterly</p>
                <p style={{ fontSize: '20px', fontWeight: '600' }}>{project.paymentPlan.installmentCount} Installments over {project.paymentPlan.installmentYears} Years</p>
              </div>
              <div>
                <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '4px' }}>Yearly</p>
                <p style={{ fontSize: '20px', fontWeight: '600' }}>{project.paymentPlan.annualPayments} Annual Payments</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unit Types */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 style={{ color: '#416D50', marginBottom: '24px', fontSize: '24px' }}>Available Units</h3>

          {project.floors && Array.isArray(project.floors) && project.floors.length > 0 ? (
            <Tabs value={selectedFloor} onValueChange={setSelectedFloor} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-[#E9E4D8] p-1 rounded-lg">
                {project.floors.map((floor: any) => (
                  <TabsTrigger 
                    key={floor.name} 
                    value={floor.name}
                    className="data-[state=active]:bg-[#416D50] data-[state=active]:text-white text-[#416D50] rounded-md transition-all"
                  >
                    {floor.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {project.floors.map((floor: any) => (
                <TabsContent key={floor.name} value={floor.name} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {floor.units.map((unit: any) => (
                    <motion.div
                      key={unit.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="bg-[#E9E4D8] rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      {/* Unit Thumbnail */}
                      <div 
                        className="relative h-48 cursor-pointer group overflow-hidden"
                        onClick={() => {
                          setLightboxImages([unit.thumbnail]);
                          setLightboxInitialIndex(0);
                          setIsLightboxOpen(true);
                        }}
                      >
                        <img 
                          src={unit.thumbnail} 
                          alt={unit.name} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                            <ZoomIn size={24} className="text-[#416D50]" />
                          </div>
                        </div>
                      </div>

                      {/* Unit Details */}
                      <div className="p-5">
                        <h5 style={{ color: '#416D50', marginBottom: '12px', fontSize: '16px', fontWeight: '600' }}>
                          {unit.name}
                        </h5>
                        
                        {/* Area Info */}
                        <div className="flex items-center gap-2 mb-3">
                          <Maximize size={16} color="#666" />
                          <span style={{ fontSize: '14px', color: '#666' }}>
                            {unit.area} m²
                            {unit.garden > 0 && ` + ${unit.garden} m² Garden`}
                          </span>
                        </div>

                        {/* Beds & Baths */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1.5">
                            <Bed size={18} color="#666" />
                            <span style={{ fontSize: '14px', color: '#666' }}>{unit.beds} Beds</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Bath size={18} color="#666" />
                            <span style={{ fontSize: '14px', color: '#666' }}>{unit.baths} Baths</span>
                          </div>
                        </div>

                        {/* View Plan Button */}
                        <button 
                          onClick={() => {
                            if (unit.floorPlan) {
                              setLightboxImages([unit.floorPlan]);
                              setLightboxInitialIndex(0);
                              setIsLightboxOpen(true);
                            }
                          }}
                          disabled={!unit.floorPlan}
                          className={`w-full py-2.5 rounded-lg transition-colors text-sm font-semibold flex items-center justify-center gap-2 ${
                            unit.floorPlan 
                              ? 'bg-[#416D50] text-white hover:bg-[#365840] cursor-pointer' 
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          <ZoomIn size={16} />
                          {unit.floorPlan ? 'View Unit Plan' : 'Plan Not Available'}
                        </button>
                      </div>
                    </motion.div>
                    ))}
                </div>
              </TabsContent>
              ))}
            </Tabs>
          ) : (
            <div className="bg-[#E9E4D8] rounded-lg p-8 text-center">
              <p style={{ color: '#666', fontSize: '16px' }}>Unit information coming soon</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* Contact Forms */}
      <section className="py-8 bg-[#E9E4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start relative">
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
                    Office visit
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
                  placeholder="dd/mm/yyyy"
                  style={{ colorScheme: 'light' }}
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

              {/* OR Divider */}
              {/* Desktop - Vertical Divider */}
              <div className="hidden lg:flex lg:absolute lg:left-1/2 lg:top-0 lg:-translate-x-1/2 lg:h-full lg:items-center lg:z-10">
                <div className="flex flex-col items-center h-full py-4">
                  <div className="flex-1 w-[1px] bg-gradient-to-b from-transparent via-[#B08C44] to-[#B08C44]"></div>
                  <div className="bg-[#E9E4D8] px-4 py-2 my-2">
                    <span style={{ fontSize: '18px', color: '#416D50', fontWeight: '500', letterSpacing: '2px' }}>OR</span>
                  </div>
                  <div className="flex-1 w-[1px] bg-gradient-to-t from-transparent via-[#B08C44] to-[#B08C44]"></div>
                </div>
              </div>
              {/* Mobile - Horizontal Divider */}
              <div className="lg:hidden py-2">
                <div className="flex items-center gap-4 my-8">
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#B08C44] to-[#B08C44]"></div>
                  <span style={{ fontSize: '18px', color: '#416D50', fontWeight: '500', letterSpacing: '2px' }}>OR</span>
                  <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#B08C44] to-[#B08C44]"></div>
                </div>
              </div>

              {/* Request a Call */}
              <div className="bg-white rounded-lg p-6">
                <h4 style={{ color: '#416D50', marginBottom: '16px', fontSize: '18px' }}>Let us to give you a call</h4>
              <form onSubmit={handleCallRequest} className="space-y-3">
                <div className="relative w-full">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pr-3 border-r border-gray-300">
                    <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="w-6 h-4" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
                      <path fill="#141414" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path>
                      <path fill="#EEE" d="M0 13h36v10H0z"></path>
                      <path fill="#CE1225" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"></path>
                      <path fill="#BF9300" d="M14.75 21.562s.016.25.234.375c0 0-.062.188.172.297c.234.109 1.078.281 2.547.281s2.297-.156 2.516-.266c.219-.109.234-.359.234-.359s.234-.125.219-.281c-.016-.156-.328-.328-.328-.328s-.078-.203-.297-.281c-.219-.078-.922.344-2.266.281c-1.344-.062-2.109-.266-2.359-.25c-.25.016-.359.266-.359.266s-.282.125-.313.265z"></path>
                      <path fill="#EEE" d="M14.922 21.547c-.013.093.188.297.188.297s0 .234.203.297s1.031.219 2.375.203c1.344-.016 2.297-.094 2.406-.188c.109-.094.203-.297.203-.297s.219-.156.203-.281s-.328-.203-.328-.203s-.088-.188-.192-.266s-.776.312-2.214.312c-1.407 0-2.219-.344-2.359-.328c-.141.016-.234.281-.234.281s-.235.064-.251.173z"></path>
                      <path fill="#BF9300" d="M20.859 15.484s-.031-.734-.703-.641c-.672.094-.719.422-1.438.5l-.148.014a3.192 3.192 0 0 1-.196-1.014c0-.469.141-.672-.344-.906c-.484-.234-.578-.016-.578-.016s-.375-.188-.547-.047c-.172.141-.078.5 0 .391c.078-.109.391.203.391.203c.106.519-.195 1.081-.401 1.394c-.071-.007-.128-.01-.208-.019c-.719-.078-.766-.406-1.438-.5c-.672-.094-.703.641-.703.641l-.266 5.672l.547-.422l.003-.067l1.138-1.011l.19-.19l-.471 1.377s-.719-.047-.516.531c0 0 .109-.328.297-.266s.734.203.734.203l.188.297l.234-.219l.734-.031s.234.062.219.266a.446.446 0 0 0 .037-.283l.221-.015a.445.445 0 0 0 .034.299c-.016-.203.219-.266.219-.266l.734.031l.235.219l.188-.297s.546-.141.733-.203s.297.266.297.266c.203-.578-.516-.531-.516-.531l-.449-1.313l.126.126l1.138 1.011l.003.067l.547.422l-.265-5.673zm-3.107 3.438c-1.127-.696-1.22-2.453-1.22-2.453s.697-.036 1.203-.391c.456.405 1.234.359 1.234.359s-.053 1.764-1.217 2.485zm2.576-3.656l-.953.906l-.16.064c-.164.006-.962.008-1.465-.439c-.625.438-1.484.469-1.484.469l-.133-.053l-1.055-.947l-.277.114c.012-.113.074-.367.418-.317c.564.081.797.391 1.391.453l.168.017l-.059.076c.092 0 .228-.027.328-.049l.113.011l-.051.178c.08-.024.196-.093.291-.154l.26.025l.059.082l.198-.099l.133-.013c.115.067.279.127.279.127l.031-.156c.141.094.375.094.375.094c-.027-.022-.054-.078-.082-.126l.144-.015c.594-.062.826-.372 1.391-.453c.344-.049.406.204.418.317l-.278-.112z"></path>
                      <path fill="#EEE" d="M17.375 18.891l-.563 2.14l-.937-.187l.969-2.75zm.699 0l.562 2.14l.938-.187l-.969-2.75z"></path>
                      <path fill="#BF9300" d="M16.766 16.641s.078.906.484 1.609v-1.812s-.266.156-.484.203zm1.953.031s-.078.906-.484 1.609v-1.812c-.001 0 .265.156.484.203z"></path>
                      <path fill="#EEE" d="M16.953 13.578s.109-.109.422.109c.203.142.383.25.383.25s.128-.135.316-.104c.188.031.083.292.114.838c.031.547.25.781.25.781l-.266-.156l.016.172l-.297-.141l-.141.203l-.141-.219l-.228.139l-.069-.186l-.266.141s.391-.484.422-1.016c.009-.159-.031-.516-.031-.516s-.249-.311-.484-.295z"></path>
                      <path fill="#BF9300" d="M15.547 21.656c-.179.107-.109.172 0 .219s.765.126 2.094.156c1.359.031 2.203-.125 2.312-.188c.109-.062.125-.172-.062-.203c-.188-.031-1.125.125-2.266.125c-1.406.001-2-.156-2.078-.109z"></path>
                    </svg>
                    <span style={{ fontSize: '14px' }}>+2</span>
                  </div>
                  <input
                    type="tel"
                    value={callData.phone}
                    onChange={(e) => setCallData({ ...callData, phone: e.target.value })}
                    placeholder="Your number"
                    required
                    className="w-full pl-20 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] text-sm text-left"
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