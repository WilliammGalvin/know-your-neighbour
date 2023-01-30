<script>
    let menu = false;

    let toggleMenu = () => {
        menu = !menu;
    }
</script>

<header>
    <div>
        <a href="/">Know Your Neighbour</a>
        <button on:click={toggleMenu}>{menu ? "x" : "="}</button>
    </div>

    {#if menu}
        <nav>
            <a href="/" on:click={toggleMenu}>Neighbours</a>
            <a href="/mission" on:click={toggleMenu}>Our Mission</a>
            <a href="/help" on:click={toggleMenu}>How to Help</a>
        </nav>
    {/if}
</header>

<div id="content">
    <div id="slot">
        <slot></slot>
    </div>
</div>

<style>
    :global(*) {
        --primary: #e74c3c;
        --grey: #c5c5c5;

        font-family: 'Times New Roman', Times, serif;

        margin: 0;
        padding: 0;
    }

    header {
        background-color: var(--primary);
        display: flex;
        align-items: center;
        height: 8vh;
        border-bottom: solid 3px black;
    }

    header div {
        display: flex;
        justify-content: space-between;
        width: 100vw;
        padding: 0 2vw
    }

    header div a {
        font-size: 2em;
        text-decoration: none;
        color: white;
    }

    header div button {
        background: none;
        border: none;

        font-size: 2em;
        font-weight: bold;
        color: white;
        padding: 0 .5vw;

        transition: 150ms;
    }

    header div button:hover {
        color: #802c23;
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 99;

        position: absolute;
        top: 8vh;
        width: 100%;

        gap: 2vh;
        padding: 5vh 0;

        background-color: #802c23;
        border-bottom: solid 3px black;
    }

    nav a {
        color: white;
        text-decoration: none;
        font-size: 1.5em;
        padding: 3vh 3vw;

        transition: 150ms;
    }

    #content {
        height: 92vh;
    }

    #slot {
        display: flex;
        justify-content: center;
    }
</style>