const fs = require('fs')
function login(){

}
function register(){

}
function signout(){
    request.destroySession(err) => {
        if err
    }
}
function change_password(request , reply){
    if (request.method === 'POST'){
        const {username , password ,newPass, confirmPass } = request.body;
    }
    if (!username || !newPass || password || confirmPass){
        return reply.status(400).send('All feilds are required.');
    }
    if (newPass !== confirmPass){
        return reply.status(400).send('Passwords dont match.');
    }
    let users;
    try {
            users = JSON.parse(fs.readFileSync('user.json'));
        } catch (err) {
            return reply.status(400).send('User data not found. Please register first.');
        }

        const user = users.find(u => u.username === username);
        if (!user) {
            return reply.status(404).send('Username not found.');
        }

        const hashed = crypto.createHash('sha256').update(newPassword).digest('hex');
        user.password = hashed;

        try {
            fs.writeFileSync('user.json', JSON.stringify(users, null, 4));
        } catch (err) {
            return reply.status(500).send('Error updating password. Please try again later.');
        }

        return reply.redirect('/auth?message=Password updated successfully. Please log in.');
    }
