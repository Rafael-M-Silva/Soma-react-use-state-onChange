import { useState } from "react"

export default function Soma() {
    const [soma, setSoma] = useState()
    const [inputn1, setInputn1] = useState("")
    const [inputn2, setInputn2] = useState("")
    
    function handleChange(e) {
        const value = e.target.value
        const expressRegular1 = value.replace(/[^0-9]/g, "")
        
        setInputn1(expressRegular1)
    }
    
    function handleChange2(e) {
        const value = e.target.value;
        const expressRegular2 = value.replace(/[^0-9]/g, "")

        setInputn2(expressRegular2)
    }

        
    function somar() {
        let valor1 = Number(inputn1)
        let valor2 = Number(inputn2)
        setSoma(valor1+valor2)
    }

    return (
        <div>
            <h1>Soma</h1>
            <div>
                <label>n1: </label>
                <input 
                type="text" 
                placeholder="1º n" 
                value={inputn1}
                onChange={handleChange}/>
            </div>
            <div>
                <label>n2: </label>
                <input 
                type="text"
                placeholder="2º n" 
                value={inputn2}
                onChange={handleChange2}/>
            </div>
            {
                inputn1.length > 0 || inputn2.length > 0 ? (
                    <p>{inputn1} + {inputn2} = {soma}</p>
                ) : (
                    <p>Faça sua soma!</p>
                )
            }
            <button onClick={somar}>Somar</button>
        </div>
    )
}