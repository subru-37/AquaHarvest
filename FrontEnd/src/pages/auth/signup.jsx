import React, { useState } from "react";
import { signUpWithEmail } from "../../../firebase";

export default function signin() {
  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("unmatched password");
      return;
    }
    signUpWithEmail(email, password);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <CssVarsProvider>
      <main>
        {/* <ModeToggle /> */}
        <Sheet
          sx={{
            width: 300,
            mx: "auto", // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant='outlined'
        >
          <div>
            <Typography level='h4' component='h1'>
              <b>Welcome!</b>
            </Typography>
            <Typography level='body2'>Sign up.</Typography>
          </div>
          <TextField
            name='Name'
            type='text'
            placeholder='John Doe'
            label='Name'
          />
          <TextField
            name='email'
            type='email'
            placeholder='johndoe@email.com'
            value={email}
            label='Email'
          />
          <TextField
            name='password'
            type='password'
            value={password}
            placeholder='password'
            label='Password'
          />
          <TextField
            name='confirm password'
            value={confirmPassword}
            type='password'
            placeholder='confirm password'
            label='Confirm Password'
          />
          <Button onClick={handleSignup} sx={{ mt: 1 }}>
            Sign Up
          </Button>
          <Typography
            endDecorator={<Link href='/signin'>Log In</Link>}
            fontSize='sm'
            sx={{ alignSelf: "center" }}
          >
            Already have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
