const meta = [
    {
        '_id': 'hm-rpc.meta.roles',
        'parent': 'hm-rpc',
        'type': 'meta',
        'meta': {
            'type': 'roles',
            'adapter': 'hm-rpc'
        },
        'common': {},
        'native': {
            'chTYPE': {
                'DIMMER': 'light.dimmer',
                'BLIND': 'blind',
                'SWITCH': 'switch',
                'KEY': 'button',
                'SHUTTER_CONTACT': 'sensor'
            },
            'dpCONTROL': {
                'DIMMER.LEVEL': 'level.dimmer',
                'BLIND.LEVEL': 'level.blind'
            },
            'chTYPE_dpNAME': {
                'DIMMER.LEVEL': 'level.dimmer',
                'DIMMER.OLD_LEVEL': 'value.dimmer',
                'DIMMER.LEVEL_REAL': 'value.dimmer',
                'VIRTUAL_DIMMER.LEVEL': 'level.dimmer',
                'VIRTUAL_DIMMER.OLD_LEVEL': 'value.dimmer',
                'VIRTUAL_DIMMER.LEVEL_REAL': 'value.dimmer'
            },
            'dpNAME': {
                'AUTO_MODE': 'state',
                'BATTERY_STATE': 'value.voltage',
                'BOOST_MODE': 'switch.boost',
                'BOOST_STATE': 'level.boost',
                'COMFORT_MODE': 'switch.comfort',
                'CONTROL_MODE': 'indicator',
                'FAULT_REPORTING': 'indicator',
                'LOWERING_MODE': 'action',
                'MANU_MODE': 'level.temperature',
                'ACTUAL_TEMPERATURE': 'value.temperature',
                'TEMPERATURE': 'value.temperature',
                'SETPOINT': 'level.temperature',
                'SET_TEMPERATURE': 'level.temperature',
                'SET_POINT_TEMPERATURE': 'level.temperature',
                'HUMIDITY': 'value.humidity',
                'STATE': 'state',
                'PRESS_SHORT': 'button',
                'PRESS_LONG': 'button.long',
                'PRESS_LONG_RELEASE': 'button.release',
                'PRESS_CONT': 'button.continuous',
                'LEVEL': 'level',
                'LOWBAT': 'indicator.lowbat',
                'INSTALL_TEST': 'indicator',
                'UNREACH': 'indicator.unreach',
                'WINDOW_STATE': 'value.window',
                'WORKING': 'indicator.working',
                'DIRECTION': 'indicator.direction',
                'CONFIG_PENDING': 'indicator',
                'INSTALL_MODE': 'indicator',
                'RSSI_PEER': 'value.rssi',
                'RSSI_DEVICE': 'value.rssi',
                'AES_KEY': 'value',
                'STICKY_UNREACH': 'indicator.unreach',
                'ERROR': 'indicator.error',
                'ERROR_OVERHEAT': 'indicator.error.overheat',
                'ERROR_OVERLOAD': 'indicator.error.overload',
                'ERROR_REDUCED': 'indicator.error',
                'MOTION': 'sensor.motion',
                'INHIBIT': 'state.inhibit',
                'VALVE_STATE': 'value.valve',
                'BRIGHTNESS': 'value.brightness',
                'RAMP_TIME': 'timer.ramp',
                'RAMP_STOP': 'button.stop',
                'STOP': 'button.stop',
                'ON_TIME': 'timer.off',
                'DUTYCYCLE': 'value',
                'COLOR': 'level.color.hue',
                'OPERATING_VOLTAGE': 'value.voltage'
            },
            'dvTYPE': {
                'HM-Sec-SD': 'sensor.alarm.fire',
                'HM-Sec-SD-2': 'sensor.alarm.fire',
                'HM-Sec-SD-Team': 'sensor.alarm.fire',
                'HM-Sen-MDIR-O-2': 'sensor.motion',
                'HM-Sen-MDIR-O-3': 'sensor.motion',
                'HM-Sec-MDIR-3': 'sensor.motion',
                'HmIP-SMO': 'sensor.motion',
                'HmIP-SMO-A': 'sensor.motion',
                'HmIP-SPI': 'sensor.motion',
                'HmIP-SMI': 'sensor.motion',
                'HM-Sen-RD-O': 'sensor.rain',
                'HM-Sec-RHS': 'value.tilt',
                'HmIP-SRH': 'value.tilt',
                'HM-Sec-WDS-2': 'sensor.alarm.flood',
                'HmIP-SWD': 'sensor.alarm.flood',
                'HmIP-SWSD': 'sensor.alarm.fire'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.CLIMATECONTROL_RECEIVER.19',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {}
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.CLIMATECONTROL_RT_RECEIVER.19',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {}
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.CLIMATECONTROL_RT_TRANSCEIVER.19',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ACTUAL_TEMPERATURE': {
                'CONTROL': 'HEATING_CONTROL.TEMPERATURE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'MAX': 50,
                'MIN': -10,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'AUTO_MODE': {
                'CONTROL': 'HEATING_CONTROL.AUTO',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'AUTO_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 7,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'BATTERY_STATE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BATTERY_STATE',
                'MAX': 4.6,
                'MIN': 1.5,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': 'V'
            },
            'BOOST_MODE': {
                'CONTROL': 'HEATING_CONTROL.BOOST',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'BOOST_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 9,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'BOOST_STATE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BOOST_STATE',
                'MAX': 30,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': 'min'
            },
            'COMFORT_MODE': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'COMFORT_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 10,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'CONTROL_MODE': {
                'CONTROL': 'HEATING_CONTROL.CONTROL_MODE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'CONTROL_MODE',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'AUTO-MODE',
                    'MANU-MODE',
                    'PARTY-MODE',
                    'BOOST-MODE'
                ]
            },
            'FAULT_REPORTING': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'FAULT_REPORTING',
                'MAX': 7,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_FAULT',
                    'VALVE_TIGHT',
                    'ADJUSTING_RANGE_TOO_LARGE',
                    'ADJUSTING_RANGE_TOO_SMALL',
                    'COMMUNICATION_ERROR',
                    '',
                    'LOWBAT',
                    'VALVE_ERROR_POSITION'
                ]
            },
            'LOWERING_MODE': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWERING_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 11,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'MANU_MODE': {
                'CONTROL': 'HEATING_CONTROL.MANU',
                'DEFAULT': 20,
                'FLAGS': 1,
                'ID': 'MANU_MODE',
                'MAX': 30.5,
                'MIN': 4.5,
                'OPERATIONS': 2,
                'TAB_ORDER': 8,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'SET_TEMPERATURE': {
                'CONTROL': 'HEATING_CONTROL.SETPOINT',
                'DEFAULT': 20,
                'FLAGS': 1,
                'ID': 'SET_TEMPERATURE',
                'MAX': 30,
                'MIN': 5,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'VALVE_STATE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'VALVE_STATE',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'INTEGER',
                'UNIT': '%'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.MAINTENANCE.19',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.REMOTECONTROL_RECEIVER.19',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {}
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.WEATHER_RECEIVER.19',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {}
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.WINDOW_SWITCH_RECEIVER.19',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {}
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.REMOTECONTROL_RECEIVER.27',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {}
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.CLIMATECONTROL_RT_RECEIVER.27',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {}
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.CLIMATECONTROL_RT_TRANSCEIVER.27',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ACTUAL_TEMPERATURE': {
                'CONTROL': 'HEATING_CONTROL.TEMPERATURE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'MAX': 56,
                'MIN': -10,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'AUTO_MODE': {
                'CONTROL': 'HEATING_CONTROL.AUTO',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'AUTO_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 7,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'BATTERY_STATE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BATTERY_STATE',
                'MAX': 4.6,
                'MIN': 1.5,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': 'V'
            },
            'BOOST_MODE': {
                'CONTROL': 'HEATING_CONTROL.BOOST',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'BOOST_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 9,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'BOOST_STATE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BOOST_STATE',
                'MAX': 30,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': 'min'
            },
            'COMFORT_MODE': {
                'CONTROL': 'HEATING_CONTROL.COMFORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'COMFORT_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 10,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'CONTROL_MODE': {
                'CONTROL': 'HEATING_CONTROL.CONTROL_MODE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'CONTROL_MODE',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'AUTO-MODE',
                    'MANU-MODE',
                    'PARTY-MODE',
                    'BOOST-MODE'
                ]
            },
            'FAULT_REPORTING': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'FAULT_REPORTING',
                'MAX': 7,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_FAULT',
                    'VALVE_TIGHT',
                    'ADJUSTING_RANGE_TOO_LARGE',
                    'ADJUSTING_RANGE_TOO_SMALL',
                    'COMMUNICATION_ERROR',
                    '',
                    'LOWBAT',
                    'VALVE_ERROR_POSITION'
                ]
            },
            'LOWERING_MODE': {
                'CONTROL': 'HEATING_CONTROL.LOWERING',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWERING_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 11,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'MANU_MODE': {
                'CONTROL': 'HEATING_CONTROL.MANU',
                'DEFAULT': 20,
                'FLAGS': 1,
                'ID': 'MANU_MODE',
                'MAX': 30.5,
                'MIN': 4.5,
                'OPERATIONS': 2,
                'TAB_ORDER': 8,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'PARTY_MODE_SUBMIT': {
                'CONTROL': 'NONE',
                'DEFAULT': '',
                'FLAGS': 1,
                'ID': 'PARTY_MODE_SUBMIT',
                'MAX': '',
                'MIN': '',
                'OPERATIONS': 2,
                'TAB_ORDER': 12,
                'TYPE': 'STRING',
                'UNIT': ''
            },
            'PARTY_START_DAY': {
                'CONTROL': 'HEATING_CONTROL.PARTY_START_DAY',
                'DEFAULT': 1,
                'FLAGS': 1,
                'ID': 'PARTY_START_DAY',
                'MAX': 31,
                'MIN': 1,
                'OPERATIONS': 3,
                'TAB_ORDER': 15,
                'TYPE': 'INTEGER',
                'UNIT': 'day'
            },
            'PARTY_START_MONTH': {
                'CONTROL': 'HEATING_CONTROL.PARTY_START_MONTH',
                'DEFAULT': 1,
                'FLAGS': 1,
                'ID': 'PARTY_START_MONTH',
                'MAX': 12,
                'MIN': 1,
                'OPERATIONS': 3,
                'TAB_ORDER': 16,
                'TYPE': 'INTEGER',
                'UNIT': 'month'
            },
            'PARTY_START_TIME': {
                'CONTROL': 'HEATING_CONTROL.PARTY_START_TIME',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'PARTY_START_TIME',
                'MAX': 1410,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 14,
                'TYPE': 'INTEGER',
                'UNIT': 'minutes'
            },
            'PARTY_START_YEAR': {
                'CONTROL': 'HEATING_CONTROL.PARTY_START_YEAR',
                'DEFAULT': 12,
                'FLAGS': 1,
                'ID': 'PARTY_START_YEAR',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 17,
                'TYPE': 'INTEGER',
                'UNIT': 'year'
            },
            'PARTY_STOP_DAY': {
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_DAY',
                'DEFAULT': 1,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_DAY',
                'MAX': 31,
                'MIN': 1,
                'OPERATIONS': 3,
                'TAB_ORDER': 19,
                'TYPE': 'INTEGER',
                'UNIT': 'day'
            },
            'PARTY_STOP_MONTH': {
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_MONTH',
                'DEFAULT': 1,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_MONTH',
                'MAX': 12,
                'MIN': 1,
                'OPERATIONS': 3,
                'TAB_ORDER': 20,
                'TYPE': 'INTEGER',
                'UNIT': 'month'
            },
            'PARTY_STOP_TIME': {
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_TIME',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_TIME',
                'MAX': 1410,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 18,
                'TYPE': 'INTEGER',
                'UNIT': 'minutes'
            },
            'PARTY_STOP_YEAR': {
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_YEAR',
                'DEFAULT': 12,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_YEAR',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 21,
                'TYPE': 'INTEGER',
                'UNIT': 'year'
            },
            'PARTY_TEMPERATURE': {
                'CONTROL': 'HEATING_CONTROL.PARTY_TEMP',
                'DEFAULT': 20,
                'FLAGS': 1,
                'ID': 'PARTY_TEMPERATURE',
                'MAX': 30,
                'MIN': 5,
                'OPERATIONS': 3,
                'TAB_ORDER': 13,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'SET_TEMPERATURE': {
                'CONTROL': 'HEATING_CONTROL.SETPOINT',
                'DEFAULT': 20,
                'FLAGS': 1,
                'ID': 'SET_TEMPERATURE',
                'MAX': 30.5,
                'MIN': 4.5,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'VALVE_STATE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'VALVE_STATE',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'INTEGER',
                'UNIT': '%'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.WINDOW_SWITCH_RECEIVER.27',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {}
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.CLIMATECONTROL_RECEIVER.27',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {}
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.WEATHER_RECEIVER.27',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {}
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.MAINTENANCE.27',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-TC.CLIMATECONTROL_REGULATOR.14',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ADJUSTING_COMMAND': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ADJUSTING_COMMAND',
                'MAX': 4,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'ADJUSTING_DATA': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ADJUSTING_DATA',
                'MAX': 250,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'SETPOINT': {
                'CONTROL': 'TEMP.SETPOINT',
                'DEFAULT': 21,
                'FLAGS': 1,
                'ID': 'SETPOINT',
                'MAX': 30,
                'MIN': 6,
                'OPERATIONS': 7,
                'SPECIAL': [
                    {
                        'ID': 'VENT_CLOSED',
                        'VALUE': 0
                    },
                    {
                        'ID': 'VENT_OPEN',
                        'VALUE': 100
                    }
                ],
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-TC.CLIMATECONTROL_REGULATOR.15',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ADJUSTING_COMMAND': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ADJUSTING_COMMAND',
                'MAX': 4,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'ADJUSTING_DATA': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ADJUSTING_DATA',
                'MAX': 250,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'SETPOINT': {
                'CONTROL': 'TEMP.SETPOINT',
                'DEFAULT': 21,
                'FLAGS': 1,
                'ID': 'SETPOINT',
                'MAX': 30,
                'MIN': 6,
                'OPERATIONS': 7,
                'SPECIAL': [
                    {
                        'ID': 'VENT_CLOSED',
                        'VALUE': 0
                    },
                    {
                        'ID': 'VENT_OPEN',
                        'VALUE': 100
                    }
                ],
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-TC.MAINTENANCE.14',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-TC.MAINTENANCE.15',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-TC.WEATHER.14',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'HUMIDITY': {
                'AutoconfRoles': 'WEATHER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'HUMIDITY',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'INTEGER',
                'UNIT': '%'
            },
            'TEMPERATURE': {
                'AutoconfRoles': 'WEATHER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'TEMPERATURE',
                'MAX': 80,
                'MIN': -40,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-TC.WEATHER.15',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'HUMIDITY': {
                'AutoconfRoles': 'WEATHER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'HUMIDITY',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'INTEGER',
                'UNIT': '%'
            },
            'TEMPERATURE': {
                'AutoconfRoles': 'WEATHER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'TEMPERATURE',
                'MAX': 80,
                'MIN': -40,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-TC.WINDOW_SWITCH_RECEIVER.14',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {}
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-TC.WINDOW_SWITCH_RECEIVER.15',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {}
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-VD.CLIMATECONTROL_VENT_DRIVE.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ERROR': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR',
                'MAX': 4,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    'VALVE_DRIVE_BLOCKED',
                    'VALVE_DRIVE_LOOSE',
                    'ADJUSTING_RANGE_TO_SMALL',
                    'LOWBAT'
                ]
            },
            'VALVE_STATE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'VALVE_STATE',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': '%'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-VD.MAINTENANCE.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.CONDITION_FREQUENCY.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.CONDITION_VOLTAGE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-TX-WM.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-TX-WM.POWERMETER_IGL.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BOOT': {
                'CONTROL': 'POWERMETER_IGL.BOOT',
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'BOOT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ENERGY_COUNTER': {
                'CONTROL': 'POWERMETER_IGL.ENERGY_COUNTER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ENERGY_COUNTER',
                'MAX': 838860.699219,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': 'Wh'
            },
            'GAS_ENERGY_COUNTER': {
                'CONTROL': 'POWERMETER_IGL.GAS_ENERGY_COUNTER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'GAS_ENERGY_COUNTER',
                'MAX': 2147483.644531,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': 'm3'
            },
            'GAS_POWER': {
                'CONTROL': 'POWERMETER_IGL.GAS_POWER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'GAS_POWER',
                'MAX': 16777.214996,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 'm3'
            },
            'POWER': {
                'CONTROL': 'POWERMETER_IGL.POWER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'POWER',
                'MAX': 167772.149902,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 'W'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Bl1-FM.BLIND.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'BLIND.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'STOP': {
                'CONTROL': 'BLIND.STOP',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STOP',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Bl1-FM.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1L-CV.DIMMER.15',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'ERROR': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    '',
                    '',
                    'LOAD_FAILURE'
                ]
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 8,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'DIMMER.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'OLD_LEVEL': {
                'CONTROL': 'DIMMER.OLD_LEVEL',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'OLD_LEVEL',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'RAMP_STOP': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'RAMP_STOP',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'RAMP_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0.5,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 9,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1L-CV.MAINTENANCE.15',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1L-Pl.DIMMER.15',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'ERROR': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    '',
                    '',
                    'LOAD_FAILURE'
                ]
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 8,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'DIMMER.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'OLD_LEVEL': {
                'CONTROL': 'DIMMER.OLD_LEVEL',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'OLD_LEVEL',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'RAMP_STOP': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'RAMP_STOP',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'RAMP_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0.5,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 9,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1L-Pl.MAINTENANCE.15',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1TPBU-FM.DIMMER.10',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 10,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'ERROR_OVERHEAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 9,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_OVERLOAD': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERLOAD',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_REDUCED': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_REDUCED',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 11,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'DIMMER.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'LEVEL_REAL': {
                'CONTROL': 'DIMMER.LEVEL_REAL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL_REAL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'OLD_LEVEL': {
                'CONTROL': 'DIMMER.OLD_LEVEL',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'OLD_LEVEL',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'RAMP_STOP': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'RAMP_STOP',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 5,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'RAMP_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0.5,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 12,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1TPBU-FM.MAINTENANCE.10',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1TPBU-FM.VIRTUAL_DIMMER.10',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 10,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'ERROR_OVERHEAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 9,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_OVERLOAD': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERLOAD',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_REDUCED': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_REDUCED',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 11,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'DIMMER.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'LEVEL_REAL': {
                'CONTROL': 'DIMMER.LEVEL_REAL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL_REAL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'OLD_LEVEL': {
                'CONTROL': 'DIMMER.OLD_LEVEL',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'OLD_LEVEL',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'RAMP_STOP': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'RAMP_STOP',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 5,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'RAMP_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0.5,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 12,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1-FM.SWITCH.25',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1-FM.MAINTENANCE.25',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1-FM.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1-FM.SWITCH.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1-Pl.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'UNREACH': {
                'ID': 'UNREACH',
                'UNIT': '',
                'TAB_ORDER': 0,
                'OPERATIONS': 5,
                'FLAGS': 9,
                'TYPE': 'BOOL',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'RSSI_PEER': {
                'ID': 'RSSI_PEER',
                'UNIT': 'dBm',
                'TAB_ORDER': 1,
                'OPERATIONS': 5,
                'FLAGS': 1,
                'TYPE': 'INTEGER',
                'MIN': -255,
                'MAX': 0,
                'DEFAULT': -255
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1-Pl.SENSOR.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'COUNTER': {
                'ID': 'COUNTER',
                'UNIT': '',
                'TAB_ORDER': 0,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'INTEGER',
                'MIN': 0,
                'MAX': 255,
                'DEFAULT': 0
            },
            'SUM': {
                'ID': 'SUM',
                'UNIT': '',
                'TAB_ORDER': 1,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'MEAN5MINUTES': {
                'ID': 'MEAN5MINUTES',
                'UNIT': '',
                'TAB_ORDER': 2,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'MAX5MINUTES': {
                'ID': 'MAX5MINUTES',
                'UNIT': '',
                'TAB_ORDER': 3,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'SUM_1H': {
                'ID': 'SUM_1H',
                'UNIT': '',
                'TAB_ORDER': 4,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'MAX_1H': {
                'ID': 'MAX_1H',
                'UNIT': '',
                'TAB_ORDER': 5,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'SUM_24H': {
                'ID': 'SUM_24H',
                'UNIT': '',
                'TAB_ORDER': 6,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'MAX_24H': {
                'ID': 'MAX_24H',
                'UNIT': '',
                'TAB_ORDER': 7,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'MISS_24H': {
                'ID': 'MISS_24H',
                'UNIT': '',
                'TAB_ORDER': 8,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'INTEGER',
                'MIN': 0,
                'MAX': 65535,
                'DEFAULT': 0
            },
            'METER': {
                'ID': 'METER',
                'UNIT': '',
                'TAB_ORDER': 9,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'CONTROL': {
                'ID': 'CONTROL',
                'UNIT': '',
                'TAB_ORDER': 10,
                'OPERATIONS': 1,
                'FLAGS': 2,
                'TYPE': 'INTEGER',
                'MIN': 0,
                'MAX': 3,
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw2-FM.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw2-FM.SWITCH.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw4-PCB.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw4-PCB.SWITCH.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-PB-2-WM55-2.MAINTENANCE.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-PB-2-WM55-2.KEY.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_CONT': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_CONT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG_RELEASE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_LONG_RELEASE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-PBI-4-FM.KEY.9',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_CONT': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_CONT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG_RELEASE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_LONG_RELEASE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-PBI-4-FM.MAINTENANCE.9',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-8.KEY.7',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_CONT': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_CONT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG_RELEASE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_LONG_RELEASE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-8.MAINTENANCE.7',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-12-B.KEY.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_CONT': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_CONT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG_RELEASE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_LONG_RELEASE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-12-B.MAINTENANCE.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-P1.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'RSSI_PEER': {
                'ID': 'RSSI_PEER',
                'UNIT': 'dBm',
                'TAB_ORDER': 0,
                'OPERATIONS': 5,
                'FLAGS': 1,
                'TYPE': 'INTEGER',
                'MIN': -255,
                'MAX': 0,
                'DEFAULT': -255
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-P1.SHUTTER_CONTACT.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'STATE': {
                'ID': 'STATE',
                'UNIT': '',
                'TAB_ORDER': 0,
                'OPERATIONS': 7,
                'FLAGS': 1,
                'CONTROL': 'DOOR_SENSOR.STATE',
                'TYPE': 'BOOL',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'VALUE': {
                'ID': 'VALUE',
                'UNIT': '',
                'TAB_ORDER': 1,
                'OPERATIONS': 3,
                'FLAGS': 1,
                'TYPE': 'INTEGER',
                'MIN': 0,
                'MAX': 31,
                'DEFAULT': 0
            },
            'ON_TIME': {
                'ID': 'ON_TIME',
                'UNIT': 's',
                'TAB_ORDER': 2,
                'OPERATIONS': 3,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 15360,
                'DEFAULT': 0
            },
            'WORKING': {
                'ID': 'WORKING',
                'UNIT': '',
                'TAB_ORDER': 3,
                'OPERATIONS': 5,
                'FLAGS': 2,
                'TYPE': 'BOOL',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'EVENTCTR': {
                'ID': 'EVENTCTR',
                'UNIT': '',
                'TAB_ORDER': 4,
                'OPERATIONS': 3,
                'FLAGS': 1,
                'TYPE': 'INTEGER',
                'MIN': 0,
                'MAX': 999999,
                'DEFAULT': 0
            },
            'CONTROL': {
                'ID': 'CONTROL',
                'UNIT': '',
                'TAB_ORDER': 5,
                'OPERATIONS': 1,
                'FLAGS': 2,
                'TYPE': 'INTEGER',
                'MIN': 0,
                'MAX': 4,
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RCV-50.MAINTENANCE.6',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_MODE': {
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INSTALL_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 3,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RCV-50.VIRTUAL_KEY.6',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'LEVEL': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-SCI-3-FM.MAINTENANCE.10',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-SCI-3-FM.SHUTTER_CONTACT.10',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'DOOR_SENSOR.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-SCI-3-FM.MAINTENANCE.9',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-SCI-3-FM.SHUTTER_CONTACT.9',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'DOOR_SENSOR.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-MDIR-O-3.MAINTENANCE.12',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ENTER_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'ENTER_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 9,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-MDIR-O-3.MOTION_DETECTOR.12',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BRIGHTNESS': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BRIGHTNESS',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'MOTION': {
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'MOTION',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-MDIR-2.MOTION_DETECTOR.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BRIGHTNESS': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BRIGHTNESS',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'ERROR': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR',
                'MAX': 7,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    'SABOTAGE'
                ]
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'MOTION': {
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'MOTION',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-MDIR-2.MAINTENANCE.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ENTER_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'ENTER_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 9,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-RHS.MAINTENANCE.12',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-RHS.ROTARY_HANDLE_SENSOR.12',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ERROR': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR',
                'MAX': 7,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    'SABOTAGE'
                ]
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'RHS.STATE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': 2,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'CLOSED',
                    'TILTED',
                    'OPEN'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SC-2.MAINTENANCE.15',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SC-2.SHUTTER_CONTACT.15',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ERROR': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR',
                'MAX': 7,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    'SABOTAGE'
                ]
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'DOOR_SENSOR.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SC.MAINTENANCE.15',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SC.SHUTTER_CONTACT.15',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ERROR': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR',
                'MAX': 7,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    'SABOTAGE'
                ]
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'DOOR_SENSOR.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SCo.SHUTTER_CONTACT.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ERROR': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR',
                'MAX': 7,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    'SABOTAGE'
                ]
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'DOOR_SENSOR.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SCo.MAINTENANCE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SD-Team.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {
            'role': 'sensor.alarm.fire'
        },
        'native': {}
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SD-Team.SMOKE_DETECTOR_TEAM.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {
            'role': 'sensor.alarm.fire'
        },
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'DANGER.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SD.MAINTENANCE.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {
            'role': 'sensor.alarm.fire'
        },
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SD.SMOKE_DETECTOR.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {
            'role': 'sensor.alarm.fire'
        },
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'STATE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SD.SMOKE_DETECTOR.9',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {
            'role': 'sensor.alarm.fire'
        },
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'STATE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SD.MAINTENANCE.9',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {
            'role': 'sensor.alarm.fire'
        },
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SD-2.MAINTENANCE.5',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {
            'role': 'sensor.alarm.fire'
        },
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SD-2.SMOKE_DETECTOR.5',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {
            'role': 'sensor.alarm.fire'
        },
        'native': {
            'ERROR_ALARM_TEST': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR_ALARM_TEST',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    'ALARM_TEST_FAILED'
                ]
            },
            'ERROR_SMOKE_CHAMBER': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR_SMOKE_CHAMBER',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    'DEGRADED_SMOKE_CHAMBER'
                ]
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'DANGER.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SD-2-Team.SMOKE_DETECTOR_TEAM_V2.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {
            'role': 'sensor.alarm.fire'
        },
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'DANGER.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-EP.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'UNREACH': {
                'ID': 'UNREACH',
                'UNIT': '',
                'TAB_ORDER': 0,
                'OPERATIONS': 5,
                'FLAGS': 9,
                'TYPE': 'BOOL',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'RSSI_PEER': {
                'ID': 'RSSI_PEER',
                'UNIT': 'dBm',
                'TAB_ORDER': 1,
                'OPERATIONS': 5,
                'FLAGS': 1,
                'TYPE': 'INTEGER',
                'MIN': -255,
                'MAX': 0,
                'DEFAULT': -255
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-EP.SENSOR.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'COUNTER': {
                'ID': 'COUNTER',
                'UNIT': '',
                'TAB_ORDER': 0,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'INTEGER',
                'MIN': 0,
                'MAX': 255,
                'DEFAULT': 0
            },
            'SUM': {
                'ID': 'SUM',
                'UNIT': '',
                'TAB_ORDER': 1,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'MEAN5MINUTES': {
                'ID': 'MEAN5MINUTES',
                'UNIT': '',
                'TAB_ORDER': 2,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'MAX5MINUTES': {
                'ID': 'MAX5MINUTES',
                'UNIT': '',
                'TAB_ORDER': 3,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'SUM_1H': {
                'ID': 'SUM_1H',
                'UNIT': '',
                'TAB_ORDER': 4,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'MAX_1H': {
                'ID': 'MAX_1H',
                'UNIT': '',
                'TAB_ORDER': 5,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'SUM_24H': {
                'ID': 'SUM_24H',
                'UNIT': '',
                'TAB_ORDER': 6,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'MAX_24H': {
                'ID': 'MAX_24H',
                'UNIT': '',
                'TAB_ORDER': 7,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'MISS_24H': {
                'ID': 'MISS_24H',
                'UNIT': '',
                'TAB_ORDER': 8,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'INTEGER',
                'MIN': 0,
                'MAX': 65535,
                'DEFAULT': 0
            },
            'METER': {
                'ID': 'METER',
                'UNIT': '',
                'TAB_ORDER': 9,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            },
            'CONTROL': {
                'ID': 'CONTROL',
                'UNIT': '',
                'TAB_ORDER': 10,
                'OPERATIONS': 1,
                'FLAGS': 2,
                'TYPE': 'INTEGER',
                'MIN': 0,
                'MAX': 3,
                'DEFAULT': 0
            },
            'LAST_VALUE': {
                'ID': 'LAST_VALUE',
                'UNIT': '',
                'TAB_ORDER': 11,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 9999999.890625,
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-MDIR-SM.MAINTENANCE.7',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ENTER_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'ENTER_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 7,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-MDIR-SM.MAINTENANCE.9',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ENTER_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'ENTER_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 7,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-MDIR-SM.MOTION_DETECTOR.7',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BRIGHTNESS': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BRIGHTNESS',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'MOTION': {
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'MOTION',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-MDIR-SM.MOTION_DETECTOR.9',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BRIGHTNESS': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BRIGHTNESS',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'MOTION': {
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'MOTION',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-RD-O.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-RD-O.RAINDETECTOR_HEAT.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-RD-O.RAINDETECTOR.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'STATE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'DRY',
                    'RAIN'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-WDS10-TH-O.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'UNREACH': {
                'ID': 'UNREACH',
                'UNIT': '',
                'TAB_ORDER': 0,
                'OPERATIONS': 5,
                'FLAGS': 9,
                'TYPE': 'BOOL',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'RSSI_PEER': {
                'ID': 'RSSI_PEER',
                'UNIT': 'dBm',
                'TAB_ORDER': 1,
                'OPERATIONS': 5,
                'FLAGS': 1,
                'TYPE': 'INTEGER',
                'MIN': -255,
                'MAX': 0,
                'DEFAULT': -255
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-WDS10-TH-O.WEATHER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'TEMPERATURE': {
                'ID': 'TEMPERATURE',
                'UNIT': '°C',
                'TAB_ORDER': 0,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': -40,
                'MAX': 80,
                'DEFAULT': 0
            },
            'HUMIDITY': {
                'ID': 'HUMIDITY',
                'UNIT': '%',
                'TAB_ORDER': 1,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'INTEGER',
                'MIN': 0,
                'MAX': 100,
                'DEFAULT': 0
            },
            'DEW_POINT': {
                'ID': 'DEW_POINT',
                'UNIT': '°C',
                'TAB_ORDER': 2,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': -100,
                'MAX': 100,
                'DEFAULT': 0
            },
            'ABS_HUMIDITY': {
                'ID': 'ABS_HUMIDITY',
                'UNIT': 'g/m&#179;',
                'TAB_ORDER': 3,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 500,
                'DEFAULT': 0
            },
            'HUMIDITYF': {
                'ID': 'HUMIDITYF',
                'UNIT': '%',
                'TAB_ORDER': 4,
                'OPERATIONS': 1,
                'FLAGS': 2,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 100,
                'DEFAULT': 0
            },
            'TEMP_MIN_24H': {
                'ID': 'TEMP_MIN_24H',
                'UNIT': '°C',
                'TAB_ORDER': 5,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': -40,
                'MAX': 80,
                'DEFAULT': 0
            },
            'TEMP_MAX_24H': {
                'ID': 'TEMP_MAX_24H',
                'UNIT': '°C',
                'TAB_ORDER': 6,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': -40,
                'MAX': 80,
                'DEFAULT': 0
            },
            'HUM_MIN_24H': {
                'ID': 'HUM_MIN_24H',
                'UNIT': '%',
                'TAB_ORDER': 7,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 100,
                'DEFAULT': 0
            },
            'HUM_MAX_24H': {
                'ID': 'HUM_MAX_24H',
                'UNIT': '%',
                'TAB_ORDER': 8,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 100,
                'DEFAULT': 0
            },
            'MISS_24H': {
                'ID': 'MISS_24H',
                'UNIT': '',
                'TAB_ORDER': 9,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'INTEGER',
                'MIN': 0,
                'MAX': 65535,
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-WDS40-TH-I.MAINTENANCE.5',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-WDS40-TH-I.WEATHER.5',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'HUMIDITY': {
                'AutoconfRoles': 'WEATHER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'HUMIDITY',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'INTEGER',
                'UNIT': '%'
            },
            'TEMPERATURE': {
                'AutoconfRoles': 'WEATHER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'TEMPERATURE',
                'MAX': 80,
                'MIN': -40,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-WS550STH-I.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'LOWBAT': {
                'ID': 'LOWBAT',
                'UNIT': '',
                'TAB_ORDER': 0,
                'OPERATIONS': 5,
                'FLAGS': 9,
                'TYPE': 'BOOL',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'RSSI_PEER': {
                'ID': 'RSSI_PEER',
                'UNIT': 'dBm',
                'TAB_ORDER': 1,
                'OPERATIONS': 5,
                'FLAGS': 1,
                'TYPE': 'INTEGER',
                'MIN': -255,
                'MAX': 0,
                'DEFAULT': -255
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-WS550STH-I.WEATHER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'TEMPERATURE': {
                'ID': 'TEMPERATURE',
                'UNIT': '°C',
                'TAB_ORDER': 0,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': -100,
                'MAX': 100,
                'DEFAULT': 0
            },
            'TEMP_MIN_24H': {
                'ID': 'TEMP_MIN_24H',
                'UNIT': '°C',
                'TAB_ORDER': 5,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': -40,
                'MAX': 80,
                'DEFAULT': 0
            },
            'TEMP_MAX_24H': {
                'ID': 'TEMP_MAX_24H',
                'UNIT': '°C',
                'TAB_ORDER': 6,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': -40,
                'MAX': 80,
                'DEFAULT': 0
            },
            'MISS_24H': {
                'ID': 'MISS_24H',
                'UNIT': '',
                'TAB_ORDER': 1,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'INTEGER',
                'MIN': 0,
                'MAX': 65535,
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMW-IO-12-Sw7-DR.KEY.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMW-IO-12-Sw7-DR.MAINTENANCE.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMW-IO-12-Sw7-DR.SWITCH.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMW-LC-Dim1L-DR.DIMMER.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'DIMMER.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMW-LC-Dim1L-DR.KEY.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMW-LC-Dim1L-DR.MAINTENANCE.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1PBU-FM.SWITCH.7',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1PBU-FM.MAINTENANCE.7',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMW-LC-Sw2-DR.KEY.12',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMW-LC-Sw2-DR.MAINTENANCE.12',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMW-LC-Sw2-DR.SWITCH.12',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMW-RCV-50.MAINTENANCE.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {}
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMW-RCV-50.VIRTUAL_KEY.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-Sir-WM.MAINTENANCE.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 11,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_SABOTAGE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR_SABOTAGE',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 9,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    'SABOTAGE'
                ]
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_SABOTAGE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 25,
                'ID': 'STICKY_SABOTAGE',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 10,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'WAS_SABOTAGED',
                    'SABOTAGE'
                ]
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-Sir-WM.SWITCH_PANIC.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ERROR_SABOTAGE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ERROR_SABOTAGE',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    'SABOTAGE'
                ]
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 5,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-Sir-WM.SWITCH_SENSOR.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ERROR_SABOTAGE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ERROR_SABOTAGE',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    'SABOTAGE'
                ]
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 5,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-Sir-WM.ARMING.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ARMSTATE': {
                'CONTROL': 'ARMING.ARMSTATE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ARMSTATE',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'DISARMED',
                    'EXTSENS_ARMED',
                    'ALLSENS_ARMED',
                    'ALARM_BLOCKED'
                ]
            },
            'ERROR_SABOTAGE': {
                'CONTROL': 'DEVICE.SABOTAGE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ERROR_SABOTAGE',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    'SABOTAGE'
                ]
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 5,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'DEVICE.LOWBAT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-DR.MAINTENANCE.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-DR.SWITCH.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-DR.POWERMETER.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BOOT': {
                'CONTROL': 'POWERMETER.BOOT',
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'BOOT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'CURRENT': {
                'CONTROL': 'POWERMETER.CURRENT',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'CURRENT',
                'MAX': 65535,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': 'mA'
            },
            'ENERGY_COUNTER': {
                'CONTROL': 'POWERMETER.ENERGY_COUNTER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ENERGY_COUNTER',
                'MAX': 838860.699219,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': 'Wh'
            },
            'FREQUENCY': {
                'CONTROL': 'POWERMETER.FREQUENCY',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'FREQUENCY',
                'MAX': 51.27,
                'MIN': 48.72,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'UNIT': 'Hz'
            },
            'POWER': {
                'CONTROL': 'POWERMETER.POWER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'POWER',
                'MAX': 167772.149902,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 'W'
            },
            'VOLTAGE': {
                'CONTROL': 'POWERMETER.VOLTAGE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'VOLTAGE',
                'MAX': 6553.5,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 'V'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-DR.CONDITION_POWER.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-DR.CONDITION_CURRENT.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-DR.CONDITION_VOLTAGE.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-DR.CONDITION_FREQUENCY.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HB-UNI-Sen-TEMP-DS18B20.MAINTENANCE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HB-UNI-Sen-TEMP-DS18B20.WEATHER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'TEMPERATURE': {
                'AutoconfRoles': 'WEATHER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'TEMPERATURE',
                'MAX': 150,
                'MIN': -150,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.MAINTENANCE.29',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-RT-DN.CLIMATECONTROL_RT_TRANSCEIVER.29',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ACTUAL_TEMPERATURE': {
                'CONTROL': 'HEATING_CONTROL.TEMPERATURE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'MAX': 56,
                'MIN': -10,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'AUTO_MODE': {
                'CONTROL': 'HEATING_CONTROL.AUTO',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'AUTO_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 7,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'BATTERY_STATE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BATTERY_STATE',
                'MAX': 4.6,
                'MIN': 1.5,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': 'V'
            },
            'BOOST_MODE': {
                'CONTROL': 'HEATING_CONTROL.BOOST',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'BOOST_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 9,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'BOOST_STATE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BOOST_STATE',
                'MAX': 30,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': 'min'
            },
            'COMFORT_MODE': {
                'CONTROL': 'HEATING_CONTROL.COMFORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'COMFORT_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 10,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'CONTROL_MODE': {
                'CONTROL': 'HEATING_CONTROL.CONTROL_MODE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'CONTROL_MODE',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'AUTO-MODE',
                    'MANU-MODE',
                    'PARTY-MODE',
                    'BOOST-MODE'
                ]
            },
            'FAULT_REPORTING': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'FAULT_REPORTING',
                'MAX': 7,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_FAULT',
                    'VALVE_TIGHT',
                    'ADJUSTING_RANGE_TOO_LARGE',
                    'ADJUSTING_RANGE_TOO_SMALL',
                    'COMMUNICATION_ERROR',
                    '',
                    'LOWBAT',
                    'VALVE_ERROR_POSITION'
                ]
            },
            'LOWERING_MODE': {
                'CONTROL': 'HEATING_CONTROL.LOWERING',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWERING_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 11,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'MANU_MODE': {
                'CONTROL': 'HEATING_CONTROL.MANU',
                'DEFAULT': 20,
                'FLAGS': 1,
                'ID': 'MANU_MODE',
                'MAX': 30.5,
                'MIN': 4.5,
                'OPERATIONS': 2,
                'TAB_ORDER': 8,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'PARTY_MODE_SUBMIT': {
                'CONTROL': 'NONE',
                'DEFAULT': '',
                'FLAGS': 1,
                'ID': 'PARTY_MODE_SUBMIT',
                'MAX': '',
                'MIN': '',
                'OPERATIONS': 2,
                'TAB_ORDER': 12,
                'TYPE': 'STRING',
                'UNIT': ''
            },
            'PARTY_START_DAY': {
                'CONTROL': 'HEATING_CONTROL.PARTY_START_DAY',
                'DEFAULT': 1,
                'FLAGS': 1,
                'ID': 'PARTY_START_DAY',
                'MAX': 31,
                'MIN': 1,
                'OPERATIONS': 3,
                'TAB_ORDER': 15,
                'TYPE': 'INTEGER',
                'UNIT': 'day'
            },
            'PARTY_START_MONTH': {
                'CONTROL': 'HEATING_CONTROL.PARTY_START_MONTH',
                'DEFAULT': 1,
                'FLAGS': 1,
                'ID': 'PARTY_START_MONTH',
                'MAX': 12,
                'MIN': 1,
                'OPERATIONS': 3,
                'TAB_ORDER': 16,
                'TYPE': 'INTEGER',
                'UNIT': 'month'
            },
            'PARTY_START_TIME': {
                'CONTROL': 'HEATING_CONTROL.PARTY_START_TIME',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'PARTY_START_TIME',
                'MAX': 1410,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 14,
                'TYPE': 'INTEGER',
                'UNIT': 'minutes'
            },
            'PARTY_START_YEAR': {
                'CONTROL': 'HEATING_CONTROL.PARTY_START_YEAR',
                'DEFAULT': 12,
                'FLAGS': 1,
                'ID': 'PARTY_START_YEAR',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 17,
                'TYPE': 'INTEGER',
                'UNIT': 'year'
            },
            'PARTY_STOP_DAY': {
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_DAY',
                'DEFAULT': 1,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_DAY',
                'MAX': 31,
                'MIN': 1,
                'OPERATIONS': 3,
                'TAB_ORDER': 19,
                'TYPE': 'INTEGER',
                'UNIT': 'day'
            },
            'PARTY_STOP_MONTH': {
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_MONTH',
                'DEFAULT': 1,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_MONTH',
                'MAX': 12,
                'MIN': 1,
                'OPERATIONS': 3,
                'TAB_ORDER': 20,
                'TYPE': 'INTEGER',
                'UNIT': 'month'
            },
            'PARTY_STOP_TIME': {
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_TIME',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_TIME',
                'MAX': 1410,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 18,
                'TYPE': 'INTEGER',
                'UNIT': 'minutes'
            },
            'PARTY_STOP_YEAR': {
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_YEAR',
                'DEFAULT': 12,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_YEAR',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 21,
                'TYPE': 'INTEGER',
                'UNIT': 'year'
            },
            'PARTY_TEMPERATURE': {
                'CONTROL': 'HEATING_CONTROL.PARTY_TEMP',
                'DEFAULT': 20,
                'FLAGS': 1,
                'ID': 'PARTY_TEMPERATURE',
                'MAX': 30,
                'MIN': 5,
                'OPERATIONS': 3,
                'TAB_ORDER': 13,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'SET_TEMPERATURE': {
                'CONTROL': 'HEATING_CONTROL.SETPOINT',
                'DEFAULT': 20,
                'FLAGS': 1,
                'ID': 'SET_TEMPERATURE',
                'MAX': 30.5,
                'MIN': 4.5,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'VALVE_STATE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'VALVE_STATE',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'INTEGER',
                'UNIT': '%'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SCo.MAINTENANCE.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SCo.SHUTTER_CONTACT.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ERROR': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR',
                'MAX': 7,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    'SABOTAGE'
                ]
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'DOOR_SENSOR.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl-DN-R1.MAINTENANCE.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl-DN-R1.SWITCH.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl-DN-R1.POWERMETER.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BOOT': {
                'CONTROL': 'POWERMETER.BOOT',
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'BOOT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'CURRENT': {
                'CONTROL': 'POWERMETER.CURRENT',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'CURRENT',
                'MAX': 65535,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': 'mA'
            },
            'ENERGY_COUNTER': {
                'CONTROL': 'POWERMETER.ENERGY_COUNTER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ENERGY_COUNTER',
                'MAX': 838860.699219,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': 'Wh'
            },
            'FREQUENCY': {
                'CONTROL': 'POWERMETER.FREQUENCY',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'FREQUENCY',
                'MAX': 51.27,
                'MIN': 48.72,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'UNIT': 'Hz'
            },
            'POWER': {
                'CONTROL': 'POWERMETER.POWER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'POWER',
                'MAX': 167772.149902,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 'W'
            },
            'VOLTAGE': {
                'CONTROL': 'POWERMETER.VOLTAGE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'VOLTAGE',
                'MAX': 6553.5,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 'V'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl-DN-R1.CONDITION_POWER.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl-DN-R1.CONDITION_CURRENT.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl-DN-R1.CONDITION_VOLTAGE.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl-DN-R1.CONDITION_FREQUENCY.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1-Pl-DN-R1.MAINTENANCE.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1-Pl-DN-R1.SWITCH.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-TC-IT-WM-W-EU.MAINTENANCE.22',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-TC-IT-WM-W-EU.WEATHER_TRANSMIT.22',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'HUMIDITY': {
                'AutoconfRoles': 'WEATHER',
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'HUMIDITY',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'INTEGER',
                'UNIT': '%'
            },
            'TEMPERATURE': {
                'AutoconfRoles': 'WEATHER',
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'TEMPERATURE',
                'MAX': 50,
                'MIN': -10,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-TC-IT-WM-W-EU.THERMALCONTROL_TRANSMIT.22',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ACTUAL_HUMIDITY': {
                'CONTROL': 'THERMAL_CONTROL.HUMIDITY',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ACTUAL_HUMIDITY',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'FLOAT',
                'UNIT': '%'
            },
            'ACTUAL_TEMPERATURE': {
                'CONTROL': 'HEATING_CONTROL.TEMPERATURE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'MAX': 50,
                'MIN': -10,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'AUTO_MODE': {
                'CONTROL': 'HEATING_CONTROL.AUTO',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'AUTO_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 9,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'BATTERY_STATE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BATTERY_STATE',
                'MAX': 4.6,
                'MIN': 1.5,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'UNIT': 'V'
            },
            'BOOST_MODE': {
                'CONTROL': 'HEATING_CONTROL.BOOST',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'BOOST_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 11,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'BOOST_STATE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BOOST_STATE',
                'MAX': 30,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': 'min'
            },
            'COMFORT_MODE': {
                'CONTROL': 'HEATING_CONTROL.COMFORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'COMFORT_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 12,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'COMMUNICATION_REPORTING': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'COMMUNICATION_REPORTING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'CONTROL_MODE': {
                'CONTROL': 'HEATING_CONTROL.CONTROL_MODE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'CONTROL_MODE',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'AUTO-MODE',
                    'MANU-MODE',
                    'PARTY-MODE',
                    'BOOST-MODE'
                ]
            },
            'LOWBAT_REPORTING': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT_REPORTING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWERING_MODE': {
                'CONTROL': 'HEATING_CONTROL.LOWERING',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWERING_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 13,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'MANU_MODE': {
                'CONTROL': 'HEATING_CONTROL.MANU',
                'DEFAULT': 20,
                'FLAGS': 1,
                'ID': 'MANU_MODE',
                'MAX': 30.5,
                'MIN': 4.5,
                'OPERATIONS': 2,
                'TAB_ORDER': 10,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'PARTY_MODE_SUBMIT': {
                'CONTROL': 'NONE',
                'DEFAULT': '',
                'FLAGS': 1,
                'ID': 'PARTY_MODE_SUBMIT',
                'MAX': '',
                'MIN': '',
                'OPERATIONS': 2,
                'TAB_ORDER': 14,
                'TYPE': 'STRING',
                'UNIT': ''
            },
            'PARTY_START_DAY': {
                'CONTROL': 'HEATING_CONTROL.PARTY_START_DAY',
                'DEFAULT': 1,
                'FLAGS': 1,
                'ID': 'PARTY_START_DAY',
                'MAX': 31,
                'MIN': 1,
                'OPERATIONS': 3,
                'TAB_ORDER': 17,
                'TYPE': 'INTEGER',
                'UNIT': 'day'
            },
            'PARTY_START_MONTH': {
                'CONTROL': 'HEATING_CONTROL.PARTY_START_MONTH',
                'DEFAULT': 1,
                'FLAGS': 1,
                'ID': 'PARTY_START_MONTH',
                'MAX': 12,
                'MIN': 1,
                'OPERATIONS': 3,
                'TAB_ORDER': 18,
                'TYPE': 'INTEGER',
                'UNIT': 'month'
            },
            'PARTY_START_TIME': {
                'CONTROL': 'HEATING_CONTROL.PARTY_START_TIME',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'PARTY_START_TIME',
                'MAX': 1410,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 16,
                'TYPE': 'INTEGER',
                'UNIT': 'minutes'
            },
            'PARTY_START_YEAR': {
                'CONTROL': 'HEATING_CONTROL.PARTY_START_YEAR',
                'DEFAULT': 12,
                'FLAGS': 1,
                'ID': 'PARTY_START_YEAR',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 19,
                'TYPE': 'INTEGER',
                'UNIT': 'year'
            },
            'PARTY_STOP_DAY': {
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_DAY',
                'DEFAULT': 1,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_DAY',
                'MAX': 31,
                'MIN': 1,
                'OPERATIONS': 3,
                'TAB_ORDER': 21,
                'TYPE': 'INTEGER',
                'UNIT': 'day'
            },
            'PARTY_STOP_MONTH': {
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_MONTH',
                'DEFAULT': 1,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_MONTH',
                'MAX': 12,
                'MIN': 1,
                'OPERATIONS': 3,
                'TAB_ORDER': 22,
                'TYPE': 'INTEGER',
                'UNIT': 'month'
            },
            'PARTY_STOP_TIME': {
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_TIME',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_TIME',
                'MAX': 1410,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 20,
                'TYPE': 'INTEGER',
                'UNIT': 'minutes'
            },
            'PARTY_STOP_YEAR': {
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_YEAR',
                'DEFAULT': 12,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_YEAR',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 23,
                'TYPE': 'INTEGER',
                'UNIT': 'year'
            },
            'PARTY_TEMPERATURE': {
                'CONTROL': 'HEATING_CONTROL.PARTY_TEMP',
                'DEFAULT': 20,
                'FLAGS': 1,
                'ID': 'PARTY_TEMPERATURE',
                'MAX': 30,
                'MIN': 5,
                'OPERATIONS': 3,
                'TAB_ORDER': 15,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'SET_TEMPERATURE': {
                'CONTROL': 'HEATING_CONTROL.SETPOINT',
                'DEFAULT': 20,
                'FLAGS': 1,
                'ID': 'SET_TEMPERATURE',
                'MAX': 30.5,
                'MIN': 4.5,
                'OPERATIONS': 7,
                'TAB_ORDER': 8,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'WINDOW_OPEN_REPORTING': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'WINDOW_OPEN_REPORTING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-TC-IT-WM-W-EU.SWITCH_TRANSMIT.22',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SPDR.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SABOTAGE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'SABOTAGE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SPDR.PASSAGE_DETECTOR_DIRECTION_TRANSMITTER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PASSAGE_COUNTER_VALUE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'PASSAGE_COUNTER_VALUE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'PASSAGE_DETECTOR_DIRECTION_TRANSMITTER.PASSAGE_COUNTER_VALUE'
            },
            'PASSAGE_COUNTER_OVERFLOW': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PASSAGE_COUNTER_OVERFLOW',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'PASSAGE_DETECTOR_DIRECTION_TRANSMITTER.PASSAGE_COUNTER_OVERFLOW'
            },
            'LAST_PASSAGE_DIRECTION': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'LAST_PASSAGE_DIRECTION',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'PASSAGE_DETECTOR_DIRECTION_TRANSMITTER.LAST_PASSAGE_DIRECTION'
            },
            'CURRENT_PASSAGE_DIRECTION': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'CURRENT_PASSAGE_DIRECTION',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'PASSAGE_DETECTOR_DIRECTION_TRANSMITTER.CURRENT_PASSAGE_DIRECTION'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SPI.PRESENCEDETECTOR_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESENCE_DETECTION_STATE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESENCE_DETECTION_STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.MOTION_DETECTION_STATE'
            },
            'ILLUMINATION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 163830,
                'FLAGS': 1,
                'ID': 'ILLUMINATION',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.ILLUMINATION'
            },
            'RESET_PRESENCE': {
                'MIN': false,
                'OPERATIONS': 2,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'RESET_PRESENCE',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.RESET_MOTION'
            },
            'CURRENT_ILLUMINATION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 163830,
                'FLAGS': 1,
                'ID': 'CURRENT_ILLUMINATION',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'PRESENCE_DETECTION_ACTIVE': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESENCE_DETECTION_ACTIVE',
                'TYPE': 'BOOL',
                'DEFAULT': true,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.MOTION_DETECTION_ACTIVE'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SPI.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SABOTAGE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'SABOTAGE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-eTRV.HEATING_CLIMATECONTROL_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'VALVE_ADAPTION': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'VALVE_ADAPTION',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'BOOST_TIME': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 2048,
                'FLAGS': 1,
                'ID': 'BOOST_TIME',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'PARTY_MODE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PARTY_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_MODE'
            },
            'SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'UNIT': '°C',
                'OPERATIONS': 7,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT'
            },
            'LEVEL_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ]
            },
            'PARTY_TIME_START': {
                'MIN': '2000_01_01 00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31 23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_START',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01 00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_START'
            },
            'CONTROL_MODE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'CONTROL_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.CONTROL_MODE'
            },
            'FROST_PROTECTION': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'FROST_PROTECTION',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.FROST_PROTECTION'
            },
            'PARTY_SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'OPERATIONS': 5,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'PARTY_SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_SETPOINT_TEMP'
            },
            'SET_POINT_MODE': {
                'MIN': 0,
                'OPERATIONS': 7,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'SET_POINT_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT_MODE'
            },
            'LEVEL': {
                'MIN': 0,
                'OPERATIONS': 7,
                'MAX': 1,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': '100%'
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'DURATION_UNIT': {
                'MIN': 'S',
                'OPERATIONS': 2,
                'MAX': 'H',
                'FLAGS': 1,
                'ID': 'DURATION_UNIT',
                'TYPE': 'ENUM',
                'DEFAULT': 'S',
                'VALUE_LIST': [
                    'S',
                    'M',
                    'H'
                ]
            },
            'SWITCH_POINT_OCCURED': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'SWITCH_POINT_OCCURED',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONTROL_DIFFERENTIAL_TEMPERATURE': {
                'MIN': -10,
                'OPERATIONS': 2,
                'MAX': 10,
                'FLAGS': 1,
                'ID': 'CONTROL_DIFFERENTIAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'VALVE_STATE': {
                'MIN': 'STATE_NOT_AVAILABLE',
                'OPERATIONS': 5,
                'MAX': 'ERROR_POSITION',
                'FLAGS': 1,
                'ID': 'VALVE_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'STATE_NOT_AVAILABLE',
                'VALUE_LIST': [
                    'STATE_NOT_AVAILABLE',
                    'RUN_TO_START',
                    'WAIT_FOR_ADAPTION',
                    'ADAPTION_IN_PROGRESS',
                    'ADAPTION_DONE',
                    'TOO_TIGHT',
                    'ADJUSTMENT_TOO_BIG',
                    'ADJUSTMENT_TOO_SMALL',
                    'ERROR_POSITION'
                ]
            },
            'ACTIVE_PROFILE': {
                'MIN': 1,
                'OPERATIONS': 7,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'ACTIVE_PROFILE',
                'TYPE': 'INTEGER',
                'DEFAULT': 1,
                'CONTROL': 'HEATING_CONTROL_HMIP.ACTIVE_PROFILE'
            },
            'WINDOW_STATE': {
                'MIN': 'CLOSED',
                'OPERATIONS': 7,
                'MAX': 'OPEN',
                'FLAGS': 1,
                'ID': 'WINDOW_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'CLOSED',
                'VALUE_LIST': [
                    'CLOSED',
                    'OPEN'
                ],
                'CONTROL': 'HEATING_CONTROL_HMIP.WINDOW_STATE'
            },
            'PARTY_TIME_END': {
                'MIN': '2000_01_01 00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31 23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_END',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01 00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_END'
            },
            'ACTUAL_TEMPERATURE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'MAX': 50,
                'MIN': -10,
                'OPERATIONS': 5,
                'TYPE': 'FLOAT',
                'UNIT': '°C',
                'CONTROL': 'HEATING_CONTROL_HMIP.TEMPERATURE'
            },
            'BOOST_MODE': {
                'MIN': false,
                'OPERATIONS': 6,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'BOOST_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.BOOST_MODE'
            },
            'DURATION_VALUE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16343,
                'FLAGS': 1,
                'ID': 'DURATION_VALUE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-eTRV.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': 'V'
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-WTH-2.MAINTENANCE.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-WTH-2.HEATING_CLIMATECONTROL_TRANSCEIVER.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BOOST_TIME': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 2048,
                'FLAGS': 1,
                'ID': 'BOOST_TIME',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'PARTY_MODE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PARTY_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_MODE'
            },
            'SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'UNIT': '°C',
                'OPERATIONS': 7,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT'
            },
            'HUMIDITY': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 100,
                'FLAGS': 1,
                'ID': 'HUMIDITY',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.HUMIDITY',
                'UNIT': '%'
            },
            'PARTY_TIME_START': {
                'MIN': '2000_01_01 00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31 23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_START',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01 00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_START'
            },
            'CONTROL_MODE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'CONTROL_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.CONTROL_MODE'
            },
            'QUICK_VETO_TIME': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 2048,
                'FLAGS': 1,
                'ID': 'QUICK_VETO_TIME',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'FROST_PROTECTION': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'FROST_PROTECTION',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.FROST_PROTECTION'
            },
            'PARTY_SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'OPERATIONS': 5,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'PARTY_SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_SETPOINT_TEMP'
            },
            'SET_POINT_MODE': {
                'MIN': 0,
                'OPERATIONS': 7,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'SET_POINT_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT_MODE'
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'DURATION_UNIT': {
                'MIN': 'S',
                'OPERATIONS': 2,
                'MAX': 'H',
                'FLAGS': 1,
                'ID': 'DURATION_UNIT',
                'TYPE': 'ENUM',
                'DEFAULT': 'S',
                'VALUE_LIST': [
                    'S',
                    'M',
                    'H'
                ]
            },
            'SWITCH_POINT_OCCURED': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'SWITCH_POINT_OCCURED',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONTROL_DIFFERENTIAL_TEMPERATURE': {
                'MIN': -10,
                'OPERATIONS': 2,
                'MAX': 10,
                'FLAGS': 1,
                'ID': 'CONTROL_DIFFERENTIAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'ACTIVE_PROFILE': {
                'MIN': 1,
                'OPERATIONS': 7,
                'MAX': 6,
                'FLAGS': 1,
                'ID': 'ACTIVE_PROFILE',
                'TYPE': 'INTEGER',
                'DEFAULT': 1,
                'CONTROL': 'HEATING_CONTROL_HMIP.ACTIVE_PROFILE'
            },
            'WINDOW_STATE': {
                'MIN': 'CLOSED',
                'OPERATIONS': 7,
                'MAX': 'OPEN',
                'FLAGS': 1,
                'ID': 'WINDOW_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'CLOSED',
                'VALUE_LIST': [
                    'CLOSED',
                    'OPEN'
                ],
                'CONTROL': 'HEATING_CONTROL_HMIP.WINDOW_STATE'
            },
            'HUMIDITY_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'HUMIDITY_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'HEATING_COOLING': {
                'MIN': 'HEATING',
                'OPERATIONS': 7,
                'MAX': 'COOLING',
                'FLAGS': 1,
                'ID': 'HEATING_COOLING',
                'TYPE': 'ENUM',
                'DEFAULT': 'HEATING',
                'VALUE_LIST': [
                    'HEATING',
                    'COOLING'
                ]
            },
            'PARTY_TIME_END': {
                'MIN': '2000_01_01 00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31 23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_END',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01 00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_END'
            },
            'ACTUAL_TEMPERATURE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'MAX': 50,
                'MIN': -10,
                'OPERATIONS': 5,
                'TYPE': 'FLOAT',
                'UNIT': '°C',
                'CONTROL': 'HEATING_CONTROL_HMIP.TEMPERATURE'
            },
            'BOOST_MODE': {
                'MIN': false,
                'OPERATIONS': 6,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'BOOST_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.BOOST_MODE'
            },
            'DURATION_VALUE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16343,
                'FLAGS': 1,
                'ID': 'DURATION_VALUE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-TC-IT-WM-W-EU.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'LOWBAT': {
                'ID': 'LOWBAT',
                'UNIT': '',
                'TAB_ORDER': 0,
                'OPERATIONS': 5,
                'FLAGS': 9,
                'TYPE': 'BOOL',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'UNREACH': {
                'ID': 'UNREACH',
                'UNIT': '',
                'TAB_ORDER': 1,
                'OPERATIONS': 5,
                'FLAGS': 9,
                'TYPE': 'BOOL',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'RSSI_PEER': {
                'ID': 'RSSI_PEER',
                'UNIT': 'dBm',
                'TAB_ORDER': 2,
                'OPERATIONS': 5,
                'FLAGS': 1,
                'TYPE': 'INTEGER',
                'MIN': -255,
                'MAX': 0,
                'DEFAULT': -255
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-TC-IT-WM-W-EU.WEATHER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'TEMPERATURE': {
                'ID': 'TEMPERATURE',
                'UNIT': '°C',
                'TAB_ORDER': 0,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': -100,
                'MAX': 100,
                'DEFAULT': 0
            },
            'INSTALL_TEST': {
                'ID': 'INSTALL_TEST',
                'UNIT': '',
                'TAB_ORDER': 1,
                'OPERATIONS': 3,
                'FLAGS': 3,
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-TC-IT-WM-W-EU.CLIMATECONTROL_REGULATOR.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SETPOINT': {
                'ID': 'SETPOINT',
                'UNIT': '°C',
                'TAB_ORDER': 0,
                'OPERATIONS': 7,
                'FLAGS': 1,
                'CONTROL': 'TEMP.SETPOINT',
                'TYPE': 'FLOAT',
                'MIN': 6,
                'MAX': 30,
                'DEFAULT': 21
            },
            'STATE': {
                'ID': 'STATE',
                'UNIT': '',
                'TAB_ORDER': 1,
                'OPERATIONS': 2,
                'FLAGS': 1,
                'TYPE': 'BOOL',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'MODE_TEMPERATUR_REGULATOR': {
                'ID': 'MODE_TEMPERATUR_REGULATOR',
                'UNIT': '',
                'TAB_ORDER': 2,
                'OPERATIONS': 7,
                'FLAGS': 1,
                'TYPE': 'ENUM',
                'MIN': 0,
                'MAX': 2,
                'DEFAULT': 0,
                'VALUE_LIST': [
                    'AUTO',
                    'MANUAL',
                    'PARTY'
                ]
            },
            'TEMPERATUR_COMFORT_VALUE': {
                'ID': 'TEMPERATUR_COMFORT_VALUE',
                'UNIT': '°C',
                'TAB_ORDER': 3,
                'OPERATIONS': 7,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 6,
                'MAX': 30,
                'DEFAULT': 21
            },
            'TEMPERATUR_LOWERING_VALUE': {
                'ID': 'TEMPERATUR_LOWERING_VALUE',
                'UNIT': '°C',
                'TAB_ORDER': 4,
                'OPERATIONS': 7,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 6,
                'MAX': 30,
                'DEFAULT': 18
            },
            'TEMPERATUR_WINDOW_OPEN_VALUE': {
                'ID': 'TEMPERATUR_WINDOW_OPEN_VALUE',
                'UNIT': '°C',
                'TAB_ORDER': 5,
                'OPERATIONS': 7,
                'FLAGS': 1,
                'TYPE': 'FLOAT',
                'MIN': 6,
                'MAX': 30,
                'DEFAULT': 18
            },
            'PARTY_END_TIME': {
                'ID': 'PARTY_END_TIME',
                'UNIT': '',
                'TAB_ORDER': 6,
                'OPERATIONS': 3,
                'FLAGS': 1,
                'TYPE': 'STRING',
                'MIN': '',
                'MAX': '',
                'DEFAULT': ''
            },
            'INSTALL_TEST': {
                'ID': 'INSTALL_TEST',
                'UNIT': '',
                'TAB_ORDER': 7,
                'OPERATIONS': 3,
                'FLAGS': 3,
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.10000.SWITCH.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'LEVEL': {
                'ID': 'LEVEL',
                'UNIT': '100%',
                'TAB_ORDER': 0,
                'OPERATIONS': 7,
                'FLAGS': 2,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 1,
                'DEFAULT': 0
            },
            'OLD_LEVEL': {
                'ID': 'OLD_LEVEL',
                'UNIT': '',
                'TAB_ORDER': 1,
                'OPERATIONS': 2,
                'FLAGS': 2,
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'STOP': {
                'ID': 'STOP',
                'UNIT': '',
                'TAB_ORDER': 2,
                'OPERATIONS': 6,
                'FLAGS': 2,
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'STATE': {
                'ID': 'STATE',
                'UNIT': '',
                'TAB_ORDER': 3,
                'OPERATIONS': 7,
                'FLAGS': 1,
                'CONTROL': 'SWITCH.STATE',
                'TYPE': 'BOOL',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'PRESS_SHORT': {
                'ID': 'PRESS_SHORT',
                'UNIT': '',
                'TAB_ORDER': 4,
                'OPERATIONS': 6,
                'FLAGS': 2,
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'PRESS_LONG': {
                'ID': 'PRESS_LONG',
                'UNIT': '',
                'TAB_ORDER': 5,
                'OPERATIONS': 6,
                'FLAGS': 2,
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'MOTION': {
                'ID': 'MOTION',
                'UNIT': '',
                'TAB_ORDER': 6,
                'OPERATIONS': 5,
                'FLAGS': 2,
                'TYPE': 'BOOL',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'SEND_CMD': {
                'ID': 'SEND_CMD',
                'UNIT': '',
                'TAB_ORDER': 7,
                'OPERATIONS': 2,
                'FLAGS': 1,
                'TYPE': 'STRING',
                'MIN': '',
                'MAX': '',
                'DEFAULT': ''
            },
            'RCVS': {
                'ID': 'RCVS',
                'UNIT': '',
                'TAB_ORDER': 8,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'STRING',
                'MIN': '',
                'MAX': '',
                'DEFAULT': ''
            },
            'RCVL': {
                'ID': 'RCVL',
                'UNIT': '',
                'TAB_ORDER': 9,
                'OPERATIONS': 1,
                'FLAGS': 1,
                'TYPE': 'STRING',
                'MIN': '',
                'MAX': '',
                'DEFAULT': ''
            },
            'CONTROL': {
                'ID': 'CONTROL',
                'UNIT': '',
                'TAB_ORDER': 10,
                'OPERATIONS': 1,
                'FLAGS': 2,
                'TYPE': 'INTEGER',
                'MIN': 0,
                'MAX': 6,
                'DEFAULT': 0
            },
            'SET_STATE': {
                'ID': 'SET_STATE',
                'UNIT': '',
                'TAB_ORDER': 11,
                'OPERATIONS': 2,
                'FLAGS': 2,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 1,
                'DEFAULT': 0
            },
            'TOGGLE': {
                'ID': 'TOGGLE',
                'UNIT': '',
                'TAB_ORDER': 12,
                'OPERATIONS': 2,
                'FLAGS': 1,
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'ID': 'INSTALL_TEST',
                'UNIT': '',
                'TAB_ORDER': 13,
                'OPERATIONS': 3,
                'FLAGS': 3,
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BRC2.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BRC2.KEY_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BDT.MAINTENANCE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ERROR_OVERHEAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'ERROR_UPDATE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'ERROR_UPDATE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_OVERLOAD': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'ERROR_OVERLOAD',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BDT.KEY_TRANSCEIVER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BDT.DIMMER_TRANSMITTER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'LEVEL_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ]
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'LEVEL': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 1,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'DIMMER_REAL.LEVEL'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTIVITY_STATE': {
                'MIN': 'UNKNOWN',
                'OPERATIONS': 5,
                'MAX': 'STABLE',
                'FLAGS': 1,
                'ID': 'ACTIVITY_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'UNKNOWN',
                'VALUE_LIST': [
                    'UNKNOWN',
                    'UP',
                    'DOWN',
                    'STABLE'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BDT.DIMMER_VIRTUAL_RECEIVER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'LEVEL_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ]
            },
            'ON_TIME': {
                'MIN': 0,
                'UNIT': 's',
                'OPERATIONS': 2,
                'MAX': 8580000,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'RAMP_TIME': {
                'MIN': 0,
                'UNIT': 's',
                'OPERATIONS': 2,
                'MAX': 8580000,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'TYPE': 'FLOAT',
                'DEFAULT': 0.5
            },
            'LEVEL': {
                'MIN': 0,
                'UNIT': '100%',
                'OPERATIONS': 7,
                'MAX': 1,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'DIMMER.LEVEL'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTIVITY_STATE': {
                'MIN': 'UNKNOWN',
                'OPERATIONS': 5,
                'MAX': 'STABLE',
                'FLAGS': 1,
                'ID': 'ACTIVITY_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'UNKNOWN',
                'VALUE_LIST': [
                    'UNKNOWN',
                    'UP',
                    'DOWN',
                    'STABLE'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BDT.DIMMER_WEEK_PROFILE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCK': {
                'MIN': 'MANU_MODE',
                'OPERATIONS': 2,
                'MAX': 'AUTO_MODE_WITHOUT_RESET',
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCK',
                'TYPE': 'ENUM',
                'DEFAULT': 'MANU_MODE',
                'VALUE_LIST': [
                    'MANU_MODE',
                    'AUTO_MODE_WITH_RESET',
                    'AUTO_MODE_WITHOUT_RESET'
                ],
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCK'
            },
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCKS'
            },
            'WEEK_PROGRAM_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.CHANNEL_LOCKS'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FROLL.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ERROR_OVERHEAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FROLL.KEY_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FROLL.SHUTTER_TRANSMITTER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'LEVEL_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ],
                'CONTROL': 'SHUTTER_TRANSMITTER.LEVEL_STATUS'
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'LEVEL': {
                'MIN': 0,
                'UNIT': '100%',
                'OPERATIONS': 5,
                'MAX': 1,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'SHUTTER_TRANSMITTER.LEVEL'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTIVITY_STATE': {
                'MIN': 'UNKNOWN',
                'OPERATIONS': 5,
                'MAX': 'STABLE',
                'FLAGS': 1,
                'ID': 'ACTIVITY_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'UNKNOWN',
                'VALUE_LIST': [
                    'UNKNOWN',
                    'UP',
                    'DOWN',
                    'STABLE'
                ],
                'CONTROL': 'SHUTTER_TRANSMITTER.ACTIVITY_STATE'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FROLL.SHUTTER_VIRTUAL_RECEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'LEVEL_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ],
                'CONTROL': 'SHUTTER_VIRTUAL_RECEIVER.LEVEL'
            },
            'STOP': {
                'MIN': false,
                'OPERATIONS': 2,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STOP',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'SHUTTER_VIRTUAL_RECEIVER.STOP'
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'LEVEL': {
                'MIN': 0,
                'UNIT': '100%',
                'OPERATIONS': 7,
                'MAX': 1,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'SHUTTER_VIRTUAL_RECEIVER.LEVEL'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTIVITY_STATE': {
                'MIN': 'UNKNOWN',
                'OPERATIONS': 5,
                'MAX': 'STABLE',
                'FLAGS': 1,
                'ID': 'ACTIVITY_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'UNKNOWN',
                'VALUE_LIST': [
                    'UNKNOWN',
                    'UP',
                    'DOWN',
                    'STABLE'
                ],
                'CONTROL': 'SHUTTER_VIRTUAL_RECEIVER.ACTIVITY_STATE'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FROLL.BLIND_WEEK_PROFILE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCK': {
                'MIN': 'MANU_MODE',
                'OPERATIONS': 2,
                'MAX': 'AUTO_MODE_WITHOUT_RESET',
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCK',
                'TYPE': 'ENUM',
                'DEFAULT': 'MANU_MODE',
                'VALUE_LIST': [
                    'MANU_MODE',
                    'AUTO_MODE_WITH_RESET',
                    'AUTO_MODE_WITHOUT_RESET'
                ],
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCK'
            },
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCKS'
            },
            'WEEK_PROGRAM_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.CHANNEL_LOCKS'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-SWDO.SHUTTER_CONTACT.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'STATE': {
                'MIN': 'CLOSED',
                'UNIT': '',
                'OPERATIONS': 5,
                'MAX': 'OPEN',
                'FLAGS': 1,
                'ID': 'STATE',
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'DEFAULT': 'CLOSED',
                'VALUE_LIST': [
                    'CLOSED',
                    'OPEN'
                ],
                'CONTROL': 'DOOR_SENSOR.STATE'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-SWDO.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SABOTAGE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'SABOTAGE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': 'V'
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PSM.MAINTENANCE.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ERROR_OVERHEAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PSM.KEY_TRANSCEIVER.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PSM.SWITCH_TRANSMITTER.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'SWITCH_TRANSMITTER.STATE'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PSM.SWITCH_VIRTUAL_RECEIVER.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'ON_TIME': {
                'MIN': 0,
                'UNIT': 's',
                'OPERATIONS': 2,
                'MAX': 8580000,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'SWITCH.STATE'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PSM.ENERGIE_METER_TRANSMITTER.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'VOLTAGE': {
                'MIN': 0,
                'UNIT': 'V',
                'OPERATIONS': 5,
                'MAX': 409.5,
                'FLAGS': 1,
                'ID': 'VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.VOLTAGE'
            },
            'POWER_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'POWER_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'ENERGY_COUNTER': {
                'MIN': 0,
                'UNIT': 'Wh',
                'OPERATIONS': 5,
                'MAX': 838859.1,
                'FLAGS': 1,
                'ID': 'ENERGY_COUNTER',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.ENERGY_COUNTER'
            },
            'CURRENT_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'CURRENT_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'FREQUENCY': {
                'MIN': 29.52,
                'UNIT': 'Hz',
                'OPERATIONS': 5,
                'MAX': 70.47,
                'FLAGS': 1,
                'ID': 'FREQUENCY',
                'TYPE': 'FLOAT',
                'DEFAULT': 50,
                'CONTROL': 'POWERMETER_PSM.FREQUENCY'
            },
            'ENERGY_COUNTER_OVERFLOW': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'ENERGY_COUNTER_OVERFLOW',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'POWERMETER_PSM.ENERGY_COUNTER_OVERFLOW'
            },
            'POWER': {
                'MIN': 0,
                'UNIT': 'W',
                'OPERATIONS': 5,
                'MAX': 163830,
                'FLAGS': 1,
                'ID': 'POWER',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.POWER'
            },
            'VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'CURRENT': {
                'MIN': 0,
                'UNIT': 'mA',
                'OPERATIONS': 5,
                'MAX': 65535,
                'FLAGS': 1,
                'ID': 'CURRENT',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.CURRENT'
            },
            'FREQUENCY_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'FREQUENCY_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PS.MAINTENANCE.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ERROR_OVERHEAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PS.KEY_TRANSCEIVER.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PS.SWITCH_TRANSMITTER.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'SWITCH_TRANSMITTER.STATE'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PS.SWITCH_VIRTUAL_RECEIVER.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'ON_TIME': {
                'MIN': 0,
                'UNIT': 's',
                'OPERATIONS': 2,
                'MAX': 8580000,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'SWITCH.STATE'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PS.SWITCH_WEEK_PROFILE.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCK': {
                'MIN': 'MANU_MODE',
                'OPERATIONS': 2,
                'MAX': 'AUTO_MODE_WITHOUT_RESET',
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCK',
                'TYPE': 'ENUM',
                'DEFAULT': 'MANU_MODE',
                'VALUE_LIST': [
                    'MANU_MODE',
                    'AUTO_MODE_WITH_RESET',
                    'AUTO_MODE_WITHOUT_RESET'
                ],
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCK'
            },
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCKS'
            },
            'WEEK_PROGRAM_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.CHANNEL_LOCKS'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SWD.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'ERROR_NON_FLAT_POSITIONING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'ERROR_NON_FLAT_POSITIONING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': 'V'
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'V'
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SWD.WATER_DETECTION_TRANSMITTER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ALARMSTATE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'ALARMSTATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'WATER_DETECTION_TRANSMITTER.ALARMSTATE'
            },
            'MOISTURE_DETECTED': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'MOISTURE_DETECTED',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'WATER_DETECTION_TRANSMITTER.MOISTURE_DETECTED'
            },
            'WATERLEVEL_DETECTED': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'WATERLEVEL_DETECTED',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'WATER_DETECTION_TRANSMITTER.WATERLEVEL_DETECTED'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-Sec3-B.MAINTENANCE.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-Sec3-B.KEY.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_CONT': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_CONT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG_RELEASE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_LONG_RELEASE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-TiS.MAINTENANCE.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-TiS.TILT_SENSOR.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'DOOR_SENSOR.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-Sec3.MAINTENANCE.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-Sec3.KEY.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_CONT': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_CONT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG_RELEASE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_LONG_RELEASE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1TPBU-FM.MAINTENANCE.13',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1TPBU-FM.DIMMER.13',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 10,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'ERROR_OVERHEAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 9,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_OVERLOAD': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERLOAD',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_REDUCED': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_REDUCED',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 11,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'DIMMER.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'LEVEL_REAL': {
                'CONTROL': 'DIMMER.LEVEL_REAL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL_REAL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'OLD_LEVEL': {
                'CONTROL': 'DIMMER.OLD_LEVEL',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'OLD_LEVEL',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'RAMP_STOP': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'RAMP_STOP',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 5,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'RAMP_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0.5,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 12,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1TPBU-FM.VIRTUAL_DIMMER.13',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 10,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'ERROR_OVERHEAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 9,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_OVERLOAD': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERLOAD',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_REDUCED': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_REDUCED',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 11,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'DIMMER.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'LEVEL_REAL': {
                'CONTROL': 'DIMMER.LEVEL_REAL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL_REAL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'OLD_LEVEL': {
                'CONTROL': 'DIMMER.OLD_LEVEL',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'OLD_LEVEL',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'RAMP_STOP': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'RAMP_STOP',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 5,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'RAMP_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0.5,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 12,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1PBU-FM.MAINTENANCE.9',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1PBU-FM.SWITCH.9',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-PB-2-WM55.MAINTENANCE.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-PB-2-WM55.KEY.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_CONT': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_CONT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG_RELEASE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_LONG_RELEASE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Bl1PBU-FM.MAINTENANCE.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Bl1PBU-FM.BLIND.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'BLIND.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'STOP': {
                'CONTROL': 'BLIND.STOP',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STOP',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-WDS100-C6-O.MAINTENANCE.10',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-WDS100-C6-O.WEATHER.10',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BRIGHTNESS': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BRIGHTNESS',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'HUMIDITY': {
                'AutoconfRoles': 'WEATHER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'HUMIDITY',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'INTEGER',
                'UNIT': '%'
            },
            'RAINING': {
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'RAINING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RAIN_COUNTER': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RAIN_COUNTER',
                'MAX': 9666.264999,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 'mm'
            },
            'SUNSHINEDURATION': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'SUNSHINEDURATION',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'TEMPERATURE': {
                'AutoconfRoles': 'WEATHER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'TEMPERATURE',
                'MAX': 80,
                'MIN': -40,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'WIND_DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'WIND_DIRECTION',
                'MAX': 355,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': 'degree'
            },
            'WIND_DIRECTION_RANGE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'WIND_DIRECTION_RANGE',
                'MAX': 67,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': 'degree'
            },
            'WIND_SPEED': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'WIND_SPEED',
                'MAX': 1638.299999,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'UNIT': 'km/h'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-WDS10-TH-O.MAINTENANCE.5',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-WDS10-TH-O.WEATHER.5',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'HUMIDITY': {
                'AutoconfRoles': 'WEATHER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'HUMIDITY',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'INTEGER',
                'UNIT': '%'
            },
            'TEMPERATURE': {
                'AutoconfRoles': 'WEATHER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'TEMPERATURE',
                'MAX': 80,
                'MIN': -40,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-MDIR-SM.MAINTENANCE.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ENTER_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'ENTER_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 7,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-MDIR-SM.MOTION_DETECTOR.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BRIGHTNESS': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BRIGHTNESS',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'MOTION': {
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'MOTION',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-Key.MAINTENANCE.7',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-Key.KEYMATIC.7',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'ERROR': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR',
                'MAX': 2,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    'CLUTCH_FAILURE',
                    'MOTOR_ABORTED'
                ]
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 7,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'OPEN': {
                'CONTROL': 'LOCK.OPEN',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'OPEN',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'RELOCK_DELAY': {
                'CONTROL': 'NONE',
                'DEFAULT': 111600,
                'FLAGS': 1,
                'ID': 'RELOCK_DELAY',
                'MAX': 65535,
                'MIN': 0,
                'OPERATIONS': 2,
                'SPECIAL': [
                    {
                        'ID': 'NOT_USED',
                        'VALUE': 111600
                    }
                ],
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'LOCK.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STATE_UNCERTAIN': {
                'CONTROL': 'LOCK.UNCERTAIN',
                'DEFAULT': true,
                'FLAGS': 1,
                'ID': 'STATE_UNCERTAIN',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-Key3-B.MAINTENANCE.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-Key3-B.KEY.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_CONT': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_CONT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG_RELEASE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_LONG_RELEASE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1-Pl-2.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1-Pl-2.SWITCH.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw4-DR.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw4-DR.SWITCH.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.ZEL STG RM FDK.MAINTENANCE.14',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.ZEL STG RM FDK.ROTARY_HANDLE_SENSOR.14',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ERROR': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR',
                'MAX': 7,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    'SABOTAGE'
                ]
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'RHS.STATE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': 2,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'CLOSED',
                    'TILTED',
                    'OPEN'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-RHS.MAINTENANCE.14',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-RHS.ROTARY_HANDLE_SENSOR.14',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ERROR': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR',
                'MAX': 7,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    'SABOTAGE'
                ]
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'RHS.STATE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': 2,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'CLOSED',
                    'TILTED',
                    'OPEN'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-PB-6-WM55.MAINTENANCE.7',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-PB-6-WM55.KEY.7',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_CONT': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_CONT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG_RELEASE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_LONG_RELEASE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-WDS30-OT2-SM.MAINTENANCE.5',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-WDS30-OT2-SM.WEATHER.5',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'TEMPERATURE': {
                'AutoconfRoles': 'WEATHER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'TEMPERATURE',
                'MAX': 150,
                'MIN': -150,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.MAINTENANCE.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.SWITCH.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.POWERMETER.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BOOT': {
                'CONTROL': 'POWERMETER.BOOT',
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'BOOT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'CURRENT': {
                'CONTROL': 'POWERMETER.CURRENT',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'CURRENT',
                'MAX': 65535,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': 'mA'
            },
            'ENERGY_COUNTER': {
                'CONTROL': 'POWERMETER.ENERGY_COUNTER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ENERGY_COUNTER',
                'MAX': 838860.699219,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': 'Wh'
            },
            'FREQUENCY': {
                'CONTROL': 'POWERMETER.FREQUENCY',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'FREQUENCY',
                'MAX': 51.27,
                'MIN': 48.72,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'UNIT': 'Hz'
            },
            'POWER': {
                'CONTROL': 'POWERMETER.POWER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'POWER',
                'MAX': 167772.149902,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 'W'
            },
            'VOLTAGE': {
                'CONTROL': 'POWERMETER.VOLTAGE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'VOLTAGE',
                'MAX': 6553.5,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 'V'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.CONDITION_POWER.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.CONDITION_CURRENT.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.CONDITION_VOLTAGE.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.CONDITION_FREQUENCY.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-RD-O.MAINTENANCE.21',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-RD-O.RAINDETECTOR.21',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'STATE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'DRY',
                    'RAIN'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-RD-O.RAINDETECTOR_HEAT.21',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-MDIR-O.MAINTENANCE.12',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ENTER_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'ENTER_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 9,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-MDIR-O.MOTION_DETECTOR.12',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BRIGHTNESS': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BRIGHTNESS',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'MOTION': {
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'MOTION',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-OU-CM-PCB.MAINTENANCE.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-OU-CM-PCB.SIGNAL_CHIME.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'SUBMIT': {
                'CONTROL': 'NONE',
                'DEFAULT': '',
                'FLAGS': 1,
                'ID': 'SUBMIT',
                'MAX': '',
                'MIN': '',
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'STRING',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-PB-2-FM.MAINTENANCE.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-PB-2-FM.KEY.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_CONT': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_CONT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG_RELEASE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_LONG_RELEASE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-2-PBU-FM.MAINTENANCE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-2-PBU-FM.KEY.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_CONT': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_CONT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG_RELEASE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_LONG_RELEASE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-RGBW-WM.MAINTENANCE.41',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-RGBW-WM.DIMMER.41',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 7,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'DIMMER.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'OLD_LEVEL': {
                'CONTROL': 'DIMMER.OLD_LEVEL',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'OLD_LEVEL',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'RAMP_STOP': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'RAMP_STOP',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'RAMP_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0.5,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-RGBW-WM.RGBW_COLOR.41',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ACT_BRIGHTNESS': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'ACT_BRIGHTNESS',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'ACT_BRIGHTNESS_STORE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'ACT_BRIGHTNESS_STORE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'ACT_HSV_COLOR_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'ACT_HSV_COLOR_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'ACT_HSV_COLOR_VALUE_STORE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'ACT_HSV_COLOR_VALUE_STORE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'COLOR': {
                'CONTROL': 'RGBW_COLOR.COLOR',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'COLOR',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'ON_TIME_STORE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'ON_TIME_STORE',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 8,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'RAMP_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0.5,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'RAMP_TIME_STORE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0.5,
                'FLAGS': 3,
                'ID': 'RAMP_TIME_STORE',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 9,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'USER_COLOR': {
                'CONTROL': 'NONE',
                'DEFAULT': '',
                'FLAGS': 1,
                'ID': 'USER_COLOR',
                'MAX': '',
                'MIN': '',
                'OPERATIONS': 2,
                'TAB_ORDER': 0,
                'TYPE': 'STRING',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-RGBW-WM.RGBW_AUTOMATIC.41',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ACT_BRIGHTNESS': {
                'CONTROL': 'RGBW_AUTOMATIC.BRIGHTNESS',
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'ACT_BRIGHTNESS',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'ACT_BRIGHTNESS_STORE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'ACT_BRIGHTNESS_STORE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'ACT_COLOR_PROGRAM_STORE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'ACT_COLOR_PROGRAM_STORE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'ACT_MAX_BOARDER': {
                'CONTROL': 'RGBW_AUTOMATIC.MAX_BOARDER',
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'ACT_MAX_BOARDER',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'ACT_MAX_BORDER_STORE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'ACT_MAX_BORDER_STORE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'ACT_MIN_BOARDER': {
                'CONTROL': 'RGBW_AUTOMATIC.MIN_BOARDER',
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'ACT_MIN_BOARDER',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'ACT_MIN_BORDER_STORE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'ACT_MIN_BORDER_STORE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 10,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'RGBW_AUTOMATIC.ON_TIME',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'ON_TIME_STORE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'ON_TIME_STORE',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 11,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'PROGRAM': {
                'CONTROL': 'RGBW_AUTOMATIC.PROGRAM',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'PROGRAM',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RAMP_TIME': {
                'CONTROL': 'RGBW_AUTOMATIC.RAMP_TIME',
                'DEFAULT': 0.5,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 3,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'RAMP_TIME_STORE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0.5,
                'FLAGS': 3,
                'ID': 'RAMP_TIME_STORE',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 12,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'USER_PROGRAM': {
                'CONTROL': 'NONE',
                'DEFAULT': '',
                'FLAGS': 1,
                'ID': 'USER_PROGRAM',
                'MAX': '',
                'MIN': '',
                'OPERATIONS': 2,
                'TAB_ORDER': 0,
                'TYPE': 'STRING',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-MDIR-WM55.MAINTENANCE.5',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-MDIR-WM55.KEY.5',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_CONT': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_CONT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG_RELEASE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_LONG_RELEASE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-MDIR-WM55.MOTION_DETECTOR.5',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BRIGHTNESS': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BRIGHTNESS',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'MOTION': {
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'MOTION',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-OU-CFM-TW.MAINTENANCE.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-OU-CFM-TW.SIGNAL_LED.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'SUBMIT': {
                'CONTROL': 'NONE',
                'DEFAULT': '',
                'FLAGS': 1,
                'ID': 'SUBMIT',
                'MAX': '',
                'MIN': '',
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'STRING',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-OU-CFM-TW.SIGNAL_CHIME.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'SUBMIT': {
                'CONTROL': 'NONE',
                'DEFAULT': '',
                'FLAGS': 1,
                'ID': 'SUBMIT',
                'MAX': '',
                'MIN': '',
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'STRING',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SD.MAINTENANCE.10',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SD.SMOKE_DETECTOR.10',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'DANGER.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Dis-EP-WM55.KEY.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_CONT': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_CONT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG_RELEASE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_LONG_RELEASE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Dis-EP-WM55.MAINTENANCE.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-WDS-2.MAINTENANCE.6',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-WDS-2.WATERDETECTIONSENSOR.6',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STATE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': 2,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'DRY',
                    'WET',
                    'WATER'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-MOD-EM-8Bit.MAINTENANCE.10',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-MOD-EM-8Bit.KEY.10',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_CONT': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_CONT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG_RELEASE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_LONG_RELEASE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-MOD-EM-8Bit.MOD_EM8BIT_TRANSMITTER.10',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'BATTERIE.LOWBAT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'DIGITAL_STATE.STATE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1-PCB.MAINTENANCE.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1-PCB.SWITCH.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-19.KEY.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'LEVEL': {
                'ID': 'LEVEL',
                'UNIT': '100%',
                'TAB_ORDER': 0,
                'OPERATIONS': 7,
                'FLAGS': 2,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 1,
                'DEFAULT': 0
            },
            'OLD_LEVEL': {
                'ID': 'OLD_LEVEL',
                'UNIT': '',
                'TAB_ORDER': 1,
                'OPERATIONS': 2,
                'FLAGS': 2,
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'STOP': {
                'ID': 'STOP',
                'UNIT': '',
                'TAB_ORDER': 2,
                'OPERATIONS': 6,
                'FLAGS': 2,
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'STATE': {
                'ID': 'STATE',
                'UNIT': '',
                'TAB_ORDER': 3,
                'OPERATIONS': 7,
                'FLAGS': 2,
                'TYPE': 'BOOL',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'PRESS_SHORT': {
                'ID': 'PRESS_SHORT',
                'UNIT': '',
                'TAB_ORDER': 4,
                'OPERATIONS': 6,
                'FLAGS': 1,
                'CONTROL': 'BUTTON.SHORT',
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'PRESS_LONG': {
                'ID': 'PRESS_LONG',
                'UNIT': '',
                'TAB_ORDER': 5,
                'OPERATIONS': 6,
                'FLAGS': 1,
                'CONTROL': 'BUTTON.LONG',
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'CMD_RUNS': {
                'ID': 'CMD_RUNS',
                'UNIT': '',
                'TAB_ORDER': 6,
                'OPERATIONS': 2,
                'FLAGS': 2,
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'CMD_RUNL': {
                'ID': 'CMD_RUNL',
                'UNIT': '',
                'TAB_ORDER': 7,
                'OPERATIONS': 2,
                'FLAGS': 2,
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'CMD_KILL': {
                'ID': 'CMD_KILL',
                'UNIT': '',
                'TAB_ORDER': 8,
                'OPERATIONS': 2,
                'FLAGS': 1,
                'TYPE': 'STRING',
                'MIN': '',
                'MAX': '',
                'DEFAULT': ''
            },
            'CMD_EXEC': {
                'ID': 'CMD_EXEC',
                'UNIT': '',
                'TAB_ORDER': 9,
                'OPERATIONS': 2,
                'FLAGS': 1,
                'TYPE': 'STRING',
                'MIN': '',
                'MAX': '',
                'DEFAULT': ''
            },
            'LOGIT': {
                'ID': 'LOGIT',
                'UNIT': '',
                'TAB_ORDER': 10,
                'OPERATIONS': 2,
                'FLAGS': 2,
                'TYPE': 'STRING',
                'MIN': '',
                'MAX': '',
                'DEFAULT': ''
            },
            'POSTIT': {
                'ID': 'POSTIT',
                'UNIT': '',
                'TAB_ORDER': 11,
                'OPERATIONS': 2,
                'FLAGS': 2,
                'TYPE': 'STRING',
                'MIN': '',
                'MAX': '',
                'DEFAULT': ''
            },
            'SYSLOG': {
                'ID': 'SYSLOG',
                'UNIT': '',
                'TAB_ORDER': 12,
                'OPERATIONS': 2,
                'FLAGS': 2,
                'TYPE': 'STRING',
                'MIN': '',
                'MAX': '',
                'DEFAULT': ''
            },
            'WRITE_FILE': {
                'ID': 'WRITE_FILE',
                'UNIT': '',
                'TAB_ORDER': 13,
                'OPERATIONS': 2,
                'FLAGS': 2,
                'TYPE': 'STRING',
                'MIN': '',
                'MAX': '',
                'DEFAULT': ''
            },
            'CMD_SETS': {
                'ID': 'CMD_SETS',
                'UNIT': '',
                'TAB_ORDER': 14,
                'OPERATIONS': 7,
                'FLAGS': 1,
                'TYPE': 'STRING',
                'MIN': '',
                'MAX': '',
                'DEFAULT': ''
            },
            'CMD_SETL': {
                'ID': 'CMD_SETL',
                'UNIT': '',
                'TAB_ORDER': 15,
                'OPERATIONS': 7,
                'FLAGS': 1,
                'TYPE': 'STRING',
                'MIN': '',
                'MAX': '',
                'DEFAULT': ''
            },
            'CMD_RETS': {
                'ID': 'CMD_RETS',
                'UNIT': '',
                'TAB_ORDER': 16,
                'OPERATIONS': 5,
                'FLAGS': 1,
                'TYPE': 'STRING',
                'MIN': '',
                'MAX': '',
                'DEFAULT': ''
            },
            'CMD_RETL': {
                'ID': 'CMD_RETL',
                'UNIT': '',
                'TAB_ORDER': 17,
                'OPERATIONS': 5,
                'FLAGS': 1,
                'TYPE': 'STRING',
                'MIN': '',
                'MAX': '',
                'DEFAULT': ''
            },
            'CMD_QUERY_RET': {
                'ID': 'CMD_QUERY_RET',
                'UNIT': '',
                'TAB_ORDER': 18,
                'OPERATIONS': 2,
                'FLAGS': 2,
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'WORKING': {
                'ID': 'WORKING',
                'UNIT': '',
                'TAB_ORDER': 19,
                'OPERATIONS': 5,
                'FLAGS': 1,
                'TYPE': 'BOOL',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'CONTROL': {
                'ID': 'CONTROL',
                'UNIT': '',
                'TAB_ORDER': 20,
                'OPERATIONS': 1,
                'FLAGS': 2,
                'TYPE': 'INTEGER',
                'MIN': 0,
                'MAX': 1,
                'DEFAULT': 0
            },
            'SET_STATE': {
                'ID': 'SET_STATE',
                'UNIT': '',
                'TAB_ORDER': 21,
                'OPERATIONS': 2,
                'FLAGS': 2,
                'TYPE': 'FLOAT',
                'MIN': 0,
                'MAX': 1,
                'DEFAULT': 0
            },
            'RAND': {
                'ID': 'RAND',
                'UNIT': '',
                'TAB_ORDER': 22,
                'OPERATIONS': 3,
                'FLAGS': 2,
                'TYPE': 'STRING',
                'MIN': '',
                'MAX': '',
                'DEFAULT': ''
            },
            'INHIBIT': {
                'ID': 'INHIBIT',
                'UNIT': '',
                'TAB_ORDER': 23,
                'OPERATIONS': 3,
                'FLAGS': 1,
                'TYPE': 'BOOL',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'ID': 'INSTALL_TEST',
                'UNIT': '',
                'TAB_ORDER': 24,
                'OPERATIONS': 3,
                'FLAGS': 3,
                'TYPE': 'ACTION',
                'MIN': false,
                'MAX': true,
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-WTH.MAINTENANCE.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-WTH.HEATING_CLIMATECONTROL_TRANSCEIVER.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BOOST_TIME': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 2048,
                'FLAGS': 1,
                'ID': 'BOOST_TIME',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'PARTY_MODE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PARTY_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_MODE'
            },
            'SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'UNIT': '°C',
                'OPERATIONS': 7,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT'
            },
            'HUMIDITY': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 100,
                'FLAGS': 1,
                'ID': 'HUMIDITY',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.HUMIDITY'
            },
            'PARTY_TIME_START': {
                'MIN': '2000_01_01 00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31 23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_START',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01 00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_START'
            },
            'CONTROL_MODE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'CONTROL_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.CONTROL_MODE'
            },
            'QUICK_VETO_TIME': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 2048,
                'FLAGS': 1,
                'ID': 'QUICK_VETO_TIME',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'FROST_PROTECTION': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'FROST_PROTECTION',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.FROST_PROTECTION'
            },
            'PARTY_SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'OPERATIONS': 5,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'PARTY_SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_SETPOINT_TEMP'
            },
            'SET_POINT_MODE': {
                'MIN': 0,
                'OPERATIONS': 7,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'SET_POINT_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT_MODE'
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'DURATION_UNIT': {
                'MIN': 'S',
                'OPERATIONS': 2,
                'MAX': 'H',
                'FLAGS': 1,
                'ID': 'DURATION_UNIT',
                'TYPE': 'ENUM',
                'DEFAULT': 'S',
                'VALUE_LIST': [
                    'S',
                    'M',
                    'H'
                ]
            },
            'SWITCH_POINT_OCCURED': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'SWITCH_POINT_OCCURED',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONTROL_DIFFERENTIAL_TEMPERATURE': {
                'MIN': -10,
                'OPERATIONS': 2,
                'MAX': 10,
                'FLAGS': 1,
                'ID': 'CONTROL_DIFFERENTIAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'ACTIVE_PROFILE': {
                'MIN': 1,
                'OPERATIONS': 7,
                'MAX': 6,
                'FLAGS': 1,
                'ID': 'ACTIVE_PROFILE',
                'TYPE': 'INTEGER',
                'DEFAULT': 1,
                'CONTROL': 'HEATING_CONTROL_HMIP.ACTIVE_PROFILE'
            },
            'WINDOW_STATE': {
                'MIN': 'CLOSED',
                'OPERATIONS': 7,
                'MAX': 'OPEN',
                'FLAGS': 1,
                'ID': 'WINDOW_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'CLOSED',
                'VALUE_LIST': [
                    'CLOSED',
                    'OPEN'
                ],
                'CONTROL': 'HEATING_CONTROL_HMIP.WINDOW_STATE'
            },
            'HUMIDITY_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'HUMIDITY_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'HEATING_COOLING': {
                'MIN': 'HEATING',
                'OPERATIONS': 7,
                'MAX': 'COOLING',
                'FLAGS': 1,
                'ID': 'HEATING_COOLING',
                'TYPE': 'ENUM',
                'DEFAULT': 'HEATING',
                'VALUE_LIST': [
                    'HEATING',
                    'COOLING'
                ]
            },
            'PARTY_TIME_END': {
                'MIN': '2000_01_01 00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31 23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_END',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01 00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_END'
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.TEMPERATURE'
            },
            'BOOST_MODE': {
                'MIN': false,
                'OPERATIONS': 6,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'BOOST_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.BOOST_MODE'
            },
            'DURATION_VALUE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16343,
                'FLAGS': 1,
                'ID': 'DURATION_VALUE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-eTRV-C.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SABOTAGE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'SABOTAGE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': 'V'
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-eTRV-C.HEATING_CLIMATECONTROL_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'VALVE_ADAPTION': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'VALVE_ADAPTION',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'BOOST_TIME': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 2048,
                'FLAGS': 1,
                'ID': 'BOOST_TIME',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'PARTY_MODE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PARTY_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_MODE'
            },
            'SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'UNIT': '°C',
                'OPERATIONS': 7,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT'
            },
            'LEVEL_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ]
            },
            'PARTY_TIME_START': {
                'MIN': '2000_01_01 00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31 23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_START',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01 00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_START'
            },
            'CONTROL_MODE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'CONTROL_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.CONTROL_MODE'
            },
            'QUICK_VETO_TIME': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 2048,
                'FLAGS': 1,
                'ID': 'QUICK_VETO_TIME',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'FROST_PROTECTION': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'FROST_PROTECTION',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.FROST_PROTECTION'
            },
            'PARTY_SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'OPERATIONS': 5,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'PARTY_SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_SETPOINT_TEMP'
            },
            'SET_POINT_MODE': {
                'MIN': 0,
                'OPERATIONS': 7,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'SET_POINT_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT_MODE'
            },
            'LEVEL': {
                'MIN': 0,
                'OPERATIONS': 7,
                'MAX': 1,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': '100%'
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'DURATION_UNIT': {
                'MIN': 'S',
                'OPERATIONS': 2,
                'MAX': 'H',
                'FLAGS': 1,
                'ID': 'DURATION_UNIT',
                'TYPE': 'ENUM',
                'DEFAULT': 'S',
                'VALUE_LIST': [
                    'S',
                    'M',
                    'H'
                ]
            },
            'SWITCH_POINT_OCCURED': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'SWITCH_POINT_OCCURED',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONTROL_DIFFERENTIAL_TEMPERATURE': {
                'MIN': -10,
                'OPERATIONS': 2,
                'MAX': 10,
                'FLAGS': 1,
                'ID': 'CONTROL_DIFFERENTIAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'VALVE_STATE': {
                'MIN': 'STATE_NOT_AVAILABLE',
                'OPERATIONS': 5,
                'MAX': 'ERROR_POSITION',
                'FLAGS': 1,
                'ID': 'VALVE_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'STATE_NOT_AVAILABLE',
                'VALUE_LIST': [
                    'STATE_NOT_AVAILABLE',
                    'RUN_TO_START',
                    'WAIT_FOR_ADAPTION',
                    'ADAPTION_IN_PROGRESS',
                    'ADAPTION_DONE',
                    'TOO_TIGHT',
                    'ADJUSTMENT_TOO_BIG',
                    'ADJUSTMENT_TOO_SMALL',
                    'ERROR_POSITION'
                ]
            },
            'ACTIVE_PROFILE': {
                'MIN': 1,
                'OPERATIONS': 7,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'ACTIVE_PROFILE',
                'TYPE': 'INTEGER',
                'DEFAULT': 1,
                'CONTROL': 'HEATING_CONTROL_HMIP.ACTIVE_PROFILE'
            },
            'WINDOW_STATE': {
                'MIN': 'CLOSED',
                'OPERATIONS': 7,
                'MAX': 'OPEN',
                'FLAGS': 1,
                'ID': 'WINDOW_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'CLOSED',
                'VALUE_LIST': [
                    'CLOSED',
                    'OPEN'
                ],
                'CONTROL': 'HEATING_CONTROL_HMIP.WINDOW_STATE'
            },
            'PARTY_TIME_END': {
                'MIN': '2000_01_01 00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31 23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_END',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01 00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_END'
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': '°C',
                'CONTROL': 'HEATING_CONTROL_HMIP.TEMPERATURE'
            },
            'BOOST_MODE': {
                'MIN': false,
                'OPERATIONS': 6,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'BOOST_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.BOOST_MODE'
            },
            'DURATION_VALUE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16343,
                'FLAGS': 1,
                'ID': 'DURATION_VALUE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-TC-IT-WM-W-EU.MAINTENANCE.10',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-TC-IT-WM-W-EU.WEATHER_TRANSMIT.10',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'HUMIDITY': {
                'AutoconfRoles': 'WEATHER',
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'HUMIDITY',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'INTEGER',
                'UNIT': '%'
            },
            'TEMPERATURE': {
                'AutoconfRoles': 'WEATHER',
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'TEMPERATURE',
                'MAX': 50,
                'MIN': -10,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.MAINTENANCE.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.SWITCH.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.POWERMETER.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BOOT': {
                'CONTROL': 'POWERMETER.BOOT',
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'BOOT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'CURRENT': {
                'CONTROL': 'POWERMETER.CURRENT',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'CURRENT',
                'MAX': 65535,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': 'mA'
            },
            'ENERGY_COUNTER': {
                'CONTROL': 'POWERMETER.ENERGY_COUNTER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ENERGY_COUNTER',
                'MAX': 838860.699219,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': 'Wh'
            },
            'FREQUENCY': {
                'CONTROL': 'POWERMETER.FREQUENCY',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'FREQUENCY',
                'MAX': 51.27,
                'MIN': 48.72,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'UNIT': 'Hz'
            },
            'POWER': {
                'CONTROL': 'POWERMETER.POWER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'POWER',
                'MAX': 167772.149902,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 'W'
            },
            'VOLTAGE': {
                'CONTROL': 'POWERMETER.VOLTAGE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'VOLTAGE',
                'MAX': 6553.5,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 'V'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.CONDITION_POWER.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.CONDITION_CURRENT.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.CONDITION_VOLTAGE.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-ES-PMSw1-Pl.CONDITION_FREQUENCY.8',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DECISION_VALUE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'DECISION_VALUE',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Bl1-FM.MAINTENANCE.13',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Bl1-FM.BLIND.13',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'BLIND.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'STOP': {
                'CONTROL': 'BLIND.STOP',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STOP',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-VG-1.MAINTENANCE.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'UNIT': '',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 5,
                'FLAGS': 1,
                'ID': 'CONFIG_PENDING',
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'DEFAULT': 'false'
            },
            'LOWBAT': {
                'UNIT': '',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 5,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'DEFAULT': '20.0'
            },
            'STICKY_UNREACH': {
                'UNIT': '',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 7,
                'FLAGS': 1,
                'ID': 'STICKY_UNREACH',
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'DEFAULT': '20.0'
            },
            'DEVICE_IN_BOOTLOADER': {
                'UNIT': '',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 5,
                'FLAGS': 1,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'DEFAULT': '20.0'
            },
            'UNREACH': {
                'UNIT': '',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 5,
                'FLAGS': 1,
                'ID': 'UNREACH',
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'DEFAULT': '20.0'
            },
            'RSSI_DEVICE': {
                'UNIT': '',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 5,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TAB_ORDER': 1,
                'TYPE': 'INTEGER',
                'DEFAULT': '20.0'
            },
            'AES_KEY': {
                'UNIT': '',
                'MIN': '0',
                'MAX': '127',
                'OPERATIONS': 1,
                'FLAGS': 1,
                'ID': 'AES_KEY',
                'TAB_ORDER': 2,
                'TYPE': 'INTEGER',
                'DEFAULT': '20.0'
            },
            'INHIBIT': {
                'UNIT': '',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 7,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'DEFAULT': '20.0',
                'CONTROL': 'NONE'
            },
            'RSSI_PEER': {
                'UNIT': '',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 5,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'DEFAULT': '20.0'
            },
            'UPDATE_PENDING': {
                'UNIT': '',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 5,
                'FLAGS': 1,
                'ID': 'UPDATE_PENDING',
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'DEFAULT': 'false'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-VG-1.CLIMATECONTROL_RT_TRANSCEIVER.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PARTY_START_DAY': {
                'UNIT': 'day',
                'MIN': '1',
                'MAX': '31',
                'OPERATIONS': 3,
                'FLAGS': 1,
                'ID': 'PARTY_START_DAY',
                'TAB_ORDER': 11,
                'TYPE': 'INTEGER',
                'DEFAULT': '1',
                'CONTROL': 'HEATING_CONTROL.PARTY_START_DAY'
            },
            'SET_TEMPERATURE': {
                'UNIT': '°C',
                'MIN': 4.5,
                'MAX': 30.5,
                'OPERATIONS': 7,
                'FLAGS': 1,
                'ID': 'SET_TEMPERATURE',
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'DEFAULT': 20.0,
                'CONTROL': 'HEATING_CONTROL.SETPOINT'
            },
            'COMFORT_MODE': {
                'UNIT': '',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 2,
                'FLAGS': 1,
                'ID': 'COMFORT_MODE',
                'TAB_ORDER': 7,
                'TYPE': 'ACTION',
                'DEFAULT': 'true',
                'CONTROL': 'HEATING_CONTROL.COMFORT'
            },
            'CONTROL_MODE': {
                'UNIT': '',
                'MIN': '0',
                'MAX': '3',
                'OPERATIONS': 5,
                'FLAGS': 1,
                'ID': 'CONTROL_MODE',
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'DEFAULT': '0',
                'CONTROL': 'HEATING_CONTROL.CONTROL_MODE',
                'VALUE_LIST': [
                    'AUTO-MODE',
                    'MANU-MODE',
                    'PARTY-MODE',
                    'BOOST-MODE'
                ]
            },
            'LOWERING_MODE': {
                'UNIT': '',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 2,
                'FLAGS': 1,
                'ID': 'LOWERING_MODE',
                'TAB_ORDER': 8,
                'TYPE': 'ACTION',
                'DEFAULT': 'true',
                'CONTROL': 'HEATING_CONTROL.LOWERING'
            },
            'PARTY_START_YEAR': {
                'UNIT': 'year',
                'MIN': '0',
                'MAX': '99',
                'OPERATIONS': 3,
                'FLAGS': 1,
                'ID': 'PARTY_START_YEAR',
                'TAB_ORDER': 13,
                'TYPE': 'INTEGER',
                'DEFAULT': '12',
                'CONTROL': 'HEATING_CONTROL.PARTY_START_YEAR'
            },
            'PARTY_STOP_YEAR': {
                'UNIT': 'year',
                'MIN': '0',
                'MAX': '99',
                'OPERATIONS': 3,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_YEAR',
                'TAB_ORDER': 17,
                'TYPE': 'INTEGER',
                'DEFAULT': '12',
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_YEAR'
            },
            'PARTY_MODE_SUBMIT': {
                'UNIT': '',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 2,
                'FLAGS': 1,
                'ID': 'PARTY_MODE_SUBMIT',
                'TAB_ORDER': 18,
                'TYPE': 'STRING',
                'DEFAULT': '',
                'CONTROL': 'NONE'
            },
            'AUTO_MODE': {
                'UNIT': '',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 2,
                'FLAGS': 1,
                'ID': 'AUTO_MODE',
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'DEFAULT': 'true',
                'CONTROL': 'HEATING_CONTROL.AUTO'
            },
            'ACTUAL_HUMIDITY': {
                'UNIT': '%',
                'MIN': 0.0,
                'MAX': 99.0,
                'OPERATIONS': 5,
                'FLAGS': 1,
                'ID': 'ACTUAL_HUMIDITY',
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'DEFAULT': '20.0',
                'CONTROL': 'THERMAL_CONTROL.HUMIDITY'
            },
            'MANU_MODE': {
                'UNIT': '°C',
                'MIN': '4.5',
                'MAX': '30.5',
                'OPERATIONS': 2,
                'FLAGS': 1,
                'ID': 'MANU_MODE',
                'TAB_ORDER': 6,
                'TYPE': 'FLOAT',
                'DEFAULT': '20.0',
                'CONTROL': 'HEATING_CONTROL.MANU'
            },
            'BOOST_MODE': {
                'UNIT': '',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 2,
                'FLAGS': 1,
                'ID': 'BOOST_MODE',
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'DEFAULT': 'true',
                'CONTROL': 'HEATING_CONTROL.BOOST'
            },
            'ACTUAL_TEMPERATURE': {
                'UNIT': '°C',
                'MIN': '-10.0',
                'MAX': '50.0',
                'OPERATIONS': 5,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TAB_ORDER': 5,
                'TYPE': 'FLOAT',
                'DEFAULT': '20.0',
                'CONTROL': 'HEATING_CONTROL.TEMPERATURE'
            },
            'PARTY_START_MONTH': {
                'UNIT': 'month',
                'MIN': '1',
                'MAX': '12',
                'OPERATIONS': 3,
                'FLAGS': 1,
                'ID': 'PARTY_START_MONTH',
                'TAB_ORDER': 12,
                'TYPE': 'INTEGER',
                'DEFAULT': '1',
                'CONTROL': 'HEATING_CONTROL.PARTY_START_MONTH'
            },
            'PARTY_STOP_TIME': {
                'UNIT': 'minutes',
                'MIN': '0',
                'MAX': '1410',
                'OPERATIONS': 3,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_TIME',
                'TAB_ORDER': 14,
                'TYPE': 'INTEGER',
                'DEFAULT': '0',
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_TIME'
            },
            'PARTY_STOP_DAY': {
                'UNIT': 'day',
                'MIN': '1',
                'MAX': '31',
                'OPERATIONS': 3,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_DAY',
                'TAB_ORDER': 15,
                'TYPE': 'INTEGER',
                'DEFAULT': '1',
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_DAY'
            },
            'PARTY_STOP_MONTH': {
                'UNIT': 'month',
                'MIN': '1',
                'MAX': '12',
                'OPERATIONS': 3,
                'FLAGS': 1,
                'ID': 'PARTY_STOP_MONTH',
                'TAB_ORDER': 16,
                'TYPE': 'INTEGER',
                'DEFAULT': '1',
                'CONTROL': 'HEATING_CONTROL.PARTY_STOP_MONTH'
            },
            'PARTY_TEMPERATURE': {
                'UNIT': '°C',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 3,
                'FLAGS': 1,
                'ID': 'PARTY_TEMPERATURE',
                'TAB_ORDER': 9,
                'TYPE': 'FLOAT',
                'DEFAULT': '20.0',
                'CONTROL': 'HEATING_CONTROL.PARTY_TEMP'
            },
            'PARTY_START_TIME': {
                'UNIT': 'minutes',
                'MIN': '0',
                'MAX': '1410',
                'OPERATIONS': 3,
                'FLAGS': 1,
                'ID': 'PARTY_START_TIME',
                'TAB_ORDER': 10,
                'TYPE': 'INTEGER',
                'DEFAULT': '0',
                'CONTROL': 'HEATING_CONTROL.PARTY_START_TIME'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-CC-VG-1.SHUTTER_CONTACT.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'STATE': {
                'UNIT': '',
                'MIN': '5.0',
                'MAX': '30.0',
                'OPERATIONS': 5,
                'FLAGS': 1,
                'ID': 'STATE',
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'DEFAULT': 'false',
                'CONTROL': 'DOOR_SENSOR.STATE'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-WRC2.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': 'V'
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-WRC2.KEY_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HB-UNI-Sen-WEA.MAINTENANCE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HB-UNI-Sen-WEA.WEATHER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AIR_PRESSURE': {
                'AutoconfRoles': 'WEATHER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'AIR_PRESSURE',
                'MAX': 1100,
                'MIN': 500,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 'hPa'
            },
            'GUST_SPEED': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'GUST_SPEED',
                'MAX': 3276.7,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 10,
                'TYPE': 'FLOAT',
                'UNIT': 'km/h'
            },
            'HUMIDITY': {
                'AutoconfRoles': 'WEATHER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'HUMIDITY',
                'MAX': 99,
                'MIN': 1,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'INTEGER',
                'UNIT': '%'
            },
            'LIGHTNING_COUNTER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LIGHTNING_COUNTER',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 12,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'LIGHTNING_DISTANCE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LIGHTNING_DISTANCE',
                'MAX': 45,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 13,
                'TYPE': 'INTEGER',
                'UNIT': 'km'
            },
            'LUX': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LUX',
                'MAX': 200000,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 'Lux'
            },
            'RAINING': {
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'RAINING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RAIN_COUNTER': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RAIN_COUNTER',
                'MAX': 32767,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'FLOAT',
                'UNIT': 'mm'
            },
            'RD_HEATING': {
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'RD_HEATING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'TEMPERATURE': {
                'AutoconfRoles': 'WEATHER',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'TEMPERATURE',
                'MAX': 120,
                'MIN': -50,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'UVINDEX': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'UVINDEX',
                'MAX': 11,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 11,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'WIND_DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'WIND_DIRECTION',
                'MAX': 355,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': 'degree'
            },
            'WIND_DIRECTION_RANGE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'WIND_DIRECTION_RANGE',
                'MAX': 67,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'UNIT': 'degree'
            },
            'WIND_SPEED': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'WIND_SPEED',
                'MAX': 1638.3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'FLOAT',
                'UNIT': 'km/h'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-eTRV.MAINTENANCE.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': 'V'
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-eTRV.HEATING_CLIMATECONTROL_TRANSCEIVER.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'VALVE_ADAPTION': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'VALVE_ADAPTION',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'BOOST_TIME': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 2048,
                'FLAGS': 1,
                'ID': 'BOOST_TIME',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'PARTY_MODE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PARTY_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_MODE'
            },
            'SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'UNIT': '°C',
                'OPERATIONS': 7,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT'
            },
            'LEVEL_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ]
            },
            'PARTY_TIME_START': {
                'MIN': '2000_01_01 00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31 23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_START',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01 00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_START'
            },
            'CONTROL_MODE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'CONTROL_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.CONTROL_MODE'
            },
            'QUICK_VETO_TIME': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 2048,
                'FLAGS': 1,
                'ID': 'QUICK_VETO_TIME',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'FROST_PROTECTION': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'FROST_PROTECTION',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.FROST_PROTECTION'
            },
            'PARTY_SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'OPERATIONS': 5,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'PARTY_SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_SETPOINT_TEMP'
            },
            'SET_POINT_MODE': {
                'MIN': 0,
                'OPERATIONS': 7,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'SET_POINT_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT_MODE'
            },
            'LEVEL': {
                'MIN': 0,
                'OPERATIONS': 7,
                'MAX': 1,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': '100%'
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'DURATION_UNIT': {
                'MIN': 'S',
                'OPERATIONS': 2,
                'MAX': 'H',
                'FLAGS': 1,
                'ID': 'DURATION_UNIT',
                'TYPE': 'ENUM',
                'DEFAULT': 'S',
                'VALUE_LIST': [
                    'S',
                    'M',
                    'H'
                ]
            },
            'SWITCH_POINT_OCCURED': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'SWITCH_POINT_OCCURED',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONTROL_DIFFERENTIAL_TEMPERATURE': {
                'MIN': -10,
                'OPERATIONS': 2,
                'MAX': 10,
                'FLAGS': 1,
                'ID': 'CONTROL_DIFFERENTIAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'VALVE_STATE': {
                'MIN': 'STATE_NOT_AVAILABLE',
                'OPERATIONS': 5,
                'MAX': 'ERROR_POSITION',
                'FLAGS': 1,
                'ID': 'VALVE_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'STATE_NOT_AVAILABLE',
                'VALUE_LIST': [
                    'STATE_NOT_AVAILABLE',
                    'RUN_TO_START',
                    'WAIT_FOR_ADAPTION',
                    'ADAPTION_IN_PROGRESS',
                    'ADAPTION_DONE',
                    'TOO_TIGHT',
                    'ADJUSTMENT_TOO_BIG',
                    'ADJUSTMENT_TOO_SMALL',
                    'ERROR_POSITION'
                ]
            },
            'ACTIVE_PROFILE': {
                'MIN': 1,
                'OPERATIONS': 7,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'ACTIVE_PROFILE',
                'TYPE': 'INTEGER',
                'DEFAULT': 1,
                'CONTROL': 'HEATING_CONTROL_HMIP.ACTIVE_PROFILE'
            },
            'WINDOW_STATE': {
                'MIN': 'CLOSED',
                'OPERATIONS': 7,
                'MAX': 'OPEN',
                'FLAGS': 1,
                'ID': 'WINDOW_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'CLOSED',
                'VALUE_LIST': [
                    'CLOSED',
                    'OPEN'
                ],
                'CONTROL': 'HEATING_CONTROL_HMIP.WINDOW_STATE'
            },
            'PARTY_TIME_END': {
                'MIN': '2000_01_01 00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31 23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_END',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01 00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_END'
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': '°C',
                'CONTROL': 'HEATING_CONTROL_HMIP.TEMPERATURE'
            },
            'BOOST_MODE': {
                'MIN': false,
                'OPERATIONS': 6,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'BOOST_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.BOOST_MODE'
            },
            'DURATION_VALUE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16343,
                'FLAGS': 1,
                'ID': 'DURATION_VALUE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-TC-IT-WM-W-EU.THERMALCONTROL_TRANSMIT.10',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ACTUAL_HUMIDITY': {
                'CONTROL': 'THERMAL_CONTROL.HUMIDITY',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ACTUAL_HUMIDITY',
                'MAX': 99,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'FLOAT',
                'UNIT': '%'
            },
            'ACTUAL_TEMPERATURE': {
                'CONTROL': 'HEATING_CONTROL.TEMPERATURE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'MAX': 50,
                'MIN': -10,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'AUTO_MODE': {
                'CONTROL': 'HEATING_CONTROL.AUTO',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'AUTO_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 9,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'BATTERY_STATE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BATTERY_STATE',
                'MAX': 4.6,
                'MIN': 1.5,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'UNIT': 'V'
            },
            'BOOST_MODE': {
                'CONTROL': 'HEATING_CONTROL.BOOST',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'BOOST_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 11,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'BOOST_STATE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BOOST_STATE',
                'MAX': 30,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': 'min'
            },
            'COMFORT_MODE': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'COMFORT_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 12,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'COMMUNICATION_REPORTING': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'COMMUNICATION_REPORTING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'CONTROL_MODE': {
                'CONTROL': 'HEATING_CONTROL.CONTROL_MODE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'CONTROL_MODE',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'AUTO-MODE',
                    'MANU-MODE',
                    'PARTY-MODE',
                    'BOOST-MODE'
                ]
            },
            'LOWBAT_REPORTING': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT_REPORTING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWERING_MODE': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWERING_MODE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 13,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'MANU_MODE': {
                'CONTROL': 'HEATING_CONTROL.MANU',
                'DEFAULT': 20,
                'FLAGS': 1,
                'ID': 'MANU_MODE',
                'MAX': 30.5,
                'MIN': 4.5,
                'OPERATIONS': 2,
                'TAB_ORDER': 10,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'SET_TEMPERATURE': {
                'CONTROL': 'HEATING_CONTROL.SETPOINT',
                'DEFAULT': 20,
                'FLAGS': 1,
                'ID': 'SET_TEMPERATURE',
                'MAX': 30,
                'MIN': 5,
                'OPERATIONS': 7,
                'TAB_ORDER': 8,
                'TYPE': 'FLOAT',
                'UNIT': '°C'
            },
            'WINDOW_OPEN_REPORTING': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'WINDOW_OPEN_REPORTING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SMI.MAINTENANCE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SABOTAGE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'SABOTAGE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SMI.MOTIONDETECTOR_TRANSCEIVER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'MOTION': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'MOTION',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.MOTION_DETECTION_STATE'
            },
            'RESET_MOTION': {
                'MIN': false,
                'OPERATIONS': 2,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'RESET_MOTION',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.RESET_MOTION'
            },
            'ILLUMINATION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 163830,
                'FLAGS': 1,
                'ID': 'ILLUMINATION',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.ILLUMINATION'
            },
            'ILLUMINATION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'ILLUMINATION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'MOTION_DETECTION_ACTIVE': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'MOTION_DETECTION_ACTIVE',
                'TYPE': 'BOOL',
                'DEFAULT': true,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.MOTION_DETECTION_ACTIVE'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-WRC6.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-WRC6.KEY_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FSM16.MAINTENANCE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ERROR_OVERHEAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FSM16.SWITCH_TRANSMITTER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'SWITCH_TRANSMITTER.STATE'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FSM16.SWITCH_VIRTUAL_RECEIVER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'ON_TIME': {
                'MIN': 0,
                'UNIT': 's',
                'OPERATIONS': 2,
                'MAX': 8580000,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'SWITCH.STATE'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FSM16.ENERGIE_METER_TRANSMITTER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'VOLTAGE': {
                'MIN': 0,
                'UNIT': 'V',
                'OPERATIONS': 5,
                'MAX': 409.5,
                'FLAGS': 1,
                'ID': 'VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.VOLTAGE'
            },
            'POWER_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'POWER_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'ENERGY_COUNTER': {
                'MIN': 0,
                'UNIT': 'Wh',
                'OPERATIONS': 5,
                'MAX': 838859.1,
                'FLAGS': 1,
                'ID': 'ENERGY_COUNTER',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.ENERGY_COUNTER'
            },
            'CURRENT_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'CURRENT_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'FREQUENCY': {
                'MIN': 29.52,
                'UNIT': 'Hz',
                'OPERATIONS': 5,
                'MAX': 70.47,
                'FLAGS': 1,
                'ID': 'FREQUENCY',
                'TYPE': 'FLOAT',
                'DEFAULT': 50,
                'CONTROL': 'POWERMETER_PSM.FREQUENCY'
            },
            'ENERGY_COUNTER_OVERFLOW': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'ENERGY_COUNTER_OVERFLOW',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'POWERMETER_PSM.ENERGY_COUNTER_OVERFLOW'
            },
            'POWER': {
                'MIN': 0,
                'UNIT': 'W',
                'OPERATIONS': 5,
                'MAX': 163830,
                'FLAGS': 1,
                'ID': 'POWER',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.POWER'
            },
            'VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'CURRENT': {
                'MIN': 0,
                'UNIT': 'mA',
                'OPERATIONS': 5,
                'MAX': 65535,
                'FLAGS': 1,
                'ID': 'CURRENT',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.CURRENT'
            },
            'FREQUENCY_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'FREQUENCY_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FSM16.SWITCH_WEEK_PROFILE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCK': {
                'MIN': 'MANU_MODE',
                'OPERATIONS': 2,
                'MAX': 'AUTO_MODE_WITHOUT_RESET',
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCK',
                'TYPE': 'ENUM',
                'DEFAULT': 'MANU_MODE',
                'VALUE_LIST': [
                    'MANU_MODE',
                    'AUTO_MODE_WITH_RESET',
                    'AUTO_MODE_WITHOUT_RESET'
                ],
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCK'
            },
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCKS'
            },
            'WEEK_PROGRAM_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.CHANNEL_LOCKS'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SAM.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'SENSOR_ERROR': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'SENSOR_ERROR',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SAM.ACCELERATION_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'MOTION': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'MOTION',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-RC8.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-RC8.KEY_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-STHO.CLIMATE_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'HUMIDITY': {
                'MIN': 0,
                'UNIT': '%',
                'OPERATIONS': 5,
                'MAX': 100,
                'FLAGS': 1,
                'ID': 'HUMIDITY',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'HUMIDITY_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'HUMIDITY_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'UNIT': '°C',
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FSM.MAINTENANCE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ERROR_OVERHEAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FSM.SWITCH_TRANSMITTER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'SWITCH_TRANSMITTER.STATE'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FSM.SWITCH_VIRTUAL_RECEIVER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'ON_TIME': {
                'MIN': 0,
                'UNIT': 's',
                'OPERATIONS': 2,
                'MAX': 8580000,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'SWITCH.STATE'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FSM.ENERGIE_METER_TRANSMITTER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'VOLTAGE': {
                'MIN': 0,
                'UNIT': 'V',
                'OPERATIONS': 5,
                'MAX': 409.5,
                'FLAGS': 1,
                'ID': 'VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.VOLTAGE'
            },
            'POWER_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'POWER_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'ENERGY_COUNTER': {
                'MIN': 0,
                'UNIT': 'Wh',
                'OPERATIONS': 5,
                'MAX': 838859.1,
                'FLAGS': 1,
                'ID': 'ENERGY_COUNTER',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.ENERGY_COUNTER'
            },
            'CURRENT_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'CURRENT_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'FREQUENCY': {
                'MIN': 29.52,
                'UNIT': 'Hz',
                'OPERATIONS': 5,
                'MAX': 70.47,
                'FLAGS': 1,
                'ID': 'FREQUENCY',
                'TYPE': 'FLOAT',
                'DEFAULT': 50,
                'CONTROL': 'POWERMETER_PSM.FREQUENCY'
            },
            'ENERGY_COUNTER_OVERFLOW': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'ENERGY_COUNTER_OVERFLOW',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'POWERMETER_PSM.ENERGY_COUNTER_OVERFLOW'
            },
            'POWER': {
                'MIN': 0,
                'UNIT': 'W',
                'OPERATIONS': 5,
                'MAX': 163830,
                'FLAGS': 1,
                'ID': 'POWER',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.POWER'
            },
            'VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'CURRENT': {
                'MIN': 0,
                'UNIT': 'mA',
                'OPERATIONS': 5,
                'MAX': 65535,
                'FLAGS': 1,
                'ID': 'CURRENT',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.CURRENT'
            },
            'FREQUENCY_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'FREQUENCY_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FSM.SWITCH_WEEK_PROFILE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCK': {
                'MIN': 'MANU_MODE',
                'OPERATIONS': 2,
                'MAX': 'AUTO_MODE_WITHOUT_RESET',
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCK',
                'TYPE': 'ENUM',
                'DEFAULT': 'MANU_MODE',
                'VALUE_LIST': [
                    'MANU_MODE',
                    'AUTO_MODE_WITH_RESET',
                    'AUTO_MODE_WITHOUT_RESET'
                ],
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCK'
            },
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCKS'
            },
            'WEEK_PROGRAM_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.CHANNEL_LOCKS'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-STHD.MAINTENANCE.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': 'V'
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-STHD.HEATING_CLIMATECONTROL_TRANSCEIVER.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BOOST_TIME': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 2048,
                'FLAGS': 1,
                'ID': 'BOOST_TIME',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'PARTY_MODE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PARTY_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_MODE'
            },
            'SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'UNIT': '°C',
                'OPERATIONS': 7,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT'
            },
            'HUMIDITY': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 100,
                'FLAGS': 1,
                'ID': 'HUMIDITY',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.HUMIDITY',
                'UNIT': '%'
            },
            'PARTY_TIME_START': {
                'MIN': '2000_01_01  00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31  23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_START',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01   00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_START'
            },
            'CONTROL_MODE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'CONTROL_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.CONTROL_MODE'
            },
            'QUICK_VETO_TIME': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 2048,
                'FLAGS': 1,
                'ID': 'QUICK_VETO_TIME',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'FROST_PROTECTION': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'FROST_PROTECTION',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.FROST_PROTECTION'
            },
            'PARTY_SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'OPERATIONS': 5,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'PARTY_SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_SETPOINT_TEMP'
            },
            'SET_POINT_MODE': {
                'MIN': 0,
                'OPERATIONS': 7,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'SET_POINT_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT_MODE'
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'DURATION_UNIT': {
                'MIN': 'S',
                'OPERATIONS': 2,
                'MAX': 'H',
                'FLAGS': 1,
                'ID': 'DURATION_UNIT',
                'TYPE': 'ENUM',
                'DEFAULT': 'S',
                'VALUE_LIST': [
                    'S',
                    'M',
                    'H'
                ]
            },
            'SWITCH_POINT_OCCURED': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'SWITCH_POINT_OCCURED',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONTROL_DIFFERENTIAL_TEMPERATURE': {
                'MIN': -10,
                'OPERATIONS': 2,
                'MAX': 10,
                'FLAGS': 1,
                'ID': 'CONTROL_DIFFERENTIAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'ACTIVE_PROFILE': {
                'MIN': 1,
                'OPERATIONS': 7,
                'MAX': 6,
                'FLAGS': 1,
                'ID': 'ACTIVE_PROFILE',
                'TYPE': 'INTEGER',
                'DEFAULT': 1,
                'CONTROL': 'HEATING_CONTROL_HMIP.ACTIVE_PROFILE'
            },
            'WINDOW_STATE': {
                'MIN': 'CLOSED',
                'OPERATIONS': 7,
                'MAX': 'OPEN',
                'FLAGS': 1,
                'ID': 'WINDOW_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'CLOSED',
                'VALUE_LIST': [
                    'CLOSED',
                    'OPEN'
                ],
                'CONTROL': 'HEATING_CONTROL_HMIP.WINDOW_STATE'
            },
            'HUMIDITY_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'HUMIDITY_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'HEATING_COOLING': {
                'MIN': 'HEATING',
                'OPERATIONS': 7,
                'MAX': 'COOLING',
                'FLAGS': 1,
                'ID': 'HEATING_COOLING',
                'TYPE': 'ENUM',
                'DEFAULT': 'HEATING',
                'VALUE_LIST': [
                    'HEATING',
                    'COOLING'
                ]
            },
            'PARTY_TIME_END': {
                'MIN': '2000_01_01  00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31  23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_END',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01   00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_END'
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.TEMPERATURE',
                'UNIT': '°C'
            },
            'BOOST_MODE': {
                'MIN': false,
                'OPERATIONS': 6,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'BOOST_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.BOOST_MODE'
            },
            'DURATION_VALUE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16343,
                'FLAGS': 1,
                'ID': 'DURATION_VALUE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SMI55.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': 'V'
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SMI55.KEY_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SMI55.MOTIONDETECTOR_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'MOTION': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'MOTION',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.MOTION_DETECTION_STATE'
            },
            'RESET_MOTION': {
                'MIN': false,
                'OPERATIONS': 2,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'RESET_MOTION',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.RESET_MOTION'
            },
            'ILLUMINATION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 163830,
                'FLAGS': 1,
                'ID': 'ILLUMINATION',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.ILLUMINATION'
            },
            'CURRENT_ILLUMINATION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 163830,
                'FLAGS': 1,
                'ID': 'CURRENT_ILLUMINATION',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'CURRENT_ILLUMINATION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'CURRENT_ILLUMINATION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'ILLUMINATION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'ILLUMINATION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'MOTION_DETECTION_ACTIVE': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'MOTION_DETECTION_ACTIVE',
                'TYPE': 'BOOL',
                'DEFAULT': true,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.MOTION_DETECTION_ACTIVE'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BDT.MAINTENANCE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ERROR_OVERHEAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'ERROR_UPDATE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'ERROR_UPDATE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'ERROR_OVERLOAD': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'ERROR_OVERLOAD',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BDT.KEY_TRANSCEIVER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BDT.DIMMER_TRANSMITTER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'LEVEL_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ]
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'LEVEL': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 1,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'DIMMER_REAL.LEVEL'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTIVITY_STATE': {
                'MIN': 'UNKNOWN',
                'OPERATIONS': 5,
                'MAX': 'STABLE',
                'FLAGS': 1,
                'ID': 'ACTIVITY_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'UNKNOWN',
                'VALUE_LIST': [
                    'UNKNOWN',
                    'UP',
                    'DOWN',
                    'STABLE'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BDT.DIMMER_VIRTUAL_RECEIVER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'LEVEL_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ]
            },
            'ON_TIME': {
                'MIN': 0,
                'UNIT': 's',
                'OPERATIONS': 2,
                'MAX': 8580000,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'RAMP_TIME': {
                'MIN': 0,
                'UNIT': 's',
                'OPERATIONS': 2,
                'MAX': 8580000,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'TYPE': 'FLOAT',
                'DEFAULT': 0.5
            },
            'LEVEL': {
                'MIN': 0,
                'UNIT': '100%',
                'OPERATIONS': 7,
                'MAX': 1,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'DIMMER.LEVEL'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTIVITY_STATE': {
                'MIN': 'UNKNOWN',
                'OPERATIONS': 5,
                'MAX': 'STABLE',
                'FLAGS': 1,
                'ID': 'ACTIVITY_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'UNKNOWN',
                'VALUE_LIST': [
                    'UNKNOWN',
                    'UP',
                    'DOWN',
                    'STABLE'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BDT.DIMMER_WEEK_PROFILE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCK': {
                'MIN': 'MANU_MODE',
                'OPERATIONS': 2,
                'MAX': 'AUTO_MODE_WITHOUT_RESET',
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCK',
                'TYPE': 'ENUM',
                'DEFAULT': 'MANU_MODE',
                'VALUE_LIST': [
                    'MANU_MODE',
                    'AUTO_MODE_WITH_RESET',
                    'AUTO_MODE_WITHOUT_RESET'
                ],
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCK'
            },
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCKS'
            },
            'WEEK_PROGRAM_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.CHANNEL_LOCKS'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FCI1.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FCI1.MULTI_MODE_INPUT_TRANSMITTER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'DOOR_SENSOR.STATE'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PSM.MAINTENANCE.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ERROR_OVERHEAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PSM.KEY_TRANSCEIVER.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PSM.SWITCH_TRANSMITTER.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'SWITCH_TRANSMITTER.STATE'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PSM.SWITCH_VIRTUAL_RECEIVER.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'ON_TIME': {
                'MIN': 0,
                'UNIT': 's',
                'OPERATIONS': 2,
                'MAX': 8580000,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'SWITCH.STATE'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PSM.ENERGIE_METER_TRANSMITTER.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'VOLTAGE': {
                'MIN': 0,
                'UNIT': 'V',
                'OPERATIONS': 5,
                'MAX': 409.5,
                'FLAGS': 1,
                'ID': 'VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.VOLTAGE'
            },
            'POWER_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'POWER_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'ENERGY_COUNTER': {
                'MIN': 0,
                'UNIT': 'Wh',
                'OPERATIONS': 5,
                'MAX': 838859.1,
                'FLAGS': 1,
                'ID': 'ENERGY_COUNTER',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.ENERGY_COUNTER'
            },
            'CURRENT_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'CURRENT_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'FREQUENCY': {
                'MIN': 29.52,
                'UNIT': 'Hz',
                'OPERATIONS': 5,
                'MAX': 70.47,
                'FLAGS': 1,
                'ID': 'FREQUENCY',
                'TYPE': 'FLOAT',
                'DEFAULT': 50,
                'CONTROL': 'POWERMETER_PSM.FREQUENCY'
            },
            'ENERGY_COUNTER_OVERFLOW': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'ENERGY_COUNTER_OVERFLOW',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'POWERMETER_PSM.ENERGY_COUNTER_OVERFLOW'
            },
            'POWER': {
                'MIN': 0,
                'UNIT': 'W',
                'OPERATIONS': 5,
                'MAX': 163830,
                'FLAGS': 1,
                'ID': 'POWER',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.POWER'
            },
            'VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'CURRENT': {
                'MIN': 0,
                'UNIT': 'mA',
                'OPERATIONS': 5,
                'MAX': 65535,
                'FLAGS': 1,
                'ID': 'CURRENT',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'POWERMETER_PSM.CURRENT'
            },
            'FREQUENCY_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'FREQUENCY_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HMIP-PSM.SWITCH_WEEK_PROFILE.4',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCK': {
                'MIN': 'MANU_MODE',
                'OPERATIONS': 2,
                'MAX': 'AUTO_MODE_WITHOUT_RESET',
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCK',
                'TYPE': 'ENUM',
                'DEFAULT': 'MANU_MODE',
                'VALUE_LIST': [
                    'MANU_MODE',
                    'AUTO_MODE_WITH_RESET',
                    'AUTO_MODE_WITHOUT_RESET'
                ],
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCK'
            },
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCKS'
            },
            'WEEK_PROGRAM_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.CHANNEL_LOCKS'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-RCV-50.KEY_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'MAX': true,
                'OPERATIONS': 6,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'MAX': true,
                'OPERATIONS': 6,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1T-DR.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1T-DR.DIMMER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 10,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'ERROR_OVERHEAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 9,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_OVERLOAD': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERLOAD',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_REDUCED': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_REDUCED',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 11,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'DIMMER.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'LEVEL_REAL': {
                'CONTROL': 'DIMMER.LEVEL_REAL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL_REAL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'OLD_LEVEL': {
                'CONTROL': 'DIMMER.OLD_LEVEL',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'OLD_LEVEL',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'RAMP_STOP': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'RAMP_STOP',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 5,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'RAMP_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0.5,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 12,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1T-DR.VIRTUAL_DIMMER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 10,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'ERROR_OVERHEAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 9,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_OVERLOAD': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERLOAD',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_REDUCED': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_REDUCED',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 11,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'DIMMER.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'LEVEL_REAL': {
                'CONTROL': 'DIMMER.LEVEL_REAL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL_REAL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'OLD_LEVEL': {
                'CONTROL': 'DIMMER.OLD_LEVEL',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'OLD_LEVEL',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'RAMP_STOP': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'RAMP_STOP',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 5,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'RAMP_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0.5,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'MAX': 85825945.5,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 12,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-HEATING.MAINTENANCE.65536',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SABOTAGE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'SABOTAGE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ERROR_OVERHEAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-HEATING.HEATING_CLIMATECONTROL_TRANSCEIVER.65536',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'VALVE_ADAPTION': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'VALVE_ADAPTION',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'PARTY_MODE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PARTY_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_MODE'
            },
            'LEVEL_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ]
            },
            'PARTY_TIME_START': {
                'MIN': '2000_01_01 00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31 23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_START',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01 00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_START'
            },
            'CONTROL_MODE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'CONTROL_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.CONTROL_MODE'
            },
            'QUICK_VETO_TIME': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 2048,
                'FLAGS': 1,
                'ID': 'QUICK_VETO_TIME',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'PARTY_SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'OPERATIONS': 5,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'PARTY_SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_SETPOINT_TEMP'
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'WINDOW_STATE': {
                'MIN': 'CLOSED',
                'OPERATIONS': 7,
                'MAX': 'OPEN',
                'FLAGS': 1,
                'ID': 'WINDOW_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'CLOSED',
                'VALUE_LIST': [
                    'CLOSED',
                    'OPEN'
                ],
                'CONTROL': 'HEATING_CONTROL_HMIP.WINDOW_STATE'
            },
            'HEATING_COOLING': {
                'MIN': 'HEATING',
                'OPERATIONS': 7,
                'MAX': 'COOLING',
                'FLAGS': 1,
                'ID': 'HEATING_COOLING',
                'TYPE': 'ENUM',
                'DEFAULT': 'HEATING',
                'VALUE_LIST': [
                    'HEATING',
                    'COOLING'
                ]
            },
            'HUMIDITY_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'HUMIDITY_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'BOOST_TIME': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 2048,
                'FLAGS': 1,
                'ID': 'BOOST_TIME',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'UNIT': '�C',
                'OPERATIONS': 7,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT'
            },
            'HUMIDITY': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 100,
                'FLAGS': 1,
                'ID': 'HUMIDITY',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.HUMIDITY'
            },
            'FROST_PROTECTION': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'FROST_PROTECTION',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.FROST_PROTECTION'
            },
            'SET_POINT_MODE': {
                'MIN': 0,
                'OPERATIONS': 7,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'SET_POINT_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT_MODE'
            },
            'LEVEL': {
                'MIN': 0,
                'OPERATIONS': 7,
                'MAX': 1.005,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'DURATION_UNIT': {
                'MIN': 'S',
                'OPERATIONS': 2,
                'MAX': 'H',
                'FLAGS': 1,
                'ID': 'DURATION_UNIT',
                'TYPE': 'ENUM',
                'DEFAULT': 'S',
                'VALUE_LIST': [
                    'S',
                    'M',
                    'H'
                ]
            },
            'SWITCH_POINT_OCCURED': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'SWITCH_POINT_OCCURED',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONTROL_DIFFERENTIAL_TEMPERATURE': {
                'MIN': -10,
                'OPERATIONS': 2,
                'MAX': 10,
                'FLAGS': 1,
                'ID': 'CONTROL_DIFFERENTIAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'VALVE_STATE': {
                'MIN': 'STATE_NOT_AVAILABLE',
                'OPERATIONS': 5,
                'MAX': 'ERROR_POSITION',
                'FLAGS': 9,
                'ID': 'VALVE_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'STATE_NOT_AVAILABLE',
                'VALUE_LIST': [
                    'STATE_NOT_AVAILABLE',
                    'RUN_TO_START',
                    'WAIT_FOR_ADAPTION',
                    'ADAPTION_IN_PROGRESS',
                    'ADAPTION_DONE',
                    'TOO_TIGHT',
                    'ADJUSTMENT_TOO_BIG',
                    'ADJUSTMENT_TOO_SMALL',
                    'ERROR_POSITION'
                ]
            },
            'ACTIVE_PROFILE': {
                'MIN': 1,
                'OPERATIONS': 7,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'ACTIVE_PROFILE',
                'TYPE': 'INTEGER',
                'DEFAULT': 1,
                'CONTROL': 'HEATING_CONTROL_HMIP.ACTIVE_PROFILE'
            },
            'PARTY_TIME_END': {
                'MIN': '2000_01_01 00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31 23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_END',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01 00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_END'
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.TEMPERATURE'
            },
            'BOOST_MODE': {
                'MIN': false,
                'OPERATIONS': 6,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'BOOST_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.BOOST_MODE'
            },
            'DURATION_VALUE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16343,
                'FLAGS': 1,
                'ID': 'DURATION_VALUE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-HEATING.ROTARY_HANDLE_TRANSCEIVER.65536',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'STATE': {
                'MIN': 'CLOSED',
                'OPERATIONS': 5,
                'MAX': 'OPEN',
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'CLOSED',
                'VALUE_LIST': [
                    'CLOSED',
                    'TILTED',
                    'OPEN'
                ],
                'CONTROL': 'RHS.STATE'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-HEATING.SWITCH_TRANSMITTER.65536',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'SWITCH_TRANSMITTER.STATE'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SRH.MAINTENANCE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SABOTAGE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'SABOTAGE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'D UTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'O PERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SRH.ROTARY_HANDLE_TRANSCEIVER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'STATE': {
                'MIN': 'CLOSED',
                'OPERATIONS': 5,
                'MAX': 'OPEN',
                'FLAGS': 1,
                'ID ': 'STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'CLOSED',
                'VALUE_LIST': [
                    'CLOSED',
                    'TILTED',
                    'OPEN'
                ],
                'CONTROL': 'RHS.STATE'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BROLL.MAINTENANCE.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ERROR_OVERHEAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': '°C'
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BROLL.KEY_TRANSCEIVER.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BROLL.SHUTTER_TRANSMITTER.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'LEVEL_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ],
                'CONTROL': 'SHUTTER_TRANSMITTER.LEVEL_STATUS'
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'LEVEL': {
                'MIN': 0,
                'UNIT': '100%',
                'OPERATIONS': 5,
                'MAX': 1,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'SHUTTER_TRANSMITTER.LEVEL'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTIVITY_STATE': {
                'MIN': 'UNKNOWN',
                'OPERATIONS': 5,
                'MAX': 'STABLE',
                'FLAGS': 1,
                'ID': 'ACTIVITY_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'UNKNOWN',
                'VALUE_LIST': [
                    'UNKNOWN',
                    'UP',
                    'DOWN',
                    'STABLE'
                ],
                'CONTROL': 'SHUTTER_TRANSMITTER.ACTIVITY_STATE'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BROLL.SHUTTER_VIRTUAL_RECEIVER.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'LEVEL_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ],
                'CONTROL': 'SHUTTER_VIRTUAL_RECEIVER.LEVEL'
            },
            'STOP': {
                'MIN': false,
                'OPERATIONS': 2,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STOP',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'SHUTTER_VIRTUAL_RECEIVER.STOP'
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'LEVEL': {
                'MIN': 0,
                'UNIT': '100%',
                'OPERATIONS': 7,
                'MAX': 1,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'SHUTTER_VIRTUAL_RECEIVER.LEVEL'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTIVITY_STATE': {
                'MIN': 'UNKNOWN',
                'OPERATIONS': 5,
                'MAX': 'STABLE',
                'FLAGS': 1,
                'ID': 'ACTIVITY_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'UNKNOWN',
                'VALUE_LIST': [
                    'UNKNOWN',
                    'UP',
                    'DOWN',
                    'STABLE'
                ],
                'CONTROL': 'SHUTTER_VIRTUAL_RECEIVER.ACTIVITY_STATE'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-BROLL.BLIND_WEEK_PROFILE.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCK': {
                'MIN': 'MANU_MODE',
                'OPERATIONS': 2,
                'MAX': 'AUTO_MODE_WITHOUT_RESET',
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCK',
                'TYPE': 'ENUM',
                'DEFAULT': 'MANU_MODE',
                'VALUE_LIST': [
                    'MANU_MODE',
                    'AUTO_MODE_WITH_RESET',
                    'AUTO_MODE_WITHOUT_RESET'
                ],
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCK'
            },
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCKS'
            },
            'WEEK_PROGRAM_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.CHANNEL_LOCKS'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-eTRV-2.HEATING_CLIMATECONTROL_TRANSCEIVER.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'VALVE_ADAPTION': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'VALVE_ADAPTION',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'BOOST_TIME': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 2048,
                'FLAGS': 1,
                'ID': 'BOOST_TIME',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'PARTY_MODE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PARTY_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_MODE'
            },
            'SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'UNIT': '°C',
                'OPERATIONS': 7,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT'
            },
            'LEVEL_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ]
            },
            'PARTY_TIME_START': {
                'MIN': '2000_01_01 00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31 23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_START',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01 00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_START'
            },
            'CONTROL_MODE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'CONTROL_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.CONTROL_MODE'
            },
            'FROST_PROTECTION': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'FROST_PROTECTION',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.FROST_PROTECTION'
            },
            'PARTY_SET_POINT_TEMPERATURE': {
                'MIN': 4.5,
                'OPERATIONS': 5,
                'MAX': 30.5,
                'FLAGS': 1,
                'ID': 'PARTY_SET_POINT_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 4.5,
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_SETPOINT_TEMP'
            },
            'SET_POINT_MODE': {
                'MIN': 0,
                'OPERATIONS': 7,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'SET_POINT_MODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'HEATING_CONTROL_HMIP.SETPOINT_MODE'
            },
            'LEVEL': {
                'MIN': 0,
                'OPERATIONS': 7,
                'MAX': 1,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': '100%'
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'DURATION_UNIT': {
                'MIN': 'S',
                'OPERATIONS': 2,
                'MAX': 'H',
                'FLAGS': 1,
                'ID': 'DURATION_UNIT',
                'TYPE': 'ENUM',
                'DEFAULT': 'S',
                'VALUE_LIST': [
                    'S',
                    'M',
                    'H'
                ]
            },
            'SWITCH_POINT_OCCURED': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'SWITCH_POINT_OCCURED',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONTROL_DIFFERENTIAL_TEMPERATURE': {
                'MIN': -10,
                'OPERATIONS': 2,
                'MAX': 10,
                'FLAGS': 1,
                'ID': 'CONTROL_DIFFERENTIAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'VALVE_STATE': {
                'MIN': 'STATE_NOT_AVAILABLE',
                'OPERATIONS': 5,
                'MAX': 'ERROR_POSITION',
                'FLAGS': 1,
                'ID': 'VALVE_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'STATE_NOT_AVAILABLE',
                'VALUE_LIST': [
                    'STATE_NOT_AVAILABLE',
                    'RUN_TO_START',
                    'WAIT_FOR_ADAPTION',
                    'ADAPTION_IN_PROGRESS',
                    'ADAPTION_DONE',
                    'TOO_TIGHT',
                    'ADJUSTMENT_TOO_BIG',
                    'ADJUSTMENT_TOO_SMALL',
                    'ERROR_POSITION'
                ]
            },
            'ACTIVE_PROFILE': {
                'MIN': 1,
                'OPERATIONS': 7,
                'MAX': 3,
                'FLAGS': 1,
                'ID': 'ACTIVE_PROFILE',
                'TYPE': 'INTEGER',
                'DEFAULT': 1,
                'CONTROL': 'HEATING_CONTROL_HMIP.ACTIVE_PROFILE'
            },
            'WINDOW_STATE': {
                'MIN': 'CLOSED',
                'OPERATIONS': 7,
                'MAX': 'OPEN',
                'FLAGS': 1,
                'ID': 'WINDOW_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'CLOSED',
                'VALUE_LIST': [
                    'CLOSED',
                    'OPEN'
                ],
                'CONTROL': 'HEATING_CONTROL_HMIP.WINDOW_STATE'
            },
            'PARTY_TIME_END': {
                'MIN': '2000_01_01 00:00',
                'OPERATIONS': 7,
                'MAX': '2255_12_31 23:55',
                'FLAGS': 1,
                'ID': 'PARTY_TIME_END',
                'TYPE': 'STRING',
                'DEFAULT': '2000_01_01 00:00',
                'CONTROL': 'HEATING_CONTROL_HMIP.PARTY_TIME_END'
            },
            'ACTUAL_TEMPERATURE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'MAX': 50,
                'MIN': -10,
                'OPERATIONS': 5,
                'TYPE': 'FLOAT',
                'UNIT': '°C',
                'CONTROL': 'HEATING_CONTROL_HMIP.TEMPERATURE'
            },
            'BOOST_MODE': {
                'MIN': false,
                'OPERATIONS': 6,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'BOOST_MODE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'HEATING_CONTROL_HMIP.BOOST_MODE'
            },
            'DURATION_VALUE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16343,
                'FLAGS': 1,
                'ID': 'DURATION_VALUE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-eTRV-2.MAINTENANCE.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'UNIT': 'V'
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'UNIT': 'dBm'
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SLO.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SLO.BRIGHTNESS_TRANSMITTER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'HIGHEST_ILLUMINATION': {
                'MIN': 0,
                'UNIT': 'Lux',
                'OPERATIONS': 5,
                'MAX': 163830,
                'FLAGS': 1,
                'ID': 'HIGHEST_ILLUMINATION',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'BRIGHTNESS_TRANSMITTER.HIGHEST_ILLUMINATION'
            },
            'LOWEST_ILLUMINATION': {
                'MIN': 0,
                'UNIT': 'Lux',
                'OPERATIONS': 5,
                'MAX': 163830,
                'FLAGS': 1,
                'ID': 'LOWEST_ILLUMINATION',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'BRIGHTNESS_TRANSMITTER.LOWEST_ILLUMINATION'
            },
            'AVERAGE_ILLUMINATION': {
                'MIN': 0,
                'UNIT': 'Lux',
                'OPERATIONS': 5,
                'MAX': 163830,
                'FLAGS': 1,
                'ID': 'AVERAGE_ILLUMINATION',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'BRIGHTNESS_TRANSMITTER.AVERAGE_ILLUMINATION'
            },
            'HIGHEST_ILLUMINATION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'HIGHEST_ILLUMINATION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'CURRENT_ILLUMINATION': {
                'MIN': 0,
                'UNIT': 'Lux',
                'OPERATIONS': 5,
                'MAX': 163830,
                'FLAGS': 1,
                'ID': 'CURRENT_ILLUMINATION',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'BRIGHTNESS_TRANSMITTER.CURRENT_ILLUMINATION'
            },
            'LOWEST_ILLUMINATION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'LOWEST_ILLUMINATION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'CURRENT_ILLUMINATION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'CURRENT_ILLUMINATION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'AVERAGE_ILLUMINATION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'AVERAGE_ILLUMINATION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HB-UNI-Sen-CAP-MOIST.MAINTENANCE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HB-UNI-Sen-CAP-MOIST.WEATHER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'OPERATING_VOLTAGE': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'MAX': 25.5,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': ' V'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-ASIR-O.ALARM_SWITCH_VIRTUAL_RECEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ACOUSTIC_ALARM_ACTIVE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'ACOUSTIC_ALARM_ACTIVE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ACOUSTIC_ALARM_SELECTION': {
                'MIN': 'DISABLE_ACOUSTIC_SIGNAL',
                'OPERATIONS': 2,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'ACOUSTIC_ALARM_SELECTION',
                'TYPE': 'ENUM',
                'DEFAULT': 'DISABLE_ACOUSTIC_SIGNAL',
                'VALUE_LIST': [
                    'DISABLE_ACOUSTIC_SIGNAL',
                    'FREQUENCY_RISING',
                    'FREQUENCY_FALLING',
                    'FREQUENCY_RISING_AND_FALLING',
                    'FREQUENCY_ALTERNATING_LOW_HIGH',
                    'FREQUENCY_ALTERNATING_LOW_MID_HIGH',
                    'FREQUENCY_HIGHON_OFF',
                    'FREQUENCY_HIGHON_LONGOFF',
                    'FREQUENCY_LOWON_OFF_HIGHON_OFF',
                    'FREQUENCY_LOWON_LONGOFF_HIGHON_LONGOFF',
                    'LOW_BATTERY',
                    'DISARMED',
                    'INTERNALLY_ARMED',
                    'EXTERNALLY_ARMED',
                    'DELAYED_INTERNALLY_ARMED',
                    'DELAYED_EXTERNALLY_ARMED',
                    'EVENT',
                    'ERROR'
                ],
                'CONTROL': 'ALARM_SWITCH_VIRTUAL_RECEIVER.ACOUSTIC_ALARM_SELECTION'
            },
            'OPTICAL_ALARM_SELECTION': {
                'MIN': 'DISABLE_OPTICAL_SIGNAL',
                'OPERATIONS': 2,
                'MAX': 'CONFIRMATION_SIGNAL_2',
                'FLAGS': 1,
                'ID': 'OPTICAL_ALARM_SELECTION',
                'TYPE': 'ENUM',
                'DEFAULT': 'DISABLE_OPTICAL_SIGNAL',
                'VALUE_LIST': [
                    'DISABLE_OPTICAL_SIGNAL',
                    'BLINKING_ALTERNATELY_REPEATING',
                    'BLINKING_BOTH_REPEATING',
                    'DOUBLE_FLASHING_REPEATING',
                    'FLASHING_BOTH_REPEATING',
                    'CONFIRMATION_SIGNAL_0',
                    'CONFIRMATION_SIGNAL_1',
                    'CONFIRMATION_SIGNAL_2'
                ],
                'CONTROL': 'ALARM_SWITCH_VIRTUAL_RECEIVER.OPTICAL_ALARM_SELECTION'
            },
            'DURATION_UNIT': {
                'MIN': 'S',
                'OPERATIONS': 2,
                'MAX': 'H',
                'FLAGS': 1,
                'ID': 'DURATION_UNIT',
                'TYPE': 'ENUM',
                'DEFAULT': 'S',
                'VALUE_LIST': [
                    'S',
                    'M',
                    'H'
                ],
                'CONTROL': 'ALARM_SWITCH_VIRTUAL_RECEIVER.DURATION_UNIT'
            },
            'OPTICAL_ALARM_ACTIVE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'OPTICAL_ALARM_ACTIVE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DURATION_VALUE': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16343,
                'FLAGS': 1,
                'ID': 'DURATION_VALUE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'ALARM_SWITCH_VIRTUAL_RECEIVER.DURATION_VALUE'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-DBB.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-DBB.KEY_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FBL.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ERROR_OVERHEAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'ACTUAL_TEMPERATURE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNDERFLOW',
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW'
                ]
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FBL.KEY_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FBL.BLIND_TRANSMITTER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'LEVEL_2_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_2_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ],
                'CONTROL': 'BLIND_TRANSMITTER.LEVEL_2_STATUS'
            },
            'LEVEL_2': {
                'MIN': 0,
                'UNIT': '100%',
                'OPERATIONS': 5,
                'MAX': 1.01,
                'FLAGS': 1,
                'ID': 'LEVEL_2',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'BLIND_TRANSMITTER.LEVEL_2'
            },
            'LEVEL_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ],
                'CONTROL': 'BLIND_TRANSMITTER.LEVEL_STATUS'
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'LEVEL': {
                'MIN': 0,
                'UNIT': '100%',
                'OPERATIONS': 5,
                'MAX': 1.01,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'BLIND_TRANSMITTER.LEVEL'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTIVITY_STATE': {
                'MIN': 'UNKNOWN',
                'OPERATIONS': 5,
                'MAX': 'STABLE',
                'FLAGS': 1,
                'ID': 'ACTIVITY_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'UNKNOWN',
                'VALUE_LIST': [
                    'UNKNOWN',
                    'UP',
                    'DOWN',
                    'STABLE'
                ],
                'CONTROL': 'BLIND_TRANSMITTER.ACTIVITY_STATE'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FBL.BLIND_VIRTUAL_RECEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'LEVEL_2_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_2_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ],
                'CONTROL': 'BLIND_VIRTUAL_RECEIVER.LEVEL_2_STATUS'
            },
            'LEVEL_2': {
                'MIN': 0,
                'UNIT': '100%',
                'OPERATIONS': 7,
                'MAX': 1.01,
                'FLAGS': 1,
                'ID': 'LEVEL_2',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'BLIND_VIRTUAL_RECEIVER.LEVEL_2'
            },
            'LEVEL_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'ERROR',
                'FLAGS': 1,
                'ID': 'LEVEL_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW',
                    'UNDERFLOW',
                    'ERROR'
                ],
                'CONTROL': 'BLIND_VIRTUAL_RECEIVER.LEVEL_STATUS'
            },
            'STOP': {
                'MIN': false,
                'OPERATIONS': 2,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STOP',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BLIND_VIRTUAL_RECEIVER.STOP'
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'LEVEL': {
                'MIN': 0,
                'UNIT': '100%',
                'OPERATIONS': 7,
                'MAX': 1.01,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'BLIND_VIRTUAL_RECEIVER.LEVEL'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTIVITY_STATE': {
                'MIN': 'UNKNOWN',
                'OPERATIONS': 5,
                'MAX': 'STABLE',
                'FLAGS': 1,
                'ID': 'ACTIVITY_STATE',
                'TYPE': 'ENUM',
                'DEFAULT': 'UNKNOWN',
                'VALUE_LIST': [
                    'UNKNOWN',
                    'UP',
                    'DOWN',
                    'STABLE'
                ],
                'CONTROL': 'BLIND_VIRTUAL_RECEIVER.ACTIVITY_STATE'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-FBL.BLIND_WEEK_PROFILE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCK': {
                'MIN': 'MANU_MODE',
                'OPERATIONS': 2,
                'MAX': 'AUTO_MODE_WITHOUT_RESET',
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCK',
                'TYPE': 'ENUM',
                'DEFAULT': 'MANU_MODE',
                'VALUE_LIST': [
                    'MANU_MODE',
                    'AUTO_MODE_WITH_RESET',
                    'AUTO_MODE_WITHOUT_RESET'
                ],
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCK'
            },
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCKS'
            },
            'WEEK_PROGRAM_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.CHANNEL_LOCKS'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1T-FM.DIMMER.21',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 9,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'ERROR_OVERHEAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_OVERLOAD': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERLOAD',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_REDUCED': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_REDUCED',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 10,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'DIMMER.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'OLD_LEVEL': {
                'CONTROL': 'DIMMER.OLD_LEVEL',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'OLD_LEVEL',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'RAMP_STOP': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'RAMP_STOP',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'RAMP_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0.5,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 11,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1T-FM.MAINTENANCE.21',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-LI-O.LUXMETER.5',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'LUX': {
                'CONTROL': 'LUXMETER.LUX',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LUX',
                'MAX': 200000,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': 'Lux'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sen-LI-O.MAINTENANCE.5',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw2PBU-FM.SWITCH.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw2PBU-FM.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 9,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SC-2.SHUTTER_CONTACT.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'ERROR': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR',
                'MAX': 7,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 1,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    'SABOTAGE'
                ]
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'STATE': {
                'CONTROL': 'DOOR_SENSOR.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-SC-2.MAINTENANCE.16',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-MDIR-2.MOTION_DETECTOR.13',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'BRIGHTNESS': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'BRIGHTNESS',
                'MAX': 255,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'ERROR': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 9,
                'ID': 'ERROR',
                'MAX': 7,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NO_ERROR',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    'SABOTAGE'
                ]
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'MOTION': {
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'MOTION',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-Sec-MDIR-2.MAINTENANCE.13',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ENTER_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'ENTER_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 9,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw2-FM.SWITCH.26',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw2-FM.MAINTENANCE.26',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1-FM.SWITCH.26',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'STATE': {
                'CONTROL': 'SWITCH.STATE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'STATE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Sw1-FM.MAINTENANCE.26',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'LOWBAT': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'LOWBAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1PWM-CV.VIRTUAL_DIMMER.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 9,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'ERROR_OVERHEAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_REDUCED': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_REDUCED',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 10,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'DIMMER.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'LEVEL_REAL': {
                'CONTROL': 'DIMMER.LEVEL_REAL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL_REAL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'OLD_LEVEL': {
                'CONTROL': 'DIMMER.OLD_LEVEL',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'OLD_LEVEL',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'RAMP_STOP': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'RAMP_STOP',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 5,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'RAMP_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0.5,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 11,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1PWM-CV.DIMMER.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'DIRECTION': {
                'DEFAULT': 0,
                'FLAGS': 3,
                'ID': 'DIRECTION',
                'MAX': 3,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 9,
                'TYPE': 'ENUM',
                'UNIT': '',
                'VALUE_LIST': [
                    'NONE',
                    'UP',
                    'DOWN',
                    'UNDEFINED'
                ]
            },
            'ERROR_OVERHEAT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 8,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'ERROR_REDUCED': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'ERROR_REDUCED',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INHIBIT': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'INHIBIT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 10,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'LEVEL': {
                'CONTROL': 'DIMMER.LEVEL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 7,
                'TAB_ORDER': 0,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'LEVEL_REAL': {
                'CONTROL': 'DIMMER.LEVEL_REAL',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'LEVEL_REAL',
                'MAX': 1,
                'MIN': 0,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'FLOAT',
                'UNIT': '100%'
            },
            'OLD_LEVEL': {
                'CONTROL': 'DIMMER.OLD_LEVEL',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'OLD_LEVEL',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'ON_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 4,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'RAMP_STOP': {
                'CONTROL': 'NONE',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'RAMP_STOP',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 2,
                'TAB_ORDER': 5,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'RAMP_TIME': {
                'CONTROL': 'NONE',
                'DEFAULT': 0.5,
                'FLAGS': 1,
                'ID': 'RAMP_TIME',
                'MAX': 85825945.6,
                'MIN': 0,
                'OPERATIONS': 2,
                'TAB_ORDER': 3,
                'TYPE': 'FLOAT',
                'UNIT': 's'
            },
            'WORKING': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'WORKING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 11,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-LC-Dim1PWM-CV.MAINTENANCE.11',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 8,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DUTYCYCLE': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DUTYCYCLE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 7,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-2-PBU-FM.KEY.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'INSTALL_TEST': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'INSTALL_TEST',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 2,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_CONT': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_CONT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 3,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG': {
                'CONTROL': 'BUTTON.LONG',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 1,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_LONG_RELEASE': {
                'DEFAULT': false,
                'FLAGS': 3,
                'ID': 'PRESS_LONG_RELEASE',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 4,
                'TAB_ORDER': 4,
                'TYPE': 'ACTION',
                'UNIT': ''
            },
            'PRESS_SHORT': {
                'CONTROL': 'BUTTON.SHORT',
                'DEFAULT': false,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 6,
                'TAB_ORDER': 0,
                'TYPE': 'ACTION',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HM-RC-2-PBU-FM.MAINTENANCE.3',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'AES_KEY': {
                'DEFAULT': 0,
                'FLAGS': 0,
                'ID': 'AES_KEY',
                'MAX': 127,
                'MIN': 0,
                'OPERATIONS': 1,
                'TAB_ORDER': 7,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'CONFIG_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 2,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'DEVICE_IN_BOOTLOADER': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'DEVICE_IN_BOOTLOADER',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 5,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'RSSI_DEVICE': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 3,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'RSSI_PEER': {
                'DEFAULT': 0,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'MAX': 2147483647,
                'MIN': -2147483648,
                'OPERATIONS': 5,
                'TAB_ORDER': 4,
                'TYPE': 'INTEGER',
                'UNIT': ''
            },
            'STICKY_UNREACH': {
                'DEFAULT': false,
                'FLAGS': 25,
                'ID': 'STICKY_UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 7,
                'TAB_ORDER': 1,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UNREACH': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UNREACH',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 0,
                'TYPE': 'BOOL',
                'UNIT': ''
            },
            'UPDATE_PENDING': {
                'DEFAULT': false,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'MAX': true,
                'MIN': false,
                'OPERATIONS': 5,
                'TAB_ORDER': 6,
                'TYPE': 'BOOL',
                'UNIT': ''
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-PCBS-BAT.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ERROR_OVERHEAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-PCBS2.SWITCH_WEEK_PROFILE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCK': {
                'MIN': 'MANU_MODE',
                'OPERATIONS': 2,
                'MAX': 'AUTO_MODE_WITHOUT_RESET',
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCK',
                'TYPE': 'ENUM',
                'DEFAULT': 'MANU_MODE',
                'VALUE_LIST': [
                    'MANU_MODE',
                    'AUTO_MODE_WITH_RESET',
                    'AUTO_MODE_WITHOUT_RESET'
                ],
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCK'
            },
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCKS'
            },
            'WEEK_PROGRAM_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.CHANNEL_LOCKS'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-PCBS2.SWITCH_TRANSMITTER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'SWITCH_TRANSMITTER.STATE'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SPI.MAINTENANCE.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SABOTAGE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'SABOTAGE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-PCBS-BAT.SWITCH_TRANSMITTER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'SWITCH_TRANSMITTER.STATE'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-PCBS-BAT.KEY_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-PCBS-BAT.SWITCH_VIRTUAL_RECEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'ON_TIME': {
                'MIN': 0,
                'UNIT': 's',
                'OPERATIONS': 2,
                'MAX': 8580000,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'SWITCH.STATE'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-PCBS-BAT.SWITCH_WEEK_PROFILE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCK': {
                'MIN': 'MANU_MODE',
                'OPERATIONS': 2,
                'MAX': 'AUTO_MODE_WITHOUT_RESET',
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCK',
                'TYPE': 'ENUM',
                'DEFAULT': 'MANU_MODE',
                'VALUE_LIST': [
                    'MANU_MODE',
                    'AUTO_MODE_WITH_RESET',
                    'AUTO_MODE_WITHOUT_RESET'
                ],
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCK'
            },
            'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 2,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_TARGET_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.TARGET_CHANNEL_LOCKS'
            },
            'WEEK_PROGRAM_CHANNEL_LOCKS': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 16777215,
                'FLAGS': 1,
                'ID': 'WEEK_PROGRAM_CHANNEL_LOCKS',
                'TYPE': 'INTEGER',
                'DEFAULT': 0,
                'CONTROL': 'WEEK_PROFILE.CHANNEL_LOCKS'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SWDO-I.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SABOTAGE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'SABOTAGE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SWDO-I.SHUTTER_CONTACT.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'STATE': {
                'MIN': 'CLOSED',
                'UNIT': '',
                'OPERATIONS': 5,
                'MAX': 'OPEN',
                'FLAGS': 1,
                'ID': 'STATE',
                'TAB_ORDER': 0,
                'TYPE': 'ENUM',
                'DEFAULT': 'CLOSED',
                'VALUE_LIST': [
                    'CLOSED',
                    'OPEN'
                ],
                'CONTROL': 'DOOR_SENSOR.STATE'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SPI.PRESENCEDETECTOR_TRANSCEIVER.2',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESENCE_DETECTION_STATE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESENCE_DETECTION_STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.MOTION_DETECTION_STATE'
            },
            'ILLUMINATION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 163830,
                'FLAGS': 1,
                'ID': 'ILLUMINATION',
                'TYPE': 'FLOAT',
                'DEFAULT': 0,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.ILLUMINATION'
            },
            'RESET_PRESENCE': {
                'MIN': false,
                'OPERATIONS': 2,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'RESET_PRESENCE',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.RESET_MOTION'
            },
            'CURRENT_ILLUMINATION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 163830,
                'FLAGS': 1,
                'ID': 'CURRENT_ILLUMINATION',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'PRESENCE_DETECTION_ACTIVE': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESENCE_DETECTION_ACTIVE',
                'TYPE': 'BOOL',
                'DEFAULT': true,
                'CONTROL': 'MOTIONDETECTOR_TRANSCEIVER.MOTION_DETECTION_ACTIVE'
            },
            'CURRENT_ILLUMINATION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'CURRENT_ILLUMINATION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'ILLUMINATION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'ILLUMINATION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-PCBS2.KEY_TRANSCEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'PRESS_SHORT': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_SHORT',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.SHORT'
            },
            'PRESS_LONG': {
                'MIN': false,
                'OPERATIONS': 4,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'PRESS_LONG',
                'TYPE': 'ACTION',
                'DEFAULT': false,
                'CONTROL': 'BUTTON_NO_FUNCTION.LONG'
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-PCBS2.MAINTENANCE.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'ERROR_OVERHEAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'ERROR_OVERHEAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN',
                    'OVERFLOW'
                ]
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ACTUAL_TEMPERATURE': {
                'MIN': -3276.8,
                'OPERATIONS': 5,
                'MAX': 3276.7,
                'FLAGS': 1,
                'ID': 'ACTUAL_TEMPERATURE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-PCBS2.SWITCH_VIRTUAL_RECEIVER.1',
        'type': 'meta',
        'meta': {
            'adapter': 'hm-rpc',
            'type': 'paramsetDescription'
        },
        'common': {},
        'native': {
            'SECTION_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'UNKNOWN',
                'FLAGS': 1,
                'ID': 'SECTION_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': [
                    'NORMAL',
                    'UNKNOWN'
                ]
            },
            'ON_TIME': {
                'MIN': 0,
                'UNIT': 's',
                'OPERATIONS': 2,
                'MAX': 8580000,
                'FLAGS': 1,
                'ID': 'ON_TIME',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'PROCESS': {
                'MIN': 'STABLE',
                'OPERATIONS': 5,
                'MAX': 'NOT_STABLE',
                'FLAGS': 1,
                'ID': 'PROCESS',
                'TYPE': 'ENUM',
                'DEFAULT': 'STABLE',
                'VALUE_LIST': [
                    'STABLE',
                    'NOT_STABLE'
                ]
            },
            'STATE': {
                'MIN': false,
                'OPERATIONS': 7,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'STATE',
                'TYPE': 'BOOL',
                'DEFAULT': false,
                'CONTROL': 'SWITCH.STATE'
            },
            'SECTION': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 15,
                'FLAGS': 1,
                'ID': 'SECTION',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            }
        }
    },
    {
        '_id': 'hm-rpc.meta.VALUES.HmIP-SMI.MAINTENANCE.4',
        'type': 'meta', 'meta': {'adapter': 'hm-rpc', 'type': 'paramsetDescription'}, 'common': {}, 'native': {
            'SABOTAGE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'SABOTAGE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'CONFIG_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'CONFIG_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'DUTY_CYCLE': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 1,
                'ID': 'DUTY_CYCLE',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'LOW_BAT': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'LOW_BAT',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'INSTALL_TEST': {
                'MIN': false,
                'OPERATIONS': 3,
                'MAX': true,
                'FLAGS': 2,
                'ID': 'INSTALL_TEST',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'UNREACH': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 25,
                'ID': 'UNREACH',
                'TYPE': 'BOOL',
                'DEFAULT': false
            },
            'OPERATING_VOLTAGE_STATUS': {
                'MIN': 'NORMAL',
                'OPERATIONS': 5,
                'MAX': 'OVERFLOW',
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE_STATUS',
                'TYPE': 'ENUM',
                'DEFAULT': 'NORMAL',
                'VALUE_LIST': ['NORMAL', 'UNKNOWN', 'OVERFLOW']
            },
            'RSSI_DEVICE': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_DEVICE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'OPERATING_VOLTAGE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 25.2,
                'FLAGS': 1,
                'ID': 'OPERATING_VOLTAGE',
                'TYPE': 'FLOAT',
                'DEFAULT': 0
            },
            'RSSI_PEER': {
                'MIN': -128,
                'OPERATIONS': 5,
                'MAX': 127,
                'FLAGS': 1,
                'ID': 'RSSI_PEER',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'ERROR_CODE': {
                'MIN': 0,
                'OPERATIONS': 5,
                'MAX': 255,
                'FLAGS': 9,
                'ID': 'ERROR_CODE',
                'TYPE': 'INTEGER',
                'DEFAULT': 0
            },
            'UPDATE_PENDING': {
                'MIN': false,
                'OPERATIONS': 5,
                'MAX': true,
                'FLAGS': 9,
                'ID': 'UPDATE_PENDING',
                'TYPE': 'BOOL',
                'DEFAULT': false
            }
        }
    }
];

module.exports = meta;