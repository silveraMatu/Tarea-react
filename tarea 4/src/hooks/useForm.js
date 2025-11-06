import {useState } from "react";

export const useForm = (initialValue)=>{
    const [form, setForm] = useState(initialValue)

    const handleChange = (e)=>{
        const {name, value} = e.target 
        console.log(name)
        const newState = form.map(fields=>(
          fields.name == name ? {...fields, value: value} : fields
        ))

        setForm(newState)
        }

        const handleReset = ()=>{
            setForm(initialValue)
        }
        
        return [form, handleChange, handleReset]
      }