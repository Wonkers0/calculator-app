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
    return (
        <div className={`key theme1 ${wide ? "wideKey" : ""} ${type}`}>{char}</div>
    )
}