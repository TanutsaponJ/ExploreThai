import React, { ReactNode } from "react";

interface ButtonProps {
  title: string;
  icon: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ title, icon }) => {
  return (
    <button className="flex items-center gap-4 bg-orange-400 px-6 text-white rounded-md py-2 font-semibold hover:bg-orange-800 transition-all duration-300 ease-in-out hover:text-black">
      {title}
      <div className="items-center inline-flex h-6 w-6">{icon}</div>
    </button>
  );
};

export default Button;
