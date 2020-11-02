import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer} from 'recharts';
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
        fontSize: 16
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = theme => ({
    table: {
        minWidth: 700,
    },
    charts: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        minHeight: 400,
        maxHeight: 600
    },
    pie: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        justifyContent: 'center'
    },
    chartTitle: {
        textAlign: 'center'
    },
    line: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        minHeight: 400
    }
});

// Low, medium, high, critical
const byPriorityColors = ['#81c784', '#64b5f6', '#ffb74d', '#e57373'];

// Fire, flood, power, medical
const byProblemColors = ['#d32f2f', '#1976d2', '#f57c00', '#388e3c'];

class Analytics extends React.Component {

    lineData;

    constructor(props) {
        super(props);

        this.lineData = [];
    }

    makeRows() {
        return [
            {
                priority: 'Low',
                fire: this.props.analytics["low"]["fire"],
                flood: this.props.analytics["low"]["flood"],
                power: this.props.analytics["low"]["power"],
                medical: this.props.analytics["low"]["medical"],
                total: this.props.analytics["low"]["total"]
            },
            {
                priority: 'Medium',
                fire: this.props.analytics["medium"]["fire"],
                flood: this.props.analytics["medium"]["flood"],
                power: this.props.analytics["medium"]["power"],
                medical: this.props.analytics["medium"]["medical"],
                total: this.props.analytics["medium"]["total"],
            },
            {
                priority: 'high',
                fire: this.props.analytics["high"]["fire"],
                flood: this.props.analytics["high"]["flood"],
                power: this.props.analytics["high"]["power"],
                medical: this.props.analytics["high"]["medical"],
                total: this.props.analytics["high"]["total"],
            },
            {
                priority: 'Critical',
                fire: this.props.analytics["critical"]["fire"],
                flood: this.props.analytics["critical"]["flood"],
                power: this.props.analytics["critical"]["power"],
                medical: this.props.analytics["critical"]["medical"],
                total: this.props.analytics["critical"]["total"],
            },
            {
                priority: 'Total',
                fire: this.props.analytics["total"]["fire"],
                flood: this.props.analytics["total"]["flood"],
                power: this.props.analytics["total"]["power"],
                medical: this.props.analytics["total"]["medical"],
                total: this.props.analytics["total"]["total"],
            }
        ]
    }

    dataByPriority() {
        return [
            {
                "name": "Low",
                "value": this.props.analytics["low"]["total"],
            },
            {
                "name": "Medium",
                "value": this.props.analytics["medium"]["total"],
            },
            {
                "name": "High",
                "value": this.props.analytics["high"]["total"],
            },
            {
                "name": "Critical",
                "value": this.props.analytics["critical"]["total"],
            },
        ]
    }

    dataByProblem() {
        return [
            {
                "name": "Fire",
                "value": this.props.analytics["total"]["fire"],
            },
            {
                "name": "Flood",
                "value": this.props.analytics["total"]["flood"],
            },
            {
                "name": "Power",
                "value": this.props.analytics["total"]["power"],
            },
            {
                "name": "Medical",
                "value": this.props.analytics["total"]["medical"],
            },
        ]
    }

    render() {
        const { classes } = this.props;

        return (
            <>
                <div className={classes.table}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Priority</StyledTableCell>
                                    <StyledTableCell align="right">Fire</StyledTableCell>
                                    <StyledTableCell align="right">Flood</StyledTableCell>
                                    <StyledTableCell align="right">Power</StyledTableCell>
                                    <StyledTableCell align="right">Medical</StyledTableCell>
                                    <StyledTableCell align="right">Total</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.makeRows().map((row) => (
                                    <StyledTableRow key={row.priority}>
                                        <StyledTableCell component="th" scope="row"> <b>{row.priority}</b> </StyledTableCell>
                                        <StyledTableCell align="right">{row.fire}</StyledTableCell>
                                        <StyledTableCell align="right">{row.flood}</StyledTableCell>
                                        <StyledTableCell align="right">{row.power}</StyledTableCell>
                                        <StyledTableCell align="right">{row.medical}</StyledTableCell>
                                        <StyledTableCell align="right">{row.total}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className={classes.charts}>
                    <div className={classes.pie}>
                        <h2 className={classes.chartTitle}> Events by Priority Level </h2>
                        <ResponsiveContainer>
                            <PieChart width={750} height={400}>
                                <Pie data={this.dataByPriority()} dataKey="value" nameKey="name">
                                    {this.dataByPriority().map((entry, index) => <Cell key={index} fill={byPriorityColors[index % byPriorityColors.length]} />)}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className={classes.pie}>
                        <h2 className={classes.chartTitle}> Events by Problem Type </h2>
                        <ResponsiveContainer>
                            <PieChart width={750} height={400}>
                                <Pie data={this.dataByProblem()} dataKey="value" nameKey="name">
                                    {this.dataByProblem().map((entry, index) => <Cell key={index} fill={byProblemColors[index % byProblemColors.length]} />)}
                                </Pie>
                                <Legend />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </>

        )
    }
}

export default withStyles(useStyles)(Analytics);