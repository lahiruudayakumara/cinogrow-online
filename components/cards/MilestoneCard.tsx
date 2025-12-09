import React from "react";

export interface MilestoneCardProps {
  milestone: {
    title: string;
    description: string;
    month: string;
    year: number;
    percentage: string;
    marks: number;
    imageUrl?: string; // optional
  };
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({ milestone }) => {
  const { title, description, month, year, percentage, marks, imageUrl } = milestone;

  return (
    <div className="flex flex-col p-5 rounded-xl shadow-md border bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-all duration-200">
      
      {/* Image */}
      <div className="w-full h-36 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
        <img
          src={imageUrl || "/images/default-milestone.jpg"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
        {description}
      </p>

      {/* Date + Marks */}
      <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>{month} {year}</span>
        <span>{marks} Marks · {percentage}</span>
      </div>
    </div>
  );
};

export default MilestoneCard;