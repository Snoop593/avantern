import React from 'react';
import { createCn } from 'bem-react-classname';
import PropTypes from 'prop-types';

import Label from '../label';

import './dispatcher-alarm-info.css';

import alarmInfoDriver from '../../assets/alarm-info-driver.svg';
import alarmInfoPhone from '../../assets/alarm-info-phone.svg';
import alarmInfoCargo from '../../assets/alarm-info-cargo.svg';
import alarmInfoRoute from '../../assets/alarm-info-route.svg';
import alarmInfoCustomer from '../../assets/alarm-info-customer.svg';
import alarmInfoCarrier from '../../assets/alarm-info-carrier.svg';

const cn = createCn('dispatcher-alarm-info');

const DispatcherAlarmInfo = ({
    time, number, name, phone, load, route, customer, carrier
}) => (
    <div className={ cn() }>
        <div className={ cn('title') }>
            <Label
                text={ time }
            />
            <Label
                text={ number }
                size='xl'
                isStrong
            />
        </div>

        <div className={ cn('column') }>
            <div className={ cn('row') }>
                <Label
                    img={ <img src={ alarmInfoDriver } alt='alarm-info-driver' /> }
                    text='Водитель:'
                    size='xs'
                />
                <Label
                    text={ name }
                    isStrong
                    size='xs'
                />
            </div>
            <Label
                img={ <img src={ alarmInfoPhone } alt='alarm-info-phone' /> }
                text={ phone }
                size='xs'
            />
        </div>

        <div className={ cn('column') }>
            <Label
                text='Путевой лист'
                isStrong
                size='m'
            />
            <div className={ cn('row') }>
                <div className={ cn('row-item') }>
                    <Label
                        img={ <img src={ alarmInfoCargo } alt='alarm-info-cargo' /> }
                        text='Груз:'
                        size='xs'
                    />
                    <Label
                        text={ load }
                        size='xs'
                        isStrong
                    />
                </div>
                <div className={ cn('row-item') }>
                    <Label
                        img={ <img src={ alarmInfoRoute } alt='alarm-info-route' /> }
                        text='Маршрут:'
                        size='xs'
                    />
                    <Label
                        text={ route }
                        size='xs'
                        isStrong
                    />
                </div>
            </div>
            <div className={ cn('row') }>
                <Label
                    img={ <img src={ alarmInfoCustomer } alt='alarm-info-customer' /> }
                    text='Заказчик:'
                    size='xs'
                />
                <Label
                    text={ customer }
                    size='xs'
                    isStrong
                />
            </div>
            <div className={ cn('row') }>
                <Label
                    img={ <img src={ alarmInfoCarrier } alt='alarm-info-carrier' /> }
                    text='Перевозчик:'
                    size='xs'
                />
                <Label
                    text={ carrier }
                    size='xs'
                    isStrong
                />
            </div>
        </div>
    </div>
);

DispatcherAlarmInfo.propTypes = {
    time: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    load: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    carrier: PropTypes.string.isRequired
};

export default DispatcherAlarmInfo;
