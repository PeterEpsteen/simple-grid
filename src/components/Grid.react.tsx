import * as React from 'react';
import { withGridProps, GridStoreInterface } from '../stores/GridStore';
import { Provider } from '../../lib/stores/GridStore';

export interface GridProps {
    children: React.ReactNode
    columns: number//sdfsdfsf
    gridProps: GridStoreInterface
}

enum columns {
    small = 8,
    medium = 12,
    large = 24
}

class Grid extends React.PureComponent<GridProps, {}> {
    constructor(props: GridProps) {
        super(props)
        if (!columns[this.props.columns]) 
            throw new Error("Please provide a column with that is either 8, 12, or 24");
        this.props.gridProps.setColumns(this.props.columns);
    }

    render() {
        return (
            <div className="grid-wrapper">
                {this.props.children}
            </div>
        );
    }
}
