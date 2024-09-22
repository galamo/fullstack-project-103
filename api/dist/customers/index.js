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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const getCustomers_1 = require("./handlers/getCustomers");
const createCustomer_1 = require("./handlers/createCustomer");
const deleteCustomer_1 = require("./handlers/deleteCustomer");
const updateCustomer_1 = require("./handlers/updateCustomer");
const searchCustomers_1 = require("./handlers/searchCustomers");
const router = express_1.default.Router();
exports.router = router;
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, getCustomers_1.getCustomers)();
        res.json({ customers: data });
    }
    catch (error) {
        res.send("Something went wrong");
    }
}));
router.get("/search", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = req.query;
        const { job_title, city, country_region } = queryParams;
        const data = yield (0, searchCustomers_1.searchCustomers)({ job_title, city, country_region });
        res.json({ customers: data });
    }
    catch (error) {
        console.log(error);
        res.send("Something went wrong");
    }
}));
router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCustomer = extractCustomer(req.body);
        const result = yield (0, createCustomer_1.createCustomer)(newCustomer);
        res.json({ result });
    }
    catch (error) {
        res.send("Something went wrong");
    }
}));
router.delete("/:idToDelete", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const affectedRows = yield (0, deleteCustomer_1.deleteCustomer)(+req.params.idToDelete);
        res.json({ affectedRows });
    }
    catch (error) {
        res.send("Something went wrong");
    }
}));
router.put("/:idToUpdate", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("put");
        const customerToUpdate = extractCustomer(req.body);
        console.log(customerToUpdate, req.params.idToUpdate);
        const affectedRows = yield (0, updateCustomer_1.updateCustomer)(+req.params.idToUpdate, customerToUpdate);
        res.json({ affectedRows });
    }
    catch (error) {
        console.log(error.message);
        res.send("Something went wrong");
    }
}));
function extractCustomer(body) {
    const { firstName, lastName, company, email, jobTitle } = body;
    return { firstName, lastName, company, email, jobTitle };
}
