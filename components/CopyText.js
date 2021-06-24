
const CopyText = ( {className, children} ) => {
    return ( 
        <>
            <div className={`${className} copytext`}>
                {children}
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