function introduction(name){
    
    return  `Hi, my name is ${name}.`;
}
introduction("Anwar")


function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;

}
introductionWithLanguage("Anwar", "Python")

function introductionWithLanguageOptional(name, language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;

}
