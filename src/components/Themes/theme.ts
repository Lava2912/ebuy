import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            color: "white",
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              color: "white",
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "& .Mui-focused fieldset": {
              borderColor: "white",
            },
            "& .MuiOutlinedInput-root:hover fieldset": {
              color: "white",
              borderColor: "white",
            },
          },
        },
      },
    },
  },
});
