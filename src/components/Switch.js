import { Form } from 'react-bootstrap';
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const Switch = ({darkMode, setDarkMode}) => {
  
  return (
    <Form className='d-flex align-items-center'>
      <MdSunny className='mx-2' />
      <Form.Check
        type="switch"
        id="custom-switch"
        checked={darkMode}
        onChange={()=>{localStorage.setItem("mode", darkMode? false:true);setDarkMode(!darkMode);}}
      />
      <FaMoon className='mx-1'/>
    </Form>
  );
}

export default Switch;