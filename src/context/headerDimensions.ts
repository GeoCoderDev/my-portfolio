import { createContext } from "react";

interface HeaderDimensionsData {
  headerHeight: number;
  handdleHeight: ()=>void;
}

const headerHeightInitial = window.getComputedStyle(
  document.getElementById("Header")!
).height;

const HeaderDimensionsContext = createContext<string>(null!);

export const HeaderDimensionsProvider = ({
    children,
  }: {
    children: JSX.Element | JSX.Element[];
  }) => {

    const [height, setHeight] = useState(headerHeightInitial);

    const handdleHeight = (e: React.ReactEventHandler<HTMLDivElement>)=>{
        
    }

};





