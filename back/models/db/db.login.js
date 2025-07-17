import sql from './db.connect.js'

// I'm ditching Prisma, sorry but a day* is not enough to learn BOTH react and go through the hellish nightmare that is Prisma's docs (I have headaches just thinking about that labyrinth)
// *= (minus half a day since I had stuff planned out prior to receiving this unexpected homework + had to sleep)

// Take me as an intern this winter, and I'll have ALLLLLL the time in the world to master Prisma before even stepping a foot inside your office.

// Btw, I'm using PostgreJS so db.connect.js has the credentials to access the PSQL db I'm hosting on my own server, hence me not providing it.

export class login{
  static async checkLogin(email, name){
    let res;
    try{
    const request = await sql`
      SELECT EXISTS(SELECT email FROM users WHERE email=${email} AND name=${name})
    `
    res={status: request[0].exists};
    } catch (e) {
      console.log(e)
      res={status: false}
    }
    return res;
  }
  
  static async getInfos(email){
    let res;
    try{
    const request = await sql`
      SELECT * FROM users WHERE email=${email}
    `
      res={status: true, content: request};
    } catch (e) {
      console.log(e)
      res={status: false}
    }
    return res;
  }
}