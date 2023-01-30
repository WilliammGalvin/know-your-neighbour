<script>
    export let name;
    export let img;
</script>

<div id="content">
    <a href="neighbours/{name}">
    <img src="{img}" alt="{name} Portrait">
    </a>
</div>

<style>
    #content img {
        width: 30vmax;
        max-width: 300px;

        border-radius: 15px;

        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
        border: solid 3px black;

        transition: 200ms;
    }

    #content img:hover {
        filter: grayscale(0%);
        -webkit-filter: grayscale(0%);
    }
</style>