<template>
    <div>
        <Row>
            <Col span="10">
                <form id="formPage">(please wait)</form>
            </Col>
            <Col span="14">
                <div id="result">
                    <div v-for="(item,index) in results">
                        <com_lable v-if="item.type=='label'" v-bind:data="item.data"/>
                        <com_table v-if="item.type=='table'" v-bind:data="item.data"/>
                        <com_json v-if="item.type=='json'" v-bind:data="item.data" :id="index"/>
                    </div>
                </div>
            </Col>
        </Row>
        <Row >
            <Col span="10">
                <form id="form"></form>
            </Col>
            <Col span="14">

                <!--<pre id="json-display"></pre>-->
            </Col>
        </Row>


    </div>
</template>

<script>
    import com_table from "./components/Table"
    import com_lable from "./components/Label"
    import com_json from "./components/Json"
    export default {
        name: 'app',
        mounted() {
            var tl = this;
            this.load_components(function (result) {
                tl.components = result
                $('#form').jsonForm(tl.components);
            })
        },
        data() {
            return {
                showDetail: true,
                curCode: "",
                components: "",
                results:[
                    {
                        "type":"label",
                        "data":"text",
                    },
                    {
                        "type":"table",
                        "data":{
                            columnNames: [
                                {
                                    title: 'Name',
                                    key: 'name'
                                },
                                {
                                    title: 'Age',
                                    key: 'age'
                                },
                                {
                                    title: 'Address',
                                    key: 'address'
                                }
                            ],
                            tableDatas: [
                                {
                                    name: 'John Brown',
                                    age: 18,
                                    address: 'New York No. 1 Lake Park',
                                    date: '2016-10-03'
                                },
                                {
                                    name: 'Jim Green',
                                    age: 24,
                                    address: 'London No. 1 Lake Park',
                                    date: '2016-10-01'
                                },
                                {
                                    name: 'Joe Black',
                                    age: 30,
                                    address: 'Sydney No. 1 Lake Park',
                                    date: '2016-10-02'
                                },
                                {
                                    name: 'Jon Snow',
                                    age: 26,
                                    address: 'Ottawa No. 2 Lake Park',
                                    date: '2016-10-04'
                                }
                            ]
                        }
                    },
                    {
                        "type":"json",
                        "data":{'a':'123'},
                    }
                ],

            }
        },
        methods: {
            load_components(callback) {
                var tl = this;
                callback({
                    schema: {
                        example: {
                            title: 'JSON Form example to start from',
                            type: 'string',
                            'enum': [
                                'gettingstarted',
                                'schema-basic',
                                'schema-morecomplex',
                                'schema-array',
                                'fields-common',
                                'fields-password',
                                'fields-textarea',
                                'fields-ace',
                                'fields-color',
                                'fields-checkbox',
                                'fields-checkboxes',
                                'fields-select',
                                'fields-radios',
                                'fields-radiobuttons',
                                'fields-range',
                                'fields-imageselect',
                                'fields-iconselect',
                                'fields-fieldset',
                                'fields-advancedfieldset',
                                'fields-authfieldset',
                                'fields-section',
                                'fields-actions',
                                'fields-array',
                                'fields-tabarray',
                                'fields-tabarray-maxitems',
                                'fields-tabarray-value',
                                'fields-selectfieldset',
                                'fields-selectfieldset-key',
                                'fields-submit',
                                'fields-help',
                                'fields-hidden',
                                'fields-questions',
                                'templating-idx',
                                'templating-value',
                                'templating-values',
                                'templating-tpldata',
                                'events',
                                'previousvalues',
                                'factory-sleek'
                            ],
                            'default': 'gettingstarted'
                        },
                        greatform: {
                            title: 'JSON Form object to render',
                            type: 'string'
                        }
                    },
                    form: [
                        {
                            key: 'example',
                            notitle: true,
                            prepend: 'Try with',
                            htmlClass: 'trywith',
                            titleMap: {
                                'gettingstarted': 'Getting started',
                                'schema-basic': 'JSON Schema - A basic example',
                                'schema-morecomplex': 'JSON Schema - Slightly more complex example',
                                'schema-array': 'JSON Schema - Arrays',
                                'fields-common': 'Fields - Common properties',
                                'fields-password': 'Fields - Gathering secrets: the password type',
                                'fields-textarea': 'Fields - Large text: the textarea type',
                                'fields-color': 'Fields - Color picker: the color type',
                                'fields-checkbox': 'Fields - Boolean flag: the checkbox type',
                                'fields-checkboxes': 'Fields - Multiple options: the checkboxes type',
                                'fields-select': 'Fields - Selection list: the select type',
                                'fields-radios': 'Fields - A list of radio buttons: the radios type',
                                'fields-radiobuttons': 'Fields - Radio buttons as real buttons: the radio buttons type',
                                'fields-range': 'Fields - Number: the range type',
                                'fields-imageselect': 'Fields - Image selector: the imageselect type',
                                'fields-iconselect': 'Fields - Icon selector: the iconselect type',
                                'fields-fieldset': 'Fields - Grouping: the fieldset type',
                                'fields-advancedfieldset': 'Fields - Advanced options section: the advancedfieldset type',
                                'fields-authfieldset': 'Fields - Authentication settings section: the authfieldset type',
                                'fields-section': 'Fields - Generic group: the section type',
                                'fields-actions': 'Fields - Group of buttons: the actions type',
                                'fields-array': 'Fields - Generic array: the array type',
                                'fields-tabarray': 'Fields - Arrays with tabs: the tabarray type',
                                'fields-tabarray-maxitems': 'Fields - Arrays with tabs: the tabarray type w/ maxItems',
                                'fields-tabarray-value': 'Fields - Arrays with tabs: the tabarray type w/ default & legend',
                                'fields-selectfieldset': 'Fields - Alternative: the selectfieldset type',
                                'fields-selectfieldset-key': 'Fields - Alternative with schema key',
                                'fields-submit': 'Fields - Submit the form: the submit type',
                                'fields-help': 'Fields - Guide users: the help type',
                                'fields-hidden': 'Fields - Hidden form values: the hidden type',
                                'fields-questions': 'Fields - Series of questions: the questions type',
                                'templating-idx': 'Templating - item index with idx',
                                'templating-value': 'Templating - tab legend with value and valueInLegend',
                                'templating-values': 'Templating - values.xxx to reference another field',
                                'templating-tpldata': 'Templating - Using the tpldata property',
                                'events': 'Using event handlers',
                                'previousvalues': 'Using previously submitted values',
                                'factory-sleek': 'Joshfire Factory - Sleek template'
                            },
                            onChange: function (evt) {
                                var selected = $(evt.target).val();

                                tl.loadExample(selected);
                                if (history) history.pushState(
                                    {example: selected},
                                    'Example - ' + selected,
                                    '?example=' + selected);
                            }
                        },
                        {
                            "type": "button",
                            "title": "Click me",
                            "onClick": function () {
                                $('#result').html('');
                            }
                        }
                    ]
                });
                // $.get("loadcomponents", function( result ) {
                //   tl.loading=false;
                //   $Spin.hide();
                //   if(result){
                //     callback(result)
                //   }
                //
                // });
            },
            loadExample(example) {
                var tl = this;
                $.ajax({
                    url: '../examples/' + example + '.json',
                    dataType: 'text'
                }).done(function (code) {
                    tl.curCode = JSON.parse(code);
                    $('#formPage').html('');
                    // new JsonEditor('#json-display', tl.curCode, {});
                    tl.curCode.onSubmitValid = function (values) {
                        console.log('Values extracted from submitted form', values);
                    };
                    console.log(tl.curCode);
                    $('#formPage').jsonForm(tl.curCode);
                }).fail(function () {
                    $('#formPage').html('Sorry, I could not retrieve the example!');
                });
            },
        },
        components: {
            com_table,
            com_lable,
            com_json,
        }
    }
</script>

<style>

</style>
