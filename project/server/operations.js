import mysql from  "mysql2";

const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'socialmedia_app'
}).promise();

export async function readPost() {
    const res = await connection.query("select * from posts");
    return res[0];
}

export async function readUser(profile) {
    const res = await connection.query("select * from users where profile = '" + profile + "'")
    return res[0]
}

export async function insertUser(name, profile,headline,password) {
    const res = await connection.query("insert into users(name,profile,headline,password)values('"+name+"','"+profile+"','"+headline+"','"+password+"')")
      
        return res[0]
    
}

export async function insertPost(profile, content) {
    const res = await connection.query("INSERT INTO posts (profile, content, likes, shares) VALUES ('"+profile+"', '"+content+"', 0, 0)")

  
 

}

export async function likeFun(content) {
    const output = await connection.query("select likes from posts where content ='" + content + "' ")
    const likes = output[0][0].likes
    const incLikes = likes + 1;
    await connection.query("update posts set likes = " + incLikes + " where content='" + content + "' ")
}

export async function shareFun(content) {
    const output = await connection.query("select shares from posts where content ='" + content + "' ")
    const shares = output[0][0].shares
    const incShares = shares + 1;
    await connection.query("update posts set shares = " + incShares + " where content='" + content + "' ")
}


export async function deleteFun(content) {
    const output = await connection.query("delete from posts where content ='" + content + "' ")
}



