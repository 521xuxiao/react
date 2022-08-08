import React, {PureComponent} from 'react';

class App extends PureComponent {
    render() {
        return (
            <div>
                PureComponent 相当于 shouldComponent 不更新状态就不会重新render函数和componentDidUpdate
            </div>
        );
    }
}

export default App;
