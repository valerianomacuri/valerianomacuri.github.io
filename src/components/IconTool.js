import { makeStyles, Tooltip, Typography, useTheme } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
	img: {
		display: "inline-block",
		width: 120,
		[theme.breakpoints.down("xs")]: {
			width: 80,
		},
	},
}))

export const IconTool = ({ tool, rotate = "", titleTooltip = "" }) => {
	const theme = useTheme()
	const classes = useStyles()
	return (
		<Tooltip
			title={<Typography variant="h6">{tool}</Typography>}
			placement="top"
			color="#fff"
		>
			<img
				className={classes.img}
				src={
					theme.palette.common.white !== "#f8f9fa"
						? tool === "github" ||
						  tool === "npm" ||
						  tool === "html" ||
						  tool === "css"
							? `./assets/svg/${tool}-dark.svg`
							: `./assets/svg/${tool}.svg`
						: `./assets/svg/${tool}.svg`
				}
			/>
		</Tooltip>
	)
}
