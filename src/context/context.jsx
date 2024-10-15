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
    const [chatHistory,setChatHistory]=useState([]);

    const delayPara = (index,nextWord)=>{
        setTimeout(()=>{
            setResultData((prev)=>prev+nextWord);
        },75*index)
    }

    const newChat=()=>{ 
       
        setShowResult(false);
        setLoading(false);
    }

    const onSent = async(prompt)=>{
        setResultData('');
        setLoading(true);
        setShowResult(true);
        let response;
        if(prompt != undefined)
        {
            response=await run(prompt);
            setRecentPrompt(prompt);
        }
        else
        {
            if (recentPrompt !== ''&&setResultData !== '') {
                // setPrevPrompt((prev) => [...prev, recentPrompt]);
                setChatHistory((prev) => [...prev, { prompt: recentPrompt, response: resultData }]);
            }
            response = await run(input);
            setRecentPrompt(input);
           

        }

       
        // const response=await run(input);
        // setResultData(`**${response}**`);
        // setResultData(response);


        let newResponseArray=response.split(" ");
        for(let i=0;i<newResponseArray.length;i++)
        {
            delayPara(i,newResponseArray[i]+' ');
        }
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
        setResultData,
        newChat,
        chatHistory,
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
