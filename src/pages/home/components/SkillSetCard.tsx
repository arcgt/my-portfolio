import DocIcon from '../../../assets/home/doc-icon.png';

export interface SkillSetCardProps {
    title: string;
    description: string[];
}

const SkillSetCard: React.FC<SkillSetCardProps> = ({
    title,
    description
}) => {
    return (
        <div className='flex flex-col rounded-sm bg-white w-[320px] h-auto xl:w-[400px] xl:h-[465px] p-10 items-center justify-start gap-4'>
            <img
                className="w-10"
                src={DocIcon}
                alt="icon"
            />
            <div className='text-xl'>{title}</div>
            {description.map((line) =>
                <div>{line}</div>
            )}
        </div>
    )
};

export default SkillSetCard;