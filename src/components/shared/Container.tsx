import React, {PropsWithChildren} from "react"
export function Container({children}: PropsWithChildren){
  return(
    <div className="px-[10%] min-h-screen">
      {children}
    </div>
  )
}