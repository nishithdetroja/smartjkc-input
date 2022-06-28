import React, { useEffect, useRef } from 'react';
import CurrencyInput from 'react-currency-input-field';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SmartjkcDatePicker.css";
import "./SmartjkcColorPicker.css";
import "./SmartjkcCheckbox.css";
import "./SmartjkcRadio.css";
import "./SmartjkcSelect.css";
import InputMask from 'react-input-mask';
import NumericInput from 'react-numeric-input';
import Select, { StylesConfig } from 'react-select'

export interface IInputMaskProps {
    type: string;
    name: string;
    settings: ISettingsProps;
    onChangeEvent?: any;
    onBlurEvent?: any;
    onFocusEvent?: any;
    onKeyUpEvent?: any;
    onKeyDownEvent?: any;
    onClickEvent?: any;
};

export interface ISettingsProps {
    id?: string;
    label?: string;
    value?: any;
    className?: string;
    inputStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    disabled?: boolean;
    readOnly?: boolean;
    tabIndex?: number;
    placeholder?: string;
    allowDecimals?: boolean;
    allowNegativeValue?: boolean;
    decimalsLimit?: number;
    decimalScale?: number;
    fixedDecimalLength?: number;
    prefix?: string;
    suffix?: string;
    decimalSeparator?: string;
    groupSeparator?: string;
    intlConfig?: object;
    disableAbbreviations?: boolean;
    disableGroupSeparators?: boolean;
    maxLength?: number;
    minLength?: number;
    step?: number;
    inline?: boolean;  // Checkbox
    json?: any[];
    checkboxLabelStyle?: React.CSSProperties;
    pointerColor?: string;
    pointerWidth?: string;
    pointerHeight?: string;
    pointerMargin?: string;
    checkboxCheckedBorderColor?: string;
    checkboxUncheckedBorderColor?: string;
    checkboxRadius?: string;
    checkboxCheckedBgColor?: string;
    checkboxUncheckedBgColor?: string;
    checkboxBorder?: string;
    checkboxHeight?: string;
    checkboxWidth?: string;
    iconStyle?: React.CSSProperties;
    iconToggleStyle?: React.CSSProperties;
    iconClass?: string;
    iconShow?: boolean;
    iconShowHideToggle?: boolean;
    isShowPassword?: boolean;
    dateFormat?: string;
    minDate?: Date,
    maxDate?: Date,
    popperClassName?: string;
    popperPlacement?: any;
    showTimeSelect?: boolean;
    showTimeSelectOnly?: boolean;
    timeIntervals?: number;
    timeCaption?: string;
    mask?: string; // Mask
    maskChar?: string;
    alwaysShowMask?: boolean;
    radioLabelStyle?: React.CSSProperties; // Radio Button
    radioCheckedBorderColor?: string;
    radioUncheckedBorderColor?: string;
    radioBorder?: string;
    radioHeight?: string;
    radioWidth?: string;
    min?: number; // Updown
    max?: number;
    precision?: number;
    size?: number;
};

const JkcInput: React.FunctionComponent<IInputMaskProps> = props => {

    const { type, name, settings, onChangeEvent, onBlurEvent, onFocusEvent, onKeyUpEvent, onKeyDownEvent, onClickEvent } = props;
    const datepickerRef = useRef(null);
    const selectRef = useRef<any>();
    const checkRef = useRef<any>();
    const radioRef = useRef<any>();

    let labelStyle: React.CSSProperties = {
        marginBottom: '0px',
        position: 'absolute',
        paddingLeft: '6px',
        fontSize: '11px',
        fontWeight: '700'
    };

    let inputStyle: React.CSSProperties = {
        width: '100%',
        height: '40px',
        padding: '10px 0px 0px 5px',
        fontSize: '15px',
        border: '1px solid',
        outline: 'none',
        textAlign: 'left'
    };

    let customControlStyles: React.CSSProperties = {
        background: 'transparent',
        borderColor: '#3eb489',
        borderRadius: '0px',
        boxShadow: '#3eb489',
        padding: '0px',
        width: '100%',
        height: '40px',
        paddingTop: '5px'
    };

    const selectStyle: StylesConfig = {
        control: (provided, state) => {
            return {
                ...provided,
                color: state.isFocused ? '#3eb489' : '#3eb489',
                ...customControlStyles
            };
        }
    };

    if (type === 'number') {
        inputStyle.textAlign = 'right';
        inputStyle.padding = '10px 5px 0px 5px';
    }

    if (type === 'date') {
        labelStyle = {
            marginBottom: '0px',
            position: 'absolute',
            paddingLeft: '6px',
            fontSize: '11px',
            fontWeight: '700',
            zIndex: '1'
        };

        inputStyle = {
            width: '100%',
            height: '40px',
            padding: '10px 0px 0px 5px',
            fontSize: '15px',
            border: '1px solid',
            outline: 'none'
        };
    }

    if (type === 'updown') {
        labelStyle = {
            marginBottom: '0px',
            position: 'absolute',
            paddingLeft: '6px',
            fontSize: '11px',
            fontWeight: '700',
            zIndex: '1'
        };

        inputStyle = {
            width: '100%',
            height: '40px',
            padding: '10px 25px 0px 5px',
            fontSize: '15px',
            border: '1px solid',
            outline: 'none',
            textAlign: 'right'
        };
    }

    if (type === 'color') {
        labelStyle = {
            marginBottom: '0px',
            position: 'absolute',
            paddingLeft: '6px',
            fontSize: '11px',
            fontWeight: '700'
        };

        inputStyle = {
            width: '100%',
            height: '40px',
            padding: '10px 5px 0px 5px',
            fontSize: '15px',
            border: '1px solid',
            outline: 'none',
            background: 'transparent'
        };
    }

    let iconStyle: React.CSSProperties = {
        position: 'absolute',
        right: '24px',
        top: '11px',
        zIndex: '1'
    }

    let iconToggleStyle: React.CSSProperties = {
        position: 'absolute',
        right: '50px',
        top: '11px',
        zIndex: '1'
    }

    let checkboxLabelStyle: React.CSSProperties = {
        clear: 'none',
        padding: '0px 8px 0px 4px',
        marginBottom: '0px',
        verticalAlign: 'middle'
    };

    let radioLabelStyle: React.CSSProperties = {
        clear: 'none',
        padding: '0px 8px 0px 4px',
        marginBottom: '0px',
        verticalAlign: 'middle'
    };

    const onFocus = (event: any) => {
        event.target.selectionStart = event.target.selectionEnd = event.target.value.length;
        onFocusEvent && onFocusEvent(event);
    };

    const onKeyUp = (event: any) => {
        if (event.key === '1' ||
            event.key === '2' ||
            event.key === '3' ||
            event.key === '4' ||
            event.key === '5' ||
            event.key === '6' ||
            event.key === '7' ||
            event.key === '8' ||
            event.key === '9' ||
            event.key === '0') {
            event.target.setSelectionRange(event.target.selectionStart, event.target.selectionEnd + 1);
        }
        onKeyUpEvent && onKeyUpEvent(event);
    };

    useEffect(() => {
        if (type === 'checkbox' && settings.pointerColor) {
            checkRef.current.style.setProperty('--smartjkc-checkbox-pointer-color', settings.pointerColor);
        }
        if (type === 'checkbox' && settings.pointerWidth) {
            checkRef.current.style.setProperty('--smartjkc-checkbox-pointer-width', settings.pointerWidth);
        }
        if (type === 'checkbox' && settings.pointerHeight) {
            checkRef.current.style.setProperty('--smartjkc-checkbox-pointer-height', settings.pointerHeight);
        }
        if (type === 'checkbox' && settings.pointerMargin) {
            checkRef.current.style.setProperty('--smartjkc-checkbox-pointer-margin', settings.pointerMargin);
        }
        if (type === 'checkbox' && settings.checkboxCheckedBorderColor) {
            checkRef.current.style.setProperty('--smartjkc-checkbox-checked-border-color', settings.checkboxCheckedBorderColor);
        }
        if (type === 'checkbox' && settings.checkboxUncheckedBorderColor) {
            checkRef.current.style.setProperty('--smartjkc-checkbox-unchecked-border-color', settings.checkboxUncheckedBorderColor);
        }
        if (type === 'checkbox' && settings.checkboxCheckedBgColor) {
            checkRef.current.style.setProperty('--smartjkc-checkbox-checked-bg-color', settings.checkboxCheckedBgColor);
        }
        if (type === 'checkbox' && settings.checkboxUncheckedBgColor) {
            checkRef.current.style.setProperty('--smartjkc-checkbox-unchecked-bg-color', settings.checkboxUncheckedBgColor);
        }
        if (type === 'checkbox' && settings.checkboxBorder) {
            checkRef.current.style.setProperty('--smartjkc-checkbox-border', settings.checkboxBorder);
        }
        if (type === 'checkbox' && settings.checkboxRadius) {
            checkRef.current.style.setProperty('--smartjkc-checkbox-border-radius', settings.checkboxRadius);
        }
        if (type === 'checkbox' && settings.checkboxHeight) {
            checkRef.current.style.setProperty('--smartjkc-checkbox-height', settings.checkboxHeight);
        }
        if (type === 'checkbox' && settings.checkboxWidth) {
            checkRef.current.style.setProperty('--smartjkc-checkbox-width', settings.checkboxWidth);
        }

        if (type === 'radio' && settings.pointerColor) {
            radioRef.current.style.setProperty('--smartjkc-radio-checked-color', settings.pointerColor);
        }
        if (type === 'radio' && settings.radioCheckedBorderColor) {
            radioRef.current.style.setProperty('--smartjkc-radio-checked-border-color', settings.radioCheckedBorderColor);
        }
        if (type === 'radio' && settings.radioUncheckedBorderColor) {
            radioRef.current.style.setProperty('--smartjkc-radio-unchecked-border-color', settings.radioUncheckedBorderColor);
        }
        if (type === 'radio' && settings.radioBorder) {
            radioRef.current.style.setProperty('--smartjkc-radio-border', settings.radioBorder);
        }
        if (type === 'radio' && settings.radioHeight) {
            radioRef.current.style.setProperty('--smartjkc-radio-height', settings.radioHeight);
        }
        if (type === 'radio' && settings.radioWidth) {
            radioRef.current.style.setProperty('--smartjkc-radio-width', settings.radioWidth);
        }
    }, [])

    return (
        <>
            {(type === 'number') ?
                <div>
                    <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
                    <CurrencyInput
                        id={settings.id ? settings.id : name}
                        name={name}
                        tabIndex={settings.tabIndex ? settings.tabIndex : undefined}
                        disabled={settings.disabled ? settings.disabled : false}
                        readOnly={settings.readOnly ? settings.readOnly : false}
                        placeholder={settings.placeholder ? settings.placeholder : ''}
                        value={settings?.value ? settings.value : undefined}
                        className={settings?.className}
                        onValueChange={onChangeEvent}
                        style={{ ...inputStyle, ...settings.inputStyle }}
                        allowDecimals={settings.allowDecimals ? settings.allowDecimals : undefined}
                        allowNegativeValue={settings.allowNegativeValue ? settings.allowNegativeValue : undefined}
                        decimalsLimit={settings.decimalsLimit ? settings.decimalsLimit : undefined}
                        decimalScale={settings.decimalScale ? settings.decimalScale : undefined}
                        fixedDecimalLength={settings.fixedDecimalLength ? settings.fixedDecimalLength : undefined}
                        prefix={settings.prefix ? settings.prefix : undefined}
                        suffix={settings.suffix ? settings.suffix : undefined}
                        decimalSeparator={settings.decimalSeparator ? settings.decimalSeparator : undefined}
                        groupSeparator={settings.groupSeparator ? settings.groupSeparator : undefined}
                        // intlConfig = {settings.intlConfig ? settings.intlConfig : {}}
                        disableAbbreviations={settings.disableAbbreviations ? settings.disableAbbreviations : undefined}
                        disableGroupSeparators={settings.disableGroupSeparators ? settings.disableGroupSeparators : undefined}
                        maxLength={settings.maxLength ? settings.maxLength : undefined}
                        step={settings.step ? settings.step : undefined}
                        onBlur={onBlurEvent}
                        onFocus={onFocus}
                        onKeyUp={onKeyUpEvent}
                        onKeyDown={onKeyDownEvent}
                    ></CurrencyInput>
                </div> : null}

            {(type === 'date') ? <div>
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
            </div> : null}

            {(type === 'mask') ? <div>
                <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
                <InputMask
                    id={settings.id ? settings.id : name}
                    name={name}
                    tabIndex={settings.tabIndex ? settings.tabIndex : undefined}
                    disabled={settings.disabled ? settings.disabled : false}
                    readOnly={settings.readOnly ? settings.readOnly : false}
                    placeholder={settings.placeholder ? settings.placeholder : ''}
                    mask={settings.mask ? settings.mask : '99/99/9999'}
                    maskChar={settings.maskChar ? settings.maskChar : '#'}
                    alwaysShowMask={settings.alwaysShowMask ? settings.alwaysShowMask : true}
                    value={settings?.value}
                    className={settings?.className}
                    style={{ ...inputStyle, ...settings.inputStyle }}
                    onChange={onChangeEvent}
                    onBlur={onBlurEvent}
                    onFocus={onFocus}
                    onKeyUp={onKeyUp}
                    onKeyDown={onKeyDownEvent}
                ></InputMask>
            </div> : null}

            {(type === 'updown') ? <div>
                <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
                <NumericInput
                    id={settings.id ? settings.id : name}
                    name={name}
                    tabIndex={settings.tabIndex ? settings.tabIndex : undefined}
                    disabled={settings.disabled ? settings.disabled : false}
                    readOnly={settings.readOnly ? settings.readOnly : false}
                    placeholder={settings.placeholder ? settings.placeholder : ''}
                    value={settings?.value}
                    className={settings?.className}
                    style={{ input: { ...inputStyle, ...settings.inputStyle } }}
                    min={settings.min ? settings.min : undefined}
                    max={settings.max ? settings.max : undefined}
                    step={settings.step ? settings.step : undefined}
                    precision={settings.precision ? settings.precision : undefined}
                    size={settings.size ? settings.size : undefined}
                    onChange={onChangeEvent}
                    onBlur={onBlurEvent}
                    onFocus={onFocusEvent}
                    onKeyUp={onKeyUpEvent}
                    onKeyDown={onKeyDownEvent}
                ></NumericInput>
            </div> : null}

            {(type === 'color') ? <div style={{ position: 'relative' }}>
                <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
                <input
                    id={settings.id ? settings.id : name}
                    name={name}
                    tabIndex={settings.tabIndex ? settings.tabIndex : undefined}
                    disabled={settings.disabled ? settings.disabled : false}
                    readOnly={settings.readOnly ? settings.readOnly : false}
                    placeholder={settings.placeholder ? settings.placeholder : ''}
                    type="color"
                    className={settings?.className}
                    style={{ ...inputStyle, ...settings.inputStyle }}
                    value={settings.value}
                    onChange={onChangeEvent}
                />
                <span style={{ paddingTop: '15px', position: 'absolute', 'left': '5px' }}>{settings.value}</span>
            </div> : null}

            {(type === 'checkbox' && settings.json) ? <div ref={checkRef}>
                <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
                <div style={{ ...inputStyle, ...settings.inputStyle }} >
                    {
                        settings.json.map((element: any, i: any) => {
                            return (
                                <div className="samrtjkcCheckboxbutton" key={i} style={settings.inline ? { display: 'inline-block' } : { display: 'block' }} >
                                    <input
                                        type="checkbox"
                                        className={settings.className}
                                        name={element.value}
                                        onChange={onChangeEvent}
                                        checked={element.checked}
                                        value={element.value}
                                        id={element.value} />
                                    <label style={{ ...checkboxLabelStyle, ...settings.checkboxLabelStyle }} htmlFor={element.value}>{element.name}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div> : null}

            {(type === 'radio' && settings.json) ? <div ref={radioRef}>
                <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
                <div style={{ ...inputStyle, ...settings.inputStyle }} >
                    {
                        settings.json.map((element: any, i: any) => {
                            return (
                                <div className="samrtjkcradiobutton" key={i} style={settings.inline ? { display: 'inline-block' } : { display: 'block' }} >
                                    <input
                                        type="radio"
                                        className={settings.className}
                                        name={name}
                                        onChange={onChangeEvent}
                                        checked={settings.value === element.value}
                                        value={element.value}
                                        id={element.value} />
                                    <label style={{ ...radioLabelStyle, ...settings.radioLabelStyle }} htmlFor={element.value}>{element.name}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div> : null}

            {(type === 'select' && settings.json) ? <div ref={selectRef}>
                <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
                <div style={{ ...settings.inputStyle }}>
                    <Select className='samrtjkc-select-container' classNamePrefix='samrtjkc-select' placeholder={settings.placeholder} styles={selectStyle} options={settings.json} />
                </div>
            </div> : null}

            {(type === 'text') ? <div>
                <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
                <input
                    id={settings.id ? settings.id : name}
                    name={name}
                    tabIndex={settings.tabIndex ? settings.tabIndex : undefined}
                    disabled={settings.disabled ? settings.disabled : false}
                    readOnly={settings.readOnly ? settings.readOnly : false}
                    placeholder={settings.placeholder ? settings.placeholder : ''}
                    type="text"
                    className={settings?.className}
                    style={{ ...inputStyle, ...settings.inputStyle }}
                    value={settings.value}
                    onChange={onChangeEvent}
                />
            </div> : null}

            {(type === 'username') ? <div>
                <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
                <input
                    id={settings.id ? settings.id : name}
                    name={name}
                    tabIndex={settings.tabIndex ? settings.tabIndex : undefined}
                    disabled={settings.disabled ? settings.disabled : false}
                    readOnly={settings.readOnly ? settings.readOnly : false}
                    placeholder={settings.placeholder ? settings.placeholder : ''}
                    type="text"
                    className={settings?.className}
                    style={{ ...inputStyle, ...settings.inputStyle }}
                    value={settings.value}
                    maxLength={settings.maxLength ? settings.maxLength : undefined}
                    minLength={settings.minLength ? settings.minLength : undefined}
                    onChange={onChangeEvent}
                />
                {settings.iconShow &&
                    <i className={settings.iconClass ? settings.iconClass : 'fa fa-user'} style={{ ...iconStyle, ...settings.iconStyle }}></i>
                }
            </div> : null}
            {(type === 'password') ? <div>
                <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
                <input
                    id={settings.id ? settings.id : name}
                    name={name}
                    tabIndex={settings.tabIndex ? settings.tabIndex : undefined}
                    disabled={settings.disabled ? settings.disabled : false}
                    readOnly={settings.readOnly ? settings.readOnly : false}
                    placeholder={settings.placeholder ? settings.placeholder : ''}
                    type={settings.isShowPassword ? 'text' : 'password'}
                    className={settings?.className}
                    style={{ ...inputStyle, ...settings.inputStyle }}
                    maxLength={settings.maxLength ? settings.maxLength : undefined}
                    minLength={settings.minLength ? settings.minLength : undefined}
                    value={settings.value}
                    onChange={onChangeEvent}
                />
                {settings.iconShowHideToggle &&
                    <i className={settings.isShowPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}
                        onClick={() => { onClickEvent(!settings.isShowPassword) }} style={{ ...iconToggleStyle, ...settings.iconToggleStyle }}></i>
                }
                {settings.iconShow &&
                    <i className={settings.iconClass ? settings.iconClass : 'fa fa-key'} style={{ ...iconStyle, ...settings.iconStyle }}></i>
                }
            </div> : null}
        </>
    );
};

export default JkcInput;