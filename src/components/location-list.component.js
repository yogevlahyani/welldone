import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default class LocationList extends Component {

    renderLocations = () => {
      const { locations } = this.props;
      return locations.map((loc, i) => {
        return (
            <TableRow key={i}>
                <TableCell component="th" scope="row">
                    {loc.name}
                </TableCell>
                <TableCell>{loc.address}</TableCell>
                <TableCell>LAT: {loc.coordinates[0]}, LNG: {loc.coordinates[1]}</TableCell>
                <TableCell>{loc.category}</TableCell>
            </TableRow>
        ) ;
      });
    }

    render() {
        const { locations } = this.props;
        if (locations.length <= 0) { return null; }

        return (
          <div>
            <h1>Locations:</h1>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Coordinates</TableCell>
                            <TableCell>Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { this.renderLocations() }
                    </TableBody>
                </Table>
                </Paper>
          </div>
        );
    }
}

LocationList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object),
};