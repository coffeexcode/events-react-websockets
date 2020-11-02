import React from 'react';
import { withStyles } from '@material-ui/core';

import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Moment from 'moment';

const useStyles = theme => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 250,
        minWidth: 250,
        height: 250,
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(1),
        paddingRight: theme.spacing(2)
    },
    badges: {
        '& > *': {
            margin: theme.spacing(0.75),
            padding: theme.spacing(1)
        },
    },
    Low: {
        backgroundColor: '#81c784'
    },
    Regular: {
        backgroundColor: '#64b5f6'
    },
    Medium: {
        backgroundColor: '#ffb74d'
    },
    High: {
        backgroundColor: '#e57373'
    },
    Critical: {
        backgroundColor: '#DA5844'
    },
    Fire: {
        backgroundColor: '#d32f2f'
    },
    Flood: {
        backgroundColor: '#1976d2'
    },
    Power: {
        backgroundColor: '#f57c00'
    },
    Medical: {
        backgroundColor: '#388e3c'
    },
});



/*
  {"name":"Sharla Fidele",
  "image":"http://localhost:3001/images/95.jpg",
  "problem":"Flood",
  "priority":"High",
  "content":"commodo irure sit velit mollit officia occaecat excepteur est cillum sint pariatur in ut id aliquip exercitation sunt duis mollit anim minim tempor cupidatat dolor cupidatat excepteur id dolor ullamco laborum"}
*/

class Post extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={this.props.image}
                    src={this.props.image}
                    title={this.props.name}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {this.props.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {this.props.content}
                        </Typography>
                    </CardContent>
                    <div className={classes.footer}>
                        <div className={classes.badges}>
                            <Chip label={this.props.problem} className={classes[this.props.problem]} />
                            <Chip label={this.props.priority} className={classes[this.props.priority]} />
                        </div>
                        <span className={classes.time}> {Moment(this.props.time).format('MMM Do, YYYY h:mm:ss A')} </span>
                    </div>     
                </div>
            </Card>
        );
    }
}

export default withStyles(useStyles)(Post);