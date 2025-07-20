import type { IconType } from "react-icons";

export interface SkillSetCardProps {
    Icon: IconType;
    title: string;
    description: string[];
}

const SkillSetCard: React.FC<SkillSetCardProps> = ({
    Icon,
    title,
    description
}) => {
    return (
        <div className='flex flex-col rounded-sm bg-white w-[320px] md:w-[600px] h-auto xl:w-[400px] xl:h-[465px] p-10 items-center justify-start gap-4'>
            < Icon size={30} className="color-black"/>
            <div className='text-xl'>{title}</div>
            {description.map((line) =>
                <div>{line}</div>
            )}
        </div>
    )
};

export default SkillSetCard;