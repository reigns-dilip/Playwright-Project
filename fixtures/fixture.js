
import {test as base} from "playwright-bdd"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/Homepage"
import { OrderPage } from "../pages/OrderPage"

export const test = base.extend({
    
    login : async ({page}, use)=>{
        const login = new LoginPage(page)
        await use(login)
    },
    home : async ({page}, use)=>{
        const home = new HomePage(page)
        await use(home)
    },
    order : async ({page}, use)=>{
        const order = new OrderPage(page)
        await use(order)
    }
})








































