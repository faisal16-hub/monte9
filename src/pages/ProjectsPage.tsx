import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, SlidersHorizontal, Map, Grid, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';
import { Slider } from '../components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const allProjects = [
  {
    id: 1,
    name: 'Ras Rami Al-Arabia, New Cairo',
    price: 12000,
    maxPrice: 15000,
    units: 28,
    beds: 3,
    baths: 2,
    area: 180,
    floors: 5,
    location: 'New Cairo',
    image: 'https://images.unsplash.com/photo-1651093791352-2ae1c9e5e428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTU5ODYyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
  {
    id: 2,
    name: 'Palm Hills, New Cairo',
    price: 10000,
    maxPrice: 13000,
    units: 34,
    beds: 2,
    baths: 2,
    area: 150,
    floors: 4,
    location: 'New Cairo',
    image: 'https://images.unsplash.com/photo-1619647787040-5583f41eb9b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjU2MzU0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
  {
    id: 3,
    name: 'Green Valley, 5th Settlement',
    price: 15000,
    maxPrice: 18000,
    units: 22,
    beds: 4,
    baths: 3,
    area: 220,
    floors: 6,
    location: '5th Settlement',
    image: 'https://images.unsplash.com/photo-1630404991412-9504d094e8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGJ1aWxkaW5nJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzY1NjM1NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
  {
    id: 4,
    name: 'Sunset Residences, Sheikh Zayed',
    price: 13000,
    maxPrice: 16000,
    units: 18,
    beds: 3,
    baths: 2,
    area: 190,
    floors: 5,
    location: 'Sheikh Zayed',
    image: 'https://images.unsplash.com/photo-1708085342347-6d0dd245f90e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY28lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NTYzNTQxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
  {
    id: 5,
    name: 'Oakwood Heights, Maadi',
    price: 9000,
    maxPrice: 12000,
    units: 42,
    beds: 2,
    baths: 1,
    area: 120,
    floors: 3,
    location: 'Maadi',
    image: 'https://images.unsplash.com/photo-1651093791352-2ae1c9e5e428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTU5ODYyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
  {
    id: 6,
    name: 'Marina Views, North Coast',
    price: 20000,
    maxPrice: 25000,
    units: 15,
    beds: 4,
    baths: 3,
    area: 250,
    floors: 7,
    location: 'North Coast',
    image: 'https://images.unsplash.com/photo-1619647787040-5583f41eb9b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjU2MzU0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
];

export function ProjectsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [priceRange, setPriceRange] = useState([5000, 30000]);
  const [selectedFloors, setSelectedFloors] = useState<string>('all');
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [sortBy, setSortBy] = useState('recent');
  const [filtersExpanded, setFiltersExpanded] = useState(true);

  // Filter projects
  let filteredProjects = allProjects.filter((project) => {
    const matchesPrice = project.price >= priceRange[0] && project.price <= priceRange[1];
    const matchesFloors = selectedFloors === 'all' || project.floors === parseInt(selectedFloors);
    const matchesArea = selectedArea === 'all' || 
      (selectedArea === '100-150' && project.area >= 100 && project.area <= 150) ||
      (selectedArea === '150-200' && project.area > 150 && project.area <= 200) ||
      (selectedArea === '200+' && project.area > 200);
    const matchesLocation = selectedLocation === 'all' || project.location === selectedLocation;
    
    return matchesPrice && matchesFloors && matchesArea && matchesLocation;
  });

  // Sort projects
  filteredProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'popular') return b.featured ? 1 : -1;
    return 0; // recent (default order)
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#416D50] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">Our Projects</h1>
          <p style={{ fontSize: '19px' }}>
            Discover our portfolio of eco-friendly residential developments
          </p>
        </div>
      </section>

      {/* Filters Bar */}
      <div className="sticky top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          {/* Collapsible Filters */}
          {filtersExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-3 pb-3">
                {/* Price Range */}
                <div className="flex-1">
                  <label className="block mb-1.5" style={{ fontSize: '11px', color: '#666' }}>
                    Price Range (EGP/m²)
                  </label>
                  <div className="flex items-center gap-3">
                    <span style={{ fontSize: '13px' }}>{priceRange[0].toLocaleString()}</span>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={5000}
                      max={30000}
                      step={1000}
                      className="flex-1"
                    />
                    <span style={{ fontSize: '13px' }}>{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                {/* Floors */}
                <div className="w-full lg:w-40">
                  <label className="block mb-1.5" style={{ fontSize: '11px', color: '#666' }}>
                    Floors
                  </label>
                  <Select value={selectedFloors} onValueChange={setSelectedFloors}>
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue placeholder="All floors" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All floors</SelectItem>
                      <SelectItem value="3">3 floors</SelectItem>
                      <SelectItem value="4">4 floors</SelectItem>
                      <SelectItem value="5">5 floors</SelectItem>
                      <SelectItem value="6">6 floors</SelectItem>
                      <SelectItem value="7">7+ floors</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Flat Size */}
                <div className="w-full lg:w-40">
                  <label className="block mb-1.5" style={{ fontSize: '11px', color: '#666' }}>
                    Flat Size
                  </label>
                  <Select value={selectedArea} onValueChange={setSelectedArea}>
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue placeholder="All sizes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All sizes</SelectItem>
                      <SelectItem value="100-150">100-150 m²</SelectItem>
                      <SelectItem value="150-200">150-200 m²</SelectItem>
                      <SelectItem value="200+">200+ m²</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div className="w-full lg:w-40">
                  <label className="block mb-1.5" style={{ fontSize: '11px', color: '#666' }}>
                    Location
                  </label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue placeholder="All locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All locations</SelectItem>
                      <SelectItem value="New Cairo">New Cairo</SelectItem>
                      <SelectItem value="5th Settlement">5th Settlement</SelectItem>
                      <SelectItem value="Sheikh Zayed">Sheikh Zayed</SelectItem>
                      <SelectItem value="Maadi">Maadi</SelectItem>
                      <SelectItem value="North Coast">North Coast</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </motion.div>
          )}

          {/* Sort and View Toggle - Always Visible */}
          <div className={`flex items-center justify-between ${filtersExpanded ? 'pt-3 border-t' : ''}`}>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFiltersExpanded(!filtersExpanded)}
                className="flex items-center gap-2 text-[#416D50] hover:text-[#365840] transition-colors"
              >
                <SlidersHorizontal size={16} />
                <span style={{ fontSize: '13px' }}>
                  {filtersExpanded ? 'Hide Filters' : 'Show Filters'}
                </span>
                {filtersExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              <span style={{ fontSize: '13px', color: '#666' }}>
                {filteredProjects.length} properties found
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 h-9 text-sm">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex gap-1.5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded ${
                    viewMode === 'grid' ? 'bg-[#416D50] text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-1.5 rounded ${
                    viewMode === 'map' ? 'bg-[#416D50] text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  <Map size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {viewMode === 'grid' ? (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <p style={{ fontSize: '19px', color: '#666' }}>
                  No projects match your criteria. Try adjusting your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={`/project/${project.id}`} className="group block">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        {project.featured && (
                          <div className="absolute top-4 right-4 z-10 bg-[#B08C44] text-white px-3 py-1 rounded-full" style={{ fontSize: '13px' }}>
                            Featured
                          </div>
                        )}
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="mb-3" style={{ color: '#416D50', fontSize: '23px' }}>
                            {project.name}
                          </h4>
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <p style={{ fontSize: '13px', color: '#666' }}>Price/m²</p>
                              <p style={{ fontSize: '19px', color: '#B08C44' }}>
                                {project.price.toLocaleString()} - {project.maxPrice.toLocaleString()} EGP
                              </p>
                            </div>
                            <div>
                              <p style={{ fontSize: '13px', color: '#666' }}>Units left</p>
                              <p style={{ fontSize: '19px', color: '#416D50' }}>{project.units}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 pt-4 border-t">
                            <div className="flex items-center gap-1">
                              <Bed size={20} color="#666" />
                              <span style={{ fontSize: '16px', color: '#666' }}>{project.beds}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Bath size={20} color="#666" />
                              <span style={{ fontSize: '16px', color: '#666' }}>{project.baths}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Maximize size={20} color="#666" />
                              <span style={{ fontSize: '16px', color: '#666' }}>{project.area}m²</span>
                            </div>
                          </div>
                          <button className="w-full mt-6 bg-[#416D50] text-white py-3 rounded-lg hover:bg-[#365840] transition-colors">
                            See more details
                          </button>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : (
        /* Map View */
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-200 rounded-xl h-[600px] flex items-center justify-center">
              <div className="text-center">
                <Map size={64} color="#666" className="mx-auto mb-4" />
                <p style={{ fontSize: '19px', color: '#666' }}>
                  Map view with project locations
                </p>
                <p style={{ fontSize: '16px', color: '#999' }}>
                  Interactive map integration would go here
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}