import {BarChart, Bar, XAxis, Cell, Tooltip} from 'recharts';
import { useState, useEffect } from 'react';
import data from '../data.json';
export default function(){
  const [position, setPosition] = useState(null);
  const [focusBar, setFocusBar] = useState(null);

  useEffect(() => {
    const tooltip = document.querySelector(".recharts-tooltip-wrapper");
    if (!tooltip) return;
    // Init tooltip values
    const tooltipHeight = tooltip.getBoundingClientRect().height;
    const tooltipWidth = tooltip.getBoundingClientRect().width;
    const spaceForLittleTriangle = 10;

    // Rewrite tooltip styles
    tooltip.style = `
      transform: translate(${position?.data.x}px, ${position?.data.y}px);
      pointer-events: none;  position: absolute;
      top: -${tooltipHeight + spaceForLittleTriangle}px;
      left: -${tooltipWidth / 2 - position?.data.width / 2}px;
      opacity: ${position?.show ? "1" : 0};
      transition: all 400ms ease 0s;
      font-size: 14px;
      color: hsl(27, 66%, 92%);
      border: none;
      background-color: hsl(25, 47%, 15%);
      padding: 5px;
      border-radius: 5px;
    `;
  }, [position]);
  const colors = ["hsl(10, 79%, 65%)","hsl(186, 34%, 60%)", "#f7c5bb", "#bbdadd"]
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`$${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };
  const barrer = (state) =>{
    setPosition({ data: state, show: true });
      setFocusBar(state.activeTooltipIndex);
  }
  const baroff = (state)=>{
    setPosition({ data: state, show: false })
    setFocusBar(null)
  }
        return(
        <BarChart width={350} height={200} data={data}>
             <XAxis dataKey="day" stroke={0} tick={{fill: "hsl(28, 10%, 53%)"}}/>
            <Bar dataKey="amount" barSize={40} fill="hsl(10, 79%, 65%)" radius={5} onMouseMove={(state) => barrer(state)}
                onMouseLeave={baroff}>
              {
                  data.map((e,i)=>{
                    let color;
                    if(!focusBar)
                    {color = e.day == "wed"? colors[1]:colors[0];}
                    else{
                            color = focusBar == i && e.day == "wed"? colors[3]:colors[2];
                    }
                    
                    return <Cell fill={color}></Cell>
                  })
              }
            </Bar>
            <Tooltip cursor={false} 
                      content={<CustomTooltip />}
                            position={{
                              x: position?.data.x ?? 0,
                              y: position?.data.y ?? 0
                            }}
            />
            
          </BarChart>
        )
            }