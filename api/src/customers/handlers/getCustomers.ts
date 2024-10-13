import { getConnection } from "../../db/connection";

export async function getCustomers() {
  const connection = await getConnection();
  const customers = await connection?.execute(
    "SELECT * FROM customers where job_title = ?",
    ["Purchasing Manager"]
  );
  const result = customers?.[0];
  return result;
}

export async function getCustomerByEmail(email: string) {
  const connection = await getConnection();
  const customers = await connection?.execute(
    "SELECT * FROM customers where email_address = ?",
    [email]
  );
  const result = customers?.[0];
  return result;
}
