
const config = {
	user: 'db_a6478c_burgosstate_admin',
	password: 'razors1805',
	server: 'sql5052.site4now.net',
	database: 'db_a6478c_burgosstate',
	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
};




const sql = require('mssql');

let execute = {
	Query : (res,sqlqry)=>{	
		
		//console.log('ejecutando consulta... ' + sqlqry);		

		try {
		  const pool1 = new sql.ConnectionPool(config, err => {
			new sql.Request(pool1)
			.query(sqlqry, (err, result) => {
				if(err){
					res.send(err.message)
				}else{
					res.send(result);
				}					
			})
			sql.close();  
		  })
		  pool1.on('error', err => {
			  console.log('error sql = ' + err);
			  sql.close();
		  })
		} catch (error) {
			console.log(error)
		  res.send({error})   
		  sql.close();
		}
	}
}
module.exports = execute;

