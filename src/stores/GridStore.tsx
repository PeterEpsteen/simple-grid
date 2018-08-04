import * as React from 'react';
import { GridProps } from '../components/Grid.react';

export interface GridStoreInterface {
    columns: number
    setColumns: (columns: number) => void
}

const defaultProps: GridStoreInterface = {
    columns: 0,
    setColumns: () => {}
} 

export const {Provider, Consumer} = React.createContext(defaultProps);

export function withGridProps(Component: React.ClassType<any, any, any>) {
    return class withProps extends React.PureComponent<any, {}> {
        render() {
            return (
                <Consumer>
                    {(gridProps: GridStoreInterface) => <Component gridProps={gridProps} {...this.props} />}
                </Consumer>
            );
        }
    }
}