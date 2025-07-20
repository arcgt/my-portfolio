import DocIcon from '../../../assets/home/doc-icon.png';

export interface EducationSectionProps {
  date: string;
  university: string;
  degree: string;
  subheadings: string[];
  bodyText: string[];
}

const EducationSection:React.FC<EducationSectionProps> = ({
  date,
  university,
  degree,
  subheadings,
  bodyText,
}) => {
  return (
    <div className='flex flex-col max-w-[320px] xl:max-w-[800px] text-base gap-4 items-center'>
      <img
        className="w-10"
        src={DocIcon}
        alt="icon"
      />
      <p className='text-lg'>{date}</p>
      <div className='text-xl'>
        <p>{university}</p>
        <p>{degree}</p>
      </div>
      <div>
        {subheadings.map((subheading) => 
          <p>{subheading}</p>
        )}
      </div>
      <div>
        {bodyText.map((line) => 
          <p>{line}</p>
        )}
      </div>
    </div>
  )
}

export default EducationSection;