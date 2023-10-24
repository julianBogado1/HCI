<template>
    <div class="mess-cont">
        <div class="mess">
            <p class="mess-text">¿Quiere crear sus propios entrenamientos?</p>
            <router-link to="/register"><p class="mess-text link-text"> Registrese aquí</p></router-link>
        </div>
    </div>
</template>

<style scoped>
    .mess-cont{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .mess{
        background-color: #E6F6EF;
        border-radius: 15px;
        padding: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        margin: 5px;
        display: flex;
        gap: 4px;
    }

    .mess-text{
        font-size: large;
        color: #000000;
    }

    .link-text{
        text-decoration: underline;
    }
</style>