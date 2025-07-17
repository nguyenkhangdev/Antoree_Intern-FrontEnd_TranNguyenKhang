import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-56 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <div className="flex flex-row justify-between w-full">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-5 w-full" />
        </div>
      </div>
    </div>
  );
}
