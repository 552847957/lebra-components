import {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * @title 类名
     */
    className: PropTypes.string,
    /**
     * @title 左边头像
     */
    imgSrc: PropTypes.string,
    /**
     * @title 左边头像
     */
    imgStyle: PropTypes.oneOf(['circle', 'square']),

    /**
     *
     * @title:标题
     */
    title: PropTypes.string,
    /**
     * @title 文本
     */
    text: PropTypes.string,
    /**
     * @title 是否多行显示  默认单行
     * @veIgnore
     */
    multipleLine: PropTypes.bool,
    /**
     * @title 文本是否单行显示 默认为ture
     * @veIgnore
     */
    wordBreak: PropTypes.bool,
    /**
     * @title 样式
     */
    style: PropTypes.object,
    /**
     * @title 是否有箭头，默认无，true为有向右的箭头
     */
    arrow: PropTypes.bool,
    /**
     * @title 右边内容
     */
    rightItem: PropTypes.string,
    /**
     * @title 列表点击事件
     */
    onClick: PropTypes.func,
};

const defaultProps = {
    multipleLine: 1,
    wordBreak: true,
    imgStyle: 'circle',
    arrow:false,
    multipleLine: false,
};

class ListItem extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let {
            style,
            className,
            imgSrc,
            imgStlye,
            title,
            text,
            multipleLine,
            wordBreak,
            arrow,
            rightItem,
            onClick,
            children,
            clsPrefix,
            required,
            ...props
            } = this.props;

        let classes = classNames({
            'lebra-list-item': true
        }, className);
        let imgClass=classNames({
            'lebra-list-item-img':true
        },{
            'lebra-img-square': imgStlye=='square' ? true :false
        });
        let titleClass=classNames({
            'lebra-list-item-title':true
        },{
            'lebra-text-overflow' : wordBreak ? true :false
        })
        let textClass=classNames({
            "lebra-list-item-text":true
        },{
            'lebra-text-overflow' : wordBreak ? true : false
        })
        let bodyClass=classNames({
            "lebra-list-item-body":true
        },{
            'body-justify-start':multipleLine ? true : false
        })
        let leftItem=null,
            itemTitle=null,
            rightContent=null,
            liClass='lebra-listview-row';

        if(imgSrc ){
            leftItem=(<div className="lebra-list-item-left">
                <img alt="" src={imgSrc} className={imgClass}/>
            </div>)
        }
        if(multipleLine && children){
            itemTitle=<h4 className={titleClass}>{children}</h4>
        }
        if(arrow){
            liClass='lebra-listview-row lebra-list-arrow'
        }
        if(rightItem){
            rightContent=(<div className="lebra-um-list-right">
                {rightItem}
            </div>)
        }

        return (
            <li className={liClass} style={ style ? style :null} onClick={onClick}>
                <a href="#" className={classes}>
                    {leftItem}
                    <div className={bodyClass}>
                        {itemTitle}
                        <p className={textClass}>{text}</p>
                    </div>
                    {rightContent}
                </a>
            </li>
        );
    }
}

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
