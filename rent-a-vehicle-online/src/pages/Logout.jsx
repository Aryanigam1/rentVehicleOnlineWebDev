import React, { useEffect,useContext } from 'react'
import {useNavigate} from "react-router-dom"

// import {UserContext} from  "../routers/Routers";

function Logout() {

    // const {state, dispatch} = useContext(UserContext);

    const history  = useNavigate();
    useEffect(() => {
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept: "application/json",
                "Content-Type" : "application/json"
            },
            credentials:"include"
        }).then((res)=>{

             dispatch({type:"USER", payload:false});
            history.push('/login', {replace: true});

            if(res.status !== 200)
            {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        })
    });
  return (
    <>
      <h1>Logout ka page</h1>
    </>
  )
}

export default Logout
