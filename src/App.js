import "./App.css"
import Stack from "./pages/Stack"
import Projects from "./pages/Projects"
import AboutMe from "./pages/AboutMe"
import { ModalButton } from "./components/ModalButton "
import {
	Container,
	createTheme,
	CssBaseline,
	ThemeProvider,
} from "@material-ui/core"
import NavBar from "./components/NavBar"
import { useState } from "react"

function App() {
	const [darkMode, setDarkMode] = useState(false)
	const theme = createTheme({
		palette: {
			primary: {
				main: "#212121",
			},
			secondary: {
				main: "#ffc200",
			},
			common: {
				black: darkMode ? "#f8f9fa" : "#0c0c0d",
				white: darkMode ? "#0c0c0d" : "#f8f9fa",
			},
			text: {
				primary: "#5b5b5b",
				secondary: darkMode ? "#fff" : "#212121",
			},
		},
		typography: {
			fontFamily: [
				"Ubuntu",
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(","),
		},
		overrides: {
			MuiToolbar: {
				root: {
					backgroundColor: "#fff",
					color: "#212121",
				},
			},
			MuiButton: {
				contained: {
					backgroundColor: "#474559",
					borderRadius: "40px",
					color: "#fff",
					fontWeight: "bold",
					paddingTop: "10px",
					paddingBottom: "10px",
					"&:hover": {
						backgroundColor: "#ffc200",
					},
				},
			},
		},
	})
	const onChange = event => {
		setDarkMode(event.target.checked)
		const body = document.querySelector("body")
		body.classList.toggle("dark-mode")
	}
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container
				maxWidth="lg"
				style={{
					backgroundColor: darkMode ? "#0c0c0d" : "#f8f9fa",
				}}
			>
				<NavBar onSwitch={onChange} checked={darkMode} />
				<AboutMe />
				<Projects />
				<Stack />
				<ModalButton />
			</Container>
		</ThemeProvider>
	)
}

export default App
