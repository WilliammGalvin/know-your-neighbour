<script>
    export let data;

    const name = data.data[0].name;
    const img = data.data[0].img;
    const story = data.data[0].story;
</script>

<div id="content">
    <div id="left">
        <h1>{name}</h1>
        <img src="{img}" alt="{name} Portrait">
    </div>

    <div id="right">
        <p>{story}</p>
    </div>
</div>

<style>
    #content {
        display: flex;
        margin: 5vh;
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

    @media screen and (max-width: 750px) {
        #content {
            width: 100vw;
            flex-direction: column;
            align-items: center;
        }

        #content #left {
            margin-bottom: 5vh;
        }

        #content #right p {
            max-width: 75vw;
        }
    }
</style>