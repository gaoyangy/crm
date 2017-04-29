import Mock from 'mockjs';
Mock.mock('/api/Account/LoginAccount', {

    'Message': '@name',

    'age|1-100': 100,

    'color': '@color'

});
Mock.mock('/api/Account', {

    'name': '@name',

    'age|1-100': 100,

    'color': '@color'

});
Mock.mock('/api/LoginAccount', {

    'name': '@name',

    'age|1-100': 100,

    'color': '@color'

});
export default Mock.body