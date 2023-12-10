const Loader = ({ loadingText }) => (
    <div style={{ textAlign: 'center', padding: '120px' }}>
        <span>{loadingText || 'Loading...'}</span>
    </div>
);

export default Loader