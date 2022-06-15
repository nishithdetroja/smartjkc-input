import React, { useEffect, useRef } from 'react';
import "./SmartjkcCheckbox.css";

export interface IInputCheckboxProps {
    name: string;
    settings: ISettingsProps;
    onChangeEvent?: any;
};

export interface ISettingsProps {
    id: string;
    label: string;
    value: string;
    className: string;
    inline: boolean;
    json: any[];
    inputStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    checkboxLabelStyle: React.CSSProperties;
    pointerColor: string;
    pointerWidth: string;
    pointerHeight: string;
    pointerMargin: string;
    checkboxCheckedBorderColor: string;
    checkboxUncheckedBorderColor: string;
    checkboxRadius: string;
    checkboxCheckedBgColor: string;
    checkboxUncheckedBgColor: string;
    checkboxBorder: string;
    checkboxHeight: string;
    checkboxWidth: string;
};

const SmartjkcCheckbox: React.FunctionComponent<IInputCheckboxProps> = props => {

    const { name, settings, onChangeEvent } = props;
    const ref = useRef<any>();

    let labelStyle: React.CSSProperties = {
        marginBottom: '0px',
        position: 'absolute',
        paddingLeft: '6px',
        fontSize: '11px',
        fontWeight: '700'
    };

    let inputStyle: React.CSSProperties = {
        width: '100%',
        height: 'auto',
        minHeight: '40px',
        padding: '10px 0px 0px 5px',
        fontSize: '15px',
        border: '1px solid',
        outline: 'none'
    };

    let checkboxLabelStyle: React.CSSProperties = {
        clear: 'none',
        padding: '0px 8px 0px 4px',
        marginBottom: '0px',
        verticalAlign: 'middle'
    };

    useEffect(() => {
        if (settings.pointerColor) {
            ref.current.style.setProperty('--smartjkc-checkbox-pointer-color', settings.pointerColor);
        }
        if (settings.pointerWidth) {
            ref.current.style.setProperty('--smartjkc-checkbox-pointer-width', settings.pointerWidth);
        }
        if (settings.pointerHeight) {
            ref.current.style.setProperty('--smartjkc-checkbox-pointer-height', settings.pointerHeight);
        }
        if (settings.pointerMargin) {
            ref.current.style.setProperty('--smartjkc-checkbox-pointer-margin', settings.pointerMargin);
        }
        if (settings.checkboxCheckedBorderColor) {
            ref.current.style.setProperty('--smartjkc-checkbox-checked-border-color', settings.checkboxCheckedBorderColor);
        }
        if (settings.checkboxUncheckedBorderColor) {
            ref.current.style.setProperty('--smartjkc-checkbox-unchecked-border-color', settings.checkboxUncheckedBorderColor);
        }
        if (settings.checkboxCheckedBgColor) {
            ref.current.style.setProperty('--smartjkc-checkbox-checked-bg-color', settings.checkboxCheckedBgColor);
        }
        if (settings.checkboxUncheckedBgColor) {
            ref.current.style.setProperty('--smartjkc-checkbox-unchecked-bg-color', settings.checkboxUncheckedBgColor);
        }
        if (settings.checkboxBorder) {
            ref.current.style.setProperty('--smartjkc-checkbox-border', settings.checkboxBorder);
        }
        if (settings.checkboxRadius) {
            ref.current.style.setProperty('--smartjkc-checkbox-border-radius', settings.checkboxRadius);
        }
        if (settings.checkboxHeight) {
            ref.current.style.setProperty('--smartjkc-checkbox-height', settings.checkboxHeight);
        }
        if (settings.checkboxWidth) {
            ref.current.style.setProperty('--smartjkc-checkbox-width', settings.checkboxWidth);
        }
    }, [])

    return (
        <div ref={ref}>
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
        </div>
    );
};

export default SmartjkcCheckbox;