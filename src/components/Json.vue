<template>
    <div>
        <Divider>{{title}}</Divider>
        <pre :id="id"></pre>
    </div>

</template>
<script>
    export default {
        name: "com_json",
        props:["id","title","data"],
        mounted() {
            var tl = this;
            new JsonEditor('#'+tl.id, tl.data, {});
        },
    }
</script>