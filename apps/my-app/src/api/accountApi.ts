import { createResourceApi } from './httpApi';

export type Account = Record<string, any>;

const API_BASE_URL = 'http://localhost:9010/api/accounts';

// Create account API using the generic resource API
const accountApi = createResourceApi<Account>(API_BASE_URL);

/**
 * Fetch all accounts from the API
 */
export const fetchAccounts = accountApi.fetchAll;

/**
 * Fetch a single account by ID
 */
export const fetchAccountById = accountApi.fetchById;

/**
 * Create a new account
 */
export const createAccount = accountApi.create;

/**
 * Update an existing account
 */
export const updateAccount = accountApi.update;

/**
 * Partially update an account (PATCH)
 */
export const patchAccount = accountApi.patch;

/**
 * Delete an account
 */
export const deleteAccount = accountApi.remove;

