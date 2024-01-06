module.exports = {
  channels: {
    GET_CAT_ENV: 'get_categories_and_envelopes',
    LIST_CAT_ENV: 'list_categories_and_envelopes',
    GET_ENV_LIST: 'get_envelope_list',
    LIST_ENV_LIST: 'list_envelope_list',

    GET_BUDGET_ENV: 'get_budget_envelopes',
    LIST_BUDGET_ENV: 'list_budget_envelopes',
    GET_PREV_BUDGET: 'get_prev_budget',
    LIST_PREV_BUDGET: 'list_prev_budget',
    GET_CUR_BUDGET: 'get_cur_budget',
    LIST_CUR_BUDGET: 'list_cur_budget',
    GET_PREV_ACTUAL: 'get_prev_actual',
    LIST_PREV_ACTUAL: 'list_prev_actual',
    GET_CUR_ACTUAL: 'get_cur_actual',
    LIST_CUR_ACTUAL: 'list_cur_actual',
    GET_CURR_BALANCE: 'get_curr_balance',
    LIST_CURR_BALANCE: 'list_curr_balance',
    GET_MONTHLY_AVG: 'get_monthly_avg',
    LIST_MONTHLY_AVG: 'list_monthly_avg',

    GET_TX_DATA: 'get_tx_date',
    LIST_TX_DATA: 'list_tx_data',
    DEL_TX_LIST: 'del_tx_list',
    DONE_DEL_TX_LIST: 'done_del_tx_list',
    UPDATE_TX_ENV_LIST: 'update_tx_env_list',
    DONE_UPDATE_TX_ENV_LIST: 'done_update_tx_env_list',
    ADD_TX: 'add_transaction',
    UPDATE_TX_ENV: 'update_tx_envelope',
    DONE_UPDATE_TX_ENV: 'done_update_tx_envelope',
    SPLIT_TX: 'split_tx',

    REN_CATEGORY: 'ren_category',
    DEL_CATEGORY: 'del_category',
    ADD_CATEGORY: 'add_category',
    ADD_ENVELOPE: 'add_envelope',
    DONE_ADD_ENVELOPE: 'done_add_envelope',
    REN_ENVELOPE: 'ren_envelope',
    DEL_ENVELOPE: 'del_envelope',
    DONE_DEL_ENVELOPE: 'done_del_envelope',
    MOV_ENVELOPE: 'move_envelope',

    UPDATE_BUDGET: 'update_budget',
    DONE_UPDATE_BUDGET: 'done_update_budget',
    UPDATE_BALANCE: 'update_balance',
    MOVE_BALANCE: 'move_balance',
    COPY_BUDGET: 'copy_budget',
    DONE_COPY_BUDGET: 'done_copy_budget',

    SAVE_KEYWORD: 'save_keyword',

    SET_DUPLICATE: 'set_duplicate',
    DONE_SET_DUPLICATE: 'done_set_duplicate',

    SET_VISIBILITY: 'set_visibility',
    DONE_SET_VISIBILITY: 'done_set_visibility',

    IMPORT_OFX: 'import_ofx',
    IMPORT_CSV: 'import_csv',
    UPLOAD_PROGRESS: 'upload_progress',

    GET_KEYWORDS: 'get_keywords',
    LIST_KEYWORDS: 'list_keywords',
    UPDATE_KEYWORD_ENV: 'update_keyword_envelope',
    DEL_KEYWORD: 'del_keyword',
    SET_ALL_KEYWORD: 'set_all_keyword',
    UPDATE_KEYWORD: 'update_keyword',

    GET_ACCOUNTS: 'get_accounts',
    LIST_ACCOUNTS: 'list_accounts',
    GET_ACCOUNT_NAMES: 'get_account_names',
    LIST_ACCOUNT_NAMES: 'list_account_names',
    UPDATE_ACCOUNT: 'update_account',
    DEL_ACCOUNT: 'del_account',

    GET_ENV_CHART_DATA: 'get_env_chart_data',
    LIST_ENV_CHART_DATA: 'list_env_chart_data',

    SET_DB_PATH: 'set_db_path',
    GET_DB_VER: 'get_db_ver',
    LIST_DB_VER: 'list_db_ver',
    CREATE_DB: 'create_db',
    LIST_NEW_DB_FILENAME: 'list_new_db_filename',

    PLAID_GET_KEYS: 'plaid_get_keys',
    PLAID_LIST_KEYS: 'plaid_list_keys',
    PLAID_SET_KEYS: 'plaid_set_keys',
    PLAID_GET_TOKEN: 'plaid_get_token',
    PLAID_LIST_TOKEN: 'plaid_list_token',
    PLAID_SET_ACCESS_TOKEN: 'plaid_set_access_token',
    PLAID_GET_TRANSACTIONS: 'plaid_get_transactions',
    PLAID_LIST_TRANSACTIONS: 'plaid_list_transactions',
    PLAID_GET_ACCOUNTS: 'plaid_get_accounts',
    PLAID_LIST_ACCOUNTS: 'plaid_list_accounts',
  },
};
