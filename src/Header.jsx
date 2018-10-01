import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

const Header = (props) => {
    return (
    <div>
        <AppBar position="static" color="default">
            <Toolbar variant="dense">
                <Typography variant="title">
                    Pearson Search
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    );
}

export default withStyles(styles)(Header);