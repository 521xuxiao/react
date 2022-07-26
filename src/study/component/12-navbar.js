import React, {Component} from 'react';
import propTypes from 'prop-types';

class Navbar extends Component {

    // 验证propTypes 另外一种写法
    static propTypes = {
        title: propTypes.string,
        leftShow: propTypes.bool
    }

    // defaultProps 默认值
    static defaultProps = {
        leftShow: true
    }

    render() {
        const { title, leftShow } = this.props;
        return (
            <div>
                {leftShow && <button>返回</button>}
                navbar  -- { title}
                <button>home</button>
            </div>
        );
    }

    componentDidMount() {

    }
}

// 验证props传进来的值的数据类型 prop-types 这个包不需要下载， 直接引用（方法一）
// Navbar.propTypes = {
//     title: propsTypes.string,
//     leftShow: propsTypes.bool
// }

export default  Navbar;
