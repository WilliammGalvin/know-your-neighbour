<script>
    export let data;

    const name = data.data[0].name;
    const story = data.data[0].story;
</script>

<div id="content">
    <div id="left">
        <h1>{name}</h1>
        <img src="/src/images/{name.toLowerCase()}.jpg" alt="{name} Portrait">
    </div>

    <div id="right">
        <p>{story}</p>
    </div>
</div>

<style>
    #content {
        display: flex;
        margin: 2vh;
    }

    #content #left {
        margin-right: 2vw;
    }

    #content #left h1 {
        font-size: 3em;
        margin-bottom: 2vh;
        text-align: center;
    }

    #content #left img {
        border-radius: 15px;
    }

    #content #right p {
        max-width: 50vw;
        font-size: 1.5em;
        padding-bottom: 5vh;
    }
</style>