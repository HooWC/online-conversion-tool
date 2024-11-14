


<template>
    <div class="conversion-selector">
        <h2>Conversion Type</h2>
        <div class="button-group">
            <button class="conversion-button" @click="navigateTo('ScssToCss')">SCSS to CSS</button>
            <button class="conversion-button" @click="navigateTo('CssToScss')">CSS to SCSS</button>
            <button class="conversion-button" @click="navigateTo('XmlToJson')">XML to JS</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push({ name: route });
        }
    }
};
</script>

<style scoped>
.conversion-selector {
    margin: 20px 0;
}

h2 {
    font-size: 1.5rem;
    color: #444;
    margin-bottom: 20px;
    font-weight: 500;
}

.button-group {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.conversion-button {
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 12px 24px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}

.conversion-button:hover {
    background-color: #2980b9;
    transform: scale(1.05);
}

.conversion-button:focus {
    outline: none;
}

@media (max-width: 600px) {
    .button-group {
        flex-direction: column;
        gap: 15px;
    }
}
</style>
