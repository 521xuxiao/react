import React from 'react';
export default class App extends React.Component {

    state = {
        content: '<div style="color: brown">你好， 这里展示的是富文本</div>'
    }

    render() {
        const { content } = this.state;
        return(
            <div>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        )
    }
}
