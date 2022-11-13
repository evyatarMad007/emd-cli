import colors from 'colors';
import Table from 'cli-table';
const chars = { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
            , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
            , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
            , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
const style = { 'padding-left': 1, 'padding-right': 1 };

class CLIHelp {

    help() {   

    const backendTable = new Table({
        head: ['command', 'CLI', 'description', 'status'],
        chars: chars,
        style: style
    });
    // , 'in progress'.gray
    // , '✓'.green
    backendTable.push(
        [
            "create new project", 
            `emd-cli backend create-node-server ${'<app-name>'.cyan}`, 
            'create a boilerplate for a node server', 'in progress'.gray
        ],
        [
            "create new service", 
            `emd-cli backend create-service ${'<service-name>'.cyan}`, 
            'create new service boilerplate, \n(controller, model, routes, service, interface, test)', '✓'.green
        ],
        [
            "create new controller", 
            `emd-cli backend create-controller ${'<controller-name>'.cyan}`, 
            'create controller file',
            'in progress'.gray
        ],
        [
            "create new service", 
            `emd-cli backend create-service ${'<service-name>'.cyan}`, 
            'create service file',
            'in progress'.gray
        ],
        [
            "create new route", 
            `emd-cli backend create-route  ${'<route-name>'.cyan}`, 
            'create router file',
            'in progress'.gray
        ],
        [
            "create new interface", 
            `emd-cli backend create-interface  ${'<interface-name>'.cyan}`, 
            'create interface file',
            'in progress'.gray
        ],
        [
            "create new middleware", 
            `emd-cli backend create-middleware  ${'<middleware-name>'.cyan}`, 
            'create middleware file',
            'in progress'.gray
        ],
        [
            "create new model", 
            `emd-cli backend create-model  ${'<model-name>'.cyan}`, 
            'create model file',
            'in progress'.gray
        ],
        [
            "create new validator", 
            `emd-cli backend create-validator  ${'<validator-name>'.cyan}`, 
            'create validator file',
            'in progress'.gray
        ],
        [
            "create new enum", 
            `emd-cli backend create-enum  ${'<enum-name>'.cyan}`, 
            'create enum file',
            'in progress'.gray
        ],
        [
            "create new test", 
            `emd-cli backend create-test  ${'<test-name>'.cyan}`, 
            'create test file',
            'in progress'.gray
        ],
        [
            "create new config", 
            `emd-cli backend create-config  ${'<config-name>'.cyan}`, 
            'create config file',
            'in progress'.gray
        ],
        [
            "create new helper", 
            `emd-cli backend create-helper  ${'<helper-name>'.cyan}`, 
            'create helper file',
            'in progress'.gray
        ],
        [
            "create new logger", 
            `emd-cli backend create-logger  ${'<logger-name>'.cyan}`, 
            'create logger file',
            'in progress'.gray
        ],
        [
            "create new error", 
            `emd-cli backend create-error  ${'<error-name>'.cyan}`, 
            'create error file',
            'in progress'.gray
        ]

    );

        
console.log('');
console.log('');
console.log('');
console.log('');
console.log('Backend Commands: (Node.js Express Server)'.green);
console.log(backendTable.toString());

const frontendTable = new Table({
    head: ['command', 'CLI', 'description', 'status'],
    chars: chars,
    style: style
});
frontendTable.push(
    [
        "create new project", 
        `emd-cli frontend create-react-app ${'<app-name>'.cyan} ${'<state-management-type>'.cyan}`, 
        'create a boilerplate for React typescript app',
        'in progress'.gray
    ],
    [
        "create new component", 
        `emd-cli frontend create-component ${'<comp-name>'.cyan} ${'<comp-type>'.cyan} ${'<comp-element>'.cyan}`, 
        'create new component boilerplate, - \ncomponent, file style (using styled-component )',
        '✓'.green
    ],
    [
        "create new store", 
        `emd-cli frontend create-store ${'<store-name>'.cyan}`, 
        'create new store boilerplate, (store)',
        'in progress'.gray
    ],
    [
        "create new route", 
        `emd-cli frontend create-route ${'<route-name>'.cyan}`, 
        'create new route boilerplate, (route)',
        'in progress'.gray
    ],
    // advanced
    [
        "create new enum", 
        `emd-cli frontend create-enum ${'<enum-name>'.cyan}`, 
        'create new enum boilerplate, (enum, test file)',
        'in progress'.gray
    ],
    [
        "create new interface", 
        `emd-cli frontend create-interface ${'<interface-name>'.cyan}`, 
        'create new interface boilerplate, (interface)',
        'in progress'.gray
    ],
    [
        "create new test", 
        `emd-cli frontend create-test ${'<test-name>'.cyan}`, 
        'create new test boilerplate, (test file)',
        'in progress'.gray
    ],
    [
        "create new validator", 
        `emd-cli frontend create-validator ${'<validator-name>'.cyan}`, 
        'create new validator boilerplate, (validator)',
        'in progress'.gray
    ],
    [
        "create new hook", 
        `emd-cli frontend create-hook ${'<hook-name>'.cyan}`, 
        'create new hook boilerplate, (hook)',
        'in progress'.gray
    ],
    [
        "create new service", 
        `emd-cli frontend create-service ${'<service-name>'.cyan}`, 
        'create new service boilerplate, (service, test file)',
        'in progress'.gray
    ],
    [
        "create new util", 
        `emd-cli frontend create-util ${'<util-name>'.cyan}`, 
        'create new util boilerplate, (util)',
        'in progress'.gray
    ],
    [
        "create new context", 
        `emd-cli frontend create-context ${'<context-name>'.cyan}`, 
        'create new context boilerplate, (context)',
        'in progress'.gray
    ],
    [
        "create new mobx store", 
        `emd-cli frontend create-mobx-store ${'<store-name>'.cyan}`, 
        'create new mobx store boilerplate, (store)',
        'in progress'.gray
    ],
    [
        "create new hoc", 
        `emd-cli frontend create-hoc ${'<hoc-name>'.cyan}`, 
        'create new hoc boilerplate, (hoc)',
        'in progress'.gray
    ],
);


console.log('');
console.log('');
console.log('Frontend Commands: (React TypeScript)'.green);
console.log(frontendTable.toString());

    }
}

export default new CLIHelp()
