import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface ImageViewerProps {
  images: string[];
}

const ImageViewer: React.FC<ImageViewerProps> = ({ 
  images,
}) => {
  const [imageIdx, setImageIdx] = React.useState(0);

  const isDisabledRight = imageIdx === images.length - 1;
  const isDisabledLeft = imageIdx === 0;

  const disabledButtonClassName = 'flex text-4xl text-gray-400 items-center justify-center cursor-pointer px-6';
  const enabledButtonClassName = 'flex text-4xl text-gray-800 items-center justify-center cursor-pointer px-6';

  return (
    <div className='flex flex-row w-full justify-between select-none'>
      <div 
        onClick={() => isDisabledLeft ? null : setImageIdx(imageIdx - 1)}
        className={isDisabledLeft ? disabledButtonClassName : enabledButtonClassName}
      >
        <FaChevronLeft />
      </div>
      <img
        src={images[imageIdx]}
        alt="image-viewer"
        className="w-auto h-[300px] rounded-lg"
      />
      <div 
        onClick={() => isDisabledRight ? null : setImageIdx(imageIdx + 1)}
        className={isDisabledRight ? disabledButtonClassName : enabledButtonClassName}
      >
        <FaChevronRight />
      </div>
    </div>
  );
};

export default ImageViewer;