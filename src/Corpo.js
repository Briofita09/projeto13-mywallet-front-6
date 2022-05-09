import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Corpo(props){
    const {token, setToken} =props 
    const [senha,setSenha] =useState('');
    const [email,setEmail] =useState('');
    
    
    function logar(){
        const response =axios.post("http://localhost:5000/login", {"email":email,"senha":senha}).then(res => {
            
            alert('conta logada')
            alert(res.data)
            token[0] =res.data
            setToken([...token])
            console.log(token[0])
    })
    }
    return (<>
        <div className='pag1'>
            <div >
                <img src='MyWallet.png'></img>
            </div>
           
        </div>
        <div className="pag2">
        <div><input className="inp" placeholder='E-mail' type ='text' onChange={(i) => setEmail(i.target.value)} value={email}/></div>
        <div><input  className="inp"  placeholder='Senha'  type ='text' onChange={(a) => setSenha(a.target.value)} value={senha}/></div>
        <Link to='/Inicio'><div><button className='but' onClick={logar}>Entrar </button>  </div></Link>

        <Link to='/cadastrar'><p className='text'> Primeira vez? Cadastre-se!</p></Link>
        </div>
        </>
        )
}