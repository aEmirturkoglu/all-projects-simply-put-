const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data}
}

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');
const { json } = require('express');

const handleNewUser = async (req, res) => {
  const {user: pwd} = req.body;
  if (!user || !pwd) {
    return res.status(400).json({ "message": "Username and password are required"}) 
  }
  // check for duplicate usernames in the db (DataBase)
  const duplicate = usersDB.users.find(person => person.username === user);
  if (duplicate) {
    return res.status(409); //conflick
  }
  try {
    const hashedPwd = await bcrypt.hash(pwd, 10)
    const newUser = {"username":user, "password":hashedPwd}
    usersDB.setUsers([...usersDB.users, newUser])
    await fsPromises.writeFile(
      path.join(__dirname, '..', 'model', 'users.json'),
      JSON.stringify(usersDB.users)
    );
    console.log(usersDB.users);
    res.status(201).json({ "message": `successfully created new user ${user}` })
  } catch (err) {
    res.status(500).json({ "message": err.message}) //servererror
  }
}

module.exports = { handleNewUser }