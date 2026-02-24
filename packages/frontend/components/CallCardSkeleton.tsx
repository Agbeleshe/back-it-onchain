export function CallCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl p-5 animate-pulse">
      {/* Header with avatar and badges */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {/* Avatar skeleton */}
          <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700" />
          <div>
            {/* Name skeleton */}
            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-1" />
            {/* Date skeleton */}
            <div className="h-3 w-16 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Chain badge skeleton */}
          <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-full" />
          {/* Status badge skeleton */}
          <div className="h-6 w-12 bg-gray-300 dark:bg-gray-700 rounded-full" />
        </div>
      </div>

      {/* Title skeleton */}
      <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-2" />

      {/* Badges row skeleton */}
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded-full" />
        <div className="h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded-full" />
        <div className="h-6 w-28 bg-gray-300 dark:bg-gray-700 rounded-full" />
      </div>

      {/* Footer skeleton */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex gap-4">
          {/* YES/NO stats skeleton */}
          <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
        <div className="flex items-center gap-3">
          {/* Explorer link skeleton */}
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
          {/* Comments skeleton */}
          <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  );
}
