'use strict';

const e = React.createElement;

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: props.active };
    }

    render() {
        return e('nav', { className: 'navbar navbar-expand-md navbar-dark' },
            e('div', { className: 'container-fluid' },
                e('a', { className: 'navbar-brand', href: 'index.html' },
                    e('img', { src: 'img/logo.png', alt: 'crate logo', className: 'd-inline-block', id: 'logo_img' }), 'crate'),
                e('button', { className: 'navbar-toggler', type: 'button', 'data-bs-toggle': 'collapse', 'data-bs-target': '#navbarNavAltMarkup', 'aria-controls': 'navbarNavAltMarkup', 'aria-expanded': 'false', 'aria-label': "Toggle navigation" },
                    e('span', { className: 'navbar-toggler-icon' })),
                e('div', { className: 'collapse navbar-collapse', id: 'navbarNavAltMarkup' },
                    e('div', { className: 'navbar-nav' },
                        e('a', { className: this.state.active == 'artists' ? 'nav-link active' : 'nav-link', href: 'artists.html', }, 'artists'),
                        e('a', { className: this.state.active == 'faq' ? 'nav-link active' : 'nav-link', href: 'faq.html' }, 'faq'),
                        e('a', { className: this.state.active == 'contact' ? 'nav-link active' : 'nav-link', href: 'contact.html' }, 'contact us'),
                        e('a', { className: this.state.active == 'about' ? 'nav-link active' : 'nav-link', href: 'about.html' }, 'about us'),
                        e('a', { className: this.state.active == 'tech' ? 'nav-link active' : 'nav-link', href: 'tech.html' }, 'the tech'),
                    ),
                )
            )
        );
    }
}

const domContainer = document.querySelector('#navbar-container');
var activeId = ''
try {
    activeId = domContainer.attributes.active.value
} catch(_) {

}
ReactDOM.render(e(NavBar, {active:  activeId}), domContainer);