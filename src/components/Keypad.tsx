import Key, { KeyType } from "./Key"

export default function Keypad() {
    return (
        <main className="keypad theme1">
            <Key char='7' />
            <Key char='8' />
            <Key char='9' />
            <Key char='DEL' type={KeyType.MEMORY}/>

            <Key char='4' />
            <Key char='5' />
            <Key char='6' />
            <Key char='+' />

            <Key char='1' />
            <Key char='2' />
            <Key char='3' />
            <Key char='-' />

            <Key char='.' />
            <Key char='0' />
            <Key char='/' />
            <Key char='x' />

            <Key char='RESET' wide={true} type={KeyType.MEMORY} />
            <Key char='=' wide={true} type={KeyType.EVAL} />
        </main>
    )
}