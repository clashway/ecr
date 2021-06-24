import React from 'react';
import css from 'styled-jsx/css';

const { copyClasses, styles } = css.resolve`
            p {
                margin-bottom: 10px;
            }
            a {
                color: #bf064a;
                text-decoration: none;
                cursor: pointer;
            }
`;

const Copy = ( props ) => {
    return ( 
        <>
            <div className={copyClasses}>
                { props.children }
            </div>
            { styles }
        </>
    );
}
 
export default Copy;