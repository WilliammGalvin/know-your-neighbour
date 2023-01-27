<header>
    <a href="/">Know Your Neighbour</a>
</header>

<div id="content">
    <nav>
        <li><a href="/">Neighbours</a></li>
        <li><a href="/mission">Our Mission</a></li>
        <li><a href="/help">How to Help</a></li>
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
        width: 10vw;
        min-width: fit-content;
        padding: 0 15px;

        border-right: solid 2px var(--grey);
        text-align: center;
    }

    #content nav li {
        list-style-type: none;
    }

    #content nav li a {
        text-decoration: none;
        color: black;
        font-size: 1.5em;
    }

    #content #slot {
        width: 90vw;
    }
</style>