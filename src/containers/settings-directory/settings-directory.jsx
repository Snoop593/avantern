import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Heading from '../../components/heading';
import Label from '../../components/label';

import './settings-directory.css';

const cn = createCn('settings-directory');

class SettingsDirectory extends PureComponent {
    render() {
        return (
            <div className={ cn() }>
                <Heading title='Создание/ редактирование справочников' />

                <div className={ cn('column') }>
                    <Label
                        text='Название'
                    />
                    <TextField
                        className={ cn('input') }
                        label='Введите название справочника'
                        variant='outlined'
                    />
                </div>

                <div className={ cn('column') }>
                    <Label
                        text='Значения'
                        size='l'
                    />
                    <div className={ cn('row') }>
                        <div className={ cn('row-item') }>
                            <TextField
                                label='Остановка'
                                className={ cn('input') }
                                variant='outlined'
                            />
                        </div>
                        <div className={ cn('row-item') }>
                            <TextField
                                className={ cn('input-number') }
                                label='КОД'
                                variant='outlined'
                            />
                        </div>
                    </div>
                    <div className={ cn('row') }>
                        <div className={ cn('row-item') }>
                            <TextField
                                label='Заправка'
                                className={ cn('input') }
                                variant='outlined'
                            />
                        </div>
                        <div className={ cn('row-item') }>
                            <TextField
                                className={ cn('input-number') }
                                label='КОД'
                                variant='outlined'
                            />
                        </div>
                    </div>
                </div>

                <div className={ cn('button-group') }>
                    <div className={ cn('column-item') }>
                        <Button className={ cn('button') } variant='outlined'>
                            + Добавить поле
                        </Button>
                    </div>
                    <div className={ cn('column-item') }>
                        <Button className={ cn('button') }>
                            Сохранить
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SettingsDirectory;
