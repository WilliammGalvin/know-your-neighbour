<script>
    export let name;
</script>

<div id="content">
    <a href="neighbours/{name}">
    <img src="./src/images/{name.toLowerCase()}.jpg" alt="{name} Portrait">
    </a>
</div>

<style>
    #content img {
        width: 20vw;
        border-radius: 15px;

        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
        box-shadow: 0 10px 13px 5px rgb(51, 51, 51);


        transition: 200ms;
    }

    #content img:hover {
        filter: grayscale(0%);
        -webkit-filter: grayscale(0%);
    }
</style>