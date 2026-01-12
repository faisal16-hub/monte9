import { motion } from 'motion/react';

export function ProjectCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
    >
      {/* Image Skeleton */}
      <div className="relative h-52 sm:h-64 bg-gray-200 animate-pulse" />
      
      {/* Content Skeleton */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Title */}
        <div className="h-6 bg-gray-200 rounded animate-pulse mb-3 w-3/4" />
        
        {/* Price and Units */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <div className="h-3 bg-gray-200 rounded animate-pulse mb-2 w-16" />
            <div className="h-5 bg-gray-200 rounded animate-pulse w-32" />
          </div>
          <div className="flex-1">
            <div className="h-3 bg-gray-200 rounded animate-pulse mb-2 w-16" />
            <div className="h-5 bg-gray-200 rounded animate-pulse w-8" />
          </div>
        </div>
        
        {/* Features */}
        <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t mb-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-12" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-12" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
        </div>
        
        {/* Button */}
        <div className="h-10 sm:h-11 bg-gray-200 rounded-lg animate-pulse mt-auto" />
      </div>
    </motion.div>
  );
}
