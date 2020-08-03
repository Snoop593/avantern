import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';

import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Heading from '../../components/heading';
import Label from '../../components/label';

import './settings-scripts.css';

const cn = createCn('settings-scripts');

class SettingsScripts extends PureComponent {
    render() {
        return (
            <div className={ cn() }>
                <Heading title='Создание/ редактирование сценариев' />

                <div className={ cn('row') }>
                    <div className={ cn('column') }>
                        <Label
                            text='Название сценария'
                        />
                        <TextField
                            label='Введите название сценария'
                            className={ cn('input') }
                            variant='outlined'
                        />
                    </div>
                    <div className={ cn('column') }>
                        <Label
                            text='Заказчик транспорта'
                        />
                        <FormControl variant='outlined' className={ cn('form-control') }>
                            <InputLabel> Выберите заказчика транспорта </InputLabel>
                            <Select label='Выберите заказчика транспорта' className={ cn('select') }>
                                <MenuItem value='Заказчик 1'> Заказчик 1 </MenuItem>
                                <MenuItem value='Заказчик 2'> Заказчик 2 </MenuItem>
                                <MenuItem value='Заказчик 3'> Заказчик 3 </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className={ cn('column') }>
                        <Label
                            text='Вид груза'
                        />
                        <FormControl variant='outlined' className={ cn('form-control') }>
                            <InputLabel> Выберите вид груза </InputLabel>
                            <Select label='Выберите вид груза' className={ cn('select') }>
                                <MenuItem value='Груз 1'> Груз 1 </MenuItem>
                                <MenuItem value='Груз 2'> Груз 2 </MenuItem>
                                <MenuItem value='Груз 3'> Груз 3 </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className={ cn('checkbox-group') }>
                    <FormControlLabel
                        control={ <Checkbox /> }
                        label='Отклонение от геозоны маршрута'
                    />
                </div>

                <div className={ cn('row') }>
                    <div className={ cn('row-item') }>
                        Остановка или стоянка на маршруте более
                        <TextField
                            label='N'
                            className={ cn('input-number') }
                            variant='outlined'
                        />
                        секунд
                    </div>
                    <div className={ cn('row-item') }>
                        Резкое Ускорение выше
                        <TextField
                            label='N'
                            className={ cn('input-number') }
                            variant='outlined'
                        />
                        g
                    </div>
                </div>

                <div className={ cn('row') }>
                    <div className={ cn('row-item') }>
                        Движение со скоростью менее
                        <TextField
                            label='N'
                            className={ cn('input-number') }
                            variant='outlined'
                        />
                        км/ч
                    </div>
                    <div className={ cn('row-item') }>
                        Резкое Торможение выше
                        <TextField
                            label='N'
                            className={ cn('input-number') }
                            variant='outlined'
                        />
                        g
                    </div>
                </div>


                <div className={ cn('row') }>
                    <div className={ cn('row-item') }>
                        Движение со скоростью более
                        <TextField
                            label='N'
                            className={ cn('input-number') }
                            variant='outlined'
                        />
                        км/ч
                    </div>
                    <div className={ cn('row-item') }>
                        Резкий Поворот выше
                        <TextField
                            label='N'
                            className={ cn('input-number') }
                            variant='outlined'
                        />
                        g
                    </div>
                </div>

                <div className={ cn('row') }>
                    <Button className={ cn('button') }>
                        Сохранить
                    </Button>
                </div>
            </div>
        );
    }
}

export default SettingsScripts;
