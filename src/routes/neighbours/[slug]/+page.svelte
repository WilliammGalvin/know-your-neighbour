<script>
    export let data;

    const name = data.data[0].name;
    const story = data.data[0].story;
</script>

<div id="content">
    <div id="left">
        <img src="/src/images/{name.toLowerCase()}.jpg" alt="{name} Portrait">
    </div>

    <div id="right">
        <h1>{name}</h1>
        <p>{story}</p>
    </div>
</div>

<style>
    #content {
        display: flex;
    }
</style>