let user = {
    name : 'Khanh dep trai',
    id : 0,
    age : 16,
    changeInfor : function(name, id, age){
        this.user.name = name;
        this.user.id = id;
        this.user.age = age;
    }
}

module.exports = user;