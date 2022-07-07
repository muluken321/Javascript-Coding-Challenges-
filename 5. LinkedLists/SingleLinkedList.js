class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SingleLinkedList{
    constructor(data){
        this.head = null
    }
    addNode(value){
            let head = this.head
            if(head ===null){
                this.head = new Node(value);
                return
            }
            else{
                const findNextNode = function(head){
                    if(head.next ==null){
                        head.next = new Node(value);
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
let list = new SingleLinkedList()
list.addNode(3)
list.addNode(5)
list.addNode(7)
list.addNode(2)
list.removeNode(3)
console.log(list)