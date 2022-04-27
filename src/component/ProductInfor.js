import * as React from "react"
import { ProductContext } from "../store/ProductContext";
import { useParams } from "react-router-dom";
import Header from './Header'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const ProductInfor = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        app: {
            backgroundColor: '#ccc',
            // marginTop: '15px'
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        contentProductView: {
            width: '1270px',
            height: '100vh',
            padding: '0 15px',
            margin: '0 auto',
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '30px 20px',

        },
        productImage: {
            width: '100%',
            height: '500px',
            objectFit: 'contain'
        },
        productWrapper: {
            display: 'flex',
            flexDirection: 'column',
        },
        productDescription: {
            marginTop: '30px',
            fontSize: '18px'
        },
        productPrice: {
            color: 'red',
        },
        productAction: {

        },
        BuyAction: {
            marginTop: '30px',
            marginRight: '10px'
        },
        AddCartAction: {
            marginTop: '30px',

        }
    }));

    const context = React.useContext(ProductContext)
    const classes = useStyles();

    let { id } = useParams();
    const product = context.getProductById(parseInt(id))

    return (
        <>
            <div className={classes.app}>
                <Header />

                <div className={classes.contentProductView}>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={5}>
                                <div>
                                    <img className={classes.productImage} src={product.image} />
                                </div>
                            </Grid>
                            <Grid item xs={7}>
                                <div className={classes.productWrapper}>
                                    <h2 className={classes.productTitle}>{product.title}</h2>
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Rating name="read-only" value={product.rating.rate} readOnly />
                                    </Box>
                                    <h1 className={classes.productPrice}>{`${product.price} $`}</h1>
                                    <h3 className={classes.productPrice}>RẺ HƠN HOÀN TIỀN</h3>
                                    <p className={classes.productDescription}>{product.description}</p>
                                    <div className={classes.productAction}>
                                        <Button className={classes.BuyAction} variant="contained" color="secondary">
                                            BUY NOW
                                        </Button>
                                        <Button className={classes.AddCartAction} variant="contained" color="secondary">
                                            ADD TO CART
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProductInfor;