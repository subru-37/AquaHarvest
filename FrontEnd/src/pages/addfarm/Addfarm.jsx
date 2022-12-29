import React,{useContext} from 'react';
import './Addfarm.css';
import TextField from '@mui/material/TextField';
import { ThemeContext } from '../../App';
import { useNavigate } from 'react-router';

export default function Addfarm() {
    const navigate = useNavigate();
    const {state,setState} = useContext(ThemeContext)
    function handleSubmit(event){
        console.log(state) //command to push to database?
        // setState({
        //     Name: "",
        //     Location:'',
        //     Bio:'',
        //     Email:'',
        //     Password:'',
        //     CPassword:''
        //   });
          event.preventDefault();
          navigate("/addTank");
    }
    function handleChange(event){
        const { name, value } = event.target;
        setState((preValue) => {
          return {
            ...preValue,
            [name]: value
          };
        });
    }
  return (
    <div style={{display:'flex', alignItems:'center', flexDirection:'column',justifyContent:'center'}}>
        <div style={{backgroundColor: '#4CE0D2', height: '40vh', width: '100vw',position:'absolute', top:'0px', display:'flex',alignItems:'flex-start', justifyContent:'center'}}>
            <p style={{fontFamily: "'Poppins', Sans-serif", paddingTop: '50px',fontSize:'1.7rem'}}>Add a new farm</p>
        </div>
        <form onSubmit={handleSubmit} className='parent-form'>
            <div className='child-farm'>
                <h4 style={{width:'30%'}}>Enter Farm Name: </h4>
                <TextField
                    InputProps={{style: {color:'black'}}}
                    InputLabelProps={{
                    style: { color: '#22AAA1'},
                    }}
                    variant='outlined'
                    label="Farm"
                    name='Name'
                    required
                    autoComplete='off'
                    value={state.Name}
                    onChange={handleChange} 
                    sx={{
                    width: '70%',
                    '& .MuiOutlinedInput-root':{
                      '& fieldset':{
                        borderColor: '#4CE0D2'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4CE0D2',
                      },
                    },
                    '& .MuiOutlinedInput-root:hover':{
                      '& fieldset':{
                        borderColor: '#4CE0D2'
                      }
                    }
                    }} 
                /> 
            </div>
            <div className='child-farm'>
                <h4 style={{width:'30%'}}>Enter Email: </h4>
                <TextField
                    InputProps={{style: {color:'black'}}}
                    InputLabelProps={{
                    style: { color: '#22AAA1'},
                    }}
                    variant='outlined'
                    label="Email"
                    name='Email'
                    required
                    autoComplete='off'
                    value={state.Email}
                    onChange={handleChange} 
                    sx={{
                    width: '70%',
                    '& .MuiOutlinedInput-root':{
                      '& fieldset':{
                        borderColor: '#4CE0D2'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4CE0D2',
                      },
                    },
                    '& .MuiOutlinedInput-root:hover':{
                      '& fieldset':{
                        borderColor: '#4CE0D2'
                      }
                    }
                    }} 
                /> 
            </div>
            <div className='child-farm'>
                <h4 style={{width:'30%'}}>Enter Password: </h4>
                <TextField
                    InputProps={{style: {color:'black'}}}
                    InputLabelProps={{
                    style: { color: '#22AAA1'},
                    }}
                    variant='outlined'
                    label="Password"
                    name='Password'
                    required
                    autoComplete='off'
                    type='password'
                    value={state.Password}
                    onChange={handleChange} 
                    sx={{
                    width: '70%',
                    '& .MuiOutlinedInput-root':{
                      '& fieldset':{
                        borderColor: '#4CE0D2'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4CE0D2',
                      },
                    },
                    '& .MuiOutlinedInput-root:hover':{
                      '& fieldset':{
                        borderColor: '#4CE0D2'
                      }
                    }
                    }} 
                /> 
            </div>
            <div className='child-farm'>
                <h4 style={{width:'30%'}}>Confirm Password: </h4>
                <TextField
                    InputProps={{style: {color:'black'}}}
                    InputLabelProps={{
                    style: { color: '#22AAA1'},
                    }}
                    variant='outlined'
                    label="Password"
                    name='CPassword'
                    required
                    autoComplete='off'
                    type='password'
                    value={state.CPassword}
                    onChange={handleChange} 
                    sx={{
                    width: '70%',
                    '& .MuiOutlinedInput-root':{
                      '& fieldset':{
                        borderColor: '#4CE0D2'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4CE0D2',
                      },
                    },
                    '& .MuiOutlinedInput-root:hover':{
                      '& fieldset':{
                        borderColor: '#4CE0D2'
                      }
                    }
                    }} 
                /> 
            </div>
            <div className='child-farm'>
                <h4 style={{width:'30%'}}>Enter Bio Details: </h4>
                <TextField
                    InputProps={{style: {color:'black'}}}
                    InputLabelProps={{
                    style: { color: '#22AAA1'},
                    }}
                    variant='outlined'
                    label="Bio"
                    name='Bio'
                    required
                    autoComplete='off'
                    value={state.Bio}
                    onChange={handleChange} 
                    sx={{
                    width: '70%',
                    '& .MuiOutlinedInput-root':{
                      '& fieldset':{
                        borderColor: '#4CE0D2'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4CE0D2',
                      },
                    },
                    '& .MuiOutlinedInput-root:hover':{
                      '& fieldset':{
                        borderColor: '#4CE0D2'
                      }
                    }
                    }} 
                /> 
            </div>
            <div className='child-farm'>
                <h4 style={{width:'30%'}}>Enter Location: </h4>
                <TextField
                    InputProps={{style: {color:'black'}}}
                    InputLabelProps={{
                    style: { color: '#22AAA1'},
                    }}
                    variant='outlined'
                    label="Location"
                    name='Location'
                    required
                    autoComplete='off'
                    value={state.Location}
                    onChange={handleChange} 
                    sx={{
                    width: '70%',
                    '& .MuiOutlinedInput-root':{
                      '& fieldset':{
                        borderColor: '#4CE0D2'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4CE0D2',
                      },
                    },
                    '& .MuiOutlinedInput-root:hover':{
                      '& fieldset':{
                        borderColor: '#4CE0D2'
                      }
                    }
                    }} 
                /> 
            </div>
            <button style={{borderRadius:'15px',background:'transparent', width:'150px'}}><p style={{color:'black',fontFamily:"'Poppins',sans-serif",fontSize:'1.5rem'}}>Submit</p></button>
        </form>
    </div>
  )
}
