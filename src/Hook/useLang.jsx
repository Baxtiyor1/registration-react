import { useContext } from "react";
import { LangContext } from "../context/langContext";

function useLang(){

    let {lang, setLang} = useContext(LangContext)

    return [lang, setLang]
}

export default useLang