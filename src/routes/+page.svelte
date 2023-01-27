<script>
    import Profile from "../components/Profile.svelte";
</script>

<div id="content">
    <Profile name="Patrick" />
    <Profile name="Jory" />
</div>

<style>
    #content {
        display: flex;
        justify-content: center;
        padding-top: 5vh;
        gap: 8vw;
    }
</style>