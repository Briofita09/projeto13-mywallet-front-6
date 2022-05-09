import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function Inicio(props){
    const {token} =props 
 
    //axios.get("http://localhost:5000/cadastro").then(res => {
     //   console.log(res)
   // })
    
    function tempo(){
        
            console.log('aqui :', token[0])
            const usuarioLogado =  axios.get("http://localhost:5000/objetos", {
              headers: {Authorization: `Bearer ${token[0]}`}
            });
            usuarioLogado.then(res => {
                
                console.log(res)
            })
        }
       
        setTimeout(tempo, 5000);
    
   /*
      useEffect(() => {
        (async () => {
          try {
            const usuarioLogado = await axios.get("http://localhost:5000/objetos", {
              headers: {Authorization: `Bearer ${token[0]}`}
            });
            console.log("Dados vindos da API", usuarioLogado);
         
          } catch(e) {
            alert("ocorreu um erro");
            console.log(e.response);
          }
        })();
      },[])
     */
    return(
        <>
        <div className="inicionome">
            <p className="nome">olá, nome</p>
        </div>
        <div>
            <div className="caixa"></div>
        </div>
        <div className="caixas">
        <Link to='/Entrada'> <div className="box">
                <p>nova entrada</p>
            </div></Link>
            <Link to='/Saida'><div className="box">
                <p>nova saida</p>
            </div></Link>
            
            
        </div>
       
        </>
    )
} 