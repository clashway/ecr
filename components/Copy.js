
const Copy = ( props ) => {
    return ( 
        <>
            <div className="copy">
                { props.children }
            </div>
            <style jsx>{`
                .copy :global(p) {
                    margin-bottom: 10px;
                }
                .copy :global(a) {
                    color: #bf064a;
                    text-decoration: none;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}
 
export default Copy;