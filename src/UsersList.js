import React, { Component } from 'react';

export class UsersList extends Component {

    render() {
        const listItems = this.props.users.map((item) =>
            <li>
                <img src={item.avatar_url} height="24" width="24" alt={item.login} />
                {item.login}
            </li>
        );

        return (
            <ul>{listItems}</ul>
        );
    }
}
