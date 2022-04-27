import { Outlet, Link, useSearchParams } from "react-router-dom";
import { useEffect, useState, useContext, useMemo } from 'react';
import { ProductContext } from '../store/ProductContext'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    linkProduct: {
        textDecoration: 'none',
    },
    productContainer: {
        width: '100%',
        height: '333px',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    productImage: {
        width: '100%',
        height: '160px',
        objectFit: 'contain'
    },
    productTitle: {
        marginTop: '10px',
        color: "rgba(0,0,0,0.6)",
        fontSize: '20px'
    },
    productPrice: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '22px'
    },
    productAction: {
        display: 'flex',
        justifyContent: 'flex-end'
    },

}));


const ProductGrid = () => {

    const context = useContext(ProductContext)

    let [searchParams] = useSearchParams()
    let category = searchParams.get('category')

    const products = useMemo(() => {
        if (category) {
            return context.filterByCategory(category)
        } else {
            return context.allProduct
        }
    })

    console.log(products)

    const classes = useStyles();

    return (
        <>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    {products.map(product => (
                        <Grid item xs={4}>
                            <Link className={classes.linkProduct} to={`/product/${product.id}`}>
                                <Paper className={classes.paper}>
                                    <div className={classes.productContainer}>
                                        <img className={classes.productImage} src={product.image} />
                                        <h4 className={classes.productTitle}>{product.title}</h4>
                                        <span className={classes.productPrice}>{`${product.price} $`}</span>
                                        <Box component="fieldset" mb={3} borderColor="transparent">
                                            <Rating name="read-only" value={product.rating.rate} readOnly />
                                        </Box>
                                    </div>
                                </Paper>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </div>

        </>
    )
};

export default ProductGrid;