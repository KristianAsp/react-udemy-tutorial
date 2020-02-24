import React from 'react';
import { Typography, Container, Link, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      <Link color="inherit" href="https://www.kristianaspevik.com/">
        www.kristianaspevik.com
      </Link>{' © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const socialMedia = [
    'GitHub',
    'Facebook',
    'LinkedIn',
]

const useStyles = makeStyles(theme => ({
  footer: {
    
  },
  footer_items: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    padding: theme.spacing(3, 2),
    margin: 0,
    maxWidth: "100%",
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
  socialMediaIcon: {
      padding: "15px",
      '&:hover': {
        borderRadius: "30px",
        backgroundColor: "#e2e2e2",
      }
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  const footerMedia = socialMedia.map(media => {
    if (media === "GitHub") {
        return (
            <Link className={classes.socialMediaIcon} target="_blank" rel="noopener" color="inherit" href="https://github.com/KristianAsp">
                <GitHubIcon/>
            </Link>
        )
    }
    else if (media === "Facebook") {
        return (
            <Link className={classes.socialMediaIcon} target="_blank" rel="noopener" color="inherit" href="https://kristianaspevik.com/">
                <FacebookIcon/>
            </Link>
        )
    }
    if (media === "LinkedIn") {
        return (
            <Link className={classes.socialMediaIcon} target="_blank" rel="noopener" color="inherit" href="https://material-ui.com/">
                <LinkedInIcon/>
            </Link>
        )
    }
})

  return (
    <Container className={classes.footer_items}>
        {footerMedia}
    </Container>
  );
}