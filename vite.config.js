const path = require('path');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');


export default {
    base: '/',
    plugins: [
        commonjs(),
        nodeResolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        })
        
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            '~jquery': path.resolve(__dirname, 'node_modules/jquery/dist'),
            '~particle': path.resolve(__dirname, 'src/jquery.particleground.js')
        }
    },
    server: {
        port: 8080,
        hot: true
    }
}
