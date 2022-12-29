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
    function handleSubmit(event){
        console.log(state)
        setState({
            Name: "",
            Location:'',
            Bio:''
          });
          event.preventDefault();
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
