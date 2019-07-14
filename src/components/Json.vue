<template>
    <pre :id="id"></pre>
</template>
<script>
    export default {
        name: "com_json",
        props:["id","data"],
        mounted() {
            var tl = this;
            new JsonEditor('#'+tl.id, tl.data, {});
        },
    }
</script>