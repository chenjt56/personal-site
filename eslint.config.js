import ignores from './eslint/ignores.js';
import base from './eslint/base.js';
import vue from './eslint/vue.js';
import typescript from './eslint/typescript.js';
import nuxt from '@nuxt/eslint-config';
import prettier from './eslint/prettier.js';

export default [ignores, ...(await nuxt()), base, vue, typescript, prettier];
