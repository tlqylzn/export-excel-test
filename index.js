var exportToExcel = require('export-to-excel');
var sampleData = require('./data.js');

exportToExcel.exportXLSX({
    filename: '微信粉丝列表(2015-12-31)',
    sheetname: '微信粉丝列表',
    title: [
        {
            "fieldName": "subscribe",
            "displayName": "是否关注",
            "cellWidth": 8,
            "type": "bool"  // 1:是  0:否
        },
        {
            "fieldName": "openid",
            "displayName": "OpenID",
            "cellWidth": 30
        },
        {
            "fieldName": "nickname",
            "displayName": "昵称",
            "cellWidth": 15
        },
        {
            "fieldName": "sex",
            "displayName": "性别",
            "cellWidth": 6,
            "type": "sex"  // 1:男  0:女
        },
        {
            "fieldName": "language",
            "displayName": "语言",
            "cellWidth": 8
        },
        {
            "fieldName": "city",
            "displayName": "城市",
            "cellWidth": 12
        },
        {
            "fieldName": "province",
            "displayName": "省",
            "cellWidth": 10
        },
        {
            "fieldName": "country",
            "displayName": "国家",
            "cellWidth": 10
        },
        {
            "fieldName": "headimgurl",
            "displayName": "头像",
            "cellWidth": 20
        },
        {
            "fieldName": "subscribe_time",
            "displayName": "关注时间",
            "cellWidth": 20,
            "type": "datetime"   // 2015-12-12 10:00:00
        },
        {
            "fieldName": "remark",
            "displayName": "备注",
            "cellWidth": 10
        },
        {
            "fieldName": "groupid",
            "displayName": "组",
            "cellWidth": 8
        }
    ],
    data: sampleData
});
