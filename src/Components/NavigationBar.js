import React from 'react';
import '../App.scss';
class MenuLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linksUnauthorized: [{
                text: 'Home',
                link: '/',

            }, {
                text: 'Sign Up',
                link: '/signup',

            }, {
                text: 'Login',
                link: '/login',
            },
            {
                text: 'T and C',
                link: '/tandc',
            },
            {
                text: 'About Us',
                link: '/aboutus',
            }, {
                text: 'Privacy Policy',
                link: '/privacypolicy',
            }
            ],
            linksAuthorized: [
                {
                    text: 'Home',
                    link: '/',

                },
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'T and C',
                    link: '/tandc',
                },
                {
                    text: 'About Us',
                    link: '/aboutus',

                },
                {
                    text: 'Privacy Policy',
                    link: '/privacypolicy',
                },
                {
                    text: 'Log Out',
                    link: '/logout',
                }
            ]
        }
    }
    render() {
        let links = localStorage.getItem('token') ? (this.state.linksAuthorized.map((link, i, number) =>
            <li key={i.toString()} ref={i + 1}><i aria-hidden="true" >
            </i><a href={link.link} >{link.text}</a></li>)) :
            (this.state.linksUnauthorized.map((link, i, number2) =>
                <li key={i.toString()} ref={i + 1}><i aria-hidden="true" ></i><a href={link.link} >{link.text}</a></li>));

        return (

            <div className={this.props.menuStatus} id='menu'>

                <ul>
                    {links}
                </ul>
            </div>
        )
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this._menuToggle = this._menuToggle.bind(this);
        this._handleDocumentClick = this._handleDocumentClick.bind(this);
    }
    componentDidMount() {
        document.addEventListener('click', this._handleDocumentClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this._handleDocumentClick, false);
    }
    _handleDocumentClick(e) {
        if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
            this.setState({
                isOpen: false
            });
        };
    }
    _menuToggle(e) {
        e.stopPropagation();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        let menuStatus = this.state.isOpen ? 'isopen' : '';

        return (
            <div ref="root">
                <div className="menubar">
                    <div className="hambclicker" onClick={this._menuToggle}></div>
                    <div id="hambmenu" className={menuStatus}><span></span><span></span><span></span><span></span></div>
                </div>
                <MenuLinks menuStatus={menuStatus} />
            </div>
        )
    }
}

export default Menu