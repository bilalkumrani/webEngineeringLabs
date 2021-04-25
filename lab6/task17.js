let users = [
    {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
    city: 'San Francisco',
    state: 'CA'
    }
    },
    {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
    city: 'New York',
    state: 'NY'
}
},
{
username: 'sam',
email: 'sam@test.com',
yearsExperience: 8.2,
favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
favoriteEditor: 'Atom',
hobbies: ['Golf', 'Cooking', 'Archery'],
hometown: {
city: 'Fargo',
state: 'SD'
}
},
{
username: 'anne',
email: 'anne@test.com',
yearsExperience: 4,
favoriteLanguages: ['C#', 'C++', 'F#'],
favoriteEditor: 'Visual Studio Code',
hobbies: ['Tennis', 'Biking', 'Archery'],
hometown: {
city: 'Albany',
state: 'NY'
}
},
{
username: 'david',
email: 'david@test.com',
yearsExperience: 12.5,
favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
favoriteEditor: 'VS Code',
hobbies: ['Volunteering', 'Biking', 'Coding'],
hometown: {
city: 'Los Angeles',
state: 'CA'
}
}
];


function printEmails(obj){
    for(let i of obj){

        for(let key in i){
            console.log(i[key]);
        }
    }
}

function printHobbies(objArr)
{
    for(let i of objArr){
        console.log("hobbies of: "+i['username'])
        for(let hoby of i['hobbies'])
        {  
            console.log(hoby);
        }
    }
}

function findHometownByState(objArr,state)
{
    for(let user of objArr)
    {
       let u= user['hometown'];
       if(u['state']===state)
       {
           return user;
       }
    }
}



function allLanguages(objArr){
    let arr = [];
    let languages={};
    for(let user of objArr)
    {
        for(let lang of user['favoriteLanguages'])
        {
            if(languages[lang])
            {
                // do nothing
            }
            else{
                languages[lang]=1;
            }
        }
    }
    arr = Object.keys(languages);
    return arr;
}



function hasFavoriteEditor(objArr){
    for(let user of objArr)
    {
        if(user['favoriteEditor'])
        {
            return true;
        }
        else 
        false;
    }

}


function findByUsername(objArr,username){
    for(let user of objArr)
    {
        if(user['username']===username)
        {
            return user;
        }
    }
}

//console.log(printEmails(users));

//console.log(printHobbies(users));

//console.log(findHometownByState(users,'CA'));

//console.log(allLanguages(users));

//console.log(hasFavoriteEditor(users))

//



