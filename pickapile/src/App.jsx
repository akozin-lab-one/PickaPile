import './App.css'
import React, { useEffect, useState } from 'react'
import Main from './components/Main'
import {Routes, Route} from 'react-router'
import Questions from './components/Questions'
import { api } from './api/apiResource'
import Answer from './components/Answer'

const App = () => {
    const [questions, setQuestions] = useState();
    const[answers, setAnswers] = useState();
    const getQue = async()=>{
        const res = await api.get('/Questions');
        console.log(res.data);
        setQuestions(res.data);
    }
    useEffect(()=>{getQue()},[]);
    
    const getAns = async()=>{
        const res = await api.get('/Answers');
        console.log(res.data);
        setAnswers(res.data);
    }
    useEffect(()=>{getAns()},[]);

    return ( 
        <div> 
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/questions" element={<Questions questions={questions} answers={answers}/>}/>
                <Route path="/questions/:id/answers" element={<Answer questions={questions} answers={answers}/>}/>
            </Routes>
        </div>
    )
}


export default App