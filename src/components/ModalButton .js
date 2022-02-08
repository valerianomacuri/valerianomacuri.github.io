import { useTheme } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
export const ModalButton = () => {
	const theme = useTheme()
	return ReactDOM.createPortal(
		<a
			href="#about"
			className="ModalButton"
			style={{
				background: theme.palette.common.white,
				boxShadow: theme.shadows[3],
			}}
		>
			<i className="bx bx-up-arrow-alt"></i>
		</a>,
		document.getElementById("modal"),
	)
}
