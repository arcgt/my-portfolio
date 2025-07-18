import { useNavigate } from "react-router-dom";

export interface TextLinkProps {
  text: string;
  link: string;
  isExternal?: boolean;
  isUnderline?: boolean;
}

const TextLink:React.FC<TextLinkProps> = ({
  text,
  link,
  isExternal = true,
  isUnderline = true,
}) => {
  const navigate = useNavigate();
  
  return (
    <span 
      className={`cursor-pointer font-bold text-gray-400 hover:text-gray-300 ${isUnderline ? 'underline' : ''}`}
      onClick={() => isExternal ? window.open(link, "_blank") : navigate(link)}
    >
      {text}
    </span>
  )
}

export default TextLink;