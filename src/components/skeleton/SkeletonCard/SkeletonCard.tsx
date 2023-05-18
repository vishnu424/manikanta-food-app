export const SkeletonCard: React.FC = () => {
  return (
    <div className="relative rounded-2xl shadow-lg">
      <div className="animate-pulse">
        <div className="h-[179px] w-full rounded-t-2xl bg-grey md:h-[250px] xl:h-[344px]"></div>
        <div className="space-y-3 p-2 pb-6">
          <div className="h-2 rounded-2xl bg-grey"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded-2xl bg-grey"></div>
            <div className="col-span-1 h-2 rounded-2xl bg-grey"></div>
          </div>
          <div className="flex justify-center">
            <div className="h-3 w-4/5 rounded-full bg-grey"></div>
          </div>
          <div className="flex justify-end">
            <div className="h-6 w-6 rounded-full bg-grey"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
