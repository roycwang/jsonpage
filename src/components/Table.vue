<template>
    <div class="box">
        <Divider>{{title}}</Divider>
        <vue-scrolling-table :scroll-horizontal="scrollHorizontal"
                             :scroll-vertical="scrollVertical">
            <template slot="thead">
                <tr>
                    <th v-for="col in data.columnNames"
                        :class=""
                        :key="col.key">{{ col.title }}</th>
                </tr>
            </template>
            <template slot="tbody">
                <tr v-for="item in data.tableDatas" :key="item.key">
                    <td v-for="col in data.columnNames "
                        :class=""
                        :key="col.key">{{ item[col.title] }}</td>
                </tr>
            </template>
        </vue-scrolling-table>
    </div>
</template>
<script>
    import VueScrollingTable from "vue-scrolling-table"
    export default {
        name: "com_table",
        props:["title","data"],
        data(){
          return {
              scrollVertical: true,
              scrollHorizontal: true,
          }
        },
        components:{
            VueScrollingTable,
        }
    }
</script>

<style>
    table.scrolling .w2 {
        width: 20em;
        min-width: 20em;
        max-width: 20em;
    }
    table.scrolling tfoot tr th {
        width: 130em;
        min-width: 130em;
        max-width: 130em;
    }
    table.freezeFirstColumn thead tr,
    table.freezeFirstColumn tbody tr {
        display: block;
        width: min-content;
    }
    table.freezeFirstColumn thead td:first-child,
    table.freezeFirstColumn tbody td:first-child,
    table.freezeFirstColumn thead th:first-child,
    table.freezeFirstColumn tbody th:first-child {
        position: sticky;
        position: -webkit-sticky;
        left: 0;
    }
    * {
        font-family: sans-serif;
    }
    .box {
        clear: both;
        padding: 0;
        min-height: 300px;
        height: 40vh;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
    }
    td, th {
        min-width: 10em !important;
        max-width: 20em !important;
    }
</style>