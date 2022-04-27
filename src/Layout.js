import { useEffect, useState, useContext } from 'react';
import { ProductContext } from './store/ProductContext'
import { Link, Outlet } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './component/Header';
import './Layout.scss'


const Layout = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        content: {
            width: '1270px',
            padding: '0 15px',
            margin: '0 auto',
            backgroundColor: '#fff',
            borderRadius: '10px'
        },
        app: {
            backgroundColor: 'rgb(245, 245, 250)'
        },
        categories: {
            borderRight: '1px solid #ccc',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        category: {
            listStyle: 'none',
            textDecoration: 'none',
            color: '#000',
            padding: '10px 15px',
            borderBottom: '1px solid #ccc',
            fontSize: '18px',
            textTransform: 'uppercase',
        }

    }));

    const context = useContext(ProductContext)
    const classes = useStyles();

    return (
        <>
            <div className={classes.app}>

                <Header />
                <div className={classes.content}>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <div className={classes.categories}>
                                    <Link className={classes.category} to="/">All</Link>
                                    {context.categories.map(category => (
                                        <Link className={classes.category} to={`/?category=${category}`}>{category}</Link>
                                    ))}
                                </div>
                            </Grid>
                            <Grid item xs={10}>
                                <div className="list-products">
                                    <Outlet />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Layout;