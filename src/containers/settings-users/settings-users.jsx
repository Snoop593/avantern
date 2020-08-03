import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Heading from '../../components/heading';
import Label from '../../components/label';

import './settings-users.css';

const cn = createCn('settings-users');

class SettingsUsers extends PureComponent {
    render() {
        return (
            <div className={ cn() }>
                <Heading title='Создание/ редактирование пользователя' />

                <div className={ cn('row') }>
                    <div className={ cn('column') }>
                        <Label
                            text='Фамилия Имя Отчество'
                            isRequired
                        />
                        <TextField
                            label='Иванов Иван Иванович'
                            className={ cn('input') }
                            variant='outlined'
                        />
                    </div>
                    <div className={ cn('column') }>
                        <Label
                            text='Email'
                            isRequired
                        />
                        <TextField
                            label='ivanov@cherkizovo.ru'
                            className={ cn('input') }
                            variant='outlined'
                        />
                    </div>
                    <div className={ cn('column') }>
                        <Label
                            text='Телефон'
                        />
                        <TextField
                            label='+7 (916) 123 45 67'
                            className={ cn('input') }
                            variant='outlined'
                        />
                    </div>
                </div>

                <div className={ cn('row') }>
                    <div className={ cn('column') }>
                        <Label
                            text='Введите пароль'
                            isRequired
                        />
                        <TextField
                            label='Цифры 0-9, латиниские буквы'
                            className={ cn('input') }
                            variant='outlined'
                        />
                    </div>
                    <div className={ cn('column') }>
                        <Label
                            text='Повторите пароль'
                            isRequired
                        />
                        <TextField
                            label='Введите пароль еще раз'
                            className={ cn('input') }
                            variant='outlined'
                        />
                    </div>
                </div>

                <div className={ cn('checkbox-group') }>
                    <Label
                        text='Права доступа:'
                    />

                    <div className={ cn('checkbox-group-item') }>
                        <FormControlLabel
                            className={ cn('checkbox') }
                            control={ <Checkbox /> }
                            label='Диспетчер'
                        />
                        <FormControlLabel
                            className={ cn('checkbox') }
                            control={ <Checkbox /> }
                            label='Может гасить тревоги'
                        />
                        <FormControlLabel
                            className={ cn('checkbox') }
                            control={ <Checkbox /> }
                            label='Отчеты'
                        />
                    </div>

                    <div className={ cn('checkbox-group-item') }>
                        <FormControlLabel
                            className={ cn('checkbox') }
                            control={ <Checkbox /> }
                            label='Настройки пользователей'
                        />
                        <FormControlLabel
                            className={ cn('checkbox') }
                            control={ <Checkbox /> }
                            label='Настройки сценариев'
                        />
                        <FormControlLabel
                            className={ cn('checkbox') }
                            control={ <Checkbox /> }
                            label='Настройки справочников'
                        />
                        <FormControlLabel
                            className={ cn('checkbox') }
                            control={ <Checkbox /> }
                            label='Настройки отетов'
                        />
                    </div>
                </div>

                <div className={ cn('row') }>
                    <Button className={ cn('button') }>
                        Сохранить
                    </Button>
                </div>

                <div className={ cn('row') }>
                    <Label
                        text='*- поля, обязательные для заполнения'
                        size='xss'
                    />
                </div>
            </div>
        );
    }
}

export default SettingsUsers;
