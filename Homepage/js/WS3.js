var countrygrid = [
    ['س', 'و', 'ب', 'ه', 'ف', 'ا', 'ر', 'ي', 'ز', 'م', 'ر', 'ا'],
    ['ك', 'ف', 'ب', 'ع', 'ة', 'د', 'م', 'ث', 'د', 'و', 'ن', 'ل'],
    ['و', 'ك', 'ن', 'ا', 'ق', 'و', 'ك', 'ڠ', 'و', 'س', 'ت', 'م'],
    ['ل', 'و', 'د', 'ف', 'ر', 'ڠ', 'خ', 'و', 'س', 'ث', 'ا', 'ا'],
    ['ه', 'ك', 'ي', 'و', 'ع', 'ك', 'ن', 'د', 'و', 'ل', 'ي', 'ر'],
    ['و', 'ر', 'ر', 'ت', 'ي', 'ت', 'ا', 'ڤ', 'ر', 'م', 'و', 'ي'],
    ['ه', 'ش', 'ا', 'ش', 'ن', 'ب', 'ح', 'ف', 'و', 'د', 'ڬ', 'ب'],
    ['ر', 'ت', 'و', 'ت', 'و', 'ڤ', 'م', 'و', 'ر', 'ك', 'و', 'و'],
    ['ي', 'ن', 'ف', 'ق', 'ن', 'ل', 'ف', 'ط', 'و', 'ق', 'ن', 'ت'],
    ['م', 'ة', 'ة', 'ن', 'ي', 'ك', 'و', 'ت', 'س', 'ب', 'ت', 'و'],
    ['ا', 'ن', 'ڠ', 'ب', 'ا', 'ص', 'و', 'ف', 'ح', 'د', 'ي', 'ل'],
    ['و', 'ي', 'ڠ', 'و', 'ب', 'م', 'و', 'ب', 'ف', 'ه', 'ڠ', 'ا']];

var countrynames = ['زيرافه', 'هريماو', 'الماري', 'بنديرا', 'بومبوڠ', 'ڬونتيڠ', 'سوڠكوق', 'ستوكين', 'مرڤاتي',
    'رومڤوت'];


ws = new WordSearch({
        "grid": countrygrid, // Your grid to search
        "words": countrynames, // The list of words to find
        "parentId": "mysearchtask",
        "onFindWord": function() { // When a word is found...
          console.log(this.getScore()); // Log score
          console.log(this.getTiming()); // Log time to find each word
        } 
    });