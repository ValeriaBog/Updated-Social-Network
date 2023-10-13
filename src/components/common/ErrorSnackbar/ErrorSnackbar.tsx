import MuiAlert, {AlertProps} from "@mui/material/Alert";
import Snackbar from '@mui/material/Snackbar';
import {FC, forwardRef, SyntheticEvent} from "react";


const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type Props={
    error: string
    closeError: (error: string)=> void
}

export const ErrorSnackbar:FC<Props> = ({error, closeError}) => {

    const handleClose = (event?: SyntheticEvent<any> | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        closeError('')
    };

    return (
        <Snackbar open={error !== ''} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {error}
            </Alert>
        </Snackbar>
    );
}