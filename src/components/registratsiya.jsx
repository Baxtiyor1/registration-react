import {useState, useRef, useEffect} from 'react';
import useTheme from '../Hook/useTheme';
import useLang from '../Hook/useLang';
import './registratsiya.scss'
import language from './context'

function Register(){
    // Context
    let [theme, setTheme] = useTheme()
    let [lang, setlang] = useLang()
    
    // useState
    let [name, setName] = useState('')
    let [password, setPassword] = useState('')
    let [disabled, setdisabled] = useState(true)
    let [status, setStatus] = useState()
    
    //useRef
    let light = useRef()
    let correctText = useRef()
    let correctPass = useRef()
    let btnForm = useRef()
    let statusText = useRef()
    
    // API post
    async   function fetchRender(){
        let response = await fetch("https://reqres.in/api/register", {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: name,
            password: password
        })
    })
    let data = response
    setStatus(data)
    
    if(status === 200){
        statusText.current.textContent = 'Muvofaqqiyatli qabul qilindingiz'
    }
}

// useEffect at input value
useEffect(() =>{
    if(name === 'eve.holt@reqres.in'){
        correctText.current.textContent = language[lang].correct
    }else{
        correctText.current.textContent = ''
    }
    if(password === 'pistol'){
        correctPass.current.textContent = language[lang].correct
    }else{
        correctPass.current.textContent = ''
    }
    if(password === 'pistol' && name === 'eve.holt@reqres.in'){
        setdisabled(false)
    }else{
        setdisabled(true)
    }
}, [name, password,lang])


return(
    <div className={`wrapper ${theme}`}>
    
    <header className={`header ${theme}`}>
    <div className="header__box">
    <select className={`header__select ${theme}`} onChange={(e) => 
        setlang(e.target.value)
    } defaultValue={lang}>
    <option value="uz">UZ</option>
    <option value="ru">RU</option>
    <option value="eng">ENG</option>
    </select>
    <select className={`header__theme ${theme}`} onChange={(e)=>{
        setTheme(e.target.value)
    }} defaultValue={theme}>
    <option value="light">light</option>
    <option value="dark">dark</option>
    </select>
    </div>
    <p className={`header__text ${theme}`}>{language[lang].title}</p>
    </header>
    
    
    <form className={`form ${theme}`} onSubmit={(e) =>{
        e.preventDefault()
        fetchRender()
    }}>
    <h1 className={`form__title ${theme}`}>{language[lang].subtitle}</h1>
    <input className={`form__input ${theme}`} ref={light} type="Email" onChange={(e) => setName(e.target.value)} placeholder={language[lang].email}/>
    <p ref={correctText} className='form__subtext'></p>
    <input className={`form__input ${theme}`} type="password" onChange={(e) => setPassword(e.target.value)} placeholder={language[lang].password}/>
    <p ref={correctPass} className="form__subtext"></p>
    <button ref={btnForm} className={`form__btn ${theme}`} disabled={disabled}> {disabled ? language[lang].btndes : "click" }</button>
    <p ref={statusText} className="form__status"></p>
    </form>
    </div>
    )  
}

export default Register