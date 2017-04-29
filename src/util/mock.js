import Mock from 'mockjs';

Mock.mock('api.', {

    'name': '@name',

    'age|1-100': 100,

    'color': '@color'

});
export default Mock