import * as React from 'react';
import { graphql, ChildProps } from 'react-apollo';
import gql from 'graphql-tag';

export interface IUser {
  id: string;
  name: string;
}

export interface AppProps extends ChildProps<{}, { users: IUser[] }> {

}

class App extends React.Component<AppProps> {
  public render() {
    return this.props.data && this.props.data.users ? (
      <div>
        {this.props.data.users.map((user) => {
          return <div key={user.id}>{user.id} {user.name}</div>;
        })}
      </div>
    ) : null;
  }
}

const AppWithQL = graphql(
  gql`
    query UserQuery {
      users {
        id
        name
      }
    }
  `
)(App);

export default AppWithQL;
