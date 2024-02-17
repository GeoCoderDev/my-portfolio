interface BadgeProps {
  text: string;
  className: string;
  bgColor?: string;
}

const Bagde = ({ text, className, bgColor="#FF9900" }: BadgeProps) => {
  return (
    <div className={`${className} rounded-lg`} style={{backgroundColor: bgColor}}>{text}</div>
  );
};

export default Bagde;
