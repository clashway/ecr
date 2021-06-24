
const CopyText = ( props ) => {
    return ( 
        <>
            <div className="copytext">
                { props.children }
            </div>
            <style jsx>{`
                .copytext :global(p) {
                    margin-bottom: 10px;
                }
                .copytext :global(a) {
                    color: #bf064a;
                    text-decoration: none;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}
 
export default CopyText;