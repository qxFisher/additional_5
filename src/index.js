module.exports = function check(str, bracketsConfig) {
  let str_arr = str.split("");

  if (str_arr.length % 2) return false;

    for (let b = 0, brConfig_len = bracketsConfig.length; b < brConfig_len; b++){
      for (let i = 0, str_arr_len = str_arr.length; i < str_arr_len; i++){
        if (str_arr[i] === bracketsConfig[b][0] && str_arr[i+1] === bracketsConfig[b][1]){
          str_arr.splice(i,2);
          i = -1; 
          b = 0;
        }
      }
    }
  if(str_arr.length != 0) {
    return false;
  }
  else {
    return true;
  }
}
