import React, { useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
import TextareaAutosize from "react-textarea-autosize";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    chatHistory,
  } = useContext(Context);

  const CodeBlock = ({ language, value }) => {
    const copyToClipboard = () => {
      navigator.clipboard.writeText(value).then(() => {
        alert('Code copied to clipboard!');
      });
    };
  
    return (
      <div style={{ position: 'relative' }}>
        <button
          onClick={copyToClipboard}
          style={{
            position: 'absolute',
            right: '10px',
            top: '10px',
            background: 'lightgray',
            border: 'none',
            cursor: 'pointer',
            padding: '5px',
          }}
        >
          Copy
        </button>
        <SyntaxHighlighter language={language} style={oneLight}>
          {value}
        </SyntaxHighlighter>
      </div>
    );
  };

  const resultContainerRef = React.useRef(null);

  useEffect(() => {
    if (resultContainerRef.current) {
      resultContainerRef.current.scrollTop = resultContainerRef.current.scrollHeight;
    }
  }, [chatHistory, resultData]);

  return (
    <div className="main flex-1 min-h-[100vh] relative">
      <div className="flex items-center justify-between  text-[22px] p-[15px] text-green-950 border-b-2 border-black">
        <img src={assets.sapient_logo} className="w-36" alt=""  />
        <img src={assets.user_icon} className="w-[40px] rounded-full" alt="" />
      </div>
      <div className="main-container max-w-[900px] m-auto  ">
        {!showResult ? (
          <>
            <div className="my-[10px] text-[56px] text-slate-400">
              <p className="-my-1">
                <span className="bg-gradient-to-r  from-blue-500 to-red-600 bg-clip-text text-transparent">
                  Hello,dave
                </span>
              </p>
              <p>How Can I help you Today?</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="card">
                <p>Sugggest beatiful place to se on an upcoming road trip</p>
                <img src={assets.compass_icon} className="w-[40px]" alt="" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, quod.
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fuga, dolorum?
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fuga, dolorum?
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div ref={resultContainerRef} className="result px-[5%] max-h-[70vh] overflow-y-scroll">
            {chatHistory?.map((item) =>(
              <>
                <div key={item} className="result-title my-[40px] flex flex-row-reverse text-right justify-start  items-center gap-[20px]">
                <img
                  src={assets.user_icon}
                  alt=""
                  className="rounded-full w-[40px]"
                />
                <p
                className='border border-black shadow-dark px-4 py-2 bg-blue-400 rounded-base'
                >
                  {item.prompt}
                </p>
              </div>
              <div className="result-data flex items-start gap-[20px]">
              <img src={assets.gemini_icon} alt="" className="w-[40px]" />
             
                  <div>
                    {/* <ReactMarkdown></ReactMarkdown> */}
                    <ReactMarkdown
                     className='border border-black shadow-dark px-4 py-2 bg-blue-400 rounded-base'
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || "");
                          return !inline && match ? (
                            <CodeBlock
                              language={match[1]}
                              value={String(children).replace(/\n$/, "")}
                            />
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                      }}
                    >
                      {item.response}
                    </ReactMarkdown>
                  </div>
              </div>
              </>
            ) )}
           
            <div className="result-title my-[40px] flex flex-row-reverse text-right justify-start  items-center gap-[20px]">
              <img
                src={assets.user_icon}
                alt=""
                className="rounded-full w-[40px]"
              />
              <p
               className='border border-black shadow-dark px-4 py-2 bg-blue-400 rounded-base'
              >
                {recentPrompt??'...'}
              </p>
            </div>
            <div className="result-data flex items-start gap-[20px]">
              <img src={assets.gemini_icon} alt="" className="w-[40px]" />
             
              {
                loading ? (
                  <div className="loader w-full flex flex-col gap-[10px]">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <div>
                    {/* <ReactMarkdown></ReactMarkdown> */}
                    <ReactMarkdown
                     className='border border-black shadow-dark px-4 py-2 bg-blue-400 rounded-base mb-2'
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || "");
                          return !inline && match ? (
                            <CodeBlock
                              language={match[1]}
                              value={String(children).replace(/\n$/, "")}
                            />
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                      }}
                    >
                      {resultData}
                    </ReactMarkdown>
                  </div>
                )
                // <p
                // // className='border border-black px-4 py-2 bg-blue-400 rounded-full'
                // dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
            </div>
          </div>
        )}

        <div className="main-bottom absolute bottom-0 w-full   max-w-[900px] px-[20px] m-auto">
          <div className="flex items-center justify-between gap-[20px] shadow-light border-black border-2 bg-[#f0f4f9] px-[20px] py-[10px] rounded-lg text-[18px]">
            {/* <input  type="text"  placeholder='Enter a Prompt here' /> */}
            <TextareaAutosize
              onChange={(e) => setInput(e.target.value)}
              value={input}
              style={{ resize: "none" }}
              className=" no-resize flex-1 bg-transparent border-none outline-none p-[8px]"
              maxRows={4}
              placeholder="Enter a Prompt here"
            />

            <div className="flex gap-2">
              {!loading?<img src={assets.send_icon} onClick={() => onSent()} alt="" />:
             null}
              
            </div>
          </div>
          <p className="text-[13px] text-center my-[15px] mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            et, placeat atque reiciendis nesciunt minus eligendi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
