interface ThemeSwitcherProps {
  id: string;
  className: string;
  iconColor?: string;
  ballColor?: string;
}

const ThemeSwitcher = ({
  id,
  className,
  ballColor = "black",
  iconColor = "white",
}: ThemeSwitcherProps) => {
  return (
    <>
      <input className="hidden" type="checkbox" name={id} id={id}></input>
      <label htmlFor={id} className={className}></label>
      <style>
        {`#${id} ~ label::before {
            height: 180%;
            display: flex;
            justify-content: center;
            align-items: center;
            aspect-ratio: 1/1;
            position: absolute;
            background-color: ${ballColor};
            color: ${iconColor};
            border-radius: 50%;
            font-size: 100%;
            left: 0;
            top: 50%;
            translate:0 -50%;
            transition-duration: 50ms;
            transition: translate left;
            content: "☼";
        }
        
        #${id}:checked ~ label::before {
            left: 100%;
            translate: -100% -50%;
            content: "☾";
          }
        `}
      </style>
    </>
  );
};

export default ThemeSwitcher;
