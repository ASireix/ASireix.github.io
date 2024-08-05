const path = require('path');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
import inject from "@rollup/plugin-inject";


export default {
    plugins: [
        inject({   // => that should be first under plugins array
            $: 'jquery',
            jQuery: 'jquery',
        }),
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
