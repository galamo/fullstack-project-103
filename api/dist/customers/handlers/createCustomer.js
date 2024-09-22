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
exports.createCustomer = createCustomer;
const connection_1 = require("../../db/connection");
function createCustomer(customer) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `INSERT INTO customers 
    (company, last_name, first_name, email_address, job_title)
     VALUES (?, ?, ?, ?, ?);`;
        const connection = yield (0, connection_1.getConnection)();
        const result = yield (connection === null || connection === void 0 ? void 0 : connection.execute(query, [customer.company, customer.firstName, customer.lastName, customer.email, customer.jobTitle]));
        // @ts-ignore
        return result[0].insertId;
    });
}
