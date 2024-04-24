'use client'
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

import { WordType } from "@/data/types"

export default function WordCard({word}: {word: WordType}){

    const [isPlaying, setIsPlaying] = useState(false);

    const audioHoverHandler = () => {
        const audioElement = new Audio(word.pronunciation.audio);
        audioElement.play();
        audioElement.addEventListener('ended', () => {
            setIsPlaying(false);
        });
        setIsPlaying(true);
    };

    if(!word.image.trim()) word.image = "/assets/images/placeholder.webp"

    return (
        <div key={word.english} className="group relative bottom-0 scale-100 flex flex-col rounded-md border border-border max-w-[90%] w-96 sm:max-w-72 sm:min-w-72 overflow-hidden bg-card hover:bottom-1 hover:scale-[1.01] transition-all duration-200" >
            <button className=" relative min-w-full " onClick={audioHoverHandler}>
                <img src={word.image} alt={`Representative image of the word ${word.english}`} className=" min-w-full aspect-square object-cover bg-muted" />
                <div className=" absolute top-0 left-0 flex flex-col justify-center items-center gap-2 w-full h-full bg-muted/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-speech w-1/3 h-1/3 drop-shadow-md shadow-black"><path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"/><path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"/><path d="M17 15a3.5 3.5 0 0 0-.025-4.975"/></svg>
                    <span className=" text-sm drop-shadow-md shadow-black">Click here to listen</span>
                </div>
            </button>
            <div className="flex flex-col gap-2 p-3 min-w-full text-left">
                <div className=" flex flex-col items-center w-full">
                    <span className=" text-2xl font-semibold">{word.english}</span>
                    <span className=" text-sm opacity-50">{word.pronunciation.written}</span>
                </div>                                 
                <div className=" flex flex-col">
                    <span className=" font-semibold">Examples: </span>
                    <span className=" text-sm text-pretty">{word.examples[0]}</span>
                    <span className=" text-sm text-pretty">{word.examples[1]}</span>
                </div>
            </div>
        </div>
    )

}