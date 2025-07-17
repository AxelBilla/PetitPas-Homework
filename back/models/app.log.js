import { login as db_log } from './db/db.login.js'; 

export class login{
    static async checkLogin(req){
        try{
            let mail = checkEmail(req.email);
            if(mail){
                let log = await db_log.checkLogin(req.email, req.name);
                if(log.status){
                    return log
                }
            }
        } catch (e) {
            console.log(e)
        }
        return {status: false};
    }

    static async getInfos(req){
        try{
            let infos = await db_log.getInfos(req.email);
            if(infos.status){
                return infos
            }
        } catch (e){
            console.log(e)
        }
        return {status: false}
    }
}

function checkEmail(email){
    // using regex to ensure emails follow the right pattern
    // (([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+")) = Makes sure no special characters are present on the first character(including dots), then allows no special character EXCEPT for the dot as long as it's non-consecutive. 
    // ((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})) = Makes sure it's either an IPv4 address (so 4 slots of 3 integers between 0 & 9 separated by a dot) OR a domain name (letters, numbers and non-consecutive dots) then ensure there's a top domain that's only letters and >= 2 in length (since top domains can't contain anything else or be shorter than 2 characters)
    let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(email);
}