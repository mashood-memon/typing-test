import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useTheme } from "../context/themeContext";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import { mapAuthCodeToMessage } from "../utils/errorMapping";

const LoginForm = ({handleClose}) => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password || !confirmPassword) {
      toast.warning("PLEASE FILL ALL THE DETAILS");
      return;
    }
    if (password !== confirmPassword) {
      toast.warning("PASSWORD DOESN'T MATCH");
      return;
    }
    if (!email.includes("@")) {
      toast.warning("EMAIL DOESN'T INCLUDE @");
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        toast.success("USER CREATED");
        handleClose()
      })
      .catch((err) => {
        const errorMessage = mapAuthCodeToMessage(err.code);
        toast.error(errorMessage);
      });
  };


  return (
    <div>
      <Box
        p={3}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <TextField
          variant="outlined"
          type="email"
          label="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.textColor,
              },
              "&:hover fieldset": {
                borderColor: theme.textColor,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.textColor,
              },
              "& input": {
                color: theme.textColor,
              },
            },
            "& .MuiInputLabel-root": {
              color: theme.textColor,
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: theme.textColor,
            },
          }}
        />
        <TextField
          variant="outlined"
          type="password"
          label="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.textColor,
              },
              "&:hover fieldset": {
                borderColor: theme.textColor,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.textColor,
              },
              "& input": {
                color: theme.textColor,
              },
            },
            "& .MuiInputLabel-root": {
              color: theme.textColor,
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: theme.textColor,
            },
          }}
        />
        <TextField
          variant="outlined"
          type="password"
          label="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.textColor,
              },
              "&:hover fieldset": {
                borderColor: theme.textColor,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.textColor,
              },
              "& input": {
                color: theme.textColor,
              },
            },
            "& .MuiInputLabel-root": {
              color: theme.textColor,
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: theme.textColor,
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          size="large"
          style={{
            backgroundColor: theme.typeBoxText,
            color: theme.background,
          }}
        >
          SignUp
        </Button>
      </Box>
    </div>
  );
};

export default LoginForm;
