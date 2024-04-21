import './Faq.css'
import React from "react"
import { useState, useEffect } from 'react';

function Faq(){
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const handleQuestionClick = (itemId) => {
        setSelectedQuestion(itemId === selectedQuestion ? null : itemId);

    };
    return(
        <div class='Faq-Container'>
            <div class='Faq-Content'>
                <div class='Faq-Content-Description'>
                    <div class='Faq-Content-Title'>
                        <div>

                        </div>
                        <h1>
                            Često postavljana pitanja!
                        </h1>
                    </div>
                    <p>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <button class='Contact-Button'>
                        Kontakt<span>➜</span>
                    </button>
                </div>
                <div class='Faq-Content-Title-Questions'>
                    <div class='Faq-Questions-Wrap'>
                        <div class='Faq-Item' id="First-Item" > 
                            <div className='Faq-Item-Question'>
                                <h1>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                                </h1>
                                <span className={selectedQuestion === 'First-Question' ? 'Show close' : 'Show'}  onClick={() => handleQuestionClick('First-Question')}>
                                    ✢
                                </span>
                            </div>
                           
                            <div className={selectedQuestion === 'First-Question' ? 'Answer open' : 'Answer'}>
                                <h2>This is answer to the question bitch</h2>
                            
                            </div>
                        </div>
                        <div class='Faq-Item' id="Second-Item">
                            <div className='Faq-Item-Question'>
                                <h1>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                                </h1>
                                <span  className={selectedQuestion === 'Second-Question' ? 'Show close' : 'Show'} onClick={() => handleQuestionClick('Second-Question')}>
                                    ✢
                                </span>
                            </div>
                            <div className={selectedQuestion === 'Second-Question' ? 'Answer open' : 'Answer'}>
                                <h2>This is answer to the question bitch</h2>
                            
                            </div>
                        </div>
                        <div class='Faq-Item' id="Third-Item">
                            <div className='Faq-Item-Question'>
                                <h1>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                                </h1>
                                <span className={selectedQuestion === 'Third-Question' ? 'Show close' : 'Show'}  onClick={() => handleQuestionClick('Third-Question')}>
                                    ✢
                                </span>
                            </div>
                            <div className={selectedQuestion === 'Third-Question' ? 'Answer open' : 'Answer'}>
                                <h2>This is answer to the question bitch</h2>
                            
                            </div>
                        </div>
                        <div class='Faq-Item' id="Fourth-Item">
                            <div className='Faq-Item-Question'>
                                <h1>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                                </h1>
                                <span className={selectedQuestion === 'Fourth-Question' ? 'Show close' : 'Show'}  onClick={() => handleQuestionClick('Fourth-Question')}>
                                    ✢
                                </span>
                            </div>
                            <div className={selectedQuestion === 'Fourth-Question' ? 'Answer open' : 'Answer'}>
                                <h2>This is answer to the question bitch</h2>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faq;