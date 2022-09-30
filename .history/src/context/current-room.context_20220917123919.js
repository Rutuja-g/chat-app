import { createContext } from "react";

const CurrentRoomContext = createContext();

export const CurrentRoomProvider= ({children,data})=>{
    return <CurrentRoomContext.Provider value={data}>{children</CurrentRoomContext.Provider>
}