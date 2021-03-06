import React from 'react';
import User from '../../components/User';

const authIndexPage = () => (
    <div>
        <h1>The auth page</h1>
        <User name="Test" age={25} />
        <style jsx>{`
            div {
                border: 1px solid #eee;
                box-shadow: 0 2px 3px #ccc;
                padding: 20px;
                text-align: center;
            }
        `}</style>
    </div>
);

export default authIndexPage;