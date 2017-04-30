<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container">
                <ul class="nav navbar-nav">
                    <li><router-link to="/home">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><router-link to="/signup">Sign Up</router-link></li>
                    <li><router-link to="/login">Login</router-link></li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>
