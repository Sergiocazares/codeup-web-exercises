const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


const threeLanguages = users.filter((user) => user.languages.length >= 3);
console.log(threeLanguages);

const usersEmails = users.map((user) =>  user.email);
console.log(usersEmails)

const totalYearsExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);

console.log("Total years of experience: " , totalYearsExperience);

const averageYearsExperience = totalYearsExperience / users.length

console.log(averageYearsExperience);

const longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email
    } else {
        return longest;
    }
}, "");

console.log(longestEmail);

const nameList = users.reduce((str, user, index) => {
    if(index === 0) {
        return user.name;
    } else {
        return str + ", " + user.name;
    }

}, "");

console.log(nameList);