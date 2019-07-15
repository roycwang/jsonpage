<template>
    <div>
        <Divider>{{title}}</Divider>
        <span>{{data}}</span>
    </div>
</template>
<script>
    export default {
        name: "com_text",
        props:["title","data"]
    }
</script>