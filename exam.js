/*
	Lib: Fastify
	Database: PostgreSQL
	Test: Postman
*/

/*
	API DESIGN

	GET /users?page=1&user_id=1 - is_admin only (WITH PAGINATION) [Query] 
	POST /signup - Register (email, password, is_admin) ( { id: 1, is_admin: true, email: email@email.com } )
	POST /login - Login ( { id: 1, is_admin: true, email: email@email.com } )
*/

/*
	User
		id(int)
		email(text)
		password(text)
		is_admin(bool)
*/

/*
	Requirements:
		Unique email with validation
		SignUp/Login
		Users list (Admin only)
		GitHub repo
		PORT

	Final:

		PUBLIC https://github.com/biloliddin/exam-pg
*/