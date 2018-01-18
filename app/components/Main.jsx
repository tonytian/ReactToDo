var React = require('react');

var Main = (props) => {
    return (
        <div>
            <h1>React Boilerplate</h1>
            <div className='row'>
                <div className='columns midium-6 large-4 small-centered'>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;
