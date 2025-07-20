import React from 'react';

export interface ButtonProps {
    text: string;
    url: string;
    isPrimary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
    text,
    url,
    isPrimary = true,
}) => {
    return (
        <div className='cursor-pointer text-base font-light'>
            {isPrimary 
                ? <div 
                    onClick={() => window.open(url, "_blank")}
                    className='rounded-sm bg-black hover:bg-gray-600 text-white px-6 py-2'
                >
                    <p>{text}</p>
                </div>
                : <div 
                    onClick={() => window.open(url, "_blank")}
                    className='rounded-xs border-[0.5px] border-black bg-white hover:bg-black hover:text-white text-black px-6 py-2'
                >
                    <p>{text}</p>
                </div>
            }
        </div>
    );
};

export default Button;