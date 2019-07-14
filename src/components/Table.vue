<template>
    <Table stripe border :columns="data.columnNames" :data="data.tableDatas"></Table>
</template>
<script>
    export default {
        name: "com_table",
        props:["data"]
    }
</script>