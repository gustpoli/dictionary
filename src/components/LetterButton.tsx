'use client'

import Link from "next/link"
import Button from "./Button"

import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'

interface LetterButtonProps{
    letter: string
}

export default function LetterButton({letter}: LetterButtonProps){

    const [active, setActive] = useState<boolean>(false)
    const pathname = usePathname()

    useEffect(() => {
        if(pathname === `/${letter}`) setActive(true)
        else setActive(false)
    }, [letter, pathname])

    return (
        <Link key={letter} href={`${active ? "/" : "/"+letter}`}>
            <Button variant="ghost" size="icon" className={`${active ? " bg-secondary hover:bg-secondary/85 font-bold" : " hover:bg-secondary/85 "} font-medium`}>
                {letter}
            </Button>
        </Link>
    )

}