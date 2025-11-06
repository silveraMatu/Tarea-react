import { useNavigate, Link } from "react-router"
import { Form } from "../components/index.components.js"
import { useForm } from "../hooks/useForm.js"

const initialValue = [
    {id: "1", type:"text", name:"Username", value: ""},
    {id: "2", type:"password", name:"Password", value: ""}
  ]
export const LoginPage = () => {

  const navigate = useNavigate()
  const [form, handleChange, handleReset] = useForm(initialValue)

  const onSubmit = (e)=>{
    e.preventDefault()
    handleReset()
    localStorage.setItem("isLogged", true)
    localStorage.setItem("username", form[0].value)
    navigate("/home")
  }

  return (
    <>
      <Form onSubmit={onSubmit} inputs={form} onChangeEvent={handleChange} buttonLabel={"Sign in"}/>
      <Link to="/register">No tenes una cuenta?</Link>
    </>
  )
}