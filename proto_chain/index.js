const { o3 } = require('goss_proto');

const obj = o3;

const prot_names = [
    obj.name,
    obj.prototype.name,
    obj.prototype.prototype.name,
    obj.prototype.prototype.prototype.name,
];
