<template>
    <div>
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="1">
                <MenuItem name="menu" v-on:click.native="showMenue()">
                    <Icon type="md-menu" size="24"/>
                </MenuItem>
            </Menu>
        </Header>
        <Row>
            <Drawer placement="left" :mask="true" :closable="false" :mask-closable="true" v-model="isMenueShow">
                <Menu active-name="" theme="light" width="auto">
                    <p v-for="menu in menu_list">
                        <MenuItem :name="menu.name" v-on:click.native="renderForm(menu)">
                            {{menu.desc}}
                        </MenuItem>
                    </p>
                </Menu>
            </Drawer>
            <Col span="6">
                <Card :bordered="false">
                    <form id="formPage" style="margin: 10px">(please wait)</form>
                </Card>
            </Col>
            <Col span="18">
                <Card :bordered="true">
                    <div id="result" style="margin: 10px">
                        <div v-for="(item,index) in results">
                            <com_text v-if="item.type=='text'" v-bind:title="item.title" v-bind:data="item.data"/>
                            <com_table v-if="item.type=='table'" v-bind:title="item.title" v-bind:data="item.data"/>
                            <com_json v-if="item.type=='json'" v-bind:title="item.title" v-bind:data="item.data"
                                      :id="index"/>
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    import com_table from "./components/Table"
    import com_text from "./components/Text"
    import com_json from "./components/Json"
    import  JSONbig from 'json-bigint'
    export default {
        name: 'app',
        mounted() {
            var tl = this;
            tl.loadConfig(function () {
                tl.loadForm(function (result) {
                    tl.menu_list = JSONbig({"storeAsString": true}).parse(result);
                })
            });
        },
        data() {
            return {
                isMenueShow: true,
                curSchema: "",
                results: [],
                menu_list: [],
                config: {},

            }
        },
        methods: {
            loadConfig(callback) {
                var tl = this;
                $.ajax({
                    url: 'config.json',
                    method: "GET",
                    dataType: 'text'
                }).done(function (result) {
                    tl.loading = false;
                    tl.config = JSONbig({"storeAsString": true}).parse(result);
                    callback()
                }).fail(function () {
                    $('#formPage').html('Sorry, I could not retrieve the example!');
                });
            },
            loadForm(callback) {
                var tl = this;
                tl.loading = true;
                $.ajax({
                    url: tl.config.loadUrl,
                    dataType: "text",
                }).done(function (result) {
                    tl.loading = false;
                    callback(result)
                }).fail(function (e) {
                    $('#formPage').html(e);
                });
            },
            renderForm(schema) {
                var tl = this;
                tl.isMenueShow = false;
                tl.curSchema = schema;
                $('#formPage').html('');
                // new JsonEditor('#json-display', tl.curCode, {});
                tl.curSchema.onSubmitValid = function (values) {
                    tl.submit(values)
                    console.log('Values extracted from submitted form', values);
                };
                console.log(tl.curSchema);
                $('#formPage').jsonForm(tl.curSchema);
            },
            submit(values) {
                var tl = this;
                tl.loading = true;
                $.ajax({
                    url: tl.curSchema.submit,
                    method: "POST",
                    dataType: "text",
                    data: values,
                    success: function (result) {
                        tl.loading = false;
                        tl.results = JSONbig({"storeAsString": true}).parse(result);
                    },
                    error: function (result) {
                        tl.loading = false;
                        callback(result.statusText)
                    }
                });
            },
            showMenue() {
                this.isMenueShow = true
            },
        },
        components: {
            com_table,
            com_text,
            com_json,
        }
    }
</script>

<style>
    .ivu-layout-header {
        padding: 0 !important;
    }
</style>
