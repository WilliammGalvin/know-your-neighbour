<header>
    <a href="/">Know Your Neighbour</a>
</header>

<div id="content">
    <nav>
        <form action="/">
            <button>Neighbours</button>
        </form>

        <form action="/mission">
            <button>Our Mission</button>
        </form>

        <form action="/help">
            <button>How to Help</button>
        </form>
    </nav>
    
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
        justify-content: center;
        align-items: center;
        height: 8vh;
    }

    header a {
        font-size: 2em;
        text-decoration: none;
        color: white;
    }

    #content {
        display: flex;
        height: 92vh;
    }

    #content nav {
        width: 20vw;
        min-width: fit-content;
        display: flex;
        flex-direction: column;

        border-right: solid 2px var(--grey);
        text-align: center;
    }

    #content nav button {
        color: black;
        font-size: 2.3em;
        padding: 5vh 0;
        
        border: none;
        background-color: transparent;

        transition: 100ms;
    }

    #content nav button:hover {
        color: var(--grey);
    }

    #content #slot {
        width: 80vw;
    }
</style>