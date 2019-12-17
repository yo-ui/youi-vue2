<template>
    <div class="yo-component-icon-page">
        <yo-anchor :text="'Icon '+langKey('图标')" size="18"></yo-anchor>
        <p>{{langKey('提供了一套常用的图标集合。')}}</p>
        <yo-anchor :text="'Icon '+langKey('使用方法')"></yo-anchor>
        <p>{{langKey('直接通过设置类名为 yo-icon-iconName 来使用即可。例如：')}}</p>
        <i class="yo-icon-edit"></i>
        <i class="yo-icon-share"></i>
        <i class="yo-icon-remove"></i>
        <yo-button type="primary" icon="search">{{langKey('搜索')}}</yo-button>

        <ul>
            <li>
                <i class="yo-icon-y"></i>
                yo-icon-y
            </li>
            <li>
                <i class="yo-icon-google"></i>
                yo-icon-google
            </li>
            <li>
                <i class="yo-icon-setting"></i>
                yo-icon-setting
            </li>
            <li>
                <i class="yo-icon-print"></i>
                yo-icon-print
            </li>
            <li>
                <i class="yo-icon-full"></i>
                yo-icon-full
            </li>
            <li>
                <i class="yo-icon-plus"></i>
                yo-icon-plus
            </li>
            <li>
                <i class="yo-icon-minus"></i>
                yo-icon-minus
            </li>
            <li>
                <i class="yo-icon-message"></i>
                yo-icon-message
            </li>
            <li>
                <i class="yo-icon-facebook"></i>
                yo-icon-facebook
            </li>
            <li>
                <i class="yo-icon-more"></i>
                yo-icon-more
            </li>
            <li>
                <i class="yo-icon-search"></i>
                yo-icon-search
            </li>
            <li>
                <i class="yo-icon-female"></i>
                yo-icon-female
            </li>
            <li>
                <i class="yo-icon-network-error"></i>
                yo-icon-network-error
            </li>
            <li>
                <i class="yo-icon-password"></i>
                yo-icon-password
            </li>
            <li>
                <i class="yo-icon-calendar"></i>
                yo-icon-calendar
            </li>
            <li>
                <i class="yo-icon-alipay"></i>
                yo-icon-alipay
            </li>
            <li>
                <i class="yo-icon-star"></i>
                yo-icon-
            </li>
            <li>
                <i class="yo-icon-like"></i>
                yo-icon-
            </li>
        </ul>
    </div>
</template>

<style lang="less">
    @import "../../../assets/less/pages/component/base/icons.less";
</style>

