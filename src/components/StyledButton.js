import { Button } from "@material-ui/core"

export const StyledButton = ( props ) => {
    return (
        <Button variant="outlined" { ...props }>
            Click Me!
        </Button>
    )  
}
