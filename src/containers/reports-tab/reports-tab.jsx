import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import { connect } from 'react-redux';
import PropType from 'prop-types';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import PictureHint from '../../components/picture-hint';
import Heading from '../../components/heading';
import Loading from '../../components/loading';
import ErrorModal from '../../components/error-modal';

import {
    getReportsList
} from '../../store/state/reports/action';

import {
    reportsSelector
} from '../../selectors';

import {
    REPORTS_TYPE
} from '../../constants/prop-types';

import './reports-tab.css';

const cn = createCn('reports-tab');

const mapStateToProps = state => ({
    reports: reportsSelector(state)
});

const mapDispatchToProps = dispatch => ({
    getReportsList: () => dispatch(getReportsList())
});

class ReportsTab extends PureComponent {
    static propTypes = {
        getReportsList: PropType.func.isRequired,
        reports: PropType.shape(REPORTS_TYPE).isRequired
    };

    componentDidMount() {
        const {
            getReportsList
        } = this.props;

        getReportsList();
    }

    render() {
        const {
            reports
        } = this.props;

        const isLoadingVisible = reports.loadingReportsList;
        const isErrorVisible = reports.errorLoadingReportsList;
        return (
            <div className={ cn() }>
                <Heading title='Отчеты' />

                <div className={ cn('settings-menu') }>
                    <div className={ cn('select-group') }>
                        <FormControl variant='outlined' className={ cn('form-control') }>
                            <InputLabel> Выберите отчет </InputLabel>
                            <Select label='Выберите отчет' className={ cn('select') }>
                                {
                                    reports.reportsList.map(report => (
                                        <MenuItem
                                            key={ report.id }
                                            value={ report.id }
                                        >
                                            { report.templateName }
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>

                        <TextField
                            label='Даты'
                            className={ cn('date') }
                            type='date'
                            defaultValue='2017-05-24'
                        />
                    </div>
                    <Button className={ cn('button') }>
                        Сформировать отчет
                    </Button>
                </div>

                <div className={ cn('link-group') }>
                    <Link
                        component='button'
                        className={ cn('link') }
                    >
                        Вчера
                    </Link>
                    <Link
                        component='button'
                        className={ cn('link') }
                    >
                        Неделя
                    </Link>
                    <Link
                        component='button'
                        className={ cn('link') }
                    >
                        Месяц
                    </Link>
                    <Link
                        component='button'
                        className={ cn('link') }
                    >
                        Квартал
                    </Link>
                    <Link
                        component='button'
                        className={ cn('link') }
                    >
                        Год
                    </Link>
                </div>

                <PictureHint title='Сформируйте отчет' />
                <Loading isVisible={ isLoadingVisible } />
                <ErrorModal isVisible={ isErrorVisible } text='Ошибка!!! Попробуйте еще раз' />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReportsTab);
