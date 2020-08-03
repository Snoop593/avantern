import React from 'react';
import { createCn } from 'bem-react-classname';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import editButton from '../../assets/edit-button.svg';
import deleteButton from '../../assets/delete-button.svg';

import './table-item.css';

const cn = createCn('table-item');

const TableItem = ({
    itemId, onClickTableItem, isSelected, valuesForTable, onClickEdit, onClickDelete
}) => (
    <TableRow
        onClick={ () => onClickTableItem(itemId) }
        key={ itemId }
        className={ cn({ 'is-selected': isSelected }) }
    >
        {
            valuesForTable.map(item => (
                <TableCell>
                    { item }
                </TableCell>
            ))
        }
        {
            onClickEdit && isSelected
                ? (
                    <TableCell>
                        <button type='button' className={ cn('button') }>
                            <img src={ editButton } alt='edit-button' className={ cn('button-icon') } />
                        </button>
                    </TableCell>
                )
                : (
                    <TableCell />
                )
        }
        {
            onClickDelete && isSelected
                ? (
                    <TableCell>
                        <button type='button' className={ cn('button') }>
                            <img src={ deleteButton } alt='delete-button' className={ cn('button-icon') } />
                        </button>
                    </TableCell>
                )
                : (
                    <TableCell />
                )
        }
    </TableRow>
);

TableItem.propTypes = {
    itemId: PropTypes.number.isRequired,
    onClickTableItem: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
    valuesForTable: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickEdit: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
};

export default TableItem;
