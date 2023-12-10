import React from 'react';

const footerStyles = {
    backgroundColor: '#111',
    padding: '2rem 0',
    color: '#757575',
    textAlign: 'center',
};

const textStyles = {
    fontSize: '0.9rem',
};

const Footer = () => {
    return (
        <footer style={footerStyles}>
            <p style={textStyles}>
                &copy; {new Date().getFullYear()} Netflix Clone | Created by Your yossef
            </p>
        </footer>
    );
};

export default Footer;
