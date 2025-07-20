export interface SectionProps {
  title: string;
  date: string;
  isWhite?: boolean;
};

const Section:React.FC<React.PropsWithChildren<SectionProps>> = ({
  title,
  date,
  isWhite=true,
  children,
}) => {
  return (
    <div className={`flex flex-col items-center text-center ${isWhite ? 'bg-white' : 'bg-gray-200'} text-black py-6 w-screen`}>
      <div className='flex flex-col gap-6 max-w-[320px] md:max-w-[600px] xl:max-w-[800px]'>
        <p className='text-4xl'>{title}</p>
        <p className='text-lg'>{date}</p>
          {children}
      </div>
    </div>
  )
};

export default Section;