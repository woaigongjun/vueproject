const plugins = [
    [
        "component",
        {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk",
        },
    ],
]
if (process.env.NODE_ENV === 'production') {
    plugins.push(['transform-remove-console'])
}
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                "targets": {
                    "browsers": [
                        "ie >=9",
                        "last 2 version",
                        "> 5%",
                        "not dead",
                    ],
                },
                "useBuiltIns": "usage",
            },
        ],
        ['@vue/app', {
            polyfills: [
                'es6.array.iterator',
                'es6.promise',
                'es7.promise.finally',
                'es6.symbol',
                'es6.array.find-index',
                'es7.array.includes',
                'es6.string.includes',
                'es6.array.find',
                'es6.object.assign',
            ],
        }],
    ],
    plugins,
    sourceType: 'unambiguous'
}
