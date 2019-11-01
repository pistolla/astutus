import React, { useState } from 'react';
import { CircularProgress, TextField, IconButton, Fade, Divider, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '60px',
        paddingBottom: '0px',
        width: '100%'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    iconButton: {
        padding: 10
    },
    divider: {
        height: '100%',
        margin: 4
    },
    progressBar: {
        width: 60,
        height: 60
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    refresh: {
        marginLeft: 4
    }
}));

function SearchLink({ fetchMediaUrls, searching, onSearching }) {
    const classes = useStyles();
    const [token, setToken] = useState("");
    const [showProgress, setShowProgress] = useState(false); 

    const handleSearchQuery = () => {
        setShowProgress(true);
        onSearching(true);
        fetchMediaUrls(token).then(() => {
            onSearching(false);
            setShowProgress(false);
        });
    };

    const handleTextFieldChange = event => {
        console.log(event.target.value);
        setToken(event.target.value);
    }

    return (
        <div align="center" className="root" data-test="SearchLinkComponent">
            <div className={classes.searchContainer}>
                <TextField
                    placeholder="Type or paste a a url for facts check..."
                    className={classes.input}
                    type="search"
                    margin="normal"
                    variant="outlined"
                    value={token}
                    onChange={handleTextFieldChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton data-test="search" onClick={handleSearchQuery} className={classes.iconButton} disabled={searching}>
                                    <SearchIcon fontSize="large" />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <div align="center" className="refresh">
                    <Fade
                        in={showProgress}
                        style={{
                            transitionDelay: showProgress ? '800ms' : '0ms',
                        }}
                        unmountOnExit
                    >
                        <CircularProgress className={classes.progressBar} />
                    </Fade>
                </div>
            </div>

        </div>
    );
}

export default SearchLink;