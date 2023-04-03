import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LoginComponent from './components/logincomponent';

function SignUp() {
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <LoginComponent/>
    </div>
  );
}

export default SignUp;