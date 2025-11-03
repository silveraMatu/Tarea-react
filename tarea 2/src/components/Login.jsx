import { useForm } from "../hooks/useForm"

const initialValue = {email: "", password: ""}

export const Login = ({onLogin})=>{
  const [form, handleChange, handleReset] = useForm(initialValue)
  const {email, password} = form

  const handleSubmit = (e)=>{
    e.preventDefault()
    onLogin(email)
    handleReset() 
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="email" name="email" placeholder="email" value={email}/>
      <input onChange={handleChange} type="password" name="password" placeholder="password" value={password}/>
      <button>Submit</button>
    </form>
  )
}