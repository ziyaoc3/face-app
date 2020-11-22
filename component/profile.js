

const handleProfile = (req, res, db) =>{
	const {id } =req.params;
	db.select('*').from('users').where({
		id : id
		})
		.then (user =>{
			if(user.length){
				res.json (user[0])
			} else{
				res.status (400).json('Wrong email or password')
			}
		})
		.catch(err => res.status (400).json('NOT found')
	)
};

module.exports=  {handleProfile};