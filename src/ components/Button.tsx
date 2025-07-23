import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface ButtonProps {
    text: string;
    url: string;
    isPrimary?: boolean;
    isExternal?: boolean,
}

const Button: React.FC<ButtonProps> = ({ 
    text,
    url,
    isPrimary = true,
    isExternal = true,
}) => {
    const navigate = useNavigate();
    
    return (
        <div className='cursor-pointer text-base font-light'>
            {isPrimary 
                ? <div 
                    onClick={() => isExternal ? window.open(url, "_blank") : navigate(url)}
                    className='rounded-sm bg-black hover:bg-gray-600 text-white px-6 py-2'
                >
                    <p>{text}</p>
                </div>
                : <div 
                    onClick={() => isExternal ? window.open(url, "_blank") : navigate(url)}
                    className='rounded-xs border-[0.5px] border-black bg-white hover:bg-black hover:text-white text-black px-6 py-2'
                >
                    <p>{text}</p>
                </div>
            }
        </div>
    );
};

export default Button;