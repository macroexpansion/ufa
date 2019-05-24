import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { FormHelperText } from '@material-ui/core';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
}

function SvgIcons(props) {
    return (
        <div className='icon' style={style}>
            <HomeIcon className='homeicon' style={{margin: '4px' ,fontSize: 30 }} />
        </div>
    );
}

export default SvgIcons