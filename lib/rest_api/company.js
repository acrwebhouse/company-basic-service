exports.on = function(app) {
    const preRestApi = '/company';
    const company = require('../role/company');
    const utilsValue = require('../utils/value');
    app.post(preRestApi + '/addCompany', function(req, res) {
        /*#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Add a company',
            schema: {
                name: 'ACR 科技公司',
                unifiedBusinessNo: '123456789',
                phone: '0912951085',
                mail: 'acr.webhouse@gmail.com',
                address: '台北市大安區',
                owner: 'Allen',
                accountLimit: 20,
                houseLimit: 1000,
                state:0
                
            }
        }*/ 
        const name = req.body.name
        const unifiedBusinessNo = req.body.unifiedBusinessNo
        const phone = req.body.phone
        const mail = req.body.mail
        const address = req.body.address
        const owner = req.body.owner
        const accountLimit = req.body.accountLimit
        const houseLimit = req.body.houseLimit
        const state = req.body.state
        const response = {
            'status':true,
            'data':''
        }
        company.addCompany(name,unifiedBusinessNo,phone,mail,address,owner,accountLimit,houseLimit,state,(result,data)=> {
            response.status = result;
            response.data = data
            res.send(response);
        })
    });

    // app.put(preRestApi + '/editUser', function(req, res) {
    //     /*#swagger.parameters['obj'] = {
    //         in: 'body',
    //         description: 'Edit a user',
    //         schema: {
    //             id: '61ed2777f5178ce385654350',
    //             account: 'a123456789',
    //             password: 123456,
    //             name: 'Chris',
    //             gender: true,
    //             roles: [1,2,3,4],
    //             rolesInfo: {
    //                 admin:{},
    //                 host:{},
    //                 user:{},
    //                 sales:{},
    //             },
    //             houseIds:[],
    //             phone: '0909666666',
    //             mail: 'acr.webhouse@gmail.com',
    //             address: '台北市文山區興隆路六段66號6樓',
    //             bornDate : '2022/05/11',
    //             verify : false
    //         }
    //     }*/ 
    //     const id = req.body.id
    //     const account = req.body.account
    //     const password = req.body.password
    //     const name = req.body.name
    //     const gender = req.body.gender
    //     const roles = req.body.roles
    //     const rolesInfo = req.body.rolesInfo
    //     const houseIds = req.body.houseIds
    //     const phone = req.body.phone
    //     const address = req.body.address
    //     const mail = req.body.mail
    //     const bornDate = req.body.bornDate
    //     const verify = req.body.verify
    //     const response = {
    //         'status':true,
    //         'data':''
    //     }
    //     user.editUser(id,account,password,name,gender,roles,rolesInfo,houseIds,phone,address,mail,bornDate,verify,(result,data)=> {
    //         response.status = result;
    //         response.data = data
    //         res.send(response);
    //     })
    // });

    // app.delete(preRestApi + '/removeUser', function(req, res) {
    //     /*#swagger.parameters['obj'] = {
    //         in: 'body',
    //         description: 'Remove a user',
    //         schema: {
    //             ids: ['61ed2777f5178ce385654350','61ed2777f5178ce385654353']
    //         }
    //     }*/ 
    //     const ids = req.body.ids
    //     const response = {
    //         'status':true,
    //         'data':''
    //     }
    //     console.log('====removeUsers====id==',ids)
    //     user.removeUser(ids,(result,data)=> {
    //         response.status = result;
    //         response.data = data
    //         res.send(response);
    //     })
    // });

    // app.get(preRestApi + '/getUsers', function(req, res) {
    //     /*
    //     #swagger.parameters['isDelete'] = {
    //         in: 'query',
    //         type: 'boolean',
    //     }
    //     #swagger.parameters['sort'] = {
    //         in: 'query',
    //         type: 'string',
    //         schema: '{\"updateTime\":1}'
    //     }
    //     #swagger.parameters['salesInfo'] = {
    //         in: 'query',
    //         type: 'string',
    //         schema: "{\"city\":\"台北市\",\"area\":\"文山區\"}"
    //     }
    //     */ 
    //     let isDelete = req.query.isDelete
    //     let skip = req.query.skip
    //     let limit = req.query.limit
    //     let salesInfo = req.query.salesInfo
    //     const name = req.query.name
    //     skip = skip*1;
    //     limit = limit*1
    //     if(isDelete == 'true'){
    //         isDelete = true
    //     }else{
    //         isDelete = false
    //     }
    //     const queryInfo = {
    //         isDelete
    //     }
    //     let sort;
    //     let roles;
    //     try{
    //         sort = JSON.parse(req.query.sort)
    //     }catch(e){
    //         sort = {}
    //     }
    //     try{
    //         salesInfo = JSON.parse(req.query.salesInfo)
    //         if(utilsValue.isValid(salesInfo.city)){
    //             queryInfo['rolesInfo.sales.scope.city'] = salesInfo.city
    //         }
    //         if(utilsValue.isValid(salesInfo.area)){
    //             queryInfo['rolesInfo.sales.scope.area'] = salesInfo.area
    //         }
    //     }catch(e){
    //         salesInfo = {}
    //     }
    //     try{
    //         roles = JSON.parse(req.query.roles)
    //         queryInfo.roles = roles
    //     }catch(e){
    //         roles = []
    //     }

    //     if(utilsValue.isValid(name)){
    //         queryInfo.name =new RegExp(name);
    //     }

    //     const response = {
    //         'status':true,
    //         'data':''
    //     }

    //     user.getUserList(queryInfo,skip,limit,sort,(result,data)=> {
    //         response.status = result;
    //         response.data = data
    //         res.send(response);
    //     }) 
    // });

    // app.get(preRestApi + '/getUserById', function(req, res) {
    //     /*#swagger.parameters['isDelete'] = {
    //         in: 'query',
    //         type: 'boolean',
    //     }*/ 
    //     const id = req.query.id
    //     const isDelete = req.query.isDelete
    //     const response = {
    //         'status':true,
    //         'data':''
    //     }
    //     user.getUserById(id,isDelete,(result,data)=> {
    //         response.status = result;
    //         response.data = data
    //         res.send(response);
    //     })
    // });

    // app.get(preRestApi + '/getUser', function(req, res) {
    //     /*#swagger.parameters['isDelete'] = {
    //         in: 'query',
    //         type: 'boolean',
    //     }*/ 
    //     const id = req.query.id
    //     const account = req.query.account
    //     const password = req.query.password
    //     const isDelete = req.query.isDelete
    //     const mail = req.query.mail
    //     const response = {
    //         'status':true,
    //         'data':''
    //     }
    //     user.getUser(id,account,mail,password,isDelete,(result,data)=> {
    //         response.status = result;
    //         response.data = data
    //         res.send(response);
    //     })
    // });

    // app.get(preRestApi + '/getUserByAccount', function(req, res) {
    //     /*#swagger.parameters['isDelete'] = {
    //         in: 'query',
    //         type: 'boolean',
    //     }*/ 
    //     const account = req.query.account
    //     const password = req.query.password
    //     const isDelete = req.query.isDelete
    //     const response = {
    //         'status':true,
    //         'data':''
    //     }
    //     user.getUserByAccount(account,password,isDelete,(result,data)=> {
    //         response.status = result;
    //         response.data = data
    //         res.send(response);
    //     })
    // });

    // app.get(preRestApi + '/getUserNoPassword', function(req, res) {
    //     /*#swagger.parameters['isDelete'] = {
    //         in: 'query',
    //         type: 'boolean',
    //     }*/ 
    //     const account = req.query.account
    //     const mail = req.query.mail
    //     const isDelete = req.query.isDelete
    //     const response = {
    //         'status':true,
    //         'data':''
    //     }
    //     user.getUserNoPassword(account,mail,isDelete,(result,data)=> {
    //         response.status = result;
    //         response.data = data
    //         res.send(response);
    //     })
    // });
}