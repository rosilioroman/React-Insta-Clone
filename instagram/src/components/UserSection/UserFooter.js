import React from 'react';

const UserFooter = props => {
    return (
        <footer className="user-footer">
            <div>
                <ul className="footer-links">
                    <li>
                        <a href="https://github.com/rosilioroman/React-Insta-Clone">
                            GitHub
                        </a>
                    </li>
                    <li>
                        •
                    </li>
                    <li>
                        <a href="https://rosilioroman.me">
                            Portfolio
                        </a>
                    </li>
                </ul>
            </div>
            <div>&#169; 2019 Rosilio Roman</div>
        </footer>
    );
}

export default UserFooter;