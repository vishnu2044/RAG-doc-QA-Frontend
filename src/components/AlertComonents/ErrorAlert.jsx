import React, {useState, useEffect} from 'react';
import { IoIosCloseCircle } from "react-icons/io";

const ErrorAlert = ({message, onClose}) => {
    const [isVisible, setIsVisible] = useState(true);
    // const onClose = true

    useEffect(() => {
      
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose(); 
      }, 3000);
  
      return () => clearTimeout(timer); 
    }, [onClose]);
  
    if (!isVisible) return null; 
  return (
    <div className="fixed top-10 inset-x-0 flex justify-center z-50">
      <div className="py-2 px-4  text-black bg-white rounded-lg shadow-lg border border-red-600 max-w-lg mx-auto">
        <div className="flex items-center">
          <IoIosCloseCircle className="text-red-500 mr-2 text-2xl" />
          <span className="font-semibold">{message}</span>
          <button
            onClick={() => {
              setIsVisible(false);
              if (onClose) onClose();
            }}
            className="ml-auto text-white focus:outline-none"
          >
            &times; {/* Close button */}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorAlert