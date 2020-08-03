import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import { connect } from 'react-redux';
import PropType from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Heading from '../../components/heading';
import Label from '../../components/label';
import Loading from '../../components/loading';
import ErrorModal from '../../components/error-modal';

import {
    getTemplateParamsList
} from '../../store/state/templates/action';

import {
    templatesSelector
} from '../../selectors';

import {
    SETTINGS_REPORTS_TYPE
} from '../../constants/prop-types';

import './settings-reports.css';

const cn = createCn('settings-reports');

const mapStateToProps = state => ({
    templates: templatesSelector(state)
});

const mapDispatchToProps = dispatch => ({
    getTemplateParamsList: () => dispatch(getTemplateParamsList())
});

class SettingsReports extends PureComponent {
    static propTypes = {
        getTemplateParamsList: PropType.func.isRequired,
        templates: PropType.shape(SETTINGS_REPORTS_TYPE).isRequired
    };

    componentDidMount() {
        const {
            getTemplateParamsList
        } = this.props;

        getTemplateParamsList();
    }

    render() {
        const {
            templates
        } = this.props;

        const isLoadingVisible = templates.loadingTemplateParamsList;
        const isErrorVisible = templates.errorLoadingTemplateParamsList;

        return (
            <div className={ cn() }>
                <Heading title='Создание/ редактирование отчетов' />

                <div className={ cn('row') }>
                    <div className={ cn('column') }>
                        <Label
                            text='Название отчета'
                        />
                        <TextField
                            label='Введите название отчета'
                            className={ cn('input') }
                            variant='outlined'
                        />
                    </div>
                </div>

                <div className={ cn('row') }>
                    <div className={ cn('column') }>
                        <Label
                            text='Выберите шаблона отчета'
                        />
                        <FormControl variant='outlined' className={ cn('form-control') }>
                            <InputLabel> Выберите шаблона отчета </InputLabel>
                            <Select label='Выберите шаблона отчета' className={ cn('select') }>
                                {
                                    templates.templateParamsList.baseTemplates
                                    && templates.templateParamsList.baseTemplates.map(base => (
                                        <MenuItem
                                            key={ base }
                                            value={ base }
                                        >
                                            { base }
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className={ cn('row') }>
                    <div className={ cn('row-item') }>
                        <FormControl variant='outlined' className={ cn('form-control') }>
                            <InputLabel> Фабрики </InputLabel>
                            <Select label='Фабрики' className={ cn('select') }>
                                {
                                    templates.templateParamsList.factories
                                    && templates.templateParamsList.factories.map(factory => (
                                        <MenuItem
                                            key={ factory.id }
                                            value={ factory.id }
                                        >
                                            { factory.name }
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div className={ cn('row-item') }>
                        <FormControl variant='outlined' className={ cn('form-control') }>
                            <InputLabel> Бройлерные цеха (БЦ) </InputLabel>
                            <Select label='Бройлерные цеха (БЦ)' className={ cn('select') }>
                                {
                                    templates.templateParamsList.bcs
                                    && templates.templateParamsList.bcs.map(bc => (
                                        <MenuItem
                                            key={ bc.id }
                                            value={ bc.id }
                                        >
                                            { bc.name }
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div className={ cn('row-item') }>
                        <FormControl variant='outlined' className={ cn('form-control') }>
                            <InputLabel> Птицеперерабатывающие комплексы (ППК) </InputLabel>
                            <Select label='Птицеперерабатывающие комплексы (ППК)' className={ cn('select') }>
                                {
                                    templates.templateParamsList.ppks
                                    && templates.templateParamsList.ppks.map(ppk => (
                                        <MenuItem
                                            key={ ppk.id }
                                            value={ ppk.id }
                                        >
                                            { ppk.name }
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className={ cn('row') }>
                    <div className={ cn('row-item') }>
                        <FormControl variant='outlined' className={ cn('form-control') }>
                            <InputLabel> Маршруты </InputLabel>
                            <Select label='Маршруты' className={ cn('select') }>
                                {
                                    templates.templateParamsList.ways
                                    && templates.templateParamsList.ways.map(way => (
                                        <MenuItem
                                            key={ way.id }
                                            value={ way.id }
                                        >
                                            { way.name }
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div className={ cn('row-item') }>
                        <FormControl variant='outlined' className={ cn('form-control') }>
                            <InputLabel> Госномера т/с </InputLabel>
                            <Select label='Госномера т/с' className={ cn('select') }>
                                {
                                    templates.templateParamsList.cars
                                    && templates.templateParamsList.cars.map(car => (
                                        <MenuItem
                                            key={ car.id }
                                            value={ car.id }
                                        >
                                            { car.number }
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div className={ cn('row-item') }>
                        <FormControl variant='outlined' className={ cn('form-control') }>
                            <InputLabel> ФИО водителей </InputLabel>
                            <Select label='ФИО водителей' className={ cn('select') }>
                                {
                                    templates.templateParamsList.drivers
                                    && templates.templateParamsList.drivers.map(driver => (
                                        <MenuItem
                                            key={ driver.id }
                                            value={ driver.id }
                                        >
                                            { driver.name }
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className={ cn('row') }>
                    <div className={ cn('column-item') }>
                        <Label
                            text='Сортировать по полю'
                        />
                        <FormControl variant='outlined' className={ cn('form-control') }>
                            <InputLabel> Выберите поле </InputLabel>
                            <Select label='Выберите поле' className={ cn('select') }>
                                {
                                    templates.templateParamsList.sortableFields
                                    && templates.templateParamsList.sortableFields.map(field => (
                                        <MenuItem
                                            key={ field }
                                            value={ field }
                                        >
                                            { field }
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div className={ cn('column') }>
                        <Label
                            text='Дополнительные параметры'
                        />
                        <div className={ cn('parameters-group') }>
                            <TextField
                                label='Параметр 1'
                                className={ cn('input') }
                                variant='outlined'
                            />
                            <TextField
                                label='Параметр 2'
                                className={ cn('input') }
                                variant='outlined'
                            />
                            <TextField
                                label='Параметр 3'
                                className={ cn('input') }
                                variant='outlined'
                            />
                            <TextField
                                label='Параметр 4'
                                className={ cn('input') }
                                variant='outlined'
                            />
                            <TextField
                                label='Параметр 5'
                                className={ cn('input') }
                                variant='outlined'
                            />
                        </div>
                    </div>
                </div>

                <div className={ cn('row') }>
                    <FormControlLabel
                        control={ <Checkbox /> }
                        label='Периодическая отправка по email'
                    />
                </div>

                <div className={ cn('row') }>
                    <div className={ cn('column') }>
                        <Label
                            text='Даты формирования отчета'
                        />
                        <div className={ cn('link-group') }>
                            <Link
                                className={ cn('link') }
                                component='button'
                            >
                                Сегодня
                            </Link>
                            <Link
                                className={ cn('link') }
                                component='button'
                            >
                                Вчера
                            </Link>
                            <Link
                                className={ cn('link') }
                                component='button'
                            >
                                Неделя
                            </Link>
                            <Link
                                className={ cn('link') }
                                component='button'
                            >
                                Месяц
                            </Link>
                            <Link
                                className={ cn('link') }
                                component='button'
                            >
                                Квартал
                            </Link>
                            <Link
                                className={ cn('link') }
                                component='button'
                            >
                                Год
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={ cn('row') }>
                    <div className={ cn('column') }>
                        <Label
                            text='Получатели отчета'
                        />
                        <TextField
                            label='Введите список email-адресов через ;'
                            className={ cn('input') }
                            variant='outlined'
                        />
                    </div>
                </div>

                <div className={ cn('row') }>
                    <div className={ cn('column') }>
                        <Label
                            text='Тема письма'
                        />
                        <TextField
                            label='Тема письма'
                            className={ cn('input') }
                            variant='outlined'
                        />
                    </div>
                </div>

                <div className={ cn('row') }>
                    <div className={ cn('column') }>
                        <Label
                            text='Дни недели'
                        />
                        <FormControl variant='outlined' className={ cn('form-control') }>
                            <InputLabel> Выберите день </InputLabel>
                            <Select label='Выберите день' className={ cn('select') }>
                                <MenuItem value='День 1'> День 1 </MenuItem>
                                <MenuItem value='День 2'> День 2 </MenuItem>
                                <MenuItem value='День 3'> День 3 </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className={ cn('column') }>
                        <Label
                            text='Время'
                        />
                        <TextField
                            label='00:00'
                            className={ cn('input') }
                            variant='outlined'
                        />
                    </div>
                </div>

                <div className={ cn('row') }>
                    <Button className={ cn('button') }>
                        Сохранить
                    </Button>
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
)(SettingsReports);
