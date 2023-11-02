import React from "react";

interface EmptyStateProps {
  title: string;
  subtitle: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
  return (
    <div className="col-span-3 mt-10 text-center text-primary">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-zinc-400">{subtitle}</p>
    </div>
  );
};

export default EmptyState;
