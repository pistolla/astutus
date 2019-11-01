import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, Paper } from '@material-ui/core';
import MediaLinks from '../medialinks/MediaLinks';
import AddLink from '../addlink/AddLink';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    },
    buttonPanel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'right',

    }
}));

function Media({ connected, postMediaUrl, web3, account, ...props }) {
    const welcomeMsg = `Hi ${account}, welcome to your watch list. You will be rewarded if a media does not have fake news.`
    const classes = useStyles();
    const connectMetamask = () => {
        window.alert('Please ensure your browser has metamask extension');
    }
    //props.getMyMediaUrls();
    const transact = (article) =>{
        if(web3 !== undefined){
            window.alert('pay me')
            web3.eth.getBalance(account).then(function(result){
                let bal = web3.utils.fromWei(result, 'ether');
                if(bal > article.seed_amount){
                    let txnObject = {
                        "from": article.wallet_address,
                        "to": '0x6957836b1319a15362e81406BF63CB74612E79B8',
                        "value": web3.utils.toWei(article.seed_amount,'ether'),
                        // "gas": 21000,         (optional)
                        // "gasPrice": 4500000,  (optional)
                        // "data": 'For testing' (optional)
                        // "nonce": 10           (optional)
                    }
                
                    web3.eth.sendTransaction(txnObject, function(error, result){
                        if(error){
                            window.alert('Transaction error '+error)
                            console.log( "Transaction error" ,error);
                        }
                        else{
                            let txn_hash = result; //Get transaction hash
                            console.log( "Transaction error" ,txn_hash);
                            postMediaUrl(article);
                        }
                    });
                }
            });
        }
        
        
    }
    return (
        <Grid className={classes.root} container data-test="MediaComponent">
            <Grid item xs={12} width="100%">
                <Typography variant="h5" paragraph align="left">{welcomeMsg}</Typography>
            </Grid>
            <Grid item xs={12} width="100%">
                <Paper className={classes.buttonPanel} width="fullWidth">
                    {connected !== true ? <Button onClick={connectMetamask} color="secondary" size="large">Connect to MaskMask </Button> :
                    <AddLink {...props} connected={connected} account={account} handleTransfer={transact}/>}
                </Paper>
            </Grid>
            
            <Grid item xs={12} width="100%">
                <MediaLinks {...props} searching={false} mine={true} />
            </Grid>
        </Grid>
    );
}

export default Media;