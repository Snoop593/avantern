import React, { Component } from 'react';
import { createCn } from 'bem-react-classname';
import PropType from 'prop-types';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Heading from '../../components/heading';
import TableItem from '../../components/table-item';

import ROUTES from '../../constants/routing';
import TABLE from '../../constants/table';

import './settings-tab.css';

const cn = createCn('settings-tab');

const users = [
    ['Иванов Иван Иванович', 'ivanov', 'Супердиспетчер', '8 (916) 457 54 50', 'ivanov@cherkizavo.ru'],
    ['Иванов2 Иван Иванович2', 'ivanov', 'Супердиспетчер', '8 (916) 457 54 50', 'ivanov@cherkizavo.ru'],
    ['Иванов3 Иван Иванович3', 'ivanov', 'Супердиспетчер', '8 (916) 457 54 50', 'ivanov@cherkizavo.ru'],
    ['Иванов4 Иван Иванович4', 'ivanov', 'Супердиспетчер', '8 (916) 457 54 50', 'ivanov@cherkizavo.ru'],
    ['Иванов5 Иван Иванович5', 'ivanov', 'Супердиспетчер', '8 (916) 457 54 50', 'ivanov@cherkizavo.ru']
];

const scripts = [
    ['Сценарий 1', 'Куриное царство Липецк', 'Птица на убой', 'false', '40 км/ч', '0.25g', '0.25g'],
    ['Сценарий 2', 'Куриное царство Липецк', 'Птица на убой', 'false', '40 км/ч', '0.25g', '0.25g'],
    ['Сценарий 3', 'Куриное царство Липецк', 'Птица на убой', 'false', '40 км/ч', '0.25g', '0.25g'],
    ['Сценарий 4', 'Куриное царство Липецк', 'Птица на убой', 'false', '40 км/ч', '0.25g', '0.25g'],
    ['Сценарий 5', 'Куриное царство Липецк', 'Птица на убой', 'false', '40 км/ч', '0.25g', '0.25g']
];

const directory = [
    ['Груз1', 'Гончаров Артем', '02.02.2020', '02.02.2020'],
    ['Груз2', 'Гончаров Артем', '02.02.2020', '02.02.2020'],
    ['Груз3', 'Гончаров Артем', '02.02.2020', '02.02.2020'],
    ['Груз4', 'Гончаров Артем', '02.02.2020', '02.02.2020'],
    ['Груз5', 'Гончаров Артем', '02.02.2020', '02.02.2020'],
    ['Груз6', 'Гончаров Артем', '02.02.2020', '02.02.2020']
];

const reports = [
    ['Отчет 1', 'Временной график №3', 'ivanov@cherkizavo.ru', '02.02.2020', '02.02.2020'],
    ['Отчет 2', 'Временной график №3', 'ivanov@cherkizavo.ru', '02.02.2020', '02.02.2020'],
    ['Отчет 3', 'Временной график №3', 'ivanov@cherkizavo.ru', '02.02.2020', '02.02.2020'],
    ['Отчет 4', 'Временной график №3', 'ivanov@cherkizavo.ru', '02.02.2020', '02.02.2020'],
    ['Отчет 5', 'Временной график №3', 'ivanov@cherkizavo.ru', '02.02.2020', '02.02.2020']
];

class SettingsTab extends Component {
    static propTypes = {
        push: PropType.func.isRequired
    }

    state = {
        content: 'users',
        selectedTableItem: ''
    };

    clickSettingsTableItem = selectedValue => {
        this.setState({
            selectedTableItem: selectedValue
        });
    };

    clickButtonAddNew = () => {
        const {
            push
        } = this.props;

        const {
            content
        } = this.state;

        switch (content) {
        case 'users': push(ROUTES.SETTINGS_USERS); break;
        case 'reports': push(ROUTES.SETTINGS_REPORTS); break;
        case 'scripts': push(ROUTES.SETTINGS_SCRIPTS); break;
        case 'directory': push(ROUTES.SETTINGS_DIRECTORY); break;
        default: break;
        }
    };

    renderTable() {
        return (
            <TableContainer>
                <Table>
                    { this.renderTableHead() }
                    { this.renderTableBody() }
                </Table>
            </TableContainer>
        );
    }

    renderTableBody() {
        const {
            content,
            selectedTableItem
        } = this.state;

        let bodyItems = [];

        switch (content) {
        case 'users': bodyItems = users.slice(); break;
        case 'reports': bodyItems = reports.slice(); break;
        case 'scripts': bodyItems = scripts.slice(); break;
        case 'directory': bodyItems = directory.slice(); break;
        default: break;
        }
        return (
            <TableBody>
                {
                    bodyItems.map(items => {
                        const isSelected = selectedTableItem.includes(items[0]);

                        return (
                            <TableItem
                                itemId={ items[0] }
                                onClickTableItem={ this.clickSettingsTableItem }
                                isSelected={ isSelected }
                                valuesForTable={ items }
                                onClickEdit={ () => {} }
                                onClickDelete={ () => {} }
                            />
                        );
                    })
                }
            </TableBody>
        );
    }

    renderTableHead() {
        const {
            content
        } = this.state;

        let headers = [];

        switch (content) {
        case 'users': headers = TABLE.HEADERS_USER; break;
        case 'reports': headers = TABLE.HEADERS_REPORTS; break;
        case 'scripts': headers = TABLE.HEADERS_SCRIPTS; break;
        case 'directory': headers = TABLE.HEADERS_DIRECTORY; break;
        default: break;
        }

        return (
            <TableHead>
                <TableRow>
                    {
                        headers.map(header => (
                            <TableCell>{ header }</TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
        );
    }

    renderMenuButton() {
        const {
            content
        } = this.state;

        let title = '';

        switch (content) {
        case 'users': title = 'Добавить пользователя'; break;
        case 'reports': title = 'Добавить отчет'; break;
        case 'scripts': title = 'Добавить сценарий'; break;
        case 'directory': title = 'Добавить справочник'; break;
        default: break;
        }
        return (
            <Button className={ cn('button') } onClick={ this.clickButtonAddNew }>
                { title }
            </Button>
        );
    }

    render() {
        const {
            content
        } = this.state;

        return (
            <div className={ cn() }>
                <div className={ cn('menu') }>
                    <Heading
                        title='Настройки'
                    />
                    <div className={ cn('link-group') }>
                        <Link
                            component='button'
                            className={ cn('link', { 'is-selected': content === 'users' }) }
                            onClick={ () => { this.setState({ content: 'users', selectedTableItem: '' }); } }
                        >
                            Пользователи
                        </Link>
                        <Link
                            component='button'
                            className={ cn('link', { 'is-selected': content === 'reports' }) }
                            onClick={ () => { this.setState({ content: 'reports', selectedTableItem: '' }); } }
                        >
                            Отчеты
                        </Link>
                        <Link
                            component='button'
                            className={ cn('link', { 'is-selected': content === 'scripts' }) }
                            onClick={ () => { this.setState({ content: 'scripts', selectedTableItem: '' }); } }
                        >
                            Сценарии
                        </Link>
                        <Link
                            component='button'
                            className={ cn('link', { 'is-selected': content === 'directory' }) }
                            onClick={ () => { this.setState({ content: 'directory', selectedTableItem: '' }); } }
                        >
                            Справочники
                        </Link>
                    </div>
                    { this.renderMenuButton() }
                </div>

                <div className={ cn('table') }>
                    { this.renderTable() }
                </div>
            </div>
        );
    }
}

export default SettingsTab;
