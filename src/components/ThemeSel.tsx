export default function ThemeSel(){
    return (
        <div className="themeWrapper theme1"> 
            <p>Theme</p>
            
            <div className="themebg theme1">
                <div><span id="themeSel" className="theme1"></span></div>
                <span onClick={() => {changeTheme(1)}}><span>1</span></span>
                <span onClick={() => {changeTheme(2)}}><span>2</span></span>
                <span onClick={() => {changeTheme(3)}}><span>3</span></span>
            </div>
        </div>
    )
}

let currentTheme: number = 1;
function changeTheme(theme: number){
    for(const elem of document.querySelectorAll(`.theme${currentTheme}`)){
        elem.classList.remove(`theme${currentTheme}`)
        elem.classList.add(`theme${theme}`)
    }
    currentTheme = theme;
    const themeSel = document.getElementById('themeSel') as HTMLElement
    themeSel.style.left = `${theme * 33}%`
}