import React from "react";

const StatisticsSection = () => {
  return (
    <>
      <div className="w-full bg-theme-red-dark py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold">540+</h3>
              <p className="text-sm md:text-base">Students</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold">127+</h3>
              <p className="text-sm md:text-base">Teachers</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold">35+</h3>
              <p className="text-sm md:text-base">Department</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold">3+</h3>
              <p className="text-sm md:text-base">Courses</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsSection;
