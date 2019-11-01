import React, { Component } from 'react';
import Web3 from 'web3';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const messages = {
    'LOAD_MATAMASK_WALLET_ERROR': 'Load metamask wallet error, maybe try Metamask later, or upload a wallet json file.',
    'EMPTY_METAMASK_ACCOUNT': 'You can choose one MetaMask wallet by unlocking it',
    'METAMASK_ACCOUNT': 'You have choosen the MetamMask Wallet: ',
    'NETWORK_ERROR': 'Network error, please check it.',
    'METAMASK_NOT_INSTALL': 'You must install MetaMask before start.',
};

const MetaMaskInstallDialog = (props) => (
    <Dialog
        className="MetaMaskDialog"
        open={props.metaMaskInstallDialogOpen}
        transition={Slide}>
        <DialogTitle>{"Oops, you haven't install MetaMask"}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                {"You’ll need a safe place to seed your Media Links account! The perfect place is in a secure wallet like MetaMask. This will also act as your login to Kwanta (no extra password needed)."}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?utm_source=chrome-ntp-icon" color="primary">
                Install MetaMask
      </Button>
            <Button onClick={props.handleMetaMaskInstallDialogClose} color="primary">
                I understand, continue
      </Button>
        </DialogActions>
    </Dialog>
);

const MetaMaskLockDialog = (props) => (
    <Dialog
        className="MetaMaskDialog"
        open={props.metaMaskLockDialogOpen}
        transition={Slide}>
        <DialogTitle>{"Oops, your MetaMask is locked"}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                {"You should unlock MetaMask to interact with this application."}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.handleMetaMaskLockDialogClose} color="primary">
                I understand, continue
      </Button>
        </DialogActions>
    </Dialog>
);

const MetaMaskDeniedDialog = (props) => (
    <Dialog
        className="MetaMaskDialog"
        open={props.metaMaskDeniedDialogOpen}
        transition={Slide}>
        <DialogTitle>{"Oops, your MetaMask is connection denied"}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                {"You should allow MetaMask to interact with this application."}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.handleMetaMaskEnable} color="primary">
                Enable
      </Button>
            <Button onClick={props.handleMetaMaskDeniedDialogClose} color="primary">
                I understand, continue
      </Button>
        </DialogActions>
    </Dialog>
);

export class MetaMask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            metaMaskInstallDialogOpen: false,
            metaMaskLockDialogOpen: false,
            metaMaskDeniedDialogOpen: false,
            disableDialog: false
        };
        this.handleMetaMaskInstallDialogClose = this.handleMetaMaskInstallDialogClose.bind(this);
        this.handleMetaMaskLockDialogClose = this.handleMetaMaskLockDialogClose.bind(this);
    }

    fetchWeb3() {
        let web3 = window.web3;
        if (typeof web3 === 'undefined') {
            this.props.setWeb3(null);
            this.setState({ message: messages.METAMASK_NOT_INSTALL });
        }
    }

    async enable() {
        if (window.ethereum !== undefined) {
            try {
               await window.ethereum.enable();
            } catch (err) {
                this.setState({ metaMaskDeniedDialogOpen: true, message: messages.METAMASK_ACCOUNT })
            }
        }
    }

    fetchAccounts() {
        //const { web3 } = window;
        if (this.props.web3 !== null && this.props.web3 !== undefined) {
            this.enable();
            this.props.web3.eth.getAccounts((err, accounts) => {
                if (err) {
                    this.setState({ message: messages.LOAD_MATAMASK_WALLET_ERROR });
                } else {
                    if (accounts.length === 0) {
                        this.props.handleMetaMaskAccount(null);
                        this.setState({ metaMaskLockDialogOpen: true, message: messages.EMPTY_METAMASK_ACCOUNT })
                    } else {
                        // if account changed then change redux state
                        if (accounts[0] !== this.props.metaMask.account) {
                            this.props.handleMetaMaskAccount(accounts[0]);
                        }
                    }
                }
            });
        }
    }

    fetchNetwork() {
        //const { web3 } = window;
        if (this.props.web3 !== null && this.props.web3.version !== undefined) {
            this.props.web3.eth.net.getId((err, netId) => {
                if (err) {
                    this.props.handleMetaMaskNetwork(null);
                    this.setState({ metaMaskLockDialogOpen: true, message: messages.NETWORK_ERROR });
                } else {
                    // if network changed then change redux state
                    if (netId !== this.props.metaMask.network) {
                        this.props.handleMetaMaskNetwork(netId);
                    }
                }
            });
        }
    }

    componentDidMount() {
        let self = this;
        window.addEventListener('load', function () {
            let web3 = window.web3;
            if (typeof web3 !== 'undefined') {
                let ethProvider = null;
                if (window.ethereum !== undefined) {
                    ethProvider = window.ethereum;
                } else {
                    ethProvider = web3.currentProvider;
                }
                // ethProvider = new Web3.providers.HttpProvider(
                //     'https://ropsten.infura.io/v3/8fe0b42e367847c388b0344c2fc60034'
                // )
                window.web3 = new Web3(ethProvider);
                self.props.setWeb3(window.web3);
                self.fetchAccounts();
                self.fetchNetwork();
                self.Web3Interval = setInterval(() => self.fetchWeb3(), 1000);
                self.AccountInterval = setInterval(() => self.fetchAccounts(), 1000);
                self.NetworkInterval = setInterval(() => self.fetchNetwork(), 1000);
                // if(window.ethereum !== undefined) {
                // window.ethereum.autoRefreshOnNetworkChange = false;

                // window.ethereum.on('accountsChanged', function (accounts) {
                //     self.fetchAccounts()
                //   })
                //   window.ethereum.on('networkChanged', function (accounts) {
                //     self.fetchNetwork()
                //   })
                // } else {

                
                // }
            } else {
                self.setState({ metaMaskInstallDialogOpen: true, message: messages.METAMASK_NOT_INSTALL });
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.Web3Interval);
        clearInterval(this.AccountInterval);
        clearInterval(this.NetworkInterval);
    }

    handleMetaMaskInstallDialogClose() {
        this.setState({ metaMaskInstallDialogOpen: false, disableDialog: true });
    }

    handleMetaMaskLockDialogClose() {
        this.setState({ metaMaskLockDialogOpen: false, disableDialog: true });
    }

    handleMetaMaskDeniedDialogClose() {
        this.setState({ metaMaskDeniedDialogOpen: false, disableDialog: true });
    }

    handleEnable() {
        this.setState({ metaMaskDeniedDialogOpen: false, disableDialog: true });
    }

    render() {
        const metaMaskInstall = this.state.disableDialog === false &&
            <MetaMaskInstallDialog
                {...this.state}
                handleMetaMaskInstallDialogClose={this.handleMetaMaskInstallDialogClose}
            />;

        const metaMaskLock = this.state.disableDialog === false &&
            <MetaMaskLockDialog
                {...this.state}
                handleMetaMaskLockDialogClose={this.handleMetaMaskLockDialogClose}
            />

        const metaMaskDenied = this.state.disableDialog === false &&
            <MetaMaskDeniedDialog
                {...this.state}
                handleMetaMaskDeniedDialogClose={this.handleMetaMaskDeniedDialogClose}
                handleMetaMaskEnable={this.handleEnable}
            />

        return (
            <div className="MetaMask" data-test="MetamaskComponent">
                {metaMaskInstall}
                {metaMaskLock}
                {metaMaskDenied}
            </div>
        );
    }
}