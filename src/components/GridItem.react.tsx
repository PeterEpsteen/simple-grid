import * as React from 'react';
import { withGridProps } from '../stores/GridStore';

export interface GridItemProps {
    children: React.ReactNode
    columns: number
}

class GridItem extends React.PureComponent<GridItemProps, {}> {
    render() {
        return (
            <div className={`grid-item-wrapper grid-${this.props.columns}`}>
                {this.props.children}
            </div>
        )
    }
}

export default withGridProps(GridItem);