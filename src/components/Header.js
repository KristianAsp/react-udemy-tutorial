import React from 'react';
import { AppBar, Typography, Link }from '@material-ui/core';
import { Toolbar }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    '@global': {
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
      },
      appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      toolbar: {
        flexWrap: 'wrap',
      },
      toolbarTitle: {
        flexGrow: 1,
        justifyItems: 'flex-end',
      },
      link: {
        margin: theme.spacing(1, 1.5),
      },
}));

const Header = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    Kristian Aspevik
                </Typography>
                <nav>
                    <Link variant="button" href="#" className={classes.link}>
                    Home
                    </Link>
                    <Link variant="button" href="#" className={classes.link}>
                    About
                    </Link>
                    <Link variant="button" href="#" className={classes.link}>
                    Projects
                    </Link>
                </nav>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header