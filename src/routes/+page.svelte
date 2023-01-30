<script>
    import Profile from "../components/Profile.svelte";
</script>

<div id="content">
    <Profile name="Patrick" img="https://firebasestorage.googleapis.com/v0/b/knowyourneighbour-a0eec.appspot.com/o/patrick.jpg?alt=media&token=007464f0-e187-45c3-9740-12fe5e82b01d" />
    <Profile name="Jory" img="https://firebasestorage.googleapis.com/v0/b/knowyourneighbour-a0eec.appspot.com/o/jory.jpg?alt=media&token=06034db3-fac8-401e-9c6b-35c259a3245c"/>
</div>

<style>
    #content {
        display: flex;
        justify-content: center;
        padding-top: 5vh;
        gap: 8vw;
    }

    @media screen and (max-width: 750px) {
        #content {
            flex-direction: column;
            justify-content: normal;
        }
    }
</style>