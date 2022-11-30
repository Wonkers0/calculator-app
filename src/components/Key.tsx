import { MouseEventHandler } from "react"
import { setNum, setOp, storedNum, storedOperator } from "../main"

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

let store2ndNum: boolean = false;
export default function Key({ wide=false, char, type=KeyType.NUMERIC }: KeyProps){
    let onclick: Function = (e: MouseEventHandler, char: string) => {
        let operators = ['+', '-', 'x', '/']
        let txt = $('#result').text()
        if(!isNum(txt)) txt = ''

        if(!operators.includes(char)){
            if(char == 'DEL') setResult(txt.substring(0, txt.length - 1))
            else if(char == 'RESET') setResult('')
            else if(char == '=') evaluate()
            else{
                if(store2ndNum){
                    setNum(Number(txt))
                    setResult(char)
                    store2ndNum = false;
                } 
                else setResult(txt + char)
            } 
        }
        else{
            if(storedOperator == null) setNum(Number(txt))
            else evaluate()
            setOp(char)
            store2ndNum = true;
        }
    }

    return (
        <div className={`key theme1 ${wide ? "wideKey" : ""} ${type}`} onClick={(e) => {onclick(e, char)}}>{char}</div>
    )
}

function evaluate(){
    setResult(calc().toString())
    setNum(0)
    setOp(null)
}

function calc(): number {
    let num = Number($('#result').text())
    let returnVal
    switch(storedOperator){
        case "+": returnVal = storedNum + num; break
        case "-": returnVal = storedNum - num; break
        case "x": returnVal = storedNum * num; break
        case "/": returnVal = storedNum / num; break
        default: returnVal = num; break
    }

    return Number(returnVal.toFixed(15)) * 1 // 👈 Remove trailing zeros
}

const isNum = (num : string): boolean => {return !isNaN(Number(num)) && num != "Infinity"}

const setResult = (val: string) => {
    if(val.length == 2 && val != '0.') val = val.replace(/^[0\t]+/, '')
    $('#result').text(val == '' ? 0 : val)
}