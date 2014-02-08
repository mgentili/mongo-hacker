//----------------------------------------------------------------------------
// Color Functions
//----------------------------------------------------------------------------
__ansi = {
    csi: String.fromCharCode(0x1B) + '[',
    reset: '0',
    text_prop: 'm',
    foreground: '3',
    bold: '1',
    underline: '4',

    colors: {
        red: '1',
        green: '2',
        yellow: '3',
        blue: '4',
        magenta: '5',
        cyan: '6'
    }
};

function controlCode( parameters ) {
    if ( parameters === undefined ) {
        parameters = "";
    }
    else if (typeof(parameters) == 'object' && (parameters instanceof Array)) {
        parameters = parameters.join(';');
    }
    //print(String(parameters));
    return __ansi.csi + String(parameters) + String(__ansi.text_prop);
};

function applyColorCode( string, properties ) {
    return controlCode(properties) + String(string) + controlCode();
};

function colorize( string, color_properties) {
    var params = [];
    var code = __ansi.foreground + __ansi.colors[color_properties[0]];
    //print(code);
    params.push(code);

    if ( color_properties[1] === true ) params.push(__ansi.bold);
    if ( color_properties[2] === true ) params.push(__ansi.underline);

    return applyColorCode( string, params );
};
