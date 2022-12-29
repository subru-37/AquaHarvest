// import React, { useState } from "react";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSignup = () => {};

//   return (
//     <div>
//       <h1>Signup</h1>

//       <input
//         type='text'
//         name='email'
//         id='email'
//         placeholder='Enter Email'
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type='text'
//         name='password'
//         id='password'
//         placeholder='Enter Password'
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <input
//         type='text'
//         name='confirmPassword'
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         id='confirmPassword'
//         placeholder='Confrim Password'
//       />
//       <button>Sign Up</button>
//     </div>
//   );
// };

// export default Signup;
import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode('light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

export default function signin() {
  return (
    <CssVarsProvider>
      <main>
        {/* <ModeToggle /> */}
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign up.</Typography>
          </div>
          <TextField
            // html input attribute
            name="Name"
            type="text"
            placeholder="John Doe"
            // pass down to FormLabel as children
            label="Name"
          />
          <TextField
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            // pass down to FormLabel as children
            label="Email"
          />
          <TextField
            name="password"
            type="password"
            placeholder="password"
            label="Password"
          />
          <TextField
            name="confirm password"
            type="password"
            placeholder="confirm password"
            label="Confirm Password"
          />
          <Button sx={{ mt: 1 /* margin top */ }}>Sign Up</Button>
          <Typography
            endDecorator={<Link href="/signin">Log In</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Already have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
