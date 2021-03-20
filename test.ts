import test from "ava";
import {Product, User} from "./index"

test("Testeo la clase User", (t) => {
    const userFacu = new User("Facu")
    const buzoAdidas = new Product("Buzo Adidas", 1500)
    userFacu.addProduct(buzoAdidas)

    t.is(userFacu.products[0].name,"Buzo Adidas")
    t.is(typeof User.name,"string")
    t.is(typeof userFacu, "object")
    
    t.deepEqual(userFacu.products,[buzoAdidas])
    t.deepEqual(userFacu.name.length,4)
    

    t.like(buzoAdidas, {name: "Buzo Adidas" , price: 1500})

    t.truthy(buzoAdidas instanceof(Product))


});


test("Testeo la clase Product y sus métodos", (t) => {
    const camperaReef = new Product("Campera Reef",3500)

    t.is(typeof camperaReef,"object")

    t.deepEqual(camperaReef,new Product("Campera Reef",3500))

    t.truthy(camperaReef.name == "Campera Reef")
    t.truthy(typeof camperaReef == "object")

    t.false(typeof camperaReef == "boolean")
    
    t.plan(5)


});
