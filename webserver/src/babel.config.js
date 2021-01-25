module.exports = function (api) {

    api.cache(true);
    const ignore = [
        "node_modules[\\/](?!some-es6-repo)/"
    ];
    const plugins = [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-runtime"
    ];
    const presets = [
        [
            "@babel/preset-env",
            {
                "modules": "commonjs",
                "targets": {
                    "node": "current"
                },
                "useBuiltIns": "usage",
                "corejs" : {
                    "version": 3,
                    "proposals": true
                }
            }
        ]
    ];
    return {
        presets,
        plugins
    }
}