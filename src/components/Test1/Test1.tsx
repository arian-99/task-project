import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const schma=z.object({
    name:z.string().min(3,{message:'hrof bishtar'}).max(8,{message:'hrof kamtar'}),
    pass:z.string().min(8,{message:'ramz sade'})
})

type Checking=z.infer<typeof schma>;

const Test1=()=>{


    const[register,setRegister]=useState<Checking>()
  return (
    <form>
        <div>
            <label htmlFor="name">Name</label>
            <input id='name' type="text" />
        </div>
        <div>
             <label htmlFor="psss">Password</label>
             <input id='pass' type="password" />
        </div>
        <button> SABT</button>
    </form>
  );
}

export default Test1