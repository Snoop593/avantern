import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import { connect } from 'react-redux';
import PropType from 'prop-types';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import DispatcherAlarmInfo from '../../components/dispatcher-alarm-info';
import DispatcherAlarmReaction from '../../components/dispatcher-alarm-reaction';
import PictureHint from '../../components/picture-hint';
import Heading from '../../components/heading';
import TableItem from '../../components/table-item';
import Loading from '../../components/loading';
import ErrorModal from '../../components/error-modal';

import settingsButton from '../../assets/settings-button.svg';

import TABLE from '../../constants/table';

import {
    getAlarmsList,
    getCargoList,
    getCarrierList,
    getCausesList,
    getAlarm
} from '../../store/state/alarms/action';

import {
    alarmsSelector
} from '../../selectors';

import {
    getItemsForDispatcherTable
} from '../../utils/filter';

import {
    ALARMS_TYPE
} from '../../constants/prop-types';

import './dispatcher-tab.css';

const cn = createCn('dispatcher-tab');

const mapStateToProps = state => ({
    alarms: alarmsSelector(state)
});

const mapDispatchToProps = dispatch => ({
    getAlarmsList: () => dispatch(getAlarmsList()),
    getCargoList: () => dispatch(getCargoList()),
    getCarrierList: () => dispatch(getCarrierList()),
    getCausesList: () => dispatch(getCausesList()),
    getAlarm: () => dispatch(getAlarm())
});

class DispatcherTab extends PureComponent {
    state = {
        selectedTableItem: []
    };

    static propTypes = {
        getAlarmsList: PropType.func.isRequired,
        getCargoList: PropType.func.isRequired,
        getCarrierList: PropType.func.isRequired,
        getCausesList: PropType.func.isRequired,
        getAlarm: PropType.func.isRequired,
        alarms: PropType.shape(ALARMS_TYPE).isRequired
    };

    componentDidMount() {
        const {
            getAlarmsList,
            getCargoList,
            getCarrierList,
            getCausesList
        } = this.props;

        getAlarmsList();
        getCargoList();
        getCarrierList();
        getCausesList();
    }

    clickDispatcherTableItem = selectedValue => {
        const {
            selectedTableItem
        } = this.state;

        const {
            getAlarm
        } = this.props;
        const newSelectedTableItem = selectedTableItem.slice();

        if (selectedTableItem.includes(selectedValue)) {
            newSelectedTableItem.splice(selectedTableItem.indexOf(selectedValue), 1);
        } else { newSelectedTableItem.push(selectedValue); }
        this.setState({
            selectedTableItem: newSelectedTableItem
        }, () => getAlarm());
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
            selectedTableItem
        } = this.state;

        const {
            alarms
        } = this.props;

        const alarmsListForTable = getItemsForDispatcherTable(
            alarms.alarmsList, alarms.carrierList, alarms.cargoList, alarms.causesList
        );

        return (
            <TableBody>
                {
                    alarmsListForTable.map(alarm => {
                        const isSelected = selectedTableItem.includes(alarm.id);
                        const arrayForTable = Object.values(alarm);
                        const valuesForTable = arrayForTable.slice(1, arrayForTable.length);
                        return (
                            <TableItem
                                itemId={ alarm.id }
                                onClickTableItem={ this.clickDispatcherTableItem }
                                isSelected={ isSelected }
                                valuesForTable={ valuesForTable }
                            />
                        );
                    })
                }
            </TableBody>
        );
    }

    renderTableHead() {
        return (
            <TableHead>
                <TableRow>
                    {
                        TABLE.HEADERS_DISPATCHER.map(header => (
                            <TableCell>{ header }</TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
        );
    }

    render() {
        const {
            selectedTableItem
        } = this.state;

        const {
            alarms
        } = this.props;

        const isLoadingVisible = alarms.loadingAlarmsList || alarms.loadingAlarm || alarms.loadingCargoList || alarms.loadingCarrierList || alarms.loadingCarrierList;
        const isErrorVisible = alarms.errorLoadingAlarmsList || alarms.errorLoadingAlarm || alarms.errorLoadingCargoList || alarms.errorLoadingCarrierList || alarms.errorLoadingCausesList;
        return (
            <div className={ cn() }>
                <Heading title='Диспетчер' />

                <div className={ cn('settings-menu') }>
                    <div className={ cn('select-group') }>
                        <FormControl variant='outlined' className={ cn('form-control') }>
                            <InputLabel> Транспорт </InputLabel>
                            <Select label='Транспорт' className={ cn('select') }>
                                {
                                    alarms.carrierList.map(carrier => (
                                        <MenuItem
                                            key={ carrier.id }
                                            value={ carrier.id }
                                        >
                                            { carrier.name }
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>

                        <FormControl variant='outlined' className={ cn('form-control') }>
                            <InputLabel> Груз </InputLabel>
                            <Select label='Груз' className={ cn('select') }>
                                {
                                    alarms.cargoList.map(cargo => (
                                        <MenuItem
                                            key={ cargo.id }
                                            value={ cargo.id }
                                        >
                                            { cargo.name }
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>

                        <FormControl variant='outlined' className={ cn('form-control') }>
                            <InputLabel> Тревоги </InputLabel>
                            <Select label='Тревоги' className={ cn('select') }>
                                {
                                    alarms.causesList.map(cause => (
                                        <MenuItem
                                            key={ cause.id }
                                            value={ cause.id }
                                        >
                                            { cause.name }
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>

                    <div className={ cn('button-group') }>
                        <button type='button' className={ cn('button') }>
                            <img src={ settingsButton } alt='setting-button' className={ cn('button-icon') } />
                        </button>
                    </div>
                </div>

                <div className={ cn('table') }>
                    { this.renderTable() }
                </div>
                <div>
                    {
                        selectedTableItem.length > 0
                            ? (
                                <div className={ cn('info') }>
                                    <div className={ cn('info-row') }>
                                        {
                                            selectedTableItem.length === 1
                                        && (
                                            <DispatcherAlarmInfo
                                                time={ alarms.alarm.time }
                                                number={ alarms.alarm.regNumber }
                                                name={ alarms.alarm.driver }
                                                phone={ alarms.alarm.phone }
                                                load={ alarms.alarm.cargo }
                                                route={ alarms.alarm.route }
                                                customer={ alarms.alarm.customer }
                                                carrier={ alarms.alarm.carrier }
                                            />
                                        )
                                        }
                                        <DispatcherAlarmReaction
                                            number='K855CY 777'
                                            numberOfSelected={ selectedTableItem.length }
                                        />
                                    </div>
                                    <div className={ cn('info-row') }>
                                        <iframe title='map' className={ cn('map') } src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d77825.77986216202!2d30.998528!3d52.441907200000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1588251699443!5m2!1sru!2sby' />
                                    </div>
                                </div>
                            ) : <PictureHint title='Выберите тревогу' />
                    }
                </div>
                
                <Loading isVisible={ isLoadingVisible } />
                <ErrorModal isVisible={ isErrorVisible } text='Ошибка!!! Попробуйте еще раз' />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DispatcherTab);
