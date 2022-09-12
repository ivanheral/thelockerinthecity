module.exports = function (env) {
    return require(`./config/webpack.${env.prod ? 'prod' : 'dev'}.${env.build==='babel' ? 'babel' : 'esbuild'}.js`)(env)
}