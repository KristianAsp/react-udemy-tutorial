import React from 'react';
import Card from './Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexWrap: "wrap",
        display: "flex",
        backgroundColor: "black",
    },
  });

const Projects = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card title="kristianaspevik.com" description="A website using a React Front-end combined with a Django/Python based API"/>
            <Card title="kristianaspevik.com" description="A website using a React Front-end combined with a Django/Python based API"/>
            <Card title="kristianaspevik.com" description="A website using a React Front-end combined with a Django/Python based API"/>
            <Card title="kristianaspevik.com" description="A website using a React Front-end combined with a Django/Python based API"/>
            <Card title="kristianaspevik.com" description="A website using a React Front-end combined with a Django/Python based API"/>
        </div>
    )
}

export default Projects