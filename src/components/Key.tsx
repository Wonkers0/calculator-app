import { MouseEventHandler } from "react"

interface KeyProps {
    wide?: boolean,
    char: string,
    type?: KeyType
}

export enum KeyType{
    NUMERIC = "",
    MEMORY = "memory",
    EVAL = "eval"
}

export default function Key({ wide=false, char, type=KeyType.NUMERIC }: KeyProps){
    let onclick: Function = (e: MouseEventHandler, char: string) => {
        console.log(char);
    }

    return (
        <div className={`key theme1 ${wide ? "wideKey" : ""} ${type}`} onClick={(e) => {onclick(e, char)}}>{char}</div>
    )
}