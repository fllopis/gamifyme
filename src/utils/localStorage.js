import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE } from "@env";

/**
 * Deals with the local storage of Notes into AsyncStorage
 *
 * @class LocalStorage
 */
class LocalStorage {
  /**
   * Function that store in local data information using AsyncStorage
   * @param {array} data - With data in json or string
   * @param {string} key - By default empty, but is the name of key to search the data @gamifymeStorage:KEY
   * @param {boolean} isArray - To know if is array data json or string
   * @return {string} Value storage or 0 if is an error
   */
  async add(data, key = "", isArray = true) {
    //Checking if is array
    if (isArray) {
      let totalElements = Object.keys(data).length;

      for (let i = 0; i < totalElements; i++) {
        let newKey = Object.keys(data)[i];
        let value = JSON.stringify(data[newKey]);

        //Storing differend items
        try {
          await AsyncStorage.setItem(STORAGE + newKey, value);
          // console.log('Saving: ' + newKey + ':' + value);
        } catch (error) {
          console.log("Cannot save on storage the value -> " + newKey + ":" + value);
        }
      }
    } else {
      //Getting the json array data
      data = JSON.stringify(data);

      //Store the simple data to manage
      try {
        await AsyncStorage.setItem(STORAGE + key, data);
      } catch (error) {
        console.log("Cannot save on storage the value -> " + key + ":" + data);
      }
    }
  }

  /**
   * Function that return a storage variable on devie
   * @param valueToSearch
   * @return Storage value || false = if error
   */
  async get(value) {
    const valueStorage = await AsyncStorage.getItem(STORAGE + value);
    if (valueStorage !== null) {
      return JSON.parse(valueStorage);
    } else return false;
  }

  /**
   * Function that clear all storage vars to ""
   * @param valueToClean
   * @return Variable to clean
   */
  clearVarStorage(valueToClean) {
    if (valueToClean != null) {
      let string;
      string = valueToClean.substring(1);
      return string.substring(0, string.length - 1);
    } else {
      return false;
    }
  }
}

const localStorage = new LocalStorage();
export default localStorage;
