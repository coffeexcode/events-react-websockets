import React from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(2)
    },
    menuLink: {
      marginRight: theme.spacing(2),
      padding: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
    },
    selected: {
      backgroundColor: '#4A5BBF',
    }
});

class Navbar extends React.Component {


    render() {
        const { classes } = this.props;

        return (
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        React WebSock SPA
                    </Typography>
                    <Button className={classes.menuLink} component={NavLink} to="/" color="inherit" activeClassName={classes.selected} exact>
                      Home
                    </Button>
                    <Button className={classes.menuLink} component={NavLink} to="/analytics" color="inherit" activeClassName={classes.selected} exact>
                      Analytics
                    </Button>
                    <Button className={classes.menuLink} component={NavLink} to="/livefeed" color="inherit" activeClassName={classes.selected} exact>
                      Livefeed
                    </Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(useStyles)(Navbar);