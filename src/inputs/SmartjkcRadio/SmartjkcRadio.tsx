import React, { useEffect, useRef } from 'react';
import "./SmartjkcRadio.css";


export interface IInputRadioProps {
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
    radioLabelStyle: React.CSSProperties;
    pointerColor: string;
    radioCheckedBorderColor: string;
    radioUncheckedBorderColor: string;
    radioBorder: string;
    radioHeight: string;
    radioWidth: string;
};

const SmartjkcRadio: React.FunctionComponent<IInputRadioProps> = props => {

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

    let radioLabelStyle: React.CSSProperties = {
        clear: 'none',
        padding: '0px 8px 0px 4px',
        marginBottom: '0px',
        verticalAlign: 'middle'
    };

    useEffect(() => {
        if (settings.pointerColor) {
            ref.current.style.setProperty('--smartjkc-radio-checked-color', settings.pointerColor);
        }
        if (settings.radioCheckedBorderColor) {
            ref.current.style.setProperty('--smartjkc-radio-checked-border-color', settings.radioCheckedBorderColor);
        }
        if (settings.radioUncheckedBorderColor) {
            ref.current.style.setProperty('--smartjkc-radio-unchecked-border-color', settings.radioUncheckedBorderColor);
        }
        if (settings.radioBorder) {
            ref.current.style.setProperty('--smartjkc-radio-border', settings.radioBorder);
        }
        if (settings.radioHeight) {
            ref.current.style.setProperty('--smartjkc-radio-height', settings.radioHeight);
        }
        if (settings.radioWidth) {
            ref.current.style.setProperty('--smartjkc-radio-width', settings.radioWidth);
        }
    }, [])

    return (
        <div ref={ref}>
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
        </div>
    );
};

export default SmartjkcRadio;