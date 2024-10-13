import express from "express";
import { getCustomerByEmail, getCustomers } from "./handlers/getCustomers";
import { createCustomer, CustomerType } from "./handlers/createCustomer";
import { deleteCustomer } from "./handlers/deleteCustomer";
import { updateCustomer } from "./handlers/updateCustomer";
import { searchCustomers } from "./handlers/searchCustomers";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await getCustomers();
    res.json({ customers: data });
  } catch (error) {
    res.send("Something went wrong");
  }
});

router.get("/search", async (req, res, next) => {
  try {
    const queryParams = req.query;
    const { job_title, city, country_region } = queryParams;
    const data = await searchCustomers({
      job_title,
      city,
      country_region,
    } as any);
    res.json({ customers: data });
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});
router.get("/:email", async (req, res, next) => {
  try {
    if (typeof req?.params?.email !== "string") throw new Error();
    const data = await getCustomerByEmail(req?.params?.email?.toString());
    res.json({ customers: data });
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newCustomer: CustomerType = extractCustomer(req.body);
    const result = await createCustomer(newCustomer);
    res.json({ result });
  } catch (error) {
    res.send("Something went wrong");
  }
});
router.delete("/:idToDelete", async (req, res, next) => {
  try {
    const affectedRows = await deleteCustomer(+req.params.idToDelete);
    res.json({ affectedRows });
  } catch (error) {
    res.send("Something went wrong");
  }
});
router.put("/:idToUpdate", async (req, res, next) => {
  try {
    console.log("put");
    const customerToUpdate = extractCustomer(req.body);
    console.log(customerToUpdate, req.params.idToUpdate);
    const affectedRows = await updateCustomer(
      +req.params.idToUpdate,
      customerToUpdate
    );
    res.json({ affectedRows });
  } catch (error) {
    console.log((error as any).message);
    res.send("Something went wrong");
  }
});

function extractCustomer(body: any): CustomerType {
  const { firstName, lastName, company, email, jobTitle } = body;
  return { firstName, lastName, company, email, jobTitle };
}

export { router };
