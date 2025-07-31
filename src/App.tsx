
import './App.css'
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Home from './pages/Home'
const theme = createTheme({
  palette: {
    primary: {
      main: "#1b4350",
      light: "#e6f0f2",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e6f0f2",
      dark: "#1b4350",
      contrastText: "#1b4350",
    },
    background: {
      default: "#ffffff",
      paper: "#e6f0f2",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
      "@media (max-width:600px)": {
        fontSize: "1.8rem",
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(27, 67, 80, 0.1)",
        },
      },
    },
  },
})
function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
