//queue = antrian
//FIFO (First In First Out)

const createQueue = () => {
    const queue = [];
    //ilustrasi => [3,2,1]
    return {
        //enqueue = memasukkan data baru
        enqueue: (item) => {
            queue.unshift(item); //menambahkan data di posisi paling awal
            console.log(item, "berhasil ditambahkan")
            //["data 1"] tambahkan data 2
            //["data 2", "data 1"] tambahkan data 3
            //["data 3", "data 2", "data 1"]
        },
        //dequeue = menghapus data awal
        dequeue: () => {
            queue.pop();
            console.log("data berhasil dihapus")
        },
        //peek = melihat data paling awal
        peek: () => {
            return console.log(queue[queue.length - 1], "berada diposisi paling depan");
        },
        //size = panjang data
        size: () => {
            return console.log("total antrian", queue.length);
        }
    }
}

const queue = createQueue();
queue.enqueue("implement UI dashboard")
queue.enqueue("integrate dashboard to backend")
queue.enqueue("implement UI detailLocation")
queue.peek();
queue.size();
queue.dequeue();
queue.peek();