import { useForm } from "../hooks/useForm"

const initialValue = {
  username: "",
  email: "",
  password: "",
  firstname: "",
  lastname: ""
}

export const Register = ()=>{
  const [form, handleChange, handleReset] = useForm(initialValue)
  const {username, email, password, firstname, lastname} = form

  const handleSubmit = (e)=>{
    e.preventDefault()
    handleReset()
    console.log(form)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" name="username" placeholder="username" value={username}/>
      <input onChange={handleChange} type="email" name="email" placeholder="email" value={email}/>
      <input onChange={handleChange} type="password" name="password" placeholder="password" value={password}/>
      <input onChange={handleChange} type="text" name="firstname" placeholder="firstname" value={firstname}/>
      <input onChange={handleChange} type="text" name="lastname" placeholder="firstname" value={lastname}/>
      <button>Submit</button>
    </form>
  )
}