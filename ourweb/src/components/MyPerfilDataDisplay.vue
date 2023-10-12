<template>
    <div class="fieldContainer dflex w-100">
        <div class="cuentaField dflex w-100">
            <p class="fieldName">Nombre de usuario</p>
            <div class="fieldColor dflex w-100">
                <p class="fieldData">GiovanniLaMosca1994</p>
            </div>
        </div>
        <div class="cuentaField dflex w-100">
            <p class="fieldName">E-mail</p>
            <div class="fieldColor dflex w-100">
                <p class="fieldData">quisieraserunamosca@gmail.com</p>
            </div>
        </div>
        <div class="cuentaField dflex w-100">
            <p class="fieldName">Nombre</p>
            <div class="fieldColor dflex w-100">
                <p class="fieldData">Giovanni Vazquez</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .fieldContainer{
        display: flex;
        flex-direction: column;
        margin: 1%;
        gap: 10px;
        margin-bottom: 5%;
    }

    .cuentaField{
        display: flex;
        flex-direction: column;
    }

    .fieldName{
        color: #49454F;
        font-weight: 400;
        font-size: small;
    }

    .fieldColor{
        background-color: #E6F6EF;
        border-radius: 15px;
        padding-left: 1%;
        padding-right: 1%;
        padding-top: 1%;
        padding-bottom: 1%;
        height: fit-content;
    }

    .fieldData{
        color: #000000;
        font-weight: bold;
        font-size: x-large;
    }
</style>