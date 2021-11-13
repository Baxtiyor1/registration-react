import { useContext } from "react";
import { Context } from "../context/themeContext";

function useTheme(){

    let {theme, setTheme} = useContext(Context)

    return [theme, setTheme]
}

export default useTheme