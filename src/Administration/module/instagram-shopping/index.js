import { Module } from 'src/core/shopware';

import './extension/sw-marketing-index';
import './page/instagram-shopping-settings';

import enGB from './snippet/en_GB.json';

Module.register('instagram-shopping', {
    type: 'plugin',
    name: 'Instagram Shopping',
    description: 'Instagram Shopping',
    version: '1.0.0',
    targetVersion: '1.0.0',
    color: '#ff3d58',
    icon: 'default-shopping-paper-bag-product',

    snippets: {
        'en-GB': enGB
    },

    routes: {
        settings: {
            component: 'instagram-shopping-settings',
            path: 'settings'
        }
    },

    navigation: [
        {
            id: 'instagram-shopping-settings',
            label: 'Instagram Shopping',
            color: '#ff3d58',
            path: 'instagram.shopping.settings',
            icon: 'default-shopping-paper-bag-product',
            position: 10,
            parent: 'sw-marketing-index'
        }
    ]
});
