function maskEmail(email) {
    const emailDomainIndex = email.indexOf("@");
    const domain = email.slice(emailDomainIndex);
    const userName = email.slice(0, emailDomainIndex);
    const firstLetter = userName[0];
    const lastLetter = userName[userName.length - 1];
    const asterisks = '*'.repeat(userName.length - 2);

    return firstLetter + asterisks + lastLetter + domain;
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));