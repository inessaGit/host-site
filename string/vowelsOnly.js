f


function vowelsOnly(str) {
    let vowels=[]; 
    if (str!=null||str.length!=0){
        vowels =str.match(/[aeiouAEIOU]/g).join("");
 
    }
     if (vowels.length==0){
         vowels="";
     }
   return vowels;

}
//dedicated Regex to match any whitespace character:\s.
const stripped = '    My String With A    Lot Whitespace  '.replace(/\s+/g, '')
//replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") removes all punctiuation 
//remove quote marks       str=str.replace(/['"]+/g, '');
//remove new line .replace(/\n/g, '')
