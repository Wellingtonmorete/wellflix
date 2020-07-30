import React from 'react';

function ButtonLink(props) {
    console.log(props);
    //props => { className: "oque vai ser passado", href: "/"}
    return(
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}
export default ButtonLink;