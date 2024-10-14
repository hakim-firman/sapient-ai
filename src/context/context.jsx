import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context=createContext();


const ContextProvider = ({children}) => {
    const [input,setInput]=useState('');
    const [recentPrompt,setRecentPrompt]=useState('');
    const [prevPromp,setPrevPrompt]=useState([]);
    const [showResult,setShowResult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [resultData,setResultData]=useState('');

    // const delayPara = (index,nextWord)=>{
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             resolve(index);
    //         },1000)
    //     })
    // }

    const onSent=async(prompt)=>{
        setResultData('');
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        const response=await run(input);
        // setResultData(`**${response}**`);
        setResultData(response);
        console.log('response:','sdsd')
        setLoading(false);
        setInput('');

    }

   

    const contextValue = {
        input,
        setInput,
        onSent,
        recentPrompt,
        setRecentPrompt,
        prevPromp,
        setPrevPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
