export function findById(items, id){
    // create a loop
    for (let i = 0; i < items.length; i++){
        const item = items[i];
    // check the id against the item.id
        if (item.id === id) {
            return item;
        }
    }
    // return null if the loop doesn't find any matches
    return null;
}
    