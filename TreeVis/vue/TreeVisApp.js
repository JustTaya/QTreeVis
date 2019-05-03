'use strict';
var AvlTree = httpVueLoader('./vue/components/avl.vue')
var BinaryTree = httpVueLoader('./vue/components/binary.vue')
var BinarySearchTree = httpVueLoader('./vue/components/binarySearch.vue')
var RedBlackTree = httpVueLoader('./vue/components/redBlack.vue')

var routes = [
    {
        path: '/avl',
        name: 'avl',
        component: AvlTree
    },
    {
        path: '/binary',
        name: 'binary',
        component: BinaryTree
    },
    {
        path: '/binarySearch',
        name: 'binarySearch',
        component: BinarySearchTree
    },
    {
        path: '/redBlack',
        name: 'redBlack',
        component: RedBlackTree
    }
];

var router = new VueRouter({
    routes: routes
});

var app = new Vue({
    router: router,
    data: {
        message: 'Hello Tochik!'
    }
}).$mount('#app');