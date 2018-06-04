import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

class MainDrawer extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            left: false
        };
    }

    toggleDrawer = (open) => {
        this.setState({
            left: open
        });
    };

    render() {
        const sideList = (
        <div>
            <Button>Delete mode</Button>
            <Divider />
        </div>
        );

        return (
        <div>
            <Drawer open={this.state.left} onClose={() => this.toggleDrawer(false)}>
            <div
                tabIndex={0}
                role="button"
                onClick={() => this.toggleDrawer(false)}
                onKeyDown={() => this.toggleDrawer(false)}
            >
                {sideList}
            </div>
            </Drawer>
        </div>
        );
    }
}

export default MainDrawer;