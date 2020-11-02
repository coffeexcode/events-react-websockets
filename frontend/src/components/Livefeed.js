import React from 'react';
import { withStyles } from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';

import Post from './Post';

const useStyles = theme => ({
    post: {
        marginBottom: theme.spacing(3)
    },
    formControl: {
        margin: theme.spacing(2)
    },
    filterOptions: {
        flexDirection: 'row',
        '& > *': {
            marginRight: theme.spacing(3)
        }
    },
    filters: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: theme.spacing(2)
    }
});

class Livefeed extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filters: {
                low: true,
                medium: true,
                high: true,
                critical: true,
                fire: true,
                flood: true,
                power: true,
                medical: true
            }
        }
    }

    handleChange = (event) => {
        const newFilters = this.state.filters;

        newFilters[event.target.name] = event.target.checked;

        this.setState({
            filters: newFilters
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <>
                <div className={classes.filters}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Filter by Priority</FormLabel>
                        <FormGroup className={classes.filterOptions}>
                            <FormControlLabel label="Low" control={
                                <Checkbox checked={this.state.filters.low} onChange={this.handleChange} name="low" color="primary" />
                            } />
                            <FormControlLabel label="Medium" control={
                                <Checkbox checked={this.state.filters.medium} onChange={this.handleChange} name="medium" color="primary" />
                            } />
                            <FormControlLabel label="High" control={
                                <Checkbox checked={this.state.filters.high} onChange={this.handleChange} name="high" color="primary" />
                            } />
                            <FormControlLabel label="Critical" control={
                                <Checkbox checked={this.state.filters.critical} onChange={this.handleChange} name="critical" color="primary" />
                            } />
                        </FormGroup>
                    </FormControl>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Filter by Problem</FormLabel>
                        <FormGroup className={classes.filterOptions}>
                            <FormControlLabel label="Fire" control={
                                <Checkbox checked={this.state.filters.fire} onChange={this.handleChange} name="fire" color="primary" />
                            } />
                            <FormControlLabel label="Flood" control={
                                <Checkbox checked={this.state.filters.flood} onChange={this.handleChange} name="flood" color="primary" />
                            } />
                            <FormControlLabel label="Power" control={
                                <Checkbox checked={this.state.filters.power} onChange={this.handleChange} name="power" color="primary" />
                            } />
                            <FormControlLabel label="Medical" control={
                                <Checkbox checked={this.state.filters.medical} onChange={this.handleChange} name="medical" color="primary" />
                            } />
                        </FormGroup>
                    </FormControl>
                </div>

                {this.props.posts.filter(({ problem, priority}) => {
                    return this.state.filters[problem.toLowerCase()] && this.state.filters[priority.toLowerCase()]
                }).map(({ name, image, content, problem, priority, id, time }) =>
                    <div key={id} className={classes.post}>
                        <Post name={name} image={image} content={content} problem={problem} priority={priority} time={time} />
                    </div>

                )}
            </>
        )
    }
}

export default withStyles(useStyles)(Livefeed);

/*
        <div>
        {this.state.posts.map(
          ({name,image,content,problem,priority,id}) =>
            <div key={id}>
              <img src={image} alt="{name}" /> <br />
                {name} <br />
                {problem} <br />
                {priority} <br />
                {content} <br /> <br /> <br /> <br />
            </div>
          )}
      </div>
*/