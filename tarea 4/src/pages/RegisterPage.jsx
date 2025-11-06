import { Form } from "../components/index.components.js"
import { useForm } from "../hooks/useForm.js"
import {useNavigate, Link} from "react-router"

const initialValue = [
    {id: "3", type:"text", name:"Username", value: ""},
    {id: "4", type:"email", name:"Email", value: ""},
    {id: "5", type:"password", name:"Password", value: ""},
    {id: "6", type:"text", name:"Firstname", value: ""},
    {id: "7", type:"text", name:"Lastname", value: ""},
  ]
export const RegisterPage = () => {
  const navigate = useNavigate()

  const [form, handleChange, handleReset] = useForm(initialValue)

  const onSubmit = (e)=>{
    e.preventDefault()
    handleReset()
    navigate("/login")
  }

  return (
    <>
      <Form onSubmit={onSubmit} inputs={form} onChangeEvent={handleChange} buttonLabel={"Sign up"}/>
      <Link to="/login">Tenes una cuenta? Inicia sesion</Link>
    </>
  )
}