import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function HeroOrbit({
  children,
  size,
  rotation,
  orbitDuration,
  spinDuration,
  shouldOrbit = false,
  shouldSpin = false,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: string;
  shouldOrbit?: boolean;
  spinDuration?: string;
  shouldSpin?: boolean;
}>) {
  return (
    <div className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 ">
      <div
        className={twMerge(shouldOrbit == true && "animate-spin")}
        style={{ animationDuration: orbitDuration }}
      >
        <div
          className="flex items-start justify-start  "
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }} 
        >
          <div className={twMerge(shouldSpin==true && "animate-spin")} style={{animationDuration:spinDuration}}>
            <div className=" inline-flex ">{children}</div> 
          </div>
        </div>
      </div>
    </div>
  );
}