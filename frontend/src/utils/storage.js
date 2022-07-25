class Storage {
 static storage = window.localStorage;

 static get(key) {
  try{
    let auth = this.storage.getItem(key);
    if(auth) return JSON.parse(auth);
    else throw new Error('no token');
  }catch(e){
    return null
  }
 }

 static set(key, value) {
   value = JSON.stringify(value);
   this.storage.setItem(key, value);
   return true;
 }

 static remove(key) {
   this.storage.removeItem(key);
   return true;
 }
}

export default Storage