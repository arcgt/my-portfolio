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
                    className='rounded-sm bg-gray-950 hover:bg-gray-600 text-gray-50 px-6 py-2'
                >
                    <p>{text}</p>
                </div>
                : <div 
                    onClick={() => window.open(url, "_blank")}
                    className='rounded-xs border-[0.5px] border-gray-950 bg-gray-50 hover:bg-gray-950 hover:text-gray-50 text-gray-950 px-6 py-2'
                >
                    <p>{text}</p>
                </div>
            }
        </div>
    );
};

export default Button;