import { useContext, useEffect } from "react"
import { AlertContext } from "../Contexts/AlertContext"

export const Warnings = ()=>{
    const alertContext = useContext(AlertContext)
    function displaynone() {
        let a = document.querySelectorAll('.div')[0]
        if (a) {
            a.classList.add('displaynone')
        }
    }

    useEffect(()=>{
        let a = document.querySelectorAll('.displaynone')[0]
        if(a){
            a.classList.remove("displaynone")
        }
        const timer = setTimeout(()=>{
            displaynone()
        }, 1115000) 

        return () => clearTimeout(timer);
    }, [alertContext?.alert])
    return(
        <>
            {alertContext?.alert && 
                <div className="div fixed p-8 border shadow-md z-50 text-black rounded bg-yellow-200 mt-2">
                    <h2>{alertContext.alert}</h2>
                    <button onClick={displaynone} className="p-1 bg-blue-700 rounded sticky left-3/4">Entendi</button>
                </div>
            }
        </>
    )
}
