import { getConnection } from "../../db/connection";

export async function register(userName: string, password: string) {
  const connection = await getConnection();
  const user = await connection?.execute(
    "INSERT INTO `northwind`.`users` (`userName`, `password`) VALUES (?, ?);",
    [userName, password]
  );
  const result = user?.[0];
  return result;
}

export async function loginUser(userName: string, password: string) {
  const connection = await getConnection();
  const user = await connection?.execute(
    "SELECT * FROM users where userName = ? AND password = ?",
    [userName, password]
  );
  const result = user?.[0];
  return result;
}
