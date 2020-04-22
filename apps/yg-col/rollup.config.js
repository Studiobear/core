require('dotenv').config()
import svelte from 'rollup-plugin-svelte-hot'
import image from 'svelte-image'
import copy from 'rollup-plugin-copy'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import hmr, { autoCreate } from 'rollup-plugin-hot'

const nollup = !!process.env.NOLLUP
const watch = !!process.env.ROLLUP_WATCH
const useLiveReload = !!process.env.LIVERELOAD

const spa = false

const dev = watch || useLiveReload
const production = !dev

const hot = watch && !useLiveReload

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
    exports: 'named',
  },
  plugins: [
    replace({
      'process.browser': true,
      'process.env.NODE_ENV': JSON.stringify(dev),
      'process.env.GRAPHQL_URL': JSON.stringify(process.env.GRAPHQL_URL),
    }),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file - better for performance
      ...(!hot && {
        css: css => {
          css.write('public/build/bundle.css')
        },
      }),
      hot: hot && {
        // Optimistic will try to recover from runtime
        // errors during component init
        optimistic: false,
        // Turn on to disable preservation of local component
        // state -- i.e. non exported `let` variables
        noPreserveState: false,
        noPreserveStateKey: '@!hmr',
        // See docs of rollup-plugin-svelte-hot for all available options:
        //
        // https://github.com/rixo/rollup-plugin-svelte-hot#usage
      },
      preprocess: {
        ...image({
          trace: {
            background: '#fff',
            color: '#C0D0D1',
            threshold: 180,
          },
        }),
      },
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    dev && !nollup && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    useLiveReload && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
    hot &&
      autoCreate({
        include: 'src/**/*',
        // Set false to prevent recreating a file that has just been
        // deleted (Rollup watch will crash when you do that though).
        recreate: true,
      }),

    hmr({
      public: 'public',
      inMemory: true,
      // This is needed, otherwise Terser (in npm run build) chokes
      // on import.meta. With this option, the plugin will replace
      // import.meta.hot in your code with module.hot, and will do
      // nothing else.
      compatModuleHot: !hot,
    }),
    copy({
      targets: [{ src: 'static/g', dest: 'public' }],
    }),
  ],
  watch: {
    clearScreen: false,
  },
}

function serve() {
  let started = false
  return {
    name: 'svelte/template:serve',
    writeBundle() {
      if (!started) {
        started = true
        const flags = ['run', 'start', '--', '--dev']
        if (spa) {
          flags.push('--single')
        }
        require('child_process').spawn('npm', flags, {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        })
      }
    },
  }
}