import { form } from 'framer-motion/client';
import { Check, Search } from 'lucide-react';
import React, { useState } from 'react';

function PlannerContainer({ children }) {
    return (
        <div className="w-[90%] border rounded-2xl flex">
            <aside className="w-[20%] bg-secondary/60 rounded-l-2xl flex flex-col items-center">
                <div className="w-full h-16 flex items-center gap-5 justify-center">
                    <div className="w-7 h-7 rounded-full border border-primary flex items-center justify-center">
                        <Check className="text-primary" />
                    </div>
                    <h1 className="text-xl text-primary">Mes Itinéraires</h1>
                </div>
                <ul className="w-full bg-secondary/40 rounded-t-xl flex flex-col">
                    <Tabs active={true} className="rounded-t-xl">Mon Itinéraire 1</Tabs>
                    <Tabs>Mon Itinéraire 2</Tabs>
                    <Tabs>Mon Itinéraire 3</Tabs>
                    <Tabs>Mon Itinéraire 4</Tabs>
                </ul>
            </aside>
            <main className="w-full h-full border rounded-r-xl p-10 border-primary">
                {children}
            </main>
        </div>
    );
}

export default PlannerContainer;

// Tabs component
const Tabs = ({ active, children, className }) => {
    return (
        <li
            className={`text-primary gap-3 justify-between cursor-pointer h-16 flex items-center px-5 ${active ? `bg-secondary ${className}` : className}`}
        >
            {children}
            {active && <div className="w-3 h-3 bg-blue-600 rounded-full"></div>}
        </li>
    );
};

