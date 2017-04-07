
//const numberMap = new MyMap<number>();
//numberMap.setItem('apples', 5);
//numberMap.setItem('bananas', 10);
//numberMap.printMap();

//const stringMap = new MyMap<string>();
//stringMap.setItem('name', "Max");
//stringMap.setItem('age', "27");
//stringMap.printMap();


class MyMap<T>{
    private map: { [key: string]: T } = {};

    setItem(key: string, item: T) {
        this.map[key] = item; //Deliberatly overwriting
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 10);
numberMap.setItem("bannanas", 2);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();