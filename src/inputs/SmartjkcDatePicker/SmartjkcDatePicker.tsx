import React, { useRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SmartjkcDatePicker.css";

export interface IInputDatePickerProps {
    name: string;
    settings: ISettingsProps;
    onChangeEvent: any;
    onBlurEvent?: any;
    onFocusEvent?: any;
    onKeyUpEvent?: any;
    onKeyDownEvent?: any;
};

export interface ISettingsProps {
    id: string;
    label: string;
    value: Date;
    className: string;
    inputStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    iconStyle: React.CSSProperties;
    dateFormat: string;
    minDate: Date,
    maxDate: Date,
    disabled: boolean;
    readOnly: boolean;
    tabIndex: number;
    placeholder: string;
    popperClassName: string;
    popperPlacement: any;
    showTimeSelect: boolean;
    showTimeSelectOnly: boolean;
    timeIntervals: number;
    timeCaption: string;
};

const SmartjkcDatePicker: React.FunctionComponent<IInputDatePickerProps> = props => {

    const { name, settings, onChangeEvent, onBlurEvent, onFocusEvent, onKeyUpEvent, onKeyDownEvent } = props;
    const datepickerRef = useRef(null);

    let labelStyle: React.CSSProperties = {
        marginBottom: '0px',
        position: 'absolute',
        paddingLeft: '6px',
        fontSize: '11px',
        fontWeight: '700',
        zIndex: '1'
    };

    let inputStyle: React.CSSProperties = {
        width: '100%',
        height: '40px',
        padding: '10px 0px 0px 5px',
        fontSize: '15px',
        border: '1px solid',
        outline: 'none'
    };

    let iconStyle: React.CSSProperties = {
        position: 'absolute',
        right: '23px',
        top: '11px',
        zIndex: '1'
    }

    return (
        <div>
            <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
            <DatePicker
                id={settings.id ? settings.id : name}
                name={name}
                tabIndex={settings.tabIndex ? settings.tabIndex : undefined}
                placeholderText={settings.placeholder ? settings.placeholder : undefined}
                disabled={settings.disabled ? settings.disabled : false}
                readOnly={settings.readOnly ? settings.readOnly : false}
                selected={settings.value}
                dateFormat={settings.dateFormat ? settings.dateFormat : 'MM/dd/yyyy'}
                minDate={settings.minDate ? settings.minDate : undefined}
                maxDate={settings.maxDate ? settings.maxDate : undefined}
                customInput={
                    <input type="text" id={settings.id ? settings.id : name}
                        name={name} style={{ ...inputStyle, ...settings.inputStyle }} />
                }
                className={settings?.className}
                onChange={onChangeEvent}
                onBlur={onBlurEvent}
                onFocus={onFocusEvent}
                onKeyDown={onKeyDownEvent}
                ref={datepickerRef}
                popperClassName={settings.popperClassName ? settings.popperClassName : undefined}
                popperPlacement={settings.popperPlacement ? settings.popperPlacement : undefined}
                showTimeSelect={settings.showTimeSelect ? settings.showTimeSelect : false}
                showTimeSelectOnly={settings.showTimeSelectOnly ? settings.showTimeSelectOnly : false}
                timeIntervals={settings.timeIntervals ? settings.timeIntervals : undefined}
                timeCaption={settings.timeCaption ? settings.timeCaption : undefined}
            ></DatePicker>
            <i className={settings.showTimeSelectOnly ? 'fa fa-clock-o' : 'fa fa-calendar'} style={{ ...iconStyle, ...settings.iconStyle }} onClick={() => {
                const datepickerElement: any = datepickerRef.current;
                datepickerElement.setFocus(true);
            }} ></i>
        </div>
    );
};

export default SmartjkcDatePicker;