import React,{useState, useEffect} from 'react';
import './Addfarm.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Addfarm() {
    const [state, setState] = useState({
        Name:'',
        Bio: '',
        Location: '',
    })
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
            <p style={{fontFamily: "'Poppins', Sans-serif", paddingTop: '50px',fontSize:'1.5rem'}}>Add a new farm</p>
        </div>
        <form className='parent-form'>
            <div className='child-farm'>
                <h4 style={{width:'30%'}}>Enter Farm Name: </h4>
                <TextField
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
                <h4 style={{width:'30%'}}>Enter Bio Details: </h4>
                <TextField
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
                    name='Name'
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
            <Button><p style={{color:'black',fontFamily:"'Poppins',sans-serif",fontSize:'1.5rem'}}>Submit</p></Button>
        </form>
    </div>
  )
}
