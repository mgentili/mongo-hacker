mongo_hacker_config = {
    verbose_shell:  true,      // additional verbosity
    index_paranoia: true,      // querytime explain
    enhance_api:    true,      // additonal api extensions
    indent:         2,         // number of spaces for indent
    uuid_type:      'default', // 'java', 'c#', 'python' or 'default'
    banner_message: 'Mongo-Hacker ', //banner message
    version:        '0.0.4',    // current mongo-hacker version
    show_banner:     true,      // show mongo-hacker version banner on startup

    // Shell Color Settings
    // [<color>, <bold>, <underline>]
    // Colors available: red, green, yellow, blue, magenta, cyan
    colors: {
        'key':        [ 'yellow', false, false],
        'number':     [ 'blue', false, false ],
        'boolean':    [ 'blue', false, false],
        'string':     [ 'yellow', false, false ],
        'date':       [ 'blue', false, false ],
        'objectid':   [ 'green', false, false ],
        'null':       [ 'red', false, false ],
        'undefined':  [ 'magenta', true, false ],
        'function':   [ 'magenta', false, false ],
        'uuid':       [ 'cyan', false, false],
        'slow_response': ['red', true, false],
        'regular_response': ['green', true, false],
        'shard':  [ 'cyan', false, false],
        'collection': [ 'green', true, false],
        'db_name':    [ 'green', true, false],
        'help':       [ 'green', false, false]
    }
}

__color = mongo_hacker_config.colors;

if (mongo_hacker_config['show_banner']) {
    print(mongo_hacker_config['banner_message'] + mongo_hacker_config['version']);
}

