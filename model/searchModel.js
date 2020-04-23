const { Pool } = require('pg');

const PG_URI = 'postgres://zzpofyjk:Sso-7K34begO_kcKMFjExLe3puec4KpL@rajje.db.elephantsql.com:5432/zzpofyjk';

const pool = new Pool({
    connectionString: PG_URI
  });


  module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };