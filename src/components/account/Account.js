import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Form, Field } from 'react-final-form';
import { Typography, Button, TextField, Grid, Paper, Toolbar, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyItems: 'space_around'
    },
    form: {
        paddingLeft: '20px',
        paddingRight: '20px',
        marginBottom: '40px'
    },
    gridContainer: {
        marginTop: '10px'
    },
    submitBtn: {
        marginTop: '10px'
    }
}))
function Account({ transactions = [], account, connected,web3, ...props }) {
    const classes = useStyles();
    const welcomeMsg = "Welcome to your personal Kwanta Wallet.";
    const heading = `Transfer Ethers to ${account}`;
    const [gas, setGas] = useState(0)
    const [charge] = useState(0.002)
    const [bal] = useState(0)
    const [submitting, setSubmitting] = useState(false);
    const [pristine, setPristine] = useState(false);
    const [form, setForm] = useState({ gas_price: gas, network_charge: charge, minimum_bal: bal, max_withdraw: 0, withdraw: 0 });
    const validate = values => {
        const errors = {};
        if (!values.gas_price) {
            errors.gas_price = 'Required';
        }
        if (!values.network_charge) {
            errors.network_charge = 'Required';
        }
        if (!values.minimum_bal) {
            errors.minimum_bal = 'Required';
        }
        if (!values.withdraw) {
            errors.withdraw = 'Required';
        }

        return errors;
    };
    const calcMaxWithdraw = () => {
        if(bal === 0){
            return 0;
        }
        return (bal-charge)-gas;
    }

    const reset = () => {
        setForm({ gas_price: gas, network_charge: charge, minimum_bal: bal, max_withdraw: calcMaxWithdraw, withdraw: 0 })
        return true;
    }
    if(web3 !== null){
        web3.eth.getGasPrice().then(value => setGas(value));
    }
    
    const handleClick = () => {
        console.log("clicked")
    }
    const handleSubmit = () => {

    }
    return (
        <Grid className={classes.root} container data-test="AccountComponent">
            <Grid item xs={12} width="100%">
                {connected === false ?
                    <Button color="primary" size="large">Connect to MaskMask </Button>
                    : <Typography variant="subtitle1" paragraph align="left">{welcomeMsg}</Typography>}
            </Grid>
            {connected === true ?
                <Fragment>
                    <Grid item xs={9} width="100%" >
                        <Form
                            onSubmit={handleSubmit}
                            initialValues={form}
                            validate={validate}
                            render={({ handleSubmit, reset, submitting, pristine, form }) => (
                                <form onSubmit={handleSubmit} noValidate>
                                    <Paper className={classes.form} >
                                        <Toolbar color="primary">
                                            <Typography variant="h6">{heading}</Typography>
                                        </Toolbar>
                                        <Grid container alignItems="flex-start" spacing={2} >
                                            <Grid item xs={12} className={classes.gridContainer}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="minimum_bal"
                                                    component={TextField}
                                                    type="text"
                                                    label="Account Balance"
                                                    disabled
                                                    value={bal} />
                                            </Grid>
                                            <Grid item xs={12} className={classes.gridContainer}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="max_withdraw"
                                                    component={TextField}
                                                    type="text"
                                                    label="Max Amount Withdraw"
                                                    disabled />
                                            </Grid>
                                            <Grid item xs={12} className={classes.gridContainer}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="network_charge"
                                                    component={TextField}
                                                    type="text"
                                                    label="Network Charges"
                                                    disabled
                                                    value={charge} />
                                            </Grid>
                                            <Grid item xs={12} className={classes.gridContainer}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="gas_price"
                                                    component={TextField}
                                                    type="text"
                                                    label="Gas"
                                                    disabled
                                                    value={gas} />
                                            </Grid>
                                            <Grid item xs={12} className={classes.gridContainer}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="withdraw"
                                                    component={TextField}
                                                    type="text"
                                                    label="Total Withdrawable" />
                                            </Grid>
                                            <Grid item xs={12} className={classes.gridContainer}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    size="large"
                                                >Submit</Button>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </form>
                            )} />
                    </Grid>

                    <Grid item xs={12} width="100%">
                        <Paper >
                            <Toolbar color="primary">
                                <Typography variant="h6">Wallet History</Typography>
                            </Toolbar>
                            <List>
                                {transactions.map((value, index) => {
                                    return (
                                        <ListItem button key={index} onClick={handleClick.bind(this, index)}>
                                            <ListItemIcon></ListItemIcon>
                                            <ListItemText primary={value.description} />
                                        </ListItem>
                                    )
                                })
                                }
                            </List>
                        </Paper>
                    </Grid>
                </Fragment>
                : ''}
        </Grid>
    );
}

export default Account;