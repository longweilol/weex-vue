<template>
    <div class="wrapper">
        <home-header></home-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import header from './header.vue';

    export default {
        components: {
            'home-header': header
        },
        data () {
            return {
                YXBanners: [],
                goodsList:[],
                showLoading: 'hide'
            }
        },
        created () {
        },
        methods: {
        }
    }
</script>