import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setBackgroundProyectsHeight } from "../../state/proyectsBackground/backgroundProyectHeight";

export const BackgroundColourBalls = ({ className }: { className: string }) => {
  const homeSectionHeight = useSelector(
    (state: RootState) => state.homeSectionHeight
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const backgroundColourBalls = document.getElementById(
      "background-proyects"
    );

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        dispatch(
          setBackgroundProyectsHeight({
            value: parseFloat(getComputedStyle(entry.target).height),
          })
        );
      });
    });

    resizeObserver.observe(backgroundColourBalls!);

    return () => {
      resizeObserver.unobserve(backgroundColourBalls!);
    };
  }, []);

  return (
    <>
      <style>{`
      
        #background-proyects{
            z-index: -1;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 4.5fr 1fr 2.5fr;
            align-items: strech;
            top:10%;
            left:50%;
            transform: translateX(-50%);
            -overflow: visible;
          }    
  
        #background-proyects>div{
            position: relative;
            -overflow: hidden;
          }
  
        #background-proyects>div>svg{
            position: relative;
            aspect-ratio: 1/1;
  
          }
  
          #purple-to-red-container{
            grid-column: 1;
            grid-row: 1 span 1;
          }
  
          #purple-to-red{
            width: 18rem;
            left: -10%;
          }
  
          #cyan-to-blue-container{
            grid-column: 2;
            grid-row: 1/-2;
            
          }
  
          #cyan-to-blue{
            top: 37%;
            width: 13rem;
            transform: translate(-50%);
            left: 50%; 
          }
  
  
          #green-to-blue-container{
  
          }
  
          #green-to-blue{
            width: 14rem;
            left: 40%
          }
  
          #blue-to-green-container{
            grid-column:1;
            grid-row: 2/-1;
          }
  
          #blue-to-green{
            width: 13rem;
            left: 15%;
            top: 10%;
          }
  
          #magenta-to-purple-container{
            grid-column:3;
            grid-row: 2/-1;
          }
  
          #magenta-to-purple{
            width: 12rem;
            left: 30%
          }
  
  
          @media screen and (max-width: 540px){
            #background-proyects{
                grid-template-columns: repeat(3, 1fr);
                transform: translateX(-50%)
              }
  
              #blue-to-green{
                width: 12rem;
              }
  
              #purple-to-red{
                width: 16rem;
                left: -40%;
              }
            }
    
        @media screen and (max-height: 200px){
          #background-proyects{
              grid-template-rows: 1fr;
              transform: translateX(-80%);
              overflow: hidden;
            }
          }
    
          @media screen and (max-height: 500px){
          #background-proyects{
                grid-template-rows: 1fr;
                transform: translateX(-50%);
                overflow: hidden;            
            }          
    
          }
  
          #background-proyects{
            ${
              window.visualViewport &&
              homeSectionHeight < window.visualViewport.height * 0.6
                ? `grid-template-rows: 1fr; overflow: hidden;`
                : ""
            }
            
          } 
  
  
  
      `}</style>
      <div
        id="background-proyects"
        className={`${className} -border-2 border-blue-700 h-full w-full auto-rows-[0] auto-cols-[0] overflow-x-hidden overflow-y-hidden`}
      >
        <div id="purple-to-red-container">
          <svg
            id="purple-to-red"
            viewBox="0 0 480 481"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="240"
              cy="240.501"
              r="240"
              fill="url(#paint0_linear_388_11)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_388_11"
                x1="428.122"
                y1="97.4447"
                x2="38.7773"
                y2="415.523"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F97A7A" />
                <stop offset="1" stopColor="#3951C2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div id="cyan-to-blue-container">
          <svg
            id="cyan-to-blue"
            className="ball-background"
            viewBox="0 0 398 399"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="199"
              cy="199.501"
              r="199"
              fill="url(#paint0_linear_388_8)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_388_8"
                x1="354.985"
                y1="80.8836"
                x2="32.1529"
                y2="344.624"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3951C2" />
                <stop offset="1" stopColor="#58E1FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div id="green-to-blue-container">
          <svg
            id="green-to-blue"
            className="ball-background"
            viewBox="0 0 414 413"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="207"
              cy="206.501"
              r="206"
              transform="rotate(-125.703 207 206.501)"
              fill="url(#paint0_linear_388_9)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_388_9"
                x1="368.472"
                y1="83.7111"
                x2="34.2837"
                y2="356.729"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFD1" />
                <stop offset="1" stopColor="#3951C2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div id="blue-to-green-container">
          <svg
            id="blue-to-green"
            className="ball-background"
            viewBox="0 0 255 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="127.5"
              cy="128.001"
              r="127.5"
              transform="rotate(-35.9339 127.5 128.001)"
              fill="url(#paint0_linear_388_12)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_388_12"
                x1="232.246"
                y1="153.953"
                x2="37.6107"
                y2="73.466"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFB3" />
                <stop offset="1" stopColor="#3951C2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div id="magenta-to-purple-container">
          <svg
            id="magenta-to-purple"
            className="ball-background"
            viewBox="0 0 336 335"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="168"
              cy="167.502"
              r="167"
              transform="rotate(78.1702 168 167.502)"
              fill="url(#paint0_linear_388_10)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_388_10"
                x1="298.902"
                y1="67.9579"
                x2="27.9825"
                y2="289.288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3951C2" />
                <stop offset="1" stopColor="#FF00C7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};
