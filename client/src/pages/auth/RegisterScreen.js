// import { useState, useEffect } from 'react';
// import { Form, Button, Row, Col } from 'react-bootstrap';
// import FormContainer from './FormContainer';
// import Loader from './Loader';
// // import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRegisterMutation } from '../../redux/features/auth/usersApiSlice';
// import { setCredentials } from '../../redux/features/auth/authSlice';
// import { toast } from 'react-toastify';
// import "./authstyle.css";


// const BASE_URL = "http://localhost:5000";
// const RegisterScreen = () => {


//   const [ formData, setFormData ] = useState({
    
//   })

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value })
//   }
//   console.log(formData)
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [register, { isLoading }] = useRegisterMutation();

//   const { userInfo } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (userInfo) {
//       navigate('/');
//     }
//   }, [navigate, userInfo]);

//    const submitHandler = async (e) => {
//     try {
//       const response = await fetch('https://localhost/api/users/register', {
//         method: 'POST',
//         headers: {
//           accept: 'application/json',
//         },
//         body: JSON.stringify(formData),
//       }).then((res) => res.json());
  
//       if (!response.ok) {
//         throw new Error(`Error! status: ${response.status}`);
//       }
  
//       const result = await response.json();
//       return result;
//     } catch (err) {
//       console.log(err);
//     }

//   };
//   return (
//     <FormContainer>
//       <h1 className='toggle-btn'>Register</h1>
//       <Form onSubmit={submitHandler}  >
//         <Form.Group className='my-2' controlId='id'>
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type='name'
//             placeholder='Enter name'
//             id = 'name'
//             onChange={handleChange}
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group className='my-2' controlId='email'>
//           <Form.Label>Email Address</Form.Label>
//           <Form.Control
//             type='email'
//             placeholder='Enter email'
//            id = 'email'
//             onChange={handleChange}
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group className='my-2' controlId='password'>
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type='password'
//             placeholder='Enter password'
//             id = 'password'
//             onChange={handleChange}
//           ></Form.Control>
//         </Form.Group>
//         <Form.Group className='my-2' controlId='confirmPassword'>
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type='password'
//             placeholder='Confirm password'
//           id = 'confirmPassword'
//             onChange={handleChange}
//           ></Form.Control>
//         </Form.Group>

//         <Button type='submit' variant='primary' className='mt-3'>
//           Register
//         </Button>

//         {isLoading && <Loader />}
//       </Form>

//       <Row className='py-3'>
//         <Col>
//           Already have an account? <Link to={`/login`}>Login</Link>
//         </Col>
//       </Row>
//     </FormContainer>
//   );
// }
// export default RegisterScreen
