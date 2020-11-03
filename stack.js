//LIFO (Last In First Out)
function createStack(){
    let array = [];
    return {
        //push(menambahkan data)
        push: (item) => {
            array.push(item)
        },
        //pop(mengambil data)
        pop: () => {
            array.pop()
        },
        //peek(melihat data paling atas)
        peek: () => {
            const peekArr =  array[array.length - 1];
            return console.log(peekArr)
        },
        //size(ukuran data)
        size: () => {
            const sizeArr = array.length
            return console.log(sizeArr)
        }
    }
}

//instansiasi stack baru
const bookStack = createStack();
bookStack.push("Clean Code Javascript")
bookStack.push("$100 startup")
bookStack.push("Eloqueen Javascript")

bookStack.peek()
bookStack.pop()
bookStack.pop()
bookStack.peek()
bookStack.size()
