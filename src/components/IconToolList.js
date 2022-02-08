import { Grid, makeStyles } from "@material-ui/core"
import React from "react"
import { IconTool } from "./IconTool"

const useStyles = makeStyles(theme => ({
	gridItem: {
		display: "flex",
	},
}))

export const IconToolList = () => {
	const tools = [
		"html",
		"css",
		"javascript",
		"react",
		"typescript",
		"redux",
		"jest",
		"git",
		"github",
		"sass",
		"npm",
		"react-router",
		"ant-design",
		"material-ui",
	]

	const classes = useStyles()

	return (
		<Grid container spacing={4}>
			{tools.map(item => {
				return (
					<Grid
						item
						xl={4}
						xs={6}
						className={classes.gridItem}
						justifyContent="center"
						alignItems="center"
					>
						<IconTool key={item} tool={item} />
					</Grid>
				)
			})}
		</Grid>
	)
}
