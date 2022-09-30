import { createContext } from "react";

const CurrentRoomContext = createContext();

export const CurrentRoomContext= ({children,data})=>{
    return <CurrentRoomContext.Provider value={data}>{children</CurrentRoomContext.Provider>
}