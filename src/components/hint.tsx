"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"

interface HintProps{
    label:string;
    children:React.ReactNode;
    side?:"top" | "bottom" | "left" | "right";
    align?:"start" | "center" | "end";
}
export const  Hint = ({label,children,side,align}:HintProps)=>{
  return(
    <TooltipProvider>
        <Tooltip delayDuration={50}>
        <TooltipTrigger>
            {children}
        </TooltipTrigger>
        <TooltipContent side={side} align={align} className="bg-black text-white border-white/5">
        <p className="font-medium text-xs">
            {label}
        </p>

        </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}