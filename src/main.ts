import { B } from './subclass'

try {

    const obj = new B()
    
    const X = obj.testB1()
    console.log(X)

    const Y = obj.testB2()
    console.log(Y)

    console.log(X === Y)

} catch (ex) {
    console.log(ex)
}