// 使用正则表达式测试邮箱是否合法
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Website url 验证
function isValidURL(url) {
    const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/.*)*$/i;
    return urlPattern.test(url);
}

// 国际号码手机格式验证
function checkPhoneNumberFormat(number) {
    if(number && number.trim().length < 5){
        return false
    }
    if(number.split(" ")[1] === ""){
        return false
    }
    return true
}

// E164国际电话号码验证
function isE164PhoneNumber(input) {
    // 去除手机号码中的符号，不然号码校验不通过
    if (typeof input !== 'string') {
        throw new TypeError(`Expected \`phone\` to be of type \`string\`, got \`${typeof input}\``);
    }
    const filterPhone = (value)=>{
        return value.replaceAll(' ','')
            .replaceAll('(','')
            .replaceAll(')','')
            .replaceAll('-','')
    }

    return /^\+?[1-9]\d{4,14}$/.test(filterPhone(input));
}
