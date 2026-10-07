// Vault CRM JavaScript Library version 262.2.30-2
// http://veeva.com
//
// Copyright © 2024 Veeva Systems, Inc. All rights reserved.
//
// The com.veeva.clm namespace should be utilized when calling the JavaScript functions.
//          Example: "com.veeva.clm.getDataForCurrentObject("Account","id", myAccountID);"
//
//
// JavaScript library will return in the following format:
// {success:true, obj_name:[{"id":"0001929312"}, {record2}, ...]}
// or
// {success:false, code:####, message:"message_text"}
// #### - denotes the specific error code (1000 is from the underlying API, 2000 is from the JavaScript library)
//          2000 - Callback function is missing
//          2001 - Callback is not a JavaScript function
//          2002 - <parameter_name> is empty
//          2100 - Request (%@) failed: %@
// message_text - begins with the JavaScript library function name and a ":". If the error comes from the underlying API, the full message
// from the API will be appended to the message_text
//
//
// For CLM:
// With the exception of gotoSlide, the JavaScript functions respect My Setup, Restricted Products on Account, Allowed Products on Call and on TSF.
// goToSlide respects all of the above when media is launched from a Call or an Account. goToSlide does not respect Restricted Products
// and Allowed Products when media is launched from the home page.
//
//
// Use the JavaScript functions in a chain, i.e. call the second JavaScript function only in the first function's callback function or
// after the callback of the first function is finished.
// Because the underlying API calls are asynchronous, this may result in unexpected return values if the JavaScript functions are
// not properly chained.
//
//
// Veeva recommends caution when retrieving/saving data using the following field types and to always perform rigorous testing:
//      Long Text Area
//      Rich Text Area
//      Encrypted Text Area


const FEATURE_MULTI_PRODUCT_MIN_VERSION = "212.0.100";
var com;
if(com == null) com = {};
if(com.veeva == undefined)com.veeva = {};
com.veeva.clm = {
    /////////////////////// Addresses ///////////////////////

    // 1
    // Returns an array of record IDs of all addresses (address__v) for a particular account (account__v)
    // account - specifies the record id of the account of which to get all related addresses
    // callback - call back function which will be used to return the information
    getAddresses_Account: function(account, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("account", account);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getAddresses_Account", callback, ret);
            return;
        }
        window["com_veeva_clm_accountAddresses"] = function(result) {
            com.veeva.clm.wrapResult("getAddresses_Account", callback, result);
        }

        query = "vaultcrm:queryObject(address__v),fields(id),where(WHERE account__v='" + account + "'),com_veeva_clm_accountAddresses(result)";
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(query);
        else
            com_veeva_clm_accountAddresses(com.veeva.clm.testResult.common);
    },

    // 2
    // Returns the values of the specified fields for specified Address (address__v) record
    // record - specifies the record id of the Address to get fields from
    // fields - list of field api names to return a value for, this parameter should be an array
    // callback - call back function which will be used to return the information
    getAddressFields: function(record, fields, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("record", record);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getAddressFields", callback, ret);
            return;
        }
        if(fields == undefined || fields == null) {
            fields = ["id"];
        }

        window["com_veeva_clm_addressValues"] = function(result) {
            com.veeva.clm.wrapResult("getAddressFields", callback, result);
        }

        query = "vaultcrm:queryObject(address__v),fields(" + this.joinFieldArray(fields) + "),where(WHERE id='" + record + "'),com_veeva_clm_addressValues(result)";
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(query);
        else
            com_veeva_clm_addressValues(com.veeva.clm.testResult.common);
    },


    /////////////////////// Products ///////////////////////

    // Returns an array of record IDs of all products (product__v) of a specified type that the User has access to
    // type - specifies the Product Type (product_type__v field on product__v)
    // callback - call back function which will be used to return the information
    getProduct_MySetup: function(type, callback) {
        // check parameter

        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("type", type);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getProduct_MySetup", callback, ret);
            return;
        }


        window["com_veeva_clm_productMysetup"] = function(result) {
            com.veeva.clm.wrapResult("getProduct_MySetup", callback, result);
        };


        query = "vaultcrm:queryObject(product__v),fields(id),where(WHERE product_type__v='" + type + "'),com_veeva_clm_productMysetup(result)";
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(query);
        else
            com_veeva_clm_productMysetup(com.veeva.clm.testResult.common);

    },

    /////////////////////// Object Type Support ///////////////////////

    // Returns an array of record IDs of all object_type__v records (ObjectType) for a particular object
    // object - specifies the API name of the object of which to get all active ObjectTypes
    // callback - call back function which will be used to return the information
    getObjectType_Object: function(object, callback) {

        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("object", object);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getObjectType_Object", callback, ret);
            return;
        }

        window["com_veeva_clm_objectObjectTypes"] = function(result) {
            com.veeva.clm.wrapResult("getObjectType_Object", callback, result);
        }

        query = "vaultcrm:queryObject(object_type__v),fields(id),where(WHERE object_name__v='" + object + "' and status__v='active__v'),com_veeva_clm_objectObjectTypes(result)";
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(query);
        else
            com_veeva_clm_objectObjectTypes(com.veeva.clm.testResult.common);
    },

    // Wrapper for backward compatibility with the Salesforce-based CLM content
    getRecordType_Object: function(object, callback) {
        this.getObjectType_Object(object, callback);
    },

    /////////////////////// Surveys ///////////////////////

    // 1
    // Returns an array of record IDs of all Survey Questions (survey_question__v) for a specific Survey (survey__v)
    // Results are returned in ascending order based on the order__v field on survey_question__v.
    // survey - specifies the record id of the Survey to get all related Survey Questions from
    // callback - call back function which will be used to return the information
    getSurveyQuestions_Survey: function(survey, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("survey", survey);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getSurveyQuestions_Survey", callback, ret);
            return;
        }

        window["com_veeva_clm_surveyQuestions"] = function(result) {
            com.veeva.clm.wrapResult("getSurveyQuestions_Survey", callback, result);
        }

        query = "vaultcrm:queryObject(survey_question__v),fields(id),where(WHERE survey__v='" + survey + "'),sort(order__v,asc),com_veeva_clm_surveyQuestions(result)";
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(query);
        else
            com_veeva_clm_surveyQuestions(com.veeva.clm.testResult.common);

    },

    // 2
    // Returns an array of record IDs of all Questions Responses (question_response__v object) for a specific Survey
    // Target (survey_target__v). Results are returned in ascending order based on the order__v field on question_response__v.
    // surveytarget - specifies the record id of the Survey Target to get all related Question Responses from
    // callback - call back function which will be used to return the information
    getQuestionResponse_SurveyTarget: function(surveytarget, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("surveytarget", surveytarget);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getQuestionResponse_SurveyTarget", callback, ret);
            return;
        }
        window["com_veeva_clm_targetResponses"] = function(result) {
            com.veeva.clm.wrapResult("getQuestionResponse_SurveyTarget", callback, result);
        }

        query = "vaultcrm:queryObject(question_response__v),fields(id),where(WHERE survey_target__v='" + surveytarget + "'),sort(order__v,asc),com_veeva_clm_targetResponses(result)";
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(query);
        else
            com_veeva_clm_targetResponses(com.veeva.clm.testResult.common);
    },

    // 3
    // Returns an array of record IDs of all Survey Targets (survey_target__v) for a specific account (account__v), for a
    // specific Survey (survey__v)
    // account - specifies the record id of the account__v to get all related Survey Targets from
    // survey - specifies the record id of the Survey to get all related Survey Targets from.  Can be made optional by putting in "".
    // callback - call back function which will be used to return the information
    getSurveyTarget_Account: function(account, survey, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("account", account);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getSurveyTarget_Account", callback, ret);
            return;
        }

        window["com_veeva_clm_accountSurveyTargets"] = function(result) {
            com.veeva.clm.wrapResult("getSurveyTarget_Account", callback, result);
        }

        query = null;
        if(survey == null || survey == "") {
            query = "vaultcrm:queryObject(survey_target__v),fields(id),where(WHERE account__v='" + account + "'),com_veeva_clm_accountSurveyTargets(result)";
        } else {
            query = "vaultcrm:queryObject(survey_target__v),fields(id),where(WHERE account__v='" + account + "' AND survey__v='" + survey + "'),com_veeva_clm_accountSurveyTargets(result)";
        }
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(query);
        else
            com_veeva_clm_accountSurveyTargets(com.veeva.clm.testResult.common);
    },


    /////////////////////// Order Management ///////////////////////

    // * Campaign and Contract based Pricing Rules are not supported by the JavaScript Library for CLM Order Management functions"
    // 1
    // Returns an array of record IDs of all products (product__v) of type Order that have valid list prices
    //          Valid list price = Pricing Rule (pricing_rule__v) of record type List Price (list_price_rule__v) where current date is
    //          between Start Date (start_date__v) and End Date (end_date__v)
    // callback - call back function which will be used to return the information
    // account/account group - specifies the record id of an account__v or the matching text for the account_group__v. Can be made optional
    // by putting in "". When utilized, returns an array of record IDs of all products (product__v) of type Order
    // that have valid list price records which specify the account__v or account_group__v.
    getProduct_OrderActive_Account: function(accountOrAccountGroup, callback) {
        var orderProducts;
        var ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // c, product
        window["com_veeva_clm_ordersWithListPrice"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            if(result.success) {
                orderIds = [];
                if(result.pricing_rule__v && result.pricing_rule__v.length > 0) {
                    for(i = 0; i < result.pricing_rule__v.length; i++) {
                        orderIds.push(result.pricing_rule__v[i].product__v);
                    }
                }

                ret.success = true;
                ret.product__v = orderIds;
                com.veeva.clm.wrapResult("getProduct_OrderActive_Account", callback, ret);
            } else {
                com.veeva.clm.wrapResult("getProduct_OrderActive_Account", callback, result);
            }
        };

        // b, got record type id
        window["com_veeva_clm_listPriceTypeId"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            if(result.success && result.object_type__v && result.object_type__v.length > 0) {
                listPriceObjectTypeId = result.object_type__v[0].id;

                // c, fetch product which has <list price> pricing rules
                var ids = [];
                for(i = 0; i < orderProducts.length; i++) {
                    ids.push(orderProducts[i].id);
                }

                dateString = com.veeva.clm.getCurrentDate();

                query = null;
                if(accountOrAccountGroup == null || accountOrAccountGroup == "") {
                    query = "vaultcrm:queryObject(pricing_rule__v),fields(id,product__v),where(WHERE object_type__v='" + listPriceObjectTypeId + "' AND start_date__v <= '" + dateString
                    + "' AND end_date__v >= '" + dateString + "' AND product__v CONTAINS " + com.veeva.clm.joinStringArrayForContains(ids) + "), com_veeva_clm_ordersWithListPrice(result)";
                } else {
                    query = "vaultcrm:queryObject(pricing_rule__v),fields(id,product__v),where(WHERE object_type__v='" + listPriceObjectTypeId + "' AND (account__v='" + accountOrAccountGroup
                    + "' OR account_group__v = '" + accountOrAccountGroup + "') AND start_date__v <='" + dateString + "' AND end_date__v >= '" + dateString
                    + "' AND product__v CONTAINS " + com.veeva.clm.joinStringArrayForContains(ids) + "), com_veeva_clm_ordersWithListPrice(result)";
                }

                if(!com.veeva.clm.testMode) {
                    com.veeva.clm.runAPIRequest(query);
                } else {
                    com_veeva_clm_ordersWithListPrice(testResult.listPrices)
                }


            } else {
                com.veeva.clm.wrapResult("getProduct_OrderActive_Account", callback, result);
            }
        };

        // a, get order products
        this.getProduct_MySetup("order__v", function(result) {
            // got the list order products,
            if(result.success) {

                orderProducts = result.product__v;
                if(orderProducts && orderProducts.length > 0) {
                    // b, find out List Price record type id
                    objectTypeQuery = "vaultcrm:queryObject(object_type__v),fields(id),where(WHERE object_name__v='pricing_rule__v' AND api_name__v='list_price_rule__v'),com_veeva_clm_listPriceTypeId(result)";
                    if(!com.veeva.clm.testMode)
                        com.veeva.clm.runAPIRequest(objectTypeQuery);
                    else
                        com_veeva_clm_listPriceTypeId(testResult.listPriceObjectType);
                } else {
                    ret.success = true;
                    ret.product__v = [];
                    com.veeva.clm.wrapResult("getProduct_OrderActive_Account", callback, ret);
                    return;
                }
            } else {
                // ERROR when geting Product of order type.
                com.veeva.clm.wrapResult("getProduct_OrderActive_Account", callback, result);
            }
        });

    },

    // 2
    // Returns an array of record IDs of all products (product__v) of type Kit Component (product_type__v field) who have
    // parent product (parent_product__v) = product
    // product - specifies the record id of the product of which to get all related Kit Components from
    // callback - call back function which will be used to return the information
    getProduct_KitComponents: function(product, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("product", product);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getProduct_KitComponents", callback, ret);
            return;
        }
        window["com_veeva_clm_childKitItems"] = function(result) {
            com.veeva.clm.wrapResult("getProduct_KitComponents", callback, result);
        };


        query = "vaultcrm:queryObject(product__v),fields(id),where(WHERE product_type__v='kit_item__v' AND parent_product__v='" + product + "'),com_veeva_clm_childKitItems(result)";
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(query);
        else
            com_veeva_clm_childKitItems(com.veeva.clm.testResult.common);
    },

    // 3
    // Returns an array of record IDs of Product Groups (product_group__v) that the specified product (product__v) is part of
    // product - specifies the record id of the product of which to get all related Product Groups from
    // callback - call back function which will be used to return the information
    getProductGroup_Product: function(product, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("product", product);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getProductGroup_Product", callback, ret);
            return;
        }
        window["com_veeva_clm_productProductGroups"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            var ret = {};
            if(result != null && result.success) {
                var rows = result.product_group__v;
                var groupIds = [];
                if(rows && rows.length > 0) {
                    for(i = 0; i < rows.length; i++) {
                        groupIds.push(rows[i].product_catalog__v);
                    }
                }

                ret.success = true;
                ret.product__v = groupIds;

                com.veeva.clm.wrapResult("getProductGroup_Product", callback, ret);
            } else if(result != null) {
                com.veeva.clm.wrapResult("getProductGroup_Product", callback, result);
            } else {
                // is not expected from low-level API
            }
        };


        query = "vaultcrm:queryObject(product_group__v),fields(id,product_catalog__v),where(WHERE product__v='" + product + "'),com_veeva_clm_productProductGroups(result)";
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(query);
        else
            com_veeva_clm_productProductGroups(com.veeva.clm.testResult.common);
    },


    // 4
    // Returns an array of record IDs of the last 10 Orders (order__v) for a particular account (account__v)
    // The order of last ten orders is based on the field order_date__v, descending.
    // account - specifies the record id of the account of which to get all related orders
    // callback - call back function which will be used to return the information
    getLastTenOrders_Account: function(account, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("account", account);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getLastTenOrders_Account", callback, ret);
            return;
        }

        window["com_veeva_clm_accountLastTenOrders"] = function(result) {
            com.veeva.clm.wrapResult("getLastTenOrders_Account", callback, result);
        };


        query = "vaultcrm:queryObject(order__v),fields(id),where(WHERE account__v='" + account + "'),sort(order_date__v,desc),limit(10),com_veeva_clm_accountLastTenOrders(result)";
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(query);
        else
            com_veeva_clm_accountLastTenOrders(com.veeva.clm.testResult.common);
    },

    // 5
    // Returns an array of record IDs of all Order Lines (order_line__v) for a particular order (order__v)
    // order - specifies the record id of the order of which to get all related order lines
    // callback - call back function which will be used to return the information
    getOrderLines_Order: function(order, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("order", order);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getOrderLines_Order", callback, ret);
            return;
        }
        window["com_veeva_clm_orderLines"] = function(result) {
            com.veeva.clm.wrapResult("getOrderLines_Order", callback, result);
        };


        query = "vaultcrm:queryObject(order_line__v),fields(id),where(WHERE order__v='" + order + "'),com_veeva_clm_orderLines(result)";
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(query);
        else
            com_veeva_clm_orderLines(com.veeva.clm.testResult.common);
    },

    // 6
    // Requires that an account__v be specified in order for any result to be returned.
    // Returns the record id for the currently valid List Price (pricing_rule__v) for a specific product (product__v) and account__v combination. Respects the account__v and Account Group List Price hierarchy.
    // Valid list price = Pricing Rule (pricing_rule__v) of record type List Price (list_price_rule__v) where current date is between Start Date (start_date__v) and End Date (end_date__v)
    // product - specifies the record id of the product of which to get the Pricing Rule for
    // account - specifies the account__v for which to select List Prices for
    // callback - call back function which will be used to return the information
    getListPrice_Product_Account: function(product, account, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("product", product);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getListPrice_Product_Account", callback, ret);
            return;
        }
        ret = this.checkArgument("account", account);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getListPrice_Product_Account", callback, ret);
            return;
        }

        window["com_veeva_clm_productDefaultPricingRules"] = function(result) {
            com.veeva.clm.wrapResult("getListPrice_Product_Account", callback, result);
        };

        window["com_veeva_clm_get_productDefaultPricingRules"] = function() {

            dateString = com.veeva.clm.getCurrentDate();
            groupQuery = "vaultcrm:queryObject(pricing_rule__v),fields(id),where(WHERE object_type__v='" + listPriceObjectTypeId + "' AND product__v = '" + product + "'"
            + " AND account_group__v='' AND account__v=''"
            + " AND start_date__v <= '" + dateString + "' AND end_date__v >= '" + dateString + "'), com_veeva_clm_productDefaultPricingRules(result)";
            if(!com.veeva.clm.testMode)
                com.veeva.clm.runAPIRequest(groupQuery);
            else {
                // TODO
                com_veeva_clm_productDefaultPricingRules(com.veeva.clm.testResult.listPrices);
            }
        };

        window["com_veeva_clm_productAccountGroupPricingRules"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            if(result.success && result.pricing_rule__v.length == 0) {
                // try account group
                com_veeva_clm_get_productDefaultPricingRules();
            }
            else
                com.veeva.clm.wrapResult("getListPrice_Product_Account", callback, result);
        };

        // 4 pricing rule for account group
        window['com_veeva_clm_accountGroup'] = function(result) {
            result = com.veeva.clm.formatResult(result);
            if(result.success) {
                accountGroup = result.Account.account_group__v;
                if(accountGroup != undefined && accountGroup != "") {
                    dateString = com.veeva.clm.getCurrentDate();
                    groupQuery = "vaultcrm:queryObject(pricing_rule__v),fields(id),where(WHERE object_type__v='" + listPriceObjectTypeId + "' AND product__v = '" + product + "'"
                    + " AND account_group__v='" + accountGroup + "'"
                    + " AND start_date__v <= '" + dateString + "' AND end_date__v >= '" + dateString + "'), com_veeva_clm_productAccountGroupPricingRules(result)";
                    if(!com.veeva.clm.testMode)
                        com.veeva.clm.runAPIRequest(groupQuery);
                    else {
                        // TODO
                        com_veeva_clm_productAccountGroupPricingRules(com.veeva.clm.testResult.listPrices);
                    }
                } else {
                    com_veeva_clm_get_productDefaultPricingRules();
                }
            }
            else {
                com.veeva.clm.wrapResult("getListPrice_Product_Account", callback, result);
            }
        };

        // 3 account group
        window["com_veeva_clm_productAccountPricingRules"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            if(result.success && result.pricing_rule__v.length == 0) {
                // try account group
                com.veeva.clm.getDataForObject("Account", account, "account_group__v", com_veeva_clm_accountGroup);
            }
            else
                com.veeva.clm.wrapResult("getListPrice_Product_Account", callback, result);
        };

        // 2
        window["com_veeva_clm_listPriceTypeId_getListPrice_Product_Account"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            if(result.success && result.object_type__v && result.object_type__v.length > 0) {
                listPriceObjectTypeId = result.object_type__v[0].id;

                dateString = com.veeva.clm.getCurrentDate();
                query = "vaultcrm:queryObject(pricing_rule__v),fields(id),where(WHERE object_type__v='" + listPriceObjectTypeId + "' AND product__v = '" + product + "'"
                + " AND account__v='" + account + "'"
                + " AND start_date__v <= '" + dateString + "' AND end_date__v >= '" + dateString + "'), com_veeva_clm_productAccountPricingRules(result)";

                if(!com.veeva.clm.testMode)
                    com.veeva.clm.runAPIRequest(query);
                else
                    com_veeva_clm_productAccountPricingRules(com.veeva.clm.testResult.listPrices);
            } else {
                com.veeva.clm.wrapResult("getListPrice_Product_Account", callback, result);
            }

        };

        // 1, fetch list price record type first
        objectTypeQuery = "vaultcrm:queryObject(object_type__v),fields(id),where(WHERE object_name__v='pricing_rule__v' AND api_name__v='list_price_rule__v'),com_veeva_clm_listPriceTypeId_getListPrice_Product_Account(result)";
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(objectTypeQuery);
        else
            com_veeva_clm_listPriceTypeId_getListPrice_Product_Account(testResult.listPriceObjectType);

    },

    /////////////////////// Approved Email ///////////////////////

    // Returns the record id(s) for the Approved Document which matches the values specified and approved_document_status__v = approved__v
    // Gets the approved document by querying all products of type Detail Topic or Detail and compares against
    // the query of any approved documents with the passed in vault_id and
    // document_num. If there are multiple documents with these same ids, an error is thrown.
    // vault_id - specifies the Vault id of the Approved Document to retrieve. (vault_instance_id__v on approved_document__v)
    // document_num - specifies the document number of the Approved Document to retrieve. (vault_document_id__v on approved_document__v)
    // callback - call back function which will be used to return the information
    getApprovedDocument: function(vault_id, document_num, callback) {
        var topicProducts;
        var detailProducts;
        var detailGroupProducts;
        var productGroups;

        // check callback parameter
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("vault_id", vault_id);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getApprovedDocument", callback, ret);
            return;
        }

        ret = this.checkArgument("document_num", document_num);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getApprovedDocument", callback, ret);
            return;
        }
		
		// check version 
		this.getAppVersion(function(result) {
          var isFeatureMultiProductSupported = false;
		  if (result.success) {
		    var version = result.Version;
		    // compare the version
		    var n = FEATURE_MULTI_PRODUCT_MIN_VERSION.localeCompare(version);
		    // returns -1 if the min version is before the current version
		    // returns 0 if the two versions are equal 
		    // returns 1 if the min version is after the current version
		    if (n < 1) {
              isFeatureMultiProductSupported = true;
		      //If the current version is compatible, run the request vaultcrm:getApprovedDocument to get the document
              //Otherwise, we just run existing js logic to return the document
		      window["com_veeva_clm_approvedDocument"] = function(result) {
		        result = com.veeva.clm.formatResult(result);
		        if (result.success && result.ApprovedDocumentId) {
		          var ret = {};
		          ret.approved_document__v = {};
		          ret.approved_document__v.id = result.ApprovedDocumentId;
		          ret.success = true;
		          com.veeva.clm.wrapResult("getApprovedDocument", callback, ret);
		          return;
		        } else {
		          var ret = {};
		          ret.success = false;
                  if(result.code != undefined){
                        ret.code = result.code;
                  }
                  if(result.message != undefined){
                        ret.message = result.message;
                  }
		          com.veeva.clm.wrapResult("getApprovedDocument", callback, ret);
		          return;
                }
		      }

		      query = "vaultcrm:getApprovedDocument(" + vault_id + "," + document_num + "),com_veeva_clm_approvedDocument(result)";
		      if (!com.veeva.clm.testMode)
		        com.veeva.clm.runAPIRequest(query);
		      else
		        com_veeva_clm_appVersion(com.veeva.clm.testResult.common);
		    }
		  }

          if( isFeatureMultiProductSupported == false) {
        // existing js logic to return the document
		// 2b Check results of Approved Document query against My Setup results
        window["com_veeva_clm_DocumentTypeId_getDocument"] = function(result) {
            result = com.veeva.clm.formatResult(result);

            if(result.success && result.approved_document__v && result.approved_document__v.length == 1) {
                var productsWithDetailGroups;

                //If we have access to detail groups, align products with detail groups
                if(detailGroupProducts != undefined && productGroups != undefined && productGroups.length > 0) {
                    productsWithDetailGroups = [];
                    var groupCount = 0;
                    for(var i = 0; i < detailGroupProducts.length; i++) {
                        for(var j = 0; j < productGroups.length; j++) {
                            //If the detail group product id matches the product group's Product Catalog id
                            //AND it is the product we are looking for, add it
                            if(detailGroupProducts[i].id != undefined
                                && productGroups[j].product_catalog__v != undefined
                                && productGroups[j].product__v != undefined
                                && detailGroupProducts[i].id == productGroups[j].product_catalog__v
                                && result.approved_document__v[0].product__v == productGroups[j].product__v) {
                                productsWithDetailGroups[groupCount] = {};
                                productsWithDetailGroups[groupCount].id = {};
                                productsWithDetailGroups[groupCount].detail_group__v = {};
                                productsWithDetailGroups[groupCount].id = productGroups[j].product__v;
                                productsWithDetailGroups[groupCount].detail_group__v = detailGroupProducts[i].id;
                                groupCount++;
                                break;
                            }
                        }
                    }
                }

                if(topicProducts && topicProducts.length > 0) {
                    //Check against the detail topics for a valid product match
                    for(var j = 0; j < topicProducts.length; j++) {
                        if(result.approved_document__v[0].product__v === topicProducts[j].id) {
                            //If we have product groups that match our current product, run through them
                            //Otherwise, we just have a product w/o detail groups, so return the document
                            if(productsWithDetailGroups != undefined && productsWithDetailGroups.length > 0) {
                                for(var i = 0; i < productsWithDetailGroups.length; i++) {
                                    if(result.approved_document__v[0].detail_group__v != undefined
                                        && result.approved_document__v[0].product__v == productsWithDetailGroups[i].id
                                        && result.approved_document__v[0].detail_group__v == productsWithDetailGroups[i].detail_group__v) {
                                        var ret = {};
                                        ret.approved_document__v = {};
                                        ret.approved_document__v.id = result.approved_document__v[0].id;
                                        ret.success = true;
                                        com.veeva.clm.wrapResult("getApprovedDocument", callback, ret);
                                        return;
                                    }
                                }
                            }
                            else {
                                var ret = {};
                                ret.approved_document__v = {};
                                ret.approved_document__v.id = result.approved_document__v[0].id;
                                ret.success = true;
                                com.veeva.clm.wrapResult("getApprovedDocument", callback, ret);
                                return;
                            }
                        }
                    }
                }
                if(detailProducts && detailProducts.length > 0) {
                    //Check against the details for a valid product match
                    for(var k = 0; k < detailProducts.length; k++) {
                        if(result.approved_document__v[0].product__v === detailProducts[k].id) {
                            //If we have product groups that match our current product, run through them
                            //Otherwise, we just have a product w/o detail groups, so return the document
                            if(productsWithDetailGroups != undefined && productsWithDetailGroups.length > 0) {
                                for(var i = 0; i < productsWithDetailGroups.length; i++) {
                                    if(result.approved_document__v[0].detail_group__v != undefined
                                        && result.approved_document__v[0].product__v == productsWithDetailGroups[i].id
                                        && result.approved_document__v[0].detail_group__v == productsWithDetailGroups[i].detail_group__v) {
                                        var ret = {};
                                        ret.approved_document__v = {};
                                        ret.approved_document__v.id = result.approved_document__v[0].id;
                                        ret.success = true;
                                        com.veeva.clm.wrapResult("getApprovedDocument", callback, ret);
                                        return;
                                    }
                                }
                            }
                            else {
                                var ret = {};
                                ret.approved_document__v = {};
                                ret.approved_document__v.id = result.approved_document__v[0].id;
                                ret.success = true;
                                com.veeva.clm.wrapResult("getApprovedDocument", callback, ret);
                                return;
                            }
                        }
                    }
                }
                //Found no match, return empty object
                var ret = {};
                ret.success = true;
                com.veeva.clm.wrapResult("getApprovedDocument", callback, ret);
            }
            //Query success, but we found more than one doc with the same vault id and doc num, so return empty
            else if(result.success && result.approved_document__v && result.approved_document__v.length > 1) {
                var ret = {};
                ret.success = true;
                com.veeva.clm.wrapResult("getApprovedDocument", callback, ret);
            }
            else {
                if(result.code == 1021) {
                    if(result.message.indexOf("detail_group__v") >= 0) {
                        approvedDocumentQuery = "vaultcrm:queryObject(approved_document__v),fields(id,product__v),where(WHERE vault_instance_id__v='" + vault_id
                        + "' AND vault_document_id__v='" + document_num + "' AND approved_document_status__v='approved__v'),com_veeva_clm_DocumentTypeId_getDocument(result)";

                        if(!com.veeva.clm.testMode)
                            com.veeva.clm.runAPIRequest(approvedDocumentQuery);
                        else
                            com_veeva_clm_DocumentTypeId_getDocument(testResult.approvedDocumentWithId2);
                    }
                    return;
                }

                //Didn't find anything matching, return empty object with success true (not just an empty query object)
                var ret = {};
                ret.success = true;
                com.veeva.clm.wrapResult("getApprovedDocument", callback, ret);
            }
        };

        // 2a - If we have detail groups, get the product groups so we can align products to detail groups
        window["com_veeva_clm_getProductGroups"] = function(result) {
            result = com.veeva.clm.formatResult(result);

            if(result.success) {
                productGroups = result.product_group__v;

                approvedDocumentQuery = "vaultcrm:queryObject(approved_document__v),fields(id,product__v,detail_group__v),where(WHERE vault_instance_id__v='" + vault_id + "' AND vault_document_id__v='" + document_num + "' AND approved_document_status__v='approved__v'),com_veeva_clm_DocumentTypeId_getDocument(result)";

                if(!com.veeva.clm.testMode)
                    com.veeva.clm.runAPIRequest(approvedDocumentQuery);
                else
                    com_veeva_clm_DocumentTypeId_getDocument(testResult.approvedDocumentWithId);
            }
            else {
                if(result.code == 1011) {
                    //No access to Product Groups specifically, so just use Products
                    if(result.message.indexOf("product_group__v") >= 0) {
                        approvedDocumentQuery = "vaultcrm:queryObject(approved_document__v),fields(id,product__v),where(WHERE vault_instance_id__v='" + vault_id + "' AND vault_document_id__v='" + document_num + "' AND approved_document_status__v='approved__v'),com_veeva_clm_DocumentTypeId_getDocument(result)";

                        if(!com.veeva.clm.testMode)
                            com.veeva.clm.runAPIRequest(approvedDocumentQuery);
                        else
                            com_veeva_clm_DocumentTypeId_getDocument(testResult.approvedDocumentWithId2);
                    }
                    return;
                }
                com.veeva.clm.wrapResult("getApprovedDocument", callback, result);
            }
        };

        // 1, get detail topic products first
        com.veeva.clm.getProduct_MySetup("detail_topic__v", function(result) {
            result = com.veeva.clm.formatResult(result);

            // got a list of detail topic products
            if(result.success) {
                topicProducts = result.product__v;

                com.veeva.clm.getProduct_MySetup("detail__v", function(result) {
                    if(result.success) {
                        detailProducts = result.product__v;

                        com.veeva.clm.getProduct_MySetup("detail_group__v", function(result) {
                            if(result.success) {
                                detailGroupProducts = result.product__v;

                                var detailGroupIDs = [];
                                for(var i = 0; i < detailGroupProducts.length; i++) {
                                    detailGroupIDs[i] = detailGroupProducts[i].id;
                                }

                                var groupArray = com.veeva.clm.joinStringArrayForContains(detailGroupIDs);
                                if(groupArray == "") {
                                    groupArray = "{}";
                                }

                                //Pass in our detail groups and find any products associated with them
                                query = "vaultcrm:queryObject(product_group__v),fields(id,product__v,product_catalog__v),where(WHERE product_catalog__v CONTAINS " + groupArray + "),com_veeva_clm_getProductGroups(result)";
                                if(!com.veeva.clm.testMode)
                                    com.veeva.clm.runAPIRequest(query);
                                else
                                    com_veeva_clm_getProductGroups(com.veeva.clm.testResult.productGroups);

                            }
                            else {
                                // ERROR when getting Product of detail group type.
                                com.veeva.clm.wrapResult("getApprovedDocument", callback, result);
                                return;
                            }
                        });
                    }
                    else {
                        // ERROR when getting Product of detail type.
                        com.veeva.clm.wrapResult("getApprovedDocument", callback, result);
                        return;
                    }
                });
            } else {
                // ERROR when getting Product of detail topic type.
                com.veeva.clm.wrapResult("getApprovedDocument", callback, result);
                return;
            }
        });

		  }
		});
		
	},
    // Launches the Send Email user interface with the email template and fragments selected.  An account__v must be selected.
    // If CLM_Select_Account_Preview_Mode Veeva Setting is enabled, then Select Account dialogue is opened so the user can select an account.
    // If the Veeva Setting is not enabled and no account__v is selected, then no action will be performed.
    // email_template - specifies the record id of the Email Template to use
    // email_fragments - array or string with comma separated values of record IDs of the Email fragments to use.  Can be made optional by putting in ""
    // callback - call back function which will be used to return the information
    launchApprovedEmail: function(email_template, email_fragments, callback) {
        // check parameter

        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments and make them empty if they don't exist
        if(email_template == undefined || email_template == null) {
            email_template = "";
        }

        //Make sure email_fragments exists
        if(email_fragments == undefined || email_fragments == null) {
            email_fragments = "";
        }

        request = null;
        window["com_veeva_clm_launchApprovedEmail"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            if(result.success) {
                ret = {};
                ret.success = true;
                if(result.code != undefined) {
                    ret.code = result.code;
                    ret.message = result.message;
                }
                com.veeva.clm.wrapResult("launchApprovedEmail", callback, ret);
            } else {
                ret = {};
                ret.success = false;
                ret.code = result.code;
                ret.message = "Request: " + request + " failed: " + result.message;
                com.veeva.clm.wrapResult("launchApprovedEmail", callback, ret);
            }
        };

        request = "vaultcrm:launchApprovedEmail(" + email_template + "," + email_fragments + "),callback(com_veeva_clm_launchApprovedEmail)";

        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(request);
        else
            com_veeva_clm_launchApprovedEmail(com.veeva.clm.testResult.approvedEmailId);

    },

    /////////////////////// Functions to replace exising API calls ///////////////////////

    // 1
    // Returns the value of a field for a specific record related to the current call
    // object -  Limited to the following keywords: Account, TSF, User, Address, Call, Presentation, KeyMessage, and CallObjective.
    // field- field api name to return a value for
    // callback - call back function which will be used to return the information
    getDataForCurrentObject: function(object, field, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("object", object);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getDataForCurrentObject", callback, ret);
            return;
        }


        ret = this.checkArgument("field", field);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getDataForCurrentObject", callback, ret);
            return;
        }

        window["com_veeva_clm_getCurrentObjectField"] = function(result) {
            // TODO result format
            com.veeva.clm.wrapResult("getDataForCurrentObject", callback, result);
        }

        lowerName = object.toLowerCase();

        request = "vaultcrm:getDataForObjectV2(" + object + "),fieldName(" + field + "),com_veeva_clm_getCurrentObjectField(result)";
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(request, callback);
        else
            com_veeva_clm_getCurrentObjectField(com.veeva.clm.testResult.common);
    },

    // 2
    // Returns the value of a field for a specific record
    // object - specifies the object api name (object keywords used in getDataForCurrentObject are not valid, except for Account and User)
    // record - specifies the record id.
    // field- field api name to return a value for
    // callback - call back function which will be used to return the information
    getDataForObject: function(object, record, field, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("object", object);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getDataForObject", callback, ret);
            return;
        }


        ret = this.checkArgument("record", record);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getDataForObject", callback, ret);
            return;
        }

        ret = this.checkArgument("field", field);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getDataForObject", callback, ret);
            return;
        }

        window["com_veeva_clm_getObjectField"] = function(result) {
            // TODO result format
            com.veeva.clm.wrapResult("getDataForObject", callback, result);
        }


        request = "vaultcrm:getDataForObjectV2(" + object + "),objId(" + record + "),fieldName(" + field + "),com_veeva_clm_getObjectField(result)";
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(request, callback);
        else
            com_veeva_clm_getObjectField(com.veeva.clm.testResult.common);

    },


    // 3
    // Creates a new record for the specified object
    // object - specifies the object api name
    // values - json object with the fields and values to be written to the new record
    // callback - call back function which will be used to return the information
    // NOTE: This function returns success: true as long as the user has access to the object.
    //       If the user does not have access to one of the fields specified, success: true is still returned, however,
    //       and the fields the user does have access to are still updated.
    createRecord: function(object, values, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("object", object);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("createRecord", callback, ret);
            return;
        }


        ret = this.checkArgument("values", values);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("createRecord", callback, ret);
            return;
        }

        request = com.veeva.clm.generateSaveRecordRequest(object, values, "com_veeva_clm_createRecord");
        window["com_veeva_clm_createRecord"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            if(result.success) {
                ret = {};
                if (result.compatibility) {
                    ret.compatibility = result.compatibility;
                }
                ret.success = true;
                ret.operation = result.operation;
                ret[object] = {};
                ret[object].id = result.objectId;
                if(result.code != undefined) {
                    ret.code = result.code;
                    ret.message = result.message;
                }
                com.veeva.clm.wrapResult("createRecord", callback, ret);
            } else {
                ret = {};
                if (result.compatibility) {
                    ret.compatibility = result.compatibility;
                }
                ret.success = false;
                ret.code = 2100;
                ret.message = "Request: " + request + " failed: " + result.message;
                com.veeva.clm.wrapResult("createRecord", callback, ret);
            }
        };

        // create record
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(request);
        else
            com_veeva_clm_createRecord(com.veeva.clm.testResult.common);
    },

    // 4
    // Updates a specified record
    // object - specifies the object api name
    // record - specifies the record id to be updated
    // values - json object with the fields and values updated on the record
    // callback - call back function which will be used to return the information
    // NOTE: This function returns success: true as long as the user has access to the object.
    //       If the user does not have access to one of the fields specified, success: true is still returned, however,
    //       and the fields the user does have access to are still updated.
    updateRecord: function(object, record, values, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("object", object);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("updateRecord", callback, ret);
            return;
        }

        ret = this.checkArgument("record", record);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("updateRecord", callback, ret);
            return;
        }

        ret = this.checkArgument("values", values);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("updateRecord", callback, ret);
            return;
        }
        // Id is required for updating existing record
        values.IdNumber = record;

        // create record
        request = com.veeva.clm.generateSaveRecordRequest(object, values, "com_veeva_clm_updateRecord");

        window["com_veeva_clm_updateRecord"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            if(result.success) {
                ret = {};
                if (result.compatibility) {
                    ret.compatibility = result.compatibility;
                }
                ret.success = true;
                ret.operation = result.operation;
                ret[object] = {};
                ret[object].id = result.objectId;
                if(result.code != undefined) {
                    ret.code = result.code;
                    ret.message = result.message;
                }
                com.veeva.clm.wrapResult("updateRecord", callback, ret);
            } else {
                ret = {};
                if (result.compatibility) {
                    ret.compatibility = result.compatibility;
                }
                ret.success = false;
                ret.code = 2100;
                ret.message = "Request: " + request + " failed: " + result.message;
                com.veeva.clm.wrapResult("updateRecord", callback, ret);
            }
        };

        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(request);
        else
            com_veeva_clm_updateRecord(com.veeva.clm.testResult.common);
    },

    // 5a
    // Navigates to the specified key message (key_message__v)
    // key message - external id field of the key message to jump to. Usually is media_file_name__v, but does not have to be.
    // clm presentation - external id of the CLM Presentation if the key message is in a different CLM Presentation.
    // Usually is presentation_id__v, but does not have to be. Can be made optional by putting in "".
    gotoSlide: function(keyMessage, presentation) {

        ret = this.checkArgument("keyMessage", keyMessage);
        if(ret.success == false) {
            return ret;
        }

        request = null;
        if(presentation == undefined || presentation == null || presentation == "") {
            // goto within current presenation
            request = "vaultcrm:gotoSlide(" + keyMessage + ")";
        } else {
            request = "vaultcrm:gotoSlide(" + keyMessage + "," + presentation + ")";
        }

        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(request);

    },

    // 5b
    // Navigates to the specified key message (key_message__v)
    // key message - vault_external_id__v field of the key message to jump to
    // clm presentation - vault_external_id__v of the CLM Presentation if the key message is in a different CLM Presentation.
    // Can be made optional by putting in "".
    gotoSlideV2: function(keyMessage, presentation) {

        ret = this.checkArgument("keyMessage", keyMessage);
        if(ret.success == false) {
            return ret;
        }

        request = null;
        if(presentation == undefined || presentation == null || presentation == "") {
            // goto within current presentation
            request = "vaultcrm:gotoSlideV2(" + keyMessage + ")";
        } else {
            request = "vaultcrm:gotoSlideV2(" + keyMessage + "," + presentation + ")";
        }

        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(request);

    },

    // 6
    // Navigates to the next slide based on the CLM Presentation Slide display order
    nextSlide: function() {
        request = "vaultcrm:nextSlide()";
        com.veeva.clm.runAPIRequest(request);
    },

    // 7
    // Navigates to the previous slide based on the CLM Presentation Slide display order
    prevSlide: function() {
        request = "vaultcrm:prevSlide()";
        com.veeva.clm.runAPIRequest(request);
    },

    // 8
    // Returns the value of the field in UTC format.  Only works with field of type Date or Datetime.
    // object - specifies the object api name (object keywords used in getDataForCurrentObject are not valid, except for Account)
    // record - specifies the record id.
    // field- field api name to return a value for
    // callback - call back function which will be used to return the information
    getUTCdatetime: function(object, record, field, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("object", object);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getUTCdatetime", callback, ret);
            return;
        }


        ret = this.checkArgument("record", record);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getUTCdatetime", callback, ret);
            return;
        }

        ret = this.checkArgument("field", field);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getUTCdatetime", callback, ret);
            return;
        }

        window["com_veeva_clm_getUTCdatetime"] = function(result) {
            // TODO result format
            com.veeva.clm.wrapResult("getUTCdatetime", callback, result);
        }


        request = "vaultcrm:getDataForObjectV3(" + object + "),objId(" + record + "),fieldName(" + field + "),getUTCdatetime(true),callback(com_veeva_clm_getUTCdatetime)";
        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(request, callback);
        else
            com_veeva_clm_getUTCdatetime(com.veeva.clm.testResult.common);

    },

    // 9,
    // Updates the current record related to the call
    // object - specifies the object api name
    // values - json object with the fields and values updated on the record (ignores id field if specified)
    // callback - call back function which will be used to return the information
    // Uses saveObjectV2 call
    // Note: This function returns success: true as long as the user has access to the object and record specified.
    // If the user does not have access to one of the fields specified, success: true is still returned and the fields the user does have access to are updated.
    // If there are fields which are not accessible, code 0200 is returned and the message specifies the field names.
    // If there is no current record (user is in Media Preview), the function is temporarily saved and executed when an account__v is selected.
    // If no account__v is selected, the function is discarded on exit of Media Preview.  The callback function will not be executed if there is no current record.
    updateCurrentRecord: function(object, values, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("object", object);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("updateCurrentRecord", callback, ret);
            return;
        }

        ret = this.checkArgument("values", values);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("updateCurrentRecord", callback, ret);
            return;
        }

        // create record
        request = "vaultcrm:saveObjectV2(" + object + "),updateCurrentRecord(),value(" + JSON.stringify(values) + "),callback(com_veeva_clm_updateCurrentRecord)";

        window["com_veeva_clm_updateCurrentRecord"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            if(result.success) {
                ret = {};
                if (result.compatibility) {
                    ret.compatibility = result.compatibility;
                }
                ret.success = true;
                ret[object] = {};
                ret[object].id = result.objectId;
                if(result.code != undefined) {
                    ret.code = result.code;
                    ret.message = result.message;
                }
                com.veeva.clm.wrapResult("updateCurrentRecord", callback, ret);
            } else {
                ret = {};
                if (result.compatibility) {
                    ret.compatibility = result.compatibility;
                }
                ret.success = false;
                ret.code = 2100;
                ret.message = "Request: " + request + " failed: " + result.message;
                com.veeva.clm.wrapResult("updateCurrentRecord", callback, ret);
            }
        };

        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(request);
        else
            com_veeva_clm_updateCurrentRecord(com.veeva.clm.testResult.common);
    },

    // 10,
    // Formats a string for createRecordsOnExit() and returns it
    formatCreateRecords:function(objectArray, valueArray) {
        //check arguments
        ret = this.checkArgument("objectArray", objectArray);
        if(ret.success == false){
            return ret;
        }

        ret = this.checkArgument("valueArray", valueArray);
        if(ret.success == false){
            return ret;
        }

        if (!(objectArray instanceof Array)) {
            objectArray = [objectArray];
        }
        if (!(valueArray instanceof Array)) {
            valueArray = [valueArray];
        }

        //If the number of objects doesn't match the number of values, return
        ret = {};
        if (objectArray.length != valueArray.length) {
            ret.success = false;
            ret.code = 2003;
            ret.message = "Parameter arrays must be of equal length";
            return ret;
        }

        //Make the concatenation of all saveObjectV2 requests we need to make
        var fullString = "";
        for (var ndx = 0; ndx < objectArray.length; ndx++) {
            fullString = fullString.concat(com.veeva.clm.generateSaveRecordRequest(objectArray[ndx], valueArray[ndx], "") + ";");
        }

        return fullString;
    },

    // 11,
    // Formats a string for updateRecordsOnExit() and returns it
    formatUpdateRecords:function(objectNameArray, objectIdArray, valueArray) {
        //check arguments
        ret = this.checkArgument("objectNameArray", objectNameArray);
        if(ret.success == false){
            return ret;
        }

        ret = this.checkArgument("objectIdArray", objectIdArray);
        if(ret.success == false){
            return ret;
        }

        ret = this.checkArgument("valueArray", valueArray);
        if(ret.success == false){
            return ret;
        }

        if (!(objectNameArray instanceof Array)) {
            objectNameArray = [objectNameArray];
        }
        if (!(objectIdArray instanceof Array)) {
            objectIdArray = [objectIdArray];
        }
        if (!(valueArray instanceof Array)) {
            valueArray = [valueArray];
        }

        //If the number of objects doesn't match the number of values, return
        ret = {};
        if (objectNameArray.length != valueArray.length || objectNameArray.length != objectIdArray.length) {
            ret.success = false;
            ret.code = 2003;
            ret.message = "Parameter arrays must be of equal length";
            return ret;
        }

        //Make the concatenation of all saveObjectV2 requests we need to make
        var fullString = "";
        for (var ndx = 0; ndx < objectNameArray.length; ndx++) {
            //Set IdNumber in value array
            valueArray[ndx].IdNumber = objectIdArray[ndx];

            //concat string together
            fullString = fullString.concat(com.veeva.clm.generateSaveRecordRequest(objectNameArray[ndx], valueArray[ndx], "") + ";");
        }

        return fullString;
    },

    // 12,
    // Creates a string as if it was a request for updateCurrentRecord and returns it
    formatUpdateCurrentRecords:function(objectArray, valueArray) {
        //check arguments
        ret = this.checkArgument("objectArray", objectArray);
        if(ret.success == false){
            com.veeva.clm.wrapResult("formatUpdateCurrentRecord", callback, ret);
            return ret;
        }

        ret = this.checkArgument("valueArray", valueArray);
        if(ret.success == false){
            com.veeva.clm.wrapResult("formatUpdateCurrentRecord", callback, ret);
            return ret;
        }

        if (!(objectArray instanceof Array)) {
            objectArray = [objectArray];
        }
        if (!(valueArray instanceof Array)) {
            valueArray = [valueArray];
        }

        //If the number of objects doesn't match the number of values, return
        ret = {};
        if (objectArray.length != valueArray.length) {
            ret.success = false;
            ret.code = 2003;
            ret.message = "Parameter arrays must be of equal length";
            return ret;
        }

        //Make the concatenation of all saveObjectV2 requests we need to make
        var fullString = "";
        for (var ndx = 0; ndx < objectArray.length; ndx++) {
            fullString = fullString.concat("vaultcrm:saveObjectV2(" + objectArray[ndx] + "),updateCurrentRecord(),value(" + JSON.stringify(valueArray[ndx]) + "),callback()" + ";");
        }

        return fullString;
    },

    //13,
    // Formats a createRecord or updateRecord request in the proper form
    generateSaveRecordRequest:function(object, values, callback){
        return "vaultcrm:saveObjectV2(" + object + "),value(" + JSON.stringify(values) + "),callback(" + callback + ")";
    },

    //14,
    // Queries for and returns the specified fields for all records which match the where clause.
    // Also returns count of records returned.
    //
    // object - The API Name of the object that you want to query
    // fields - Comma delimited string of field API names
    //
    // Optional fields:
    // where - string for the where clause (See documentation for supported clauses).
    // sort - Array of strings which represents the sort, example: ["name__v, DESC", "status__v, ASC"]
    // limit - the maximum number of records to return
    queryRecord:function(object, fields, where, sort, limit, callback){
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("object", object);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("queryRecord", callback, ret);
            return;
        }

        ret = this.checkArgument("fields", fields);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("queryRecord", callback, ret);
            return;
        }

        //Don't check the Where, limit, or sort clauses because they can be null and thats acceptable.

        window["com_veeva_clm_queryRecordReturn"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            com.veeva.clm.wrapResult("queryRecord", callback, result);
            return;
        }

        request = "vaultcrm:queryObject(" + object + "),fields(" + fields + "),";
        if (where != null && where != undefined) {
            request = request + "where(" + where + "),";
        }
        if (sort != null && sort != undefined) {
            request = request + "sort(" + JSON.stringify(sort) + "),";
        }
        if (limit != null && limit != undefined) {
            request = request + "limit(" + limit + "),";
        }
        request = request + "com_veeva_clm_queryRecordReturn(result)";

        com.veeva.clm.runAPIRequest(request, callback);
    },

    //15,
    // Returns the translated label for each of the specified fields
    //
    // object - API Name of the object
    // fields - Array of Field API Names
    getFieldLabel:function(object, fields, callback){
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("object", object);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getFieldLabel", callback, ret);
            return;
        }

        ret = this.checkArgument("fields", fields);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getFieldLabel", callback, ret);
            return;
        }

        window["com_veeva_clm_getFieldLabelReturn"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            com.veeva.clm.wrapResult("getFieldLabel", callback, result);
            return;
        }

        request = "vaultcrm:getFieldLabel(" + object + "),fields(" + JSON.stringify(fields) + "), com_veeva_clm_getFieldLabelReturn(result)";
        com.veeva.clm.runAPIRequest(request, callback);
    },

    //16,
    // Returns each object type api name and object type translated label
    //
    // object - API Name of the object to get all record types for
    getObjectTypeLabels:function(object, callback){
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("object", object);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getObjectTypeLabels", callback, ret);
            return;
        }

        window["com_veeva_clm_getObjectTypeLabelsReturn"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            com.veeva.clm.wrapResult("getObjectTypeLabels", callback, result);
            return;
        }

        request = "vaultcrm:getObjectTypeLabels(" + object + "),com_veeva_clm_getObjectTypeLabelsReturn(result)";
        com.veeva.clm.runAPIRequest(request, callback);
    },

    // Wrapper for backward compatibility with the Salesforce-based CLM content
    getRecordTypeLabels:function(object, callback){
        this.getObjectTypeLabels(object, callback);
    },

    //17,
    // Returns the translated label for each of the picklist values of the specified field
    //
    // object - API Name of the object
    // field - API Name of the picklist field
    getPicklistValueLabels:function(object, field, callback){
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("object", object);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getPicklistValueLabels", callback, ret);
            return;
        }

        ret = this.checkArgument("field", field);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getPicklistValueLabels", callback, ret);
            return;
        }

        window["com_veeva_clm_getPicklistValueLabelsReturn"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            com.veeva.clm.wrapResult("getPicklistValueLabels", callback, result);
            return;
        }

        request = "vaultcrm:getPicklistValueLabels(" + object + "),field(" + field + "), com_veeva_clm_getPicklistValueLabelsReturn(result)";
        com.veeva.clm.runAPIRequest(request, callback);
    },

    //18,
    // Returns object translated labels array for each object API name
    // objects - array of object API Names to get translated labels for
    getObjectLabels:function(objects, callback){
        var ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("objects", objects);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("getObjectLabels", callback, ret);
            return;
        }

        window["com_veeva_clm_getObjectLabelsReturn"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            com.veeva.clm.wrapResult("getObjectLabels", callback, result);
            return;
        }

        request = "vaultcrm:getObjectLabels(" + JSON.stringify(objects) + "),com_veeva_clm_getObjectLabelsReturn(result)";
        com.veeva.clm.runAPIRequest(request, callback);
    },

    //19,
    // Returns HTTP Request result
    //
    // object - request object with all HTTP parameters
    request:function(object, callback){
        ret = this.checkCallbackFunction(callback);
        if(!ret.success) {
            return ret;
        }

        //check request object validity
        var errorMessage = this.validateRequestObjectWithErrorMessage(object);
        if (errorMessage !== "Valid") {
            var error = {
                success: false,
                code: 5,
                message: errorMessage
            };
            com.veeva.clm.wrapResult("request", callback, error);
            return;
        }

        this.addRequestObjectDefaultsAndFormat(object);

        window["com_veeva_clm_requestReturn"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            com.veeva.clm.wrapResult("request", callback, result);
            return;
        };

        var request = "vaultcrm:request(" + JSON.stringify(object) + "),com_veeva_clm_requestReturn(result)";
        com.veeva.clm.runAPIRequest(request, callback);
    },
	
	//20,
	// Returns the version of the current offline application
    getAppVersion: function(callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;
       
        window.com_veeva_clm_appVersion = function(result) {
			clearTimeout(timer);
            com.veeva.clm.wrapResult("getAppVersion", callback, result);
        }

		var timer = setTimeout(function() { 
				result = { success: false };
				com.veeva.clm.wrapResult("getAppVersion", callback, result);
		}, 1500);
		
        query = "vaultcrm:getAppVersion(),com_veeva_clm_appVersion(result)";
        if(!com.veeva.clm.testMode) {
            com.veeva.clm.runAPIRequest(query);
        } else {
            com_veeva_clm_appVersion(com.veeva.clm.testResult.common);
        }
    },

    /////////////////////// CLM Specific ///////////////////////
    //1,
    // Shows slide selector with specified presentation:key messages; callback gets notified if there aren't any valid key messages
    // The selector shows presentations in the same order as requested, but slide are in the order as defined in the presentation,
    // not the order specified in the request.
    launchSelector: function(presentationSlides, callback) {
        // check parameter
        var ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        // check arguments
        ret = this.checkArgument("presentationSlides", presentationSlides);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("presentationSlides", callback, ret);
            return;
        }

        if(presentationSlides.constructor === Array){
            // check each element for empty presentation id
            for(var i=0; i < presentationSlides.length; i++){
                var presentationMessages = presentationSlides[i]
                if(presentationMessages != null && typeof(presentationMessages) === 'object'){
                    for(var prop in presentationMessages){
                        if(presentationMessages.hasOwnProperty(prop) && prop == ""){
                            // empty presentastion id
                            ret = {};
                            ret.success = false;
                            ret.code = 2002;
                            ret.message = "presentation id is empty";
                            com.veeva.clm.wrapResult("presentationSlides", callback, ret);
                            return;
                        }
                    }
                }

            }
        }

        var request = null;
        window["com_veeva_clm_launchApprovedEmail"] = function(result) {
            result = com.veeva.clm.formatResult(result);
            var ret = {};
            if(result.success) {
                ret.success = true;
                if(result.code != undefined) {
                    ret.code = result.code;
                    ret.message = result.message;
                }
                com.veeva.clm.wrapResult("launchSelector", callback, ret);
            } else {
                ret.success = false;
                ret.code = result.code;
                ret.message = "Request: " + request + " failed: " + result.message;
                com.veeva.clm.wrapResult("launchSelector", callback, ret);
            }
        };

        request = "vaultcrm:launchSelector(" + JSON.stringify(presentationSlides) + "),callback(com_veeva_clm_launchSelector)";

        if(!com.veeva.clm.testMode)
            com.veeva.clm.runAPIRequest(request);
        else
            com_veeva_clm_launchSelector(com.veeva.clm.testResult.launchSelectorResult);

    },

    /////////////////////// Engage ///////////////////////

    // 1,
    // Creates a new record for Multichannel activity line.  The Engage code will automatically fill in the Multichannel Activity,
    // Asset Version, Asset VExternal id, Call (if there is one), DateTime, Debug?, Multichannel Content, Multichannel Content Asset,
    // Sent Email (if there is one), View Order (if Event Type = Slide View).  Custom = "True" will always be set and the Name is autonumbered.
    // If not specified with custom values, Detail Group, Detail Group VExternal Id, Key Message, Key Message VExternal id, Product,
    // Product VExternal id are also automatically filled in.
    // values - json object with the fields and values updated on the record
    // callback - call back function which will be used to return the information
    createMultichannelActivityLine: function(values, callback) {
        ret = this.checkCallbackFunction(callback);
        if(ret.success == false)
            return ret;

        ret = this.checkArgument("values", values);
        if(ret.success == false) {
            com.veeva.clm.wrapResult("createMultichannelActivityLine", callback, ret);
            return;
        }

        window["com_veeva_clm_createActivityLine"] = function(result) {
            com.veeva.clm.wrapResult("createMultichannelActivityLine", callback, result);
        }

        request = "vaultcrm:createActivityLine(),value(" + JSON.stringify(values) + "),com_veeva_clm_createActivityLine(result)";
        com.veeva.clm.runAPIRequest(request, callback);
    },

    /////////////////////// Supporting Functions ///////////////////////

    // join string array to a in expression
    joinStringArrayForContains: function(result) {
        var ret = "";
        if(result.length > 0) {
            for(i = 0; i < result.length; i++) {
                if(i == 0)
                    ret += "('" + result[i] + "'";
                else {
                    ret += ",'" + result[i] + "'";
                }

            }
            ret += ")";
        }

        return ret;
    },

    joinFieldArray: function(fields) {
        var ret = "";
        if(fields.length > 0) {
            for(i = 0; i < fields.length; i++) {
                if(i == 0)
                    ret += fields[i];
                else {
                    ret += "," + fields[i];
                }

            }
        }

        return ret;
    },

    isFunction: function(toCheck) {
        var getType = {};
        return toCheck && getType.toString.call(toCheck) === '[object Function]';
    },

    checkCallbackFunction: function(toCheck) {
        // check arguments
        ret = {};
        if(toCheck == undefined) {
            ret.success = false;
            ret.code = 2000
            ret.message = "callback is missing";
            return ret;
        }

        if(this.isFunction(toCheck) == false) {
            ret.success = false;
            ret.code = 2001;
            ret.message = "callback is not a JavaScript function";
        } else {
            ret.success = true;
        }

        return ret;
    },

    checkArgument: function(name, value) {
        ret = {};
        ret.success = true;
        if(value == undefined || value == null || value == "") {
            ret.success = false;
            ret.code = 2002;
            ret.message = name + " is empty";
        }


        return ret;
    },

    validateRequestObjectWithErrorMessage: function(request) {
        var errorString = "";

        //validate that an object is passed in
        if (typeof request !== "object") {
            errorString = "Invalid request.  Must be an object.";
        }
        //validate url
        //url must be a string
        //value is required
        else if (typeof request.url !== "string" || request.url.length <= 0) {
            errorString = "Invalid URL value. Must be a non-empty String";
        }
        //validate method
        //method must be one of the valid HTTP verbs
        //optional
        else if (request.method && !this.validateMethod(request.method)) {
            errorString = "Invalid method value. Must be a valid HTTP method.";
        }
        //validate headers
        //must be an object whose values are all strings
        //optional
        else if (request.headers && !this.validateHeaders(request.headers)) {
            errorString = "Invalid headers value. Must be an object with values of type String";
        }
        //validate timeout
        //must be a number
        //optional
        else if (request.timeout && (typeof request.timeout !== "number" || request.timeout <= 0)) {
            errorString = "Invalid timeout value. Must be a positive number";
        }
        //validate expect
        //must be a "text" or "blob"
        //optional
        else if (request.expect && !this.validateExpect(request.expect)) {
            errorString = "Invalid expect value.  Must be a String of value 'text' or 'blob'";
        }
        else {
            errorString = "Valid";
        }

        return errorString;
    },

    methods: ['POST', 'GET', 'HEAD', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH'],

    validateMethod: function(method) {
        return typeof method === "string" && !!~this.methods.indexOf(method.toUpperCase());
    },

    validateHeaders: function(headers) {
        if (typeof headers === "object") {
            var keys = Object.keys(headers);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var headerValue = headers[key];
                if (typeof headerValue !== "string") {
                    return false;
                }
            }
        } else {
            return false;
        }
        return true;
    },

    validateExpect: function(expect) {
        return typeof expect === "string" && (expect.toLowerCase() === "text" || expect.toLowerCase() === "blob");
    },

    addRequestObjectDefaultsAndFormat: function(request) {
        if (!request.method) {
            request.method = "GET";
        } else {
            request.method = request.method.toUpperCase();
        }
        if (!request.headers) {
            request.headers = {};
        }
        if (!request.timeout) {
            request.timeout = 30;
        }
        if (!request.body) {
            request.body = "";
        }
        if (!request.expect) {
            request.expect = "text";
        } else {
            request.expect = request.expect.toLowerCase();
        }
    },

    getCurrentDate: function() {
        var currentDate = new Date();
        dateString = currentDate.getFullYear().toString();
        month = currentDate.getMonth() + 1;
        if(month < 10) {
            dateString += "-0" + month;
        }
        else {
            dateString += "-" + month;
        }
        date = currentDate.getDate();
        if(date < 10) {
            dateString += "-0" + date;
        } else {
            dateString += "-" + date;
        }

        return dateString;
    },

    formatResult: function(result) {
        if(com.veeva.clm.isWin8()) {
            if(typeof result == "string") {
                result = eval("(" + result + ")");
            }
        }
        return result;
    },

    wrapResult: function(apiName, userCallback, result) {
        result = com.veeva.clm.formatResult(result);
        if(result.success)
            userCallback(result);
        else {
            result.message = apiName + ": " + result.message;
            userCallback(result);
        }
    },

    runAPIRequest: function(request, callback) {
        if(com.veeva.clm.isEngage()) {
            com.veeva.clm.engageAPIRequest(request, callback);
        } else if(com.veeva.clm.isWin8()) {
            window.external.notify(request);
        } else if(com.veeva.clm.isVeevaMessagingEnabled()) {
            window.webkit.messageHandlers.veeva.postMessage({"message": request});
        } else {
            // existing code in this block could be deleted, but to play safe, we keep 
	    // as is just in case some legacy applications still need them.
            // we will eventually remove this code block.
            request = request.replace(/^vaultcrm:/, '');
            request = encodeURIComponent(request);
            request = "vaultcrm:" + request;
            document.location = request;
        }
    },

    isVeevaMessagingEnabled: function() { 
        return Boolean(window.webkit.messageHandlers.veeva);
    },

    isWin8: function() {
        if(navigator.platform.toLowerCase().indexOf("win") >= 0)
            return true;
        else
            return false;
    },


    isEngage: function() {
        if(window.self !== window.top) {
            return true;
        }
        return false;
    },

    engageAPIRequest: function(request, callback) {
        if(com.veeva.clm.engageHasListener === false) {
            com.veeva.clm.engageHasListener = true;
            com.veeva.clm.engageCallbackId = 0;
            function receiveMessage(event) {
                var data = JSON.parse(event.data);
                var callbackId = data.callback;
                if(callbackId !== undefined && callbackId !== null) {
                    var callbackFunc = com.veeva.clm.engageCallbackList[callbackId];
                    if(callbackFunc !== undefined && callbackFunc !== null) {
                        callbackFunc.call(null, data);
                        // don't want to splice because that would change the length
                        // of the array and could affect the index based access
                        delete com.veeva.clm.engageCallbackList[callbackId];
                    }
                }
            }

            if(!window.addEventListener) {
                window.attachEvent("onmessage", receiveMessage);
            } else {
                window.addEventListener("message", receiveMessage, false);
            }
        }
        setTimeout(function() {
            com.veeva.clm.engageCallbackId += 1;
            var callbackId = com.veeva.clm.engageCallbackId;
            com.veeva.clm.engageCallbackList[callbackId] = callback;
            var tokens = request.split("),");
            if(tokens.length > 1) {
                // replace the last token (the original callback) with a callback id
                tokens[tokens.length - 1 ] = callbackId;
                request = tokens.join("),");
            }
            window.parent.postMessage(request, "*");

        }, 1);
    },

    listPriceObjectTypeId: null,
    accountId: null,
    addressId: null,
    callId: null,
    tsfId: null,
    userId: null,
    presentationId: null,
    keyMessageId: null,
    engageHasListener: false,
    engageCallbackId: null,
    engageCallbackList: [],
    testMode: false,
    testResult: null

};

com.veeva.clm.initialize = function initializeEngage() {
    var internalMessage = false;
    var frameScale = 1;

    if(!window.addEventListener) {
        window.attachEvent("onmessage", engageMessage);
    } else {
        window.addEventListener("message", engageMessage, false);
    }

    document.onmousemove = function(event) {
        if(internalMessage === true) {
            return;
        }

        var e = event || window.event;
        sendMouseEvent(e, "mousemove");
    };

    document.onclick = function(event) {
        if(internalMessage === true) {
            return;
        }

        var e = event || window.event;
        sendMouseEvent(e, "click");
    };

    document.onchange = function(event) {
        if(internalMessage === true) {
            return;
        }

        var e = event || window.event;
        var target = e.target || e.srcElement;

        if(target) {
            var eLocation = {};
            var offsetSum = getOffset(target);
            eLocation.x = offsetSum.left + target.offsetWidth/2;
            eLocation.y = offsetSum.top + target.offsetHeight/2;
            sendChangeEvent("change", target, eLocation);
        }
    };

    document.onkeypress = function(event) {
        if(internalMessage === true) {
            return;
        }

        var e = event || window.event;
        var target = e.target || e.srcElement;

        if(target) {
            var keyCode = (typeof e.which === "number") ? e.which : e.keyCode;
            //Only transmit return keypress
            if(keyCode === 13) {
                var eLocation = {};
                var offsetSum = getOffset(target);
                eLocation.x = offsetSum.left + target.offsetWidth/2;
                eLocation.y = offsetSum.top + target.offsetHeight/2;
                sendKeyboardEvent("keypress", keyCode, eLocation);
            }
        }
    };

    document.onscroll = function(event) {
        if(internalMessage === true) {
            return;
        }

        var e = event || window.event;
        var target = e.target || e.srcElement;

        if(target) {
            var scrollPosition = {};
            if(target.scrollingElement) {
                scrollPosition.left = target.scrollingElement.scrollLeft;
                scrollPosition.top = target.scrollingElement.scrollTop;
            } else if(target.documentElement) {
                scrollPosition.left = target.documentElement.scrollLeft;
                scrollPosition.top = target.documentElement.scrollTop;
            }
            sendScrollEvent("scroll", scrollPosition);
        }
    }

    function getOffset(target) {
        if(target.offsetParent) {
            var newTarget = target.offsetParent;
            var offsetSum = getOffset(newTarget);
            return {
                left: offsetSum.left + target.offsetLeft,
                top: offsetSum.top + target.offsetTop
            }
        } else {
            return {
                left: target.offsetLeft,
                top: target.offsetTop
            }
        }
    }

    function sendMouseEvent(event, eventType) {
        var message = {};
        message.type = "iframe";
        message.event = {};
        message.event.type = eventType;
        message.event.clientX = event.clientX;
        message.event.clientY = event.clientY;

        window.parent.postMessage(JSON.stringify(message), "*");
    }

    function sendChangeEvent(eventType, target, eventLocation) {
        var message = {};
        message.type = "iframe";
        message.event = {};
        message.event.type = eventType;
        message.event.value = target.value;
        message.event.location = eventLocation;

        window.parent.postMessage(JSON.stringify(message), "*");
    }

    function sendKeyboardEvent(eventType, keyCode, eventLocation) {
        var message = {};
        message.type = "iframe";
        message.event = {};
        message.event.type = eventType;
        message.event.keyCode = keyCode;
        message.event.location = eventLocation;

        window.parent.postMessage(JSON.stringify(message), "*");
    }

    function sendScrollEvent(eventType, scrollPosition) {
        var message = {};
        message.type = "iframe";
        message.event = {};
        message.event.type = eventType;
        message.event.scrollPosition = scrollPosition;

        window.parent.postMessage(JSON.stringify(message), "*");
    }

    function engageMessage(message) {
        var data = JSON.parse(message.data);

        if(data.type && data.type === "events") {
            internalMessage = true;

            // Get scrolling offset
            var scrollX = 0;
            var scrollY = 0;
            if(document.scrollingElement) {
                scrollX = document.scrollingElement.scrollLeft;
                scrollY = document.scrollingElement.scrollTop;
            } else if(document.documentElement) {
                scrollX = document.documentElement.scrollLeft;
                scrollY = document.documentElement.scrollTop;
            }

            if(data.event.type === "change") {
                data.event.location.x -= scrollX;
                data.event.location.y -= scrollY;

                if(frameScale) {
                    data.event.location.x *= frameScale;
                    data.event.location.y *= frameScale;
                }

                var target =  document.elementFromPoint(data.event.location.x, data.event.location.y);
                if(target) {
                    simulateChangeEvent(target, data);
                }
            } else if(data.event.type === "keypress") {
                data.event.location.x -= scrollX;
                data.event.location.y -= scrollY;

                if(frameScale) {
                    data.event.location.x *= frameScale;
                    data.event.location.y *= frameScale;
                }

                var target =  document.elementFromPoint(data.event.location.x, data.event.location.y);
                if(target) {
                    simulateKeypressEvent(target, data);
                }
            } else if(data.event.type === "scroll") {
                simulateScrollEvent(data);
            } else {
                var target =  document.elementFromPoint(data.event.clientX, data.event.clientY);
                if(target) {
                    simulateMouseEvent(target, data);
                }
            }
        } else if(data.type && data.type === "scale") {
            if(typeof data.value === "number" && data.value > 0) {
                frameScale = data.value;
            }
        }
    }

    function simulateChangeEvent(target, data) {
        target.value = data.event.value;
        var evt = htmlEvent(data.event.type);
        dispatchEvent(target, evt, data.event.type);
    }

    function simulateKeypressEvent(target, data) {
        //Treat the keypress event as a click event since keypress event does not work in some content
        var evt = mouseEvent("click", 0, 0, data.event.location.x, data.event.location.y);
        dispatchEvent(target, evt, "click");
    }

    function simulateScrollEvent(data) {
        var scrollPosition = data.event.scrollPosition;

        if(document.scrollingElement) {
            document.scrollingElement.scrollLeft = scrollPosition.left;
            document.scrollingElement.scrollTop = scrollPosition.top;
        } else if(document.documentElement) {
            document.documentElement.scrollLeft = scrollPosition.left;
            document.documentElement.scrollTop = scrollPosition.top;
        }
    }

    function simulateMouseEvent(target, data) {
        var evt = mouseEvent(data.event.type, 0, 0, data.event.clientX, data.event.clientY);
        dispatchEvent(target, evt, data.event.type);
    }

    function htmlEvent(type) {
        var evt;
        var e = {
            bubbles: true,
            cancelable: true
        };
        if (typeof( document.createEvent ) == "function") {
            evt = document.createEvent("HTMLEvents");
            evt.initEvent(type, e.bubbles, e.cancelable);
        } else if (document.createEventObject) {
            evt = document.createEventObject();
            evt.eventType = type;
            for (prop in e) {
                evt[prop] = e[prop];
            }
        }
        return evt;
    }

    function mouseEvent(type, sx, sy, cx, cy) {
        var evt;
        var e = {
            bubbles: true,
            cancelable: (type != "mousemove"),
            view: window,
            detail: 0,
            screenX: sx,
            screenY: sy,
            clientX: cx,
            clientY: cy,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            button: 0,
            relatedTarget: undefined
        };
        if (typeof( document.createEvent ) == "function") {
            evt = document.createEvent("MouseEvents");
            evt.initMouseEvent(type,
                e.bubbles, e.cancelable, e.view, e.detail,
                e.screenX, e.screenY, e.clientX, e.clientY,
                e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
                e.button, document.body.parentNode);
        } else if (document.createEventObject) {
            evt = document.createEventObject();
            for (prop in e) {
                evt[prop] = e[prop];
            }
            evt.button = { 0:1, 1:4, 2:2 }[evt.button] || evt.button;
        }
        return evt;
    }

    function dispatchEvent (el, evt, type) {
        if (el.dispatchEvent) {
            el.dispatchEvent(evt);
        } else if (el.fireEvent) {
            el.fireEvent('on' + type, evt);
        }
        return evt;
    }


};


//support functions to allow Windows Modern to support the OnExit functions
com_veeva_clm_createRecordsOnExit = function() {
	return com.veeva.clm.createRecordsOnExit();
}
com_veeva_clm_updateRecordsOnExit = function() {
	return com.veeva.clm.updateRecordsOnExit();
}
com_veeva_clm_updateCurrentRecordsOnExit = function() {
	return com.veeva.clm.updateCurrentRecordsOnExit();
}


com.veeva.clm.initialize();
