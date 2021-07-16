import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([3, 2, 1]);
numbersCollection.sort();
console.log(numbersCollection);
const charactersCollection = new CharactersCollection("test");
charactersCollection.sort();
console.log(charactersCollection);
const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);
linkedList.sort();
linkedList.print();
