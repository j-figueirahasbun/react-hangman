//The first thing we need is a list of all the different keys we can type out

import { KeyboardEvent } from "react";
import styles from "./Keyboard.module.css";

const keys = ["a", 
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z",
]

type KeyboardProps = { 
    disabled: boolean
    activeLetter: string[]
    inactiveLetters: string[]
    addGuessedLetter : (letter:string) => void
    
}

export function Keyboard({activeLetter, inactiveLetters, addGuessedLetter, disabled = false} : KeyboardProps){
    return <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", 
        gap: ".5rem",
    }}
    >
        {keys.map(key => {
            const isActive = activeLetter.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return (
                <button 
                onClick={() => addGuessedLetter(key)}
                className ={ 
                    `${styles.btn} 
                    ${isActive ? styles.active : ""}
                    ${isInactive ? styles.inactive : ""}`}
                    disabled = {isInactive || isActive || disabled} 
                    key = {key}>
                        {key}
                </button> //included styles.btn in classname for css in module
            )
        })}


    </div>
}