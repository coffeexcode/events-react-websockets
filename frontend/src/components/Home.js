import React from 'react';
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1> Welcome to the Event Dashboard! </h1>
                <p> 
                    This dashboard utilizes websockets to constantly receieve events from a server in realtime. This data only exists until you refresh the page. Refreshing the page
                    will reset any data in the application.
                </p>
                <p>
                The events come into <u>categories</u>: <b>Fire</b>, <b>Flood</b>, <b>Power</b>, and <b>Medical</b>.
                </p>
                <p>
                The events also have tagged <u>priorities</u>: <b>Low</b>, <b>Medium</b>, <b>High</b>, and <b>Critical</b>.
                </p>
                <p>
                    These events can be view on the <Link to="/livefeed"> livefeed </Link> page. At the top of the livefeed page, there are filters that will apply to the feed.
                    For example, unselecting the Fire checkbox will remove any event that is in the 'Fire' category. Similarly, unchecking the 'Medium' checkbox will remove any
                    event that has a 'Medium' priority.
                    <br />
                    The most recent event is shown at the top of the page.
                </p>
                <p>
                    An overview of all events received by the dashboard can be found on the <Link to="/analytics"> analytics </Link> page. This page contains a table that updates
                    in realtime with a summary of every event received (the livefeed filters do not affect this data). There are chart to help visualize the data by priority and
                    by problem.
                </p>
            </div>
        )
    }
}

export default Home;