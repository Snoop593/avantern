import React from 'react';
import { createCn } from 'bem-react-classname';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Label from '../label';

import './dispatcher-alarm-reaction.css';

const cn = createCn('dispatcher-alarm-reaction');

const DispatcherAlarmReaction = ({ number, numberOfSelected }) => (
    <div className={ cn() }>
        <Label
            text={ numberOfSelected > 1 ? `Погасить ${numberOfSelected} тревоги` : 'Вход в геозону Птицефабрка' }
            size='larger'
            isStrong
        />
        {
            numberOfSelected === 1
            && (
                <Label
                    text={ `Трансорт ${number} вошел в геозону Птицефабрица` }
                />
            )
        }

        <FormControl variant='outlined' className={ cn('form-control') }>
            <InputLabel className={ cn('input-label') }> Выберите причину </InputLabel>
            <Select label='Выберите причину' className={ cn('select') }>
                <MenuItem value='Причина 1'> Причина 1 </MenuItem>
                <MenuItem value='Причина 2'> Причина 2 </MenuItem>
                <MenuItem value='Причина 3'> Причина 3 </MenuItem>
            </Select>
        </FormControl>
        <textarea className={ cn('textarea') } />
        <Button className={ cn('button') }>
            Погасить тревогу
        </Button>
    </div>
);

DispatcherAlarmReaction.propTypes = {
    number: PropTypes.string.isRequired,
    numberOfSelected: PropTypes.number.isRequired
};

export default DispatcherAlarmReaction;
