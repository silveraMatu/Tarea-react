import { Button } from "../index.components"
import "./Form.css"

export const Form = ({inputs, onChangeEvent, onSubmit, buttonLabel}) => {
  return (
    <form className="login-register" onSubmit={onSubmit}>
    {inputs.map(({id, type, name, value}) =>{
      return <input onChange={onChangeEvent} key={id} type={type} name={name} value={value} placeholder={name} required/>
    }
    )}
    <Button label={buttonLabel}/>
    </form>
  )
}
