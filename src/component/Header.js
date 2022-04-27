import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    header: {
        height: '100px',
        backgroundColor: '#1a94ff',
        marginBottom: '20px'
    },
}));

const Header = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.header}>
                <div className=''>
                </div>
            </div>
        </>
    )
};

export default Header;