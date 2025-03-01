import React from "react"

export const Card = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="w-full shadow-sm  bg-card rounded-lg flex flex-col gap-4 p-6">
            {children}
        </div>
    )
}