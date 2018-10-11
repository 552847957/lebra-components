import Drawer from '../../index';
import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.less';
/**
 * 基础的drawer
 */
class BaseDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }
   
    render() {

        return (
            <div>
                <div className="navbar">这里是navbar</div>
                <h1 className="main">正文的内容修改中</h1>
                <Drawer width="200px">
                    <div
                        style={{ height: '100%' }}
                    >
                        这里是drawer内容哈哈哈
                        这里是drawer内容哈哈哈
                        
                        
                    </div>
                </Drawer>
            </div>
        )
    }
}
let root = document.getElementById('app');
render(<BaseDemo />, root);