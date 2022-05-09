import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Corpo(){
    const [senha,setSenha] =useState('');
    const [email,setEmail] =useState('');
    const [nome,setNome] =useState('');
    const [csenha,setCsenha] =useState('');
    const chave=0
    function criar(){
        const response =axios.post("http://localhost:5000/cadastro", {email:email,senha:senha,confirmarSenha:csenha,nome:nome}).then(res => {
            
            alert('conta criada')
            console.log(res)
    })
    }
    return (
        <>
         <div className='logo'>
            <div >
                <img src='MyWallet.png'></img>
            </div>
        </div>
        <div className="pag2">
        <div><input className="inp" placeholder='nome'  type ='text' onChange={(e) => setNome(e.target.value)} value={nome} /></div>
        <div><input  className="inp"  placeholder='Senha' type ='text' onChange={(a) => setSenha(a.target.value)} value={senha}/></div>
        <div><input className="inp" placeholder='E-mail'  type ='text' onChange={(i) => setEmail(i.target.value)} value={email}/></div>
        <div><input  className="inp"  placeholder='confirmar Senha' type ='text' onChange={(c) => setCsenha(c.target.value)} value={csenha}/></div>
        <div><button className='but' onClick={(criar)}>Cadastrar </button>  </div>
        <Link to={`${  chave=== 0 ? '/' : '/Inicio'} `}><p className='text'> Primeira vez? Entre agora!</p></Link>
        
        </div>
        </>
    )
}