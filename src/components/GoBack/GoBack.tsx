import React from 'react';
import {useTranslation} from 'react-i18next';
import {ReactComponent as Arrow} from '../../assests/icons/arrow.svg';
import {ReactComponent as Close} from '../../assests/icons/close.svg';
import './style.css';

const GoBack = (props: any) => {
    const {t} = useTranslation();

    return (
        <div className="go_back">
            <div className="go_back-content content-wrapper">
                <button onClick={props.onClick}>
                    <Arrow />
                    <h4 style={{color: 'black'}}>{t('Back')}</h4>
                </button>
                {props.close && <button
                    type='button'
                    onClick={props.closed}
                >
                    <Close />
                </button>}
            </div>
        </div>
    );
};

export default GoBack;