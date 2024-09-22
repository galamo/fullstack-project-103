"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCustomers = searchCustomers;
const connection_1 = require("../../db/connection");
function searchCustomers(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, connection_1.getConnection)();
        console.log("query obj", query);
        let values = [];
        let queryArr = [];
        console.log("queryArr ", queryArr);
        console.log("values", values);
        for (const property in query) {
            console.log("property", property);
            let propertyWIthType = property;
            if (query[propertyWIthType]) {
                console.log("push", query[propertyWIthType], propertyWIthType);
                values.push(query[propertyWIthType]);
                queryArr.push(`${propertyWIthType} = ? `);
            }
        }
        const q = queryArr.join(" AND ");
        const v = values.filter(v => v);
        console.log("query=>", q);
        console.log("values=>", v);
        const customers = yield (connection === null || connection === void 0 ? void 0 : connection.execute(`SELECT * FROM customers 
        ${v.length > 0 ? 'where ' : ' '}  
        ${q};`, values));
        const result = customers === null || customers === void 0 ? void 0 : customers[0];
        return result;
    });
}
