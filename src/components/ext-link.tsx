import React from 'react';

// Your component code here


function ExtLink(props: any): JSX.Element {
    return (
        <a {...props} rel="noopener" target={props.target || '_blank'} />
    )
}
export default ExtLink
