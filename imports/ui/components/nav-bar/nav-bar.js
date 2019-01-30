import { Template } from 'meteor/templating';
import { AccountsTemplates } from 'meteor/useraccounts:core';
import { $ } from 'meteor/jquery';

import './nav-bar.html';
import './nav-bar.css';
import '../accounts/login/loginModal.js';

Template.navBar.events( {
    'click .logout': ( ) => {
        AccountsTemplates.logout();
    },
} );

Template.navBar.onRendered( function( ) {
    // eslint-disable-next-line no-undef
    this.sidenav = new M.Sidenav( $( '.sidenav' ).get( 0 ) );
    const modals = document.querySelectorAll( '.modal' );
    // eslint-disable-next-line no-undef
    M.Modal.init( modals );
} );
