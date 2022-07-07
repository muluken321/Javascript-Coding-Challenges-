class Node{
    constructor(data, prev){
        this.data = data
        this.next = null
        this.prev = prev
    }
}
class DoubleLinkedList{
    constructor(data){
        this.head = null
    }
    addNode(value){
            let head = this.head
            if(head ===null){
                this.head = new Node(value, null);
                return
            }
            else{
                const findNextNode = function(head){
                    if(head.next ==null){
                        let prev = head.data
                        head.next = new Node(value, prev);
                        return
                    }else{
                        head = head.next
                        findNextNode(head)
                    }
                }
                return findNextNode(head)
            }
    }
    removeNode(value){
        let head = this.head
        if(head ===null) return 
        else{
            let findNode = function(head){
            if(head.data === value){
                let nextNode = head.next
                head = nextNode
                return
            }
            else{
                findNode(head.next)
            }
        }
        return findNode(head)
    }
    
    }
}
let list = new DoubleLinkedList()
list.addNode(3)
list.addNode(5)
list.addNode(7)
list.addNode(2)
list.removeNode(3)
console.log(list)