import React,{useState, useRef} from 'react';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { useContext } from 'react';
import './Addtank.css'
import { ThemeContext } from '../../App';
import { Autocomplete } from '@mui/material';

export default function Addfarm() {
    const [dis, setDis] = useState(false)
    const options = ['1','2','3'];
    const {state,setState} = useContext(ThemeContext);
    const ref0 = useRef();
    function handleSubmit(event){
        console.log(state)
        setState({
            tname: '',
            fishes:''
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
        <div style={{backgroundColor: '#4CE0D2', height: '30vh', width: '100vw',position:'absolute', top:'0px', display:'flex',alignItems:'center', justifyContent:'center'}}>
            <button onClick={()=>(setDis(true))} className='button2'><p>Add A New Tank</p><AddIcon sx={{'& .MuiSvgIcon-root':{color:'black',marginLeft:'15px',border:'2px black solid',borderRadius:'5px'},'& .MuiSvgIcon-root:hover':{color:'#4CE0D2',borderColor:'#4CE0D2'}}} /></button>
        </div>
        <div style={{zIndex: dis ? '1000000': '0', display: dis ? 'flex' : 'none',alignItems:'center', flexDirection:'column',justifyContent:'center', position: 'absolute', height:'90vh',width:'90vw', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)', backgroundColor: 'white',top:'0' }}>
        <form onSubmit={handleSubmit} className='parent-form1'>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h2>Enter Tank Name: </h2>
                <TextField
                    InputProps={{style: {color:'black'}}}
                    InputLabelProps={{
                    style: { color: '#22AAA1'},
                    }}
                    variant='outlined'
                    label="Tank Name"
                    name='tname'
                    required
                    autoComplete='off'
                    value={state.tname}
                    onChange={handleChange} 
                    sx={{
                    width: '40vw',
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
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'20px'}}>
                <TextField
                    InputProps={{style: {color:'black'}}}
                    InputLabelProps={{
                    style: { color: '#22AAA1'},
                    }}
                    variant='outlined'
                    label="Number of fishes"
                    name='fishes'
                    required
                    autoComplete='off'
                    value={state.fishes}
                    onChange={handleChange} 
                    sx={{
                    width: '40vw',
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
            {/* <button style={{borderRadius:'15px',background:'transparent', width:'150px'}}><p style={{color:'black',fontFamily:"'Poppins',sans-serif",fontSize:'1.5rem'}}>Submit</p></button> */}

        </form>
        </div>
    </div>
  )
}
