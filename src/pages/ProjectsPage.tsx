import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, SlidersHorizontal, Map, Grid, ChevronDown, ChevronUp, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Helmet } from 'react-helmet-async';

const allProjects = [
  {
    id: 1,
    nameKey: 'projectNames.project1',
    price: 22000,
    maxPrice: 24500,
    units: 6,
    beds: 3,
    baths: 2,
    area: '176-230',
    floors: 5,
    locationKey: 'projectNames.bayetAlWatan',
    locationDetail: 'projectNames.newCairo',
    image: 'https://images.unsplash.com/photo-1664892798972-079f15663b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njk3NzE2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
  {
    id: 2,
    nameKey: 'projectNames.project2',
    price: 25000,
    maxPrice: 27500,
    units: 12,
    beds: 2,
    baths: 2,
    area: '146-231',
    floors: 4,
    locationKey: 'projectNames.newCairo',
    locationDetail: '',
    image: 'https://images.unsplash.com/photo-1761347604372-ae52634c690a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzaWRlbnRpYWwlMjB2aWxsYXxlbnwxfHx8fDE3Njk3NzE2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
    isNew: true,
  },
  {
    id: 3,
    nameKey: 'projectNames.project3',
    price: 20000,
    maxPrice: 22000,
    units: 2,
    beds: 4,
    baths: 3,
    area: '177-242',
    floors: 6,
    locationKey: 'projectNames.fifthSettlement',
    locationDetail: '',
    image: 'https://images.unsplash.com/photo-1762397794646-f19044bd0828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBleHRlcmlvcnxlbnwxfHx8fDE3Njk3NzE2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
];

export function ProjectsPage() {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [priceRange, setPriceRange] = useState([5000, 30000]);
  const [selectedFloors, setSelectedFloors] = useState<string>('all');
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [sortBy, setSortBy] = useState('recent');
  const [filtersExpanded, setFiltersExpanded] = useState(false);

  // Helper function to parse area range
  const parseAreaRange = (areaStr: string) => {
    const match = areaStr.match(/(\d+)-(\d+)/);
    if (match) {
      return { min: parseInt(match[1]), max: parseInt(match[2]) };
    }
    return { min: 0, max: 0 };
  };

  // Filter projects
  let filteredProjects = allProjects.filter((project) => {
    const matchesPrice = project.price >= priceRange[0] && project.price <= priceRange[1];
    const matchesFloors = selectedFloors === 'all' || project.floors === parseInt(selectedFloors);
    
    // Fixed area filter logic
    let matchesArea = true;
    if (selectedArea !== 'all') {
      const projectAreaRange = parseAreaRange(project.area);
      const projectMinArea = projectAreaRange.min;
      const projectMaxArea = projectAreaRange.max;
      
      if (selectedArea === '100-150') {
        matchesArea = projectMinArea >= 100 && projectMaxArea <= 150;
      } else if (selectedArea === '150-200') {
        matchesArea = projectMinArea >= 150 && projectMaxArea <= 200;
      } else if (selectedArea === '200+') {
        matchesArea = projectMinArea >= 200;
      }
    }
    
    const matchesLocation = selectedLocation === 'all' || t(project.locationKey) === selectedLocation || t(project.locationDetail) === selectedLocation;
    
    return matchesPrice && matchesFloors && matchesArea && matchesLocation;
  });

  // Sort projects
  filteredProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'popular') return b.featured ? 1 : -1;
    return 0; // recent (default order)
  });

  // Get active filters
  const getActiveFilters = () => {
    const filters = [];
    if (priceRange[0] !== 5000 || priceRange[1] !== 30000) {
      filters.push({
        label: `Price: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()} EGP`,
        onRemove: () => setPriceRange([5000, 30000]),
      });
    }
    if (selectedFloors !== 'all') {
      filters.push({
        label: `${selectedFloors} floors`,
        onRemove: () => setSelectedFloors('all'),
      });
    }
    if (selectedArea !== 'all') {
      const areaLabel = selectedArea === '200+' ? '200+ m²' : `${selectedArea} m²`;
      filters.push({
        label: areaLabel,
        onRemove: () => setSelectedArea('all'),
      });
    }
    if (selectedLocation !== 'all') {
      filters.push({
        label: selectedLocation,
        onRemove: () => setSelectedLocation('all'),
      });
    }
    return filters;
  };

  const activeFilters = getActiveFilters();
  const clearAllFilters = () => {
    setPriceRange([5000, 30000]);
    setSelectedFloors('all');
    setSelectedArea('all');
    setSelectedLocation('all');
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-gray-50">
      <Helmet>
        <title>All Projects - Monte Developments | Eco-Friendly Apartments in New Cairo</title>
        <meta name="description" content="Browse our complete portfolio of eco-friendly residential projects in New Cairo. Filter by price, location, and size to find your perfect sustainable home." />
        <meta property="og:title" content="Monte Developments Projects - Sustainable Living in Egypt" />
        <meta property="og:description" content="Explore eco-friendly apartments and residential projects in New Cairo. Advanced filters to find your ideal sustainable home." />
      </Helmet>

      {/* Header */}
      <section className="bg-[#416D50] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-3 sm:mb-4 text-3xl sm:text-4xl">{t('projects.title')}</h1>
          <p className="text-base sm:text-lg lg:text-[19px]">
            {t('projects.subtitle')}
          </p>
        </div>
      </section>

      {/* Filters Bar */}
      <div className="sticky top-16 sm:top-20 z-40 bg-white shadow-md">
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
              <div className="flex flex-col gap-3 pb-3">
                {/* Price Range */}
                <div className="w-full">
                  <label className="block mb-1.5 text-xs sm:text-[11px]" style={{ color: '#666' }}>
                    {t('projects.priceRangeFull')}
                  </label>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xs sm:text-[13px] whitespace-nowrap">{priceRange[0].toLocaleString()}</span>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={5000}
                      max={30000}
                      step={1000}
                      className="flex-1"
                    />
                    <span className="text-xs sm:text-[13px] whitespace-nowrap">{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {/* Floors */}
                  <div className="w-full">
                    <label className="block mb-1.5 text-xs sm:text-[11px]" style={{ color: '#666' }}>
                      {t('projects.floors')}
                    </label>
                    <Select value={selectedFloors} onValueChange={setSelectedFloors}>
                      <SelectTrigger className="h-9 text-xs sm:text-sm w-full">
                        <SelectValue placeholder={t('projects.allFloors')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{t('projects.allFloors')}</SelectItem>
                        <SelectItem value="3">3 {t('projects.floors').toLowerCase()}</SelectItem>
                        <SelectItem value="4">4 {t('projects.floors').toLowerCase()}</SelectItem>
                        <SelectItem value="5">5 {t('projects.floors').toLowerCase()}</SelectItem>
                        <SelectItem value="6">6 {t('projects.floors').toLowerCase()}</SelectItem>
                        <SelectItem value="7">7+ {t('projects.floors').toLowerCase()}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Flat Size */}
                  <div className="w-full">
                    <label className="block mb-1.5 text-xs sm:text-[11px]" style={{ color: '#666' }}>
                      {t('projects.flatSize')}
                    </label>
                    <Select value={selectedArea} onValueChange={setSelectedArea}>
                      <SelectTrigger className="h-9 text-xs sm:text-sm w-full">
                        <SelectValue placeholder={t('projects.allSizes')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{t('projects.allSizes')}</SelectItem>
                        <SelectItem value="100-150">100-150 {t('featured.sqm')}</SelectItem>
                        <SelectItem value="150-200">150-200 {t('featured.sqm')}</SelectItem>
                        <SelectItem value="200+">200+ {t('featured.sqm')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location */}
                  <div className="w-full sm:col-span-2 lg:col-span-1">
                    <label className="block mb-1.5 text-xs sm:text-[11px]" style={{ color: '#666' }}>
                      {t('projects.location')}
                    </label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger className="h-9 text-xs sm:text-sm w-full">
                        <SelectValue placeholder={t('projects.allLocations')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{t('projects.allLocations')}</SelectItem>
                        <SelectItem value={t('projectNames.newCairo')}>{t('projectNames.newCairo')}</SelectItem>
                        <SelectItem value={t('projectNames.fifthSettlement')}>{t('projectNames.fifthSettlement')}</SelectItem>
                        <SelectItem value={t('projectNames.bayetAlWatan')}>{t('projectNames.bayetAlWatan')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Sort and View Toggle - Always Visible */}
          <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 ${filtersExpanded ? 'pt-3 border-t' : ''}`}>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => setFiltersExpanded(!filtersExpanded)}
                className="flex items-center gap-2 text-[#416D50] hover:text-[#365840] transition-colors"
              >
                <SlidersHorizontal size={16} />
                <span className="text-xs sm:text-[13px]">
                  {filtersExpanded ? t('projects.hideFilters') : t('projects.showFilters')}
                </span>
                {filtersExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              <span className="text-xs sm:text-[13px]" style={{ color: '#666' }}>
                {filteredProjects.length} {t('projects.propertiesFound')}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-40 h-9 text-xs sm:text-sm">
                  <SelectValue placeholder={t('projects.sortBy')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">{t('projects.recent')}</SelectItem>
                  <SelectItem value="price-low">{t('projects.priceLow')}</SelectItem>
                  <SelectItem value="price-high">{t('projects.priceHigh')}</SelectItem>
                  <SelectItem value="popular">{t('featured.title')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {viewMode === 'grid' ? (
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Active Filters Display */}
            {activeFilters.length > 0 && (
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="text-xs sm:text-[13px]" style={{ color: '#666' }}>{t('projects.activeFilters')}</span>
                {activeFilters.map((filter, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={filter.onRemove}
                    className="flex items-center gap-1.5 bg-[#416D50] text-white px-3 py-1.5 rounded-full text-xs hover:bg-[#365840] transition-colors"
                  >
                    <span>{filter.label}</span>
                    <X size={14} />
                  </motion.button>
                ))}
                <button
                  onClick={clearAllFilters}
                  className="text-xs sm:text-[13px] text-[#B08C44] hover:text-[#8a6d35] underline transition-colors"
                >
                  {t('projects.clearAll')}
                </button>
              </div>
            )}
            
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16 sm:py-20">
                <div className="mb-6">
                  <SlidersHorizontal size={48} className="mx-auto mb-4 text-gray-400" />
                </div>
                <h3 className="mb-3" style={{ color: '#416D50' }}>
                  {t('projects.noMatch')}
                </h3>
                <p className="text-base sm:text-lg mb-6" style={{ color: '#666' }}>
                  {t('projects.adjustCriteria')}
                </p>
                {activeFilters.length > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="bg-[#416D50] text-white px-6 py-3 rounded-lg hover:bg-[#365840] transition-colors inline-flex items-center gap-2"
                  >
                    <X size={18} />
                    {t('projects.clearAllFilters')}
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={`/project/${project.id}`} className="group block">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                        {project.featured && (
                          <div className="absolute top-4 right-4 z-10 bg-[#B08C44] text-white px-3 py-1 rounded-full text-xs sm:text-[13px]">
                            {t('homeProjects.featured')}
                          </div>
                        )}
                        {project.isNew && (
                          <div className="absolute top-4 right-4 z-10 bg-[#416D50] text-white px-3 py-1 rounded-full text-xs sm:text-[13px]">
                            {t('featured.new')}
                          </div>
                        )}
                        <div className="relative h-52 sm:h-64 overflow-hidden">
                          <img
                            src={project.image}
                            alt={`${t(project.nameKey)} - ${project.beds} bedroom, ${project.baths} bathroom apartment with ${project.area}m² area in ${t(project.locationKey)}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-5 sm:p-6">
                          <h4 className="mb-3 text-xl sm:text-[23px]" style={{ color: '#416D50' }}>
                            {t(project.nameKey)}
                          </h4>
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <p className="text-xs sm:text-[13px]" style={{ color: '#666' }}>{t('homeProjects.pricePerSqm')}</p>
                              <p className="text-base sm:text-[19px]" style={{ color: '#B08C44' }}>
                                {project.price.toLocaleString()} - {project.maxPrice.toLocaleString()} {t('projects.egp')}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs sm:text-[13px]" style={{ color: '#666' }}>{t('homeProjects.unitsLeft')}</p>
                              <p className="text-base sm:text-[19px]" style={{ color: '#416D50' }}>{project.units}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t">
                            <div className="flex items-center gap-1">
                              <Bed size={18} className="sm:w-5 sm:h-5" color="#666" />
                              <span className="text-sm sm:text-base" style={{ color: '#666' }}>{project.beds}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Bath size={18} className="sm:w-5 sm:h-5" color="#666" />
                              <span className="text-sm sm:text-base" style={{ color: '#666' }}>{project.baths}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Maximize size={18} className="sm:w-5 sm:h-5" color="#666" />
                              <span className="text-sm sm:text-base" style={{ color: '#666' }}>{project.area}{t('featured.sqm')}</span>
                            </div>
                          </div>
                          <button className="w-full mt-6 bg-[#416D50] text-white py-2.5 sm:py-3 rounded-lg hover:bg-[#365840] transition-colors text-sm sm:text-base">
                            {t('homeProjects.seeMore')}
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
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-200 rounded-xl h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
              <div className="text-center px-4">
                <Map size={48} className="sm:w-16 sm:h-16 mx-auto mb-4" color="#666" />
                <p className="text-base sm:text-lg lg:text-[19px]" style={{ color: '#666' }}>
                  {t('projects.mapViewDesc')}
                </p>
                <p className="text-sm sm:text-base mt-2" style={{ color: '#999' }}>
                  {t('projects.comingSoon')}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}