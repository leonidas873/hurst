import React from 'react'
import { MyPopoverButton, MyPopover } from './Style'

const SingleFilter = ({ name, children }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <MyPopoverButton aria-describedby={id} variant="contained" onClick={handleClick}>{name}</MyPopoverButton>
            <MyPopover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <h4>{name}</h4>
                {children}
            </MyPopover>
        </>
    )
}

export default SingleFilter